CKEDITOR.plugins.add('randomnumber', {
    icons: 'randomnumber',
    init: function( editor ) {
        editor.addCommand( 'insertRandom', {
            exec: function( editor ) {
                var random_number = Math.floor((Math.random() * 1000) + 1);
                editor.insertHtml( 'Random number: <em>' + random_number + ' </em>');
            }
        });
        editor.ui.addButton( 'RandomNumber', {
            label: 'Random Number',
            command: 'insertRandom',
            toolbar: 'insert',
            icon: 'https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png'
        });
    }
});
