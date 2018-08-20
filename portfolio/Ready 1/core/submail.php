<?php

    $message = '';
    $message .= '<h1>News subscription</h1>';
    $message .= '<h2>Email: '.$_POST['clientEmail'].'</h2>';
//    print_r($message);

//    send letter

    $to = 'labunets-96@mail.ru'.',';
    $to .=$_POST['email'];
    $spectext = '<!DOCTYPE HTML><html><head><title>Order</title></head><body>';
    $headers = 'MINE-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $m = mail($to, 'Letter for stor', $spectext.$message.'</body></html>', $headers);
    if ($m) {echo 1;} else {echo 0;}
?>