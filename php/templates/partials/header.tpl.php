<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Guilde Jor</title>
</head>

<body class="theme-black-body">
    <header>
        <span class="theme-circle" id="theme-black-body"></span>
        <span class="theme-circle" id="theme-blue-body"></span>
        <span class="theme-circle" id="theme-green-body"></span>
        <span class="theme-circle" id="theme-red-body"></span>
        <span class="theme-circle" id="theme-bronze-body"></span>
        <div class="header">

            <div class="header__logo">
                <img class="logo-jor" src="../images/logos/logo-Jor-dragonflight.png" alt="">
                <div class="info-jor">Guilde <span class="info-jor--letter">J</span>or <span class="info-jor--letter">
                        K</span>haz <span class="info-jor--letter">M</span>odan</div>
            </div>
            <div class="header__navbar bg-theme-yellow bg-theme">
                <ul class="navbar_main-menu">
                    <?php foreach($navs as $nav) :?>
                    <a class="menu-item_link" href="./<?= $nav['url'] ?>.php">
                        <li class="nav_main-menu--item">
                        <?= $nav['name'] ?></li>
                    </a>
                    <?php endforeach ?>
                </ul>
                <div class="nav__discord">
                    <a id="discord--link" href="#"> <img class="discord--img"
                            src="../images/logos/discord-mark-white.svg" alt=""> Nous rejoindre</a></div>
            </div>
        </div>
    </header>