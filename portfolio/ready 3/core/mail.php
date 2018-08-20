<?php

//    читаем JSON файл
    $json = file_get_contents('../goods.json');
    $json = json_decode($json, true);


//    письмо

    $message = '';
    $message .= '<h1>Заказ в магазине</h1>';
    $message .= '<p>Клиент: '.$_POST['name'].'</p>';
    $message .= '<p>Email: '.$_POST['mail'].'</p>';
    $message .= '<p>Телефон: '.$_POST['phone'].'</p>';

    $cart = $_POST['cart'];
    $sum = 0;

    foreach ($cart as $id=>$count) {
      $message .= $json[$id]['name'].' --- ';
      $message .= $json[$id]['description'].' --- ';
      $message .= $count.' --- ';
      $message .= $count*$json[$id]['cost'];
      $message .= '<br>';
      $sum = $sum + $count*$json[$id]['cost'];

    }
    $message .= 'Всего: '.$sum;
//    print_r($message);

    $to = 'sancho55501@gmail.com'.',';
    $to = $_POST['email'];
    $specttext = '<!DOCTYPE html><html><head><title>Заказ:</title></head><body>';
    $headers = 'MINE-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $m = mail($to, 'Заказ в магазине одежды', $specttext.$message.'</body></html>', $headers);
    if ($m) {echo 1;} else {echo 0;}






?>