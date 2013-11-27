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
        $view = new View('home/templates/Home.view.php');
        $this->setView($view);
        
        if(userExists())
            $this->setVar ('cls', 'editable');
        else
            $this->setVar ('cls', '');
        
        $this->addCSS('css/home.css');
        $this->addJS('js/greensock/minified/TimelineMax.min.js');
        $this->addJS('js/greensock/minified/TweenMax.min.js');
        $this->addJS('js/home.js');
        return $this->createHTML();
    }
}

?>
