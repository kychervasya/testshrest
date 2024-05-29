const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.styles([
    'resources/assets/secure/plugins/fontawesome-free/css/all.min.css',
    'resources/assets/secure/css/select2.min.css',
    'resources/assets/secure/css/select2-bootstrap4.min.css',
    'resources/assets/secure/css/datepicker.min.css',
    'resources/assets/secure/css/adminlte.css',
    'resources/assets/secure/css/jquery.fancybox.css',
    'resources/css/app.css',
],'public/assets/secure/css/admin.css');

mix.scripts([
    'resources/assets/secure/plugins/jquery/jquery.min.js',
    'resources/assets/secure/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/secure/js/moment.min.js',
    'resources/assets/secure/js/datepicker/moment-timezone-with-data-10-year-range.min.js',
    'resources/assets/secure/js/datepicker/ru.js',
    'resources/assets/secure/js/datepicker/datepicker.min.js',
    'resources/assets/secure/js/adminlte.min.js',
    'resources/assets/secure/js/select2.min.js',
    'resources/assets/secure/js/jquery.fancybox.js',
    'resources/assets/secure/js/demo.js',
], 'public/assets/secure/js/admin.js');

mix.copyDirectory('resources/assets/secure/plugins/fontawesome-free/webfonts',
    'public/assets/secure/webfonts');

mix.copyDirectory('resources/assets/secure/img',
    'public/assets/secure/img');
