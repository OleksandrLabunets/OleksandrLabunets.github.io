<?php 

// letter --------------------------------------

	$message = '';
	$message .= '<h1>Client data</h1>';
    $message .= '<h1>Full Name: '.$_POST['fullName'].'</h1>';
	$message .= '<h1>Email: '.$_POST['email'].'</h1>';
	$message .= '<h1>Phone: '.$_POST['phone'].'</h1>';
	$message .= '<h1>Subject: '.$_POST['subj'].'</h1>';
	$message .= '<h1>Message: '.$_POST['inf'].'</h1>';
//	print_r($message);

//    send letter
    $to = 'sancho55501@gmail.com'.',';
    $to .=$_POST['email'];
    $spectext = '<!DOCTYPE HTML><html><head><title>Order</title></head><body>';
    $headers = 'MINE-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $m = mail($to, 'Client info', $spectext.$message.'</body></html>', $headers);
    if ($m) {echo 1;} else {echo 0;}


//    $data = $_POST;
//
//    if (isset($data['submit'])) {
//
//
//        $errors = array();
//        if( ($data['name']) == '')
//        {
//            $data['name']
//            $errors[] = 'enter tge login';
//        }
//
//        if( empty($errors) )
//        {
//
//        } else {
//            echo '<div style="color: red;">'.array_shift($errors).'</div><hr>';
//        }
//    }


?>