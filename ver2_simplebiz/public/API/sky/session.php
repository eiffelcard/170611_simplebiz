<?php
require('setting.php');
error_reporting(E_ALL^E_NOTICE);
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");

$authtoken = $_POST['authtoken'];


if(!empty($authtoken)) {

  //日付の設定
  //date_default_timezone_set('Asia/Tokyo');
  $date = new DateTime();
  $today=$date->format('Y-m-d H:i:s');//今日

  $sql=sprintf('SELECT authtoken,users_id,name
  FROM session_log 
  left join users on session_log.users_id=users.id WHERE authtoken="%s"and session_continue>="%s"',
  mysqli_real_escape_string($db,$authtoken),
  mysqli_real_escape_string($db,$today));
  $session_query=mysqli_query($db,$sql)or die(mysqli_error($db));
  if($session_log=mysqli_fetch_assoc($session_query)){
    //ログインしている
    $id=$session_log['users_id'];

     $user = array(
    'status' => 200
    ,'error_message' =>""
    ,'error_messageEn' => ""
    ,'authtoken' => $authtoken
    ,'myid' => $id
    ,'name' => $session_log['name']
    );
  } else {
    //セッションが間違っている
    $user = array(
      'status' => 412
      ,'error_message' =>"セッション情報が間違っている、または切れていませすます"
      ,'error_messageEn' => "Session wrong　or expired"
      ,'authtoken' => $authtoken
      ,'today' => $today
    );
  }
} else {
  //ログインしていない
  $user = array(
    'status' => 411
    ,'error_message' =>"セッション情報が入力されていません"
    ,'error_messageEn' => "Session info is not input"
  );
}
  echo json_encode($user);
?>
