<?php
	require('setting.php');
	header("Access-Control-Allow-Origin: *");
	error_reporting(E_ALL^E_NOTICE);

		 $status=200;

		  //カード情報の表示
			$sql=sprintf('SELECT
        pm.id,
        pm.productnumber,
        pm.category,
        pm.pricetype,
        pm.price,
        pm.thumbnail,
        pm.pic1,
        pm.pic2,
        pm.pic3,
        pm.pic4,
        pm.pic5,
        pm.productfamilly
					FROM product_masters as pm
					WHERE is_campaign>0
				 	order by is_campaign limit 5'
		);
			$product_query=mysqli_query($db,$sql) or die(mysqli_error($db));

$i=0; while($product=mysqli_fetch_assoc($product_query)): $i++;



				$Products[] = array(
				'id' =>  $product[id]
				,'number' =>  $product[productnumber]
				,'name' =>   	$product[productname]
				,'category' =>	$product[category]
				,'familly' =>		$product[productfamilly]
					,'pricetype' =>		$product[pricetype]
				,'price' =>		$product[price]
				,'thumbnail' =>	$product[thumbnail]
				,'pic1' =>		$product[pic1]
				,'pic2' =>		$product[pic2]
				,'pic3' =>		$product[pic3]
				,'pic4' =>		$product[pic4]
				,'pic5' =>		$product[pic5]
				,'fav' =>		$product[fav]
				);


		endwhile;


   $userjson = array(
		 	'status' => 200
			,'error_message' => $error_message
			,'error_messageEn' => $error_messageEn
      ,'products' => $Products
			);


			header('Content-Type: application/json; charset=UTF-8');



			echo json_encode($userjson);


?>
