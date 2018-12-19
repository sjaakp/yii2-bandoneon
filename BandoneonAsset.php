<?php
/**
 * MIT licence
 * Version 1.0
 * Sjaak Priester, Amsterdam 02-08-2014.
 */

namespace sjaakp\bandoneon;

use yii\web\AssetBundle;

class BandoneonAsset extends AssetBundle {
    public $js = [
        'bandoneon.js'
    ];

    public $css = [
        'bandoneon.css'
    ];

    public function init()    {
        parent::init();

        $this->sourcePath = __DIR__ . DIRECTORY_SEPARATOR . 'dist';
    }
}
