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
class ConfirmUser extends Module
{
    public function __construct() 
    {
        
    }
    
    public function load()
    {
        $view = new View('ConfirmUser.view.php');
        $this->setView($view);
        $this->addCSS('css/confirmuser.css');
        $this->addJS('js/confirmuser.js');
        
        $hash = EventManager::$params[1];
        if(EventManager::$db->confirmUser($hash))
        {
            $this->setVar('activated', true);
        }
        else
        {
            $this->setVar('activated', false);
        }
        return $this->createHTML();
    }
}

?>
