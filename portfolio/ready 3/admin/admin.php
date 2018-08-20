<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/admin.css">
</head>
<body>

<div class="goods-out">

</div>
<div class="info">
    <h2>Товар</h2>
    <p>Названия: <input type="text" id="gname"></p>
    <p>Цена: <input type="text" id="gcost"></p>
    <p>Описание: <textarea type="text" id="gdescr"></textarea></p>
    <p>Изображанние: <input type="text" id="gimg"></p>
    <p>Порядок: <input type="text" id="gorder"></p>
    <input type="hidden" id="gid">
    <button class="add-to-data-base">Обновить</button>
</div>


<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/admin.js"></script>
</body>
</html>