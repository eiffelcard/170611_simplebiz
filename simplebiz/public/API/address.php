<?php
	require('setting.php');
	header("Access-Control-Allow-Origin: *");
	error_reporting(E_ALL^E_NOTICE);

		 $status=200;

		  //カード情報の表示
			$sql=sprintf('SELECT *
					FROM card_histories
					WHERE user_id_sender=%d',
          mysqli_real_escape_string($db,$_POST['myid'])
		);
			$order_query=mysqli_query($db,$sql) or die(mysqli_error($db));

$i=0; while($order=mysqli_fetch_assoc($order_query)): $i++;



				$orders[] = array(
				'id' =>  $order['id']
				,'product' =>  $order['product']
				,'message' =>   	$order['message']
				,'postcode' =>	$order['postcode']
				,'state' =>		$order['state']
				,'city' =>		$order['city']
				,'street' =>		$order['street']
				,'building' =>	$order['building']
				,'title' =>		$order['title']
				,'delivery_name' =>		$order['delivery_name']
				,'created' =>		$order['created']
				);


		endwhile;


   $userjson = array(
		 	'status' => 200
			,'error_message' => $error_message
			,'error_messageEn' => $error_messageEn
      ,'orders' => $orders
			);


			header('Content-Type: application/json; charset=UTF-8');



			echo json_encode($userjson);

?> 