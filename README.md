# Random Number

Random Number is a custom CKEditor plugin that allows inserting a random number from 1 to 1000 into your text.  

Right-click the **Random Number** icon on the toolbar to generate a random number:  

![button](./doc/images/button.png)

### Installation

Random Number requires creating a new folder and configuring a **config.js** file to run.

1. Open CKEditor installation files, go to **plugins**, and create a **randomnumber** folder inside this directory manually or via Terminal:

```sh
$ mkdir randomnumber
```

1. Download a **plugin.js** file, and place it inside a **randomnumber** folder. Your final file path should have the following structure:

```sh
./ckeditor/plugins/randomnumber/plugin.js
```

1. Configure a **config.js** file by pasting the following script inside a **config** function:

```javascript
config.extraPlugins = 'randomnumber';
```
### Development

You can modify the source code as per your needs. For example:

* This will generate numbers from 1-10:

```javascript
init: function( editor ) {
        editor.addCommand( 'insertRandom', {
            exec: function( editor ) {
                var random_number = Math.floor((Math.random() * 10) + 1);
                editor.insertHtml( 'Random number: <em>' + random_number + ' </em>');
            }
        });
```

* This will get rid of unnecessary text:

```js
init: function( editor ) {
        editor.addCommand( 'insertRandom', {
            exec: function( editor ) {
                var random_number = Math.floor((Math.random() * 1000) + 1);
                editor.insertHtml( random_number );
            }
        });
```

> **Note:** This plugin inserts content that is allowed in default installations. However, in case you want to introduce your custom modifications, you might need to integrate the plugin with [Advanced Content Filter](https://ckeditor.com/docs/ckeditor4/latest/guide/dev_acf.html) (ACF). If you encounter any issues related to content incompatibility, try adding `<config.allowedContent = true;>` to a **config** function.