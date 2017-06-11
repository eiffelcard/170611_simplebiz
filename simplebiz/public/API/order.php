<?php
require('setting.php');
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL^E_NOTICE);

  
  //テーブルを新規作成
  $sql=sprintf(
    'INSERT INTO card_histories SET'
    .' user_id_sender=%d'
    .',product=%d'
    .',message="%s"'
    .',postcode="%s"'
    .',state="%s"'
    .',city="%s"'
    .',street="%s"'
    .',building="%s"'
    .',title="%s"'
    .',delivery_name="%s"'
    .',created=NOW()',
    mysqli_real_escape_string($db,$_POST['myid']),
    mysqli_real_escape_string($db,$_POST['product']),
    mysqli_real_escape_string($db,$_POST['message']),
    mysqli_real_escape_string($db,$_POST['postcode']),
    mysqli_real_escape_string($db,$_POST['state']),
    mysqli_real_escape_string($db,$_POST['city']),
    mysqli_real_escape_string($db,$_POST['street']),
    mysqli_real_escape_string($db,$_POST['building']),
    mysqli_real_escape_string($db,$_POST['title']),
    mysqli_real_escape_string($db,$_POST['delivery_name'])
  );
  if (mysqli_query($db, $sql) === FALSE) {
    trigger_error($sql);
    trigger_error(mysqli_error($db), E_USER_ERROR);
  }

  $update_id=mysqli_insert_id($db);
  $status=200;
  $message="created";

 
    $userjson = array(
       'status' => $status
       ,'error_message' => $error_message
       ,'error_messageEn' => $error_messageEn
       ,'id'=> $update_id
        ,'success'=> $success
        ,'message'=> $message
       );

 header('Content-Type: application/json; charset=UTF-8');
 echo json_encode($userjson);

?>