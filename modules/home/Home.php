<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of LoginModule
 *
 * @author osman
 */
class Home extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $view = new View('home/templates/Home.view.php');
        $this->setView($view);
        $this->setVar('osman', '2704');
        $this->addCSS('css/home.css');
        $this->addJS('js/jquery.address-1.5.min.js');
        $this->addJS('js/home.js');
        jsConfig('count', 0);
        jsConfig('imgLoadCount', 0);
        jsConfig('boxes', array());
        return $this->createHTML();
    }
}

?>
