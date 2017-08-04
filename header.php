<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Эль Ботэ</title>
    <meta name="author" content="">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <?php
    /*компиляция LESS в CSS (стили правятся в style.less)*/
    include('lessphpcomp.php'); ?>
    <link rel="stylesheet" type="text/css" href="css/style.css?2905">
    <script data-main="js/config.js" async="async" src="js/require.js"></script>
    <link rel="shortcut icon" href="img/favicon.ico">
</head>
<body class="autumn">
<header>
    <div class="container-fluid">
        <div class="logo">
            <a href="/"><img src="img/logo.png"></a>
        </div>
        <div class="contact">
            <div class="phone"><a href="tel:+74955071506"><span>+7 (495)</span>507-1-506</a></div>
            <div class="address">г. Балашиха, ул. Фадеева, д. 8а</div>
            <div class="schedule visible-sm">
                <div class="row">
                    <div class="col-sm-6">
                        <dl class="dl-horizontal">
                            <dt>Пн-Сб</dt>
                            <dd>10:00 - 22:00</dd>
                            <dt>Вс</dt>
                            <dd>10:00 - 21:00</dd>
                        </dl>
                    </div>
                    <div class="col-sm-6 text-center">
                        <a href="#" class="btn">Онлайн запись</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="schedule hidden-sm">
            <div class="row">
                <div class="col-md-6">
                    <p class="hidden-xs">Часы работы:</p>
                    <dl class="dl-horizontal">
                        <dt>Пн-Сб</dt>
                        <dd>10:00 - 22:00</dd>
                        <dt>Вс</dt>
                        <dd>10:00 - 21:00</dd>
                    </dl>
                </div>
                <div class="col-md-6 text-center">
                    <a href="#" class="btn">Онлайн запись</a>
                </div>
            </div>
        </div>
    </div>
    <?include("main-menu.php");?>
</header>