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
class Signup extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $view = new View('templates/Signup.view.php');
        $this->setView($view);
        $this->setVar('osman', '2704');
        $this->addCSS('css/signup.css');
        $this->addJS('js/signup.js');
        return $this->createHTML();
    }
}

?>
