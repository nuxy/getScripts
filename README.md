# getScripts [<img src="https://travis-ci.org/nuxy/getScripts.svg?branch=master" alt="Build Status" />](https://travis-ci.org/nuxy/getScripts)

jQuery shorthand extended to support ordered asynchronous requests.

## Features

- Compatible with Firefox 3.6+, Chrome, Safari 5+, Opera, and Internet Explorer 7+ web browsers.
- Compatible with iOS and Android mobile web browsers.
- Loads and initializes JavaScript in an ordered fashion.
- Fast and lightweight (jQuery plug-in *only 1.3 kB)

## Installation

This package can be easily installed using {Bower}[http://bower.io].

    $ bower install getscripts

Add the following Javascript between the `<head></head>` tags of your HTML document.  jQuery plug-in order is important.

    <script src="/path/to/jquery.js"></script>
    <script src="/path/to/jquery.getScripts.js"></script>

## Use example

    $(document).getScripts([
      'scripts/1.js',
      'scripts/2.js',
      'scripts/3.js',
      'scripts/4.js',
      'scripts/5.js'
    ],
    function() {
      alert('All scripts loaded');
    });

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_getScripts_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
