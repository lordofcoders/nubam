<?php
/**
 * Description of Home module
 *
 * @author osman ozdemir
 */
class Home extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $hakkimizda = new View('home/templates/Hakkimizda.view.php');
        $calismalarimiz = new View('home/templates/Calismalarimiz.view.php');
        $turkgencikimdir = new View('home/templates/TurkGenciKimdir.view.php');
        $birderdimvar = new View('home/templates/BirDerdimVar.view.php');
        $view = new View('home/templates/Home.view.php');
        $this->setView($view);
        $this->setVar('hakkimizda', $hakkimizda->createHTML(array()));
        $this->setVar('calismalarimiz', $calismalarimiz->createHTML(array()));
        $this->setVar('turkgencikimdir', $turkgencikimdir->createHTML(array()));
        $this->setVar('birderdimvar', $birderdimvar->createHTML(array()));
        $this->addCSS('css/home.css');
        $this->addJS('js/home.js');
        return $this->createHTML();
    }
}

?>
