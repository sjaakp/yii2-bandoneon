Bandoneon
==============

## Lightweight accordion widget for Yii 2.0 ##


### Motivation ###

In my opinion, there are some issues with the standard [Yii2 JUI Accordion](http://www.yiiframework.com/doc-2.0/yii-jui-accordion.html) widget.

- The heading and the content of the sections must be provided as options to the widget, which is cumbersome.
- It generates HTML with hard wired class references, introducing new and probably unintended styling.
- It is overkill, being dependant on the complete jQuery UI library.
 
**Bandoneon** is a lightweight, versatile replacement widget for the JUI Accordion. The Javascript is less than 700 bytes. It only depends on jQuery core, which you would have loaded in your page anyway.

[Here](http://sjaakpriester.nl/software/bandoneon) are some demo's of the **Bandoneon** widget. 

## Installation ##

The preferred way to install **Bandoneon** is through [Composer](https://getcomposer.org/). Either add the following to the require section of your `composer.json` file:

	"sjaakp/yii2-bandoneon": "*"

Or run:

	composer require sjaakp/yii2-bandoneon "*"

You can manually install **Bandoneon** by [downloading the source in ZIP-format](https://github.com/sjaakp/yii2-bandoneon/archive/master.zip).
 
## Usage ##

Use **Bandoneon** by enclosing the sections in straight HTML between calls to `Bandoneon::begin()` and `Bandoneon::end()`, like so:

    <?php use sjaakp\bandoneon\Bandoneon; ?>

	<?php Bandoneon::begin() ?>

	    <h4>Heading 1</h4>
	    <div>Lorem ipsum ... felis ultricies.</div>
	
	    <h4>Heading 2</h4>
	    <div>Pellentesque aliquet ... placerat tincidunt.</div>
	
			...
	    
	    <h4>Heading n</h4>
	    <div>Curabitur sit ... gravida nec turpis.</div>

	<?php Bandoneon::end() ?>

You can use any sensible HTML tags for the headings and the sections. For instance, this works just as well:

    <?php use sjaakp\bandoneon\Bandoneon; ?>

	<?php Bandoneon::begin() ?>

	    <p>Heading 1</p>
	    <p>Lorem ipsum ... felis ultricies.</p>
	
	    <p>Heading 2</p>
	    <p>Pellentesque aliquet ... placerat tincidunt.</p>
	
			...
	    
	    <p>Heading n</p>
	    <p>Curabitur sit ... gravida nec turpis.</p>

	<?php Bandoneon::end() ?>

**Bandoneon** makes no assumptions about the HTML of the headings and the sections. It uses the jQuery selectors `:odd` and `:even` to differentiate between them. The HTML in the sections, and in the headings as well, can be as convoluted as you like.

### Initially open ###

If you want a section to be initially open, just add the class `"open"` to its heading, like so:

	    ...
		<h4 class="open">Heading 2</h4>
	    <div>This section will be initially open...</div>
		...
	
### Surrounding element ###

By default, **Bandoneon** creates a `<div>` as surrounding element. You can modify this by setting the `'tag'` option in `Bandoneon::begin()`.

This may come in handy if you want to create a **Bandoneon**, based on a HTML definition list `<dl>`:

    <?php use sjaakp\bandoneon\Bandoneon; ?>

	<?php Bandoneon::begin([
			'tag' => 'dl'
		]) ?>

	    <dt>Heading 1</dt>
	    <dd>Lorem ipsum ... felis ultricies.</dd>
	
	    <dt>Heading 2</dt>
	    <dd>Pellentesque aliquet ... placerat tincidunt.</dd>
	
			...
	    
	    <dt>Heading n</dt>
	    <dd>Curabitur sit ... gravida nec turpis.</dd>

	<?php Bandoneon::end() ?>

### Speed ###

The speed of the animation can be modified by setting the following `clientOptions` in `Bandoneon::begin()`.

- `upDuration`: duration of the slide-up of a section, in milliseconds. Default: `200`.
- `downDuration`: duration of the slide-down of a section, in milliseconds. Default: `600`.

A very slow **Bandoneon** might be coded like this:

    <?php use sjaakp\bandoneon\Bandoneon; ?>

	<?php Bandoneon::begin([
			'clientOptions' => [
		        'upDuration' => 2000,
		        'downDuration' => 4000
			]
		]) ?>

	    <h4>Heading 1</h4>
	    <div>Lorem ipsum ... felis ultricies.</div>

		...
