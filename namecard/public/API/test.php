<?php
error_reporting(0);

$message=$_POST['message'];
$id=$_POST['myid'];
$card=$_POST['card'];

foreach ($card as $key => $value) {
    echo $key.'は:'.$value.'idは'.$id."<br/>";	// "0: 1", "1: 3", "2: 5"
}

print_r($id);
print_r($message);
print_r($card);

/*
  $code_check=['users_id','invited_users_id','relation_circle'];
  $check=model\read($db,'codes', $code_check, $where_ku);
  if (count($check['data'])!==0) {
    mysqli_rollback($db);
    return ['status'=>1,'error_message' =>"すでに新規登録が完了しています"];
  }

*/

?>
