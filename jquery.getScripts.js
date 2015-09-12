/**
 *  getScripts (jQuery shorthand extended)
 *  A lightweight asynchronous JavaScript loader.
 *
 *  Copyright 2015, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Dependencies:
 *    jquery.js
 */

if (!window.jQuery || (window.jQuery && parseInt(window.jQuery.fn.jquery.replace('.', '')) < parseInt('1.8.3'.replace('.', '')))) {
  throw new Error('jQuery.getScripts requires jQuery 1.8.3 or greater.');
}

(function($) {

  /**
   * @namespace getScripts
   */
  var methods = {

    /**
     * Create new instance of getScripts
     *
     * @memberof getScripts
     * @method init
     *
     * @example
     * jQuery.getScripts(files, callback);
     *
     * @param {Array} files
     * @param {Function} callback
     */
    "init": function(files, callback) {

      // Support method chaining.
      return this.each(function() {
        if (!$.isArray(files) || files.length === 0) {
          $.error('Invalid array');
        }

        if (callback && !$.isFunction(callback)) {
          $.error('Invalid callback function');
        }

        var count = 0;

        // Execute as recursive callback.
        var _callback = function() {
          if (files.length == count) {
            if (callback) {
              callback();
            }

            return true;
          }

          var script = files[count];

          $.getScript(script)
            .done(_callback)
            .fail(function(jqxhr, settings, exception) {
              $.error("Script '" + script + "' failed with exception\n" + exception);
            });

          count++;
        };

        _callback();
      });
    }
  };

  $.fn.getScripts = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else
    if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    }
    else {
      $.error('Method ' +  method + ' does not exist in jQuery.getScripts');
    }
  };
})(jQuery);
