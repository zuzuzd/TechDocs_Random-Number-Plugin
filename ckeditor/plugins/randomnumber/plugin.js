/**
 * Basic plugin inserting a random number between 1 and 1000 into the CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * https://ckeditor.com/docs/ckeditor4/latest/guide/plugin_sdk_intro.html
 */


CKEDITOR.plugins.add('randomnumber', {
    icons: 'randomnumber',
    init: function( editor ) {

        // Editor command that inserts a random number
        editor.addCommand( 'insertRandom', {

            // Function that will be fired when the command is executed
            exec: function( editor ) {
                var random_number = Math.floor((Math.random() * 1000) + 1);

                // Inserts a random number into a document.
                editor.insertHtml( 'Random number: <em>' + random_number + ' </em>');
            }
        });

        // Toolbar button that executes the above command
        editor.ui.addButton( 'RandomNumber', {
            label: 'Random Number',
            command: 'insertRandom',
            toolbar: 'insert',
            icon: 'https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png'
        });
    }
});
