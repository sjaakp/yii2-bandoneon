<?php
/**
 * MIT licence
 * Version 1.0
 * Sjaak Priester, Amsterdam 02-08-2014.
 *
 * Simple accordion widget for Yii 2.0
 *
 * The Yii JUI Accordion widget is overkill, imho.
 * It introduces unwanted styling through the jQueryUI classes.
 * The initialisation is cumbersome: the heading and content for each section has to be entered as an array option.
 *
 * This Accordion is lightweight. The sections are defined in pure HTML, like so:
 *

 <?php Accordion::begin() ?>
    <h4>First heading</h4>
    <div><p>... first content...</p></div>
    <h4>Second heading</h4>
    <div><p>... second content...</p></div>
        ...
    <h4>Last heading</h4>
    <div><p>... last content...</p></div>
 <?php Accordion::end() ?>

 * By default, Accordion starts up with all the sections closed.
 * If you want a section to be initially open, just add class "open" to it's heading:
 *

 <?php Accordion::begin() ?>
    <h4>First heading</h4>
    <div><p>... first content...</p></div>
    <h4 class="open">Second heading</h4>
    <div><p>... this section is initially open...</p></div>
    ...
    <h4>Last heading</h4>
    <div><p>... last content...</p></div>
 <?php Accordion::end() ?>

 */

namespace sjaakp\bandoneon;

use yii\base\Widget;
use yii\helpers\Html;
use yii\helpers\Json;

class Bandoneon extends Widget {
    /**
     * @var array
     * HTML options for the enclosing element.
     */
    public $options = [];

    /**
     * @var array
     * client options for jquery.bandoneon.js
     * two values may be set:
     * - upDuration (default 200)
     * - downDuration (default 400)
     * Both may be set to a number indicating the duration of the animation in milliseconds, to 'fast' (200 ms), or to 'slow' (600 ms).
     */
    public $clientOptions = [];

    /**
     * @var string
     * The tag of the surrounding element.
     */
    public $tag = 'div';

    public function init()    {
        $view = $this->getView();

        $asset = new BandoneonAsset([
            'publishOptions' => [
                'forceCopy' => true
            ]
        ]);
        $asset->register($view);

        if (!isset($this->options['id'])) {
            $this->options['id'] = $this->getId();
        }
        $class = isset($this->options['class']) ? $this->options['class'] : '';
        $this->options['class'] = trim($class . ' sjaakp-bandoneon');
        echo Html::beginTag($this->tag, $this->options);

        $id = $this->getId();
        $opts = !empty($this->clientOptions) ? Json::encode($this->clientOptions) : '{}';
        $view->registerJs("$('#$id').bandoneon($opts);");
    }

    public function run()    {
        echo Html::endTag($this->tag);
    }
}