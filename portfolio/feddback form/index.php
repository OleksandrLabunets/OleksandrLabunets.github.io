<?php
session_start();
    if(isset($_POST["send"])) {
        $from = htmlspecialchars ($_POST["from"]);
        $to = htmlspecialchars ($_POST["to"]);
        $subject = htmlspecialchars ($_POST["subject"]);
        $message = htmlspecialchars ($_POST["message"]);
        $_SESSION["from"] = $from;
        $_SESSION["to"] = $to;
        $_SESSION["subject"] = $subject;
        $_SESSION["message"] = $message;
        $error_from = "";
        $error_to = "";
        $error_subject = "";
        $error_message = "";
        $error = false;
        if($from == "" || !preg_match ("/@/", $from)) {
            $error_from = "Введите корректный e-mail";
            $eror = true;
            $error_to = "Введите корректный e-mail";
        }
        if($to == "" || !preg_match ("/@/", $to)) {
            $error_to = "Введите корректный e-mail";
            $eror = true;
        }
        if(strlen($subject) == 0) {
            $error_subject = "Введите тему сообщения";
        }
        if(strlen($message) == 0) {
            $error_message = "Введите сообщения";
        }
        if(!$error) {
            $subject = "=?utf-8?B?".base64_encode($subject)."?=";
            $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
            mail ($to, $subject, $message, $headers);
            echo "Вы успешно отправили сообщенния";
            exit;
        }
    }

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Feedback</title>
</head>
<body>
    <h2>Форма обратной связи</h2>
    <form action="" name="feedback" method="post">
        <label>От каго: </label><br />
        <input type="text" name="from" value="<?=$_SESSION["from"]?>">
        <span style="color: red"><?=$error_from?></span><br />
        <label>Кому: </label><br />
        <input type="text" name="to" value="<?=$_SESSION["to"]?>">
        <span style="color: red"><?=$error_to?></span><br />
        <label>Тема: </label><br />
        <input type="text" name="subject" value="<?=$_SESSION["subject"]?>">
        <span style="color: red"><?=$error_subject?></span><br />
        <label>Сообщенние: </label><br />
        <textarea name="message" id="" cols="30" <?=$_SESSION["message"]?> rows="10"></textarea>
        <span style="color: red"><?=$error_message?></span><br />
        <input type="submit" name="send" value="Отправить">
    </form>

</body>
</html>