<?php
require('setting.php');
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL^E_NOTICE);


$email = $_POST['email'];
$password = $_POST['password'];
$logcontinue=$_POST['continue'];

if(!empty($_POST)) {
  //ログインの処理
  if($_POST['email']!='' && $_POST['password']!='') {
    $sql=sprintf('SELECT *FROM users WHERE email="%s" AND password="%s"',
      mysqli_real_escape_string($db,$email),
      mysqli_real_escape_string($db,sha1($password)));
    $record=mysqli_query($db,$sql)or die(mysqli_error($db));
    if($table=mysqli_fetch_assoc($record)) {

      //トークンの生成
      $token2 = openssl_random_pseudo_bytes(16);
      $token3 = bin2hex($token2);

      //statusのチェック
      $status=200;
      //住所を持っているか確認
    

      //日付の設定
      date_default_timezone_set('Asia/Tokyo');
      $date = new DateTime();
      $continuetime=$date->modify('+1 days')->format('Y-m-d H:i:s');//1日後
      //ログインの30日継続
      if(!empty($logcontinue)){
        $date = new DateTime();
        $continuetime=$date->modify('+30 days')->format('Y-m-d H:i:s');//30日後
      }


      //トークンデータの登録
      $sql=sprintf('INSERT INTO session_log SET users_id="%d",authtoken="%s",session_continue="%s",created="%s"',
        mysqli_real_escape_string($db,$table['id']),
        mysqli_real_escape_string($db,$token3),
        mysqli_real_escape_string($db,$continuetime),
        date('Y-m-d H:i:s')
      );
      mysqli_query($db,$sql) or die(mysqli_error($db));


    } else {
      //ログイン失敗
      $error['login']='failed';

      $status=400;
      $error_message="ログインできません。Emailとパスワードが間違っています";
      $error_messageEn="Login failed.Please type it correctly once more";
    }
  } else {
    //情報が二つ揃っていない
    $error['login']='blank';
    $status=401;
    $error_message="Emailとパスワードの両方を入力してください";
    $error_messageEn="Please type it correctly once more";
  }
} else {
  //POST情報が届いていない
  $status=402;
  $error_message="Emailとパスワードを入力してください";
  $error_messageEn="Please type it correctly once more";
}



$user = array(
  'status' => $status
  ,'error_message' => $error_message
  ,'error_messageEn' => $error_messageEn
  ,'id'=> $table[id]
  ,'authtoken'=> $token3
  ,'register_process' => $table[confirmation]
);


header('Content-Type: application/json; charset=UTF-8');
echo json_encode($user);


?>
