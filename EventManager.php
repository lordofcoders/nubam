<?php
/**
 * Description of EventManager
 *
 * @author osman ozdemir
 */
class EventManager 
{
    public static $base;
    public static $params;
    public static $post;
    public static $get;
    public static $currentModule;
    public $css;
    public $js;
    public static $db;
    
    public function __construct() 
    {
        EventManager::$base = trim(dirname($_SERVER['SCRIPT_NAME']));
        if (!(EventManager::$base == '/')) {
            EventManager::$base .= "/";
        };
        
        $this->css = '';
        $this->js = '';
        self::$params = explode('/', isset($_GET['q']) ? $_GET['q'] : "");
        self::$post = $_POST;
        self::$get = $_GET;
        self::$db = new DBManager();
        self::$db->load();
        self::$currentModule = 'Today';
    }
    
    public function serve()
    {
        jsConfig('base', EventManager::$base);
        
        switch(self::$params[0])
        {
            case '':
                
                return $this->loadModule('Home');
                
                break;
            case 'home':
                
                return $this->loadModule('Home');
                
                break;
            case 'hakkimizda':
                
                return $this->loadModule('Hakkimizda');
                
                break;
            case 'turk-genci-kimdir':
                
                return $this->loadModule('TurkGenciKimdir');
                
                break;
            case 'calismalarimiz':
                
                return $this->loadModule('Calismalarimiz');
                
                break;
            case 'confirm-user':
                
                return $this->loadModule('ConfirmUser');
                
                break;
            case 'bir-derdim-var':
                
                return $this->loadModule('BirDerdimVar');
                
                break;
            case 'admin':
                
                return $this->loadModule('Admin');
                
                break;
            case 'logout':
                
                return $this->loadModule('Logout');
                
                break;
            case 'ajax':
                
                $this->ajax();
                
                break;
                
        }
    }
    
    public function loadModule($moduleName)
    {
        $module = new $moduleName();
        self::$currentModule = $module;
        if(userExists())
        {   
            self::addAdminStuff();
        }
        $loaded =  $module->load();
        
        $this->addCSS($module->css);
        $this->addJS($module->js);
        
        
        
        return $loaded;
    }
    
    public static function goToLoc($location)
    {
        header('Location: ' . $location);
        die();
    }
    
    public function addCSS($css)
    {
        $this->css .= $css;
    }
    public function addJS($js)
    {
        $this->js .= $js;
    }
    
    public function ajax()
    {
        $response = array();
        switch(self::$params[1])
        {
            case 'authenticate':
                $response = EventManager::login(self::$post['userName'], self::$post['password']);
                break;
            case 'signup':
                $response = EventManager::signup(self::$post);
                break;
            case 'add-item':
                $response = EventManager::addItem(self::$post);
        }
        echo json_encode($response);
        exit;
    }
    
    public static function url($fileURL)
    {
        return EventManager::$base . $fileURL;
    }
    
    public static function login($userName, $password)
    {
        return self::$db->authenticateUser($userName, sha1(md5($password . PASS_STRING)));
    }
    
    public static function signup($nvp)
    {
        return self::$db->signup($nvp);
    }
    
    public static function addItem($params)
    {
        
    }
    
    public static function addAdminStuff()
    {
        self::$currentModule->addJS('js/admin.js');
        $panel = new View('panels/panel.view.php');
        $addNewItem = new View('panels/addNewItem.view.php');
        $blockDetails = new View('panels/blockDetails.view.php');
        jsConfig('panel', $panel->createHTML());
        jsConfig('addNewItem', $addNewItem->createHTML());
        jsConfig('blockDetails', $blockDetails->createHTML());
    }
}

?>
