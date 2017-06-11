<?php
require('setting.php');
	
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL^E_NOTICE);


  //1-2.バリデーション：emailのチェック
    if(empty($_POST[email])){
       errorexit("402","emailが入力されていません","Plese input email");
      }

  //1-3.バリデーション：passwordのチェック
        if(empty($_POST[password])){
       errorexit("403","passwordが入力されていません","Plese input password");
        }

  //1-4.emailが正しいフォーマットか確認(最初に@マークが入っているかチェック)
    if(preg_match('/@/',$_POST[email])){
      $aaa=ok;
    }	else{
     errorexit("404","emailは@を入力ください","email should be include @ ");
    }

  //1-5.passwordが正しいフォーマットか確認
    if(ctype_alnum($_POST[password])){
        $aaa=ok;
    }	else{
     errorexit("405","passwordはすべて英数字で入力ください","password should be alphabet or number");
    }


    //2-2.emailが既に登録されていないか確認
     $sql=sprintf('SELECT *FROM users WHERE email="%s"',
     mysqli_real_escape_string($db,$_POST[email])
     );
     $mail_query=mysqli_query($db,$sql) or die(mysqli_error($db));
     $mailadc=mysqli_fetch_assoc($mail_query);

     if(!empty($mailadc[id])){
        errorexit("407","このemailは既に登録されています","email is already registered");
      }

     //3.登録
      $sql=sprintf('INSERT INTO users SET email="%s",password="%s",name="%s",created="%s"',
      mysqli_real_escape_string($db,$_POST['email']),
      mysqli_real_escape_string($db,sha1($_POST['password'])),
      mysqli_real_escape_string($db,$_POST['name']),
      date('Y-m-d H:i:s')
    );

    mysqli_query($db,$sql) or die(mysqli_error($db));

    $last_id = mysqli_insert_id($db);


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
  mysqli_query($db,$sql) or die(mysqli_error($db));

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