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
class Admin extends Module
{
    public function __construct() {
        
    }
    
    public function load()
    {
        $view = new View('admin/templates/Admin.view.php');
        $this->setView($view);
        $this->setVar('user', $_SESSION['user']);
        $categories = EventManager::$db->getAllCategories();
        $this->setVar('categories', $categories);
        jsConfig('cols', 2);
        
        jsConfig('addCategoryForm', (new View('admin/templates/AddCategoryForm.view.php'))->createHTML(array()));
        
        $this->addCSS('css/speech-bubbles.css');
        $this->addCSS('css/admin.css');
        $this->addJS('js/login.js');
        $this->addJS('js/admin.js');
        return $this->createHTML();
    }
    
    
}

?>
