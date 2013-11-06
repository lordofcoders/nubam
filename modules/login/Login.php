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
class Login extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $view = new View('login/templates/Login.view.php');
        $this->setView($view);
        $this->addCSS('css/login.css');
        $this->addJS('js/login.js');
        return $this->createHTML();
    }
}

?>
