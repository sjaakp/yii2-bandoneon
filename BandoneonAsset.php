<?php
/**
 * MIT licence
 * Version 1.0
 * Sjaak Priester, Amsterdam 02-08-2014.
 */

namespace sjaakp\bandoneon;

use yii\web\AssetBundle;

class BandoneonAsset extends AssetBundle {
    public $depends = [
        'yii\web\JqueryAsset',
    ];

    public function init()    {
        parent::init();

        $this->sourcePath = __DIR__ . DIRECTORY_SEPARATOR . 'assets';
        $this->js[] = YII_DEBUG ? 'jquery.bandoneon.js' : 'jquery.bandoneon.min.js';
        $this->css[] = 'bandoneon.css';
    }
}