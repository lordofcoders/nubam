<?php
//var_dump($dbManager->authenticateUser('asd@buncee.com', md5('1')));
//var_dump($dbManager->query('select * from Users;'));
//var_dump($_SERVER);
//var_dump($eventManager);

session_start();
include_once('util.php');

$eventManager = new EventManager();
//EventManager::$db->createObjectClassFromTable('Vote');
//$array = array(
//    'email' => 'oozdemir2704@gmail.com',
//    'password' => sha1(md5('osoz7162' . PASS_STRING)),
//    'firstName' => 'Osman',
//    'lastName' => 'Ozdemir',
//    'joinedOn' => time(),
//    'lastLogin' => time(),
//    'accountType' => ADMIN
//);
//$array = array(
//    'email' => 'oozdemir2704@gmail.com',
//    'password' => sha1(md5('osoz7162' . PASS_STRING))
//);
//$user = new User($array);
//$user = $user->load();
//$user = $user->save();
$page = $eventManager->serve();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>project nunu 0.1</title>
        <link rel="stylesheet" type="text/css" href="<?= EventManager::$base ?>css/jquery.jscrollpane.css" media="all" />
        <link rel="stylesheet" type="text/css" href="<?= EventManager::$base ?>css/jquery.toastmessage.css" media="all" />
        <link rel="stylesheet" type="text/css" href="<?= EventManager::$base ?>css/opentip.css" media="all" />
        <link rel="stylesheet" type="text/css" href="<?= EventManager::$base ?>css/icons.css" media="all" />
        <link rel="stylesheet" type="text/css" href="<?= EventManager::$base ?>css/style.css" media="all" />
        <link href='http://fonts.googleapis.com/css?family=Sniglet:400,800|Architects+Daughter' rel='stylesheet' type='text/css'>
        <?php
            echo $eventManager->css;
        ?>
    
    </head>
    <body>
        <div id="wrapper" class="">
            <div id="header">
                <div id="logo">
                    <img src="<?= EventManager::url('css/images/logo.jpg') ?>" />
                </div>
                <div id="header-menu">
                    <ul>
                        <li class="trans-all">
                            <a href="<?= EventManager::url('hakkimizda') ?>">Hakkimizda</a>
                        </li>
                        <li class="trans-all">
                            <a href="<?= EventManager::url('turk-genci-kimdir') ?>">Türk Genci Kimdir?</a>
                        </li>
                        <li class="trans-all">
                            <a href="<?= EventManager::url('calismalarimiz') ?>">Çalışmalarımız</a>
                        </li>
                        <li class="trans-all">
                            <a href="<?= EventManager::url('bir-derdim-var') ?>">Bir Derdim Var!</a>
                        </li>
                    </ul>
                </div>
            </div>
            <?php
                echo $page;
            ?>
        </div>
            <script type="text/javascript">
                if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || 
                    navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || 
                    navigator.userAgent.match(/webOS/i)) 
                {
                    var viewportmeta = document.querySelector('meta[name="viewport"]');
                    if (viewportmeta) {
                        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                    }
                }
            </script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/timezone.detector.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/jquery.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/jquery.lazyload.min.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/jquery.mousewheel.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/jquery.jscrollpane.min.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/mwheelIntent.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/jquery.toastmessage.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/opentip-jquery.min.js"></script>
            <?php
                echo addJSVars();
            ?>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/util.js"></script>
            <script type="text/javascript" src="<?= EventManager::$base ?>js/kba.js"></script>
            <?php
                echo $eventManager->js;
            ?>
    </body>
</html>
<?php
exit;
?>