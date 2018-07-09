<?php
    session_start();
    if($_GET["send"] == 1)
    echo "Вы успешно отправли сообщенния на email ".$_SESSION["to"];
?>