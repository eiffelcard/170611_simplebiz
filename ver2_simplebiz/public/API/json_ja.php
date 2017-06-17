<?php
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");

$message= array(
"LOGINTOP" =>"eiffel"
,"LOGINSUB"=>"Simple Biz"
,"LOGINMESSAGE"=> "簡単にお礼状が送れます"
,"LOGINCAMPAIGN"=>"今なら無料お試し実施中"
);



echo json_encode($message,JSON_UNESCAPED_UNICODE);
