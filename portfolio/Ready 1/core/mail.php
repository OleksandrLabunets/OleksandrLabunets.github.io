<?php
//    letter

    $message = '';
    $message .= '<h1>Order</h1>';
    $message .= '<h1>First Name: '.$_POST['firstName'].'</h1>';
    $message .= '<h1>Last Name: '.$_POST['lastName'].'</h1>';
    $message .= '<h1>Email: '.$_POST['email'].'</h1>';
    $message .= '<h1>Mobile phone: '.$_POST['phone'].'</h1>';
    $message .= '<h1>Home page: '.$_POST['homePage'].'</h1>';
    $message .= '<h1>Zip code: '.$_POST['zipCode'].'</h1>';
    $message .= '<h1>Information: '.$_POST['inf'].'</h1>';



    $to = 'labunets-96@mail.ru'.',';
    $to .=$_POST['email'];
    $spectext = '<!DOCTYPE HTML><html><head><title>Order</title></head><body>';
    $headers = 'MINE-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $m = mail($to, 'Letter for stor', $spectext.$message.'</body></html>', $headers);
    if ($m) {echo 1;} else {echo 0;}



?>