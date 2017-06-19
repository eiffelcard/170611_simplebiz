<?php
require('setting.php');
	
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL^E_NOTICE);


  //1-2.バリデーション：emailのチェック
    if(empty($_POST[email])){
       errorexit("402","emailが入力されていません","Plese input email");
      }

     //3.登録
      $sql=sprintf('INSERT INTO user_master SET first_name="%s",password="%s",created="%s"',
      mysqli_real_escape_string($db,$_POST['email']),
      mysqli_real_escape_string($db,sha1($_POST['password'])),
      mysqli_real_escape_string($db,$_POST['name']),
      date('Y-m-d H:i:s')
    );

    mysqli_query($db,$sql) or die(mysqli_error($db));

    $last_id = mysqli_insert_id($db);

/*
  //5.トークンの生成と登録
    $token2 = openssl_random_pseudo_bytes(16);
    $token3 = bin2hex($token2);

    $date = new DateTime();
    $continuetime=$date->modify('+1 days')->format('Y-m-d H:i:s');//1日後


    //トークンデータの登録
    $sql=sprintf('INSERT INTO session_log SET users_id="%d",authtoken="%s",session_continue="%s",created="%s"',
    mysqli_real_escape_string($db,$last_id),
    mysqli_real_escape_string($db,$token3),
    mysqli_real_escape_string($db,$continuetime),
    date('Y-m-d H:i:s')
  );
  mysqli_query($db,$sql) or die(mysqli_error($db));*/

    $status=200;
    $success="create";

    $userjson = array(
       'status' => $status
       ,'error_message' => $error_message
       ,'error_messageEn' => $error_messageEn
       ,'id'=> $last_id
        ,'success'=> $success
        ,'authtoken'=> $token3
       );

 header('Content-Type: application/json; charset=UTF-8');

 echo json_encode($userjson);

?> 