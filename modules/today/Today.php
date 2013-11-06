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
class Today extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $view = new View('today/templates/Today.view.php');
        $this->setView($view);
        $this->addCSS('css/today.css');
        $this->addJS('js/today.js');
        return $this->createHTML();
    }
}

?>
