<?php
$db=mysqli_connect('sky.eiffelcard.com','mixnuts0911','37U15(WWaE+eCu4?','simplebiz')  or die(mysqli_connect_error());
mysqli_set_charset($db,'utf8');


function errorexit($em1, $em2, $em3) {
  header('Content-Type: application/json; charset=UTF-8');
  header("Access-Control-Allow-Origin: *");

  $errorexit = array(
    'status' => $em1
    , 'error_message' => $em2
    , 'error_messageEn' => $em3
  );

  echo json_encode($errorexit);
  exit();
}


?>
