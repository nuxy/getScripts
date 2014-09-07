/**
 *  getScripts (jQuery shorthand extended)
 *  A lightweight asynchronous JavaScript loader
 *
 *  Copyright 2014, Marc S. Brooks (http://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Dependencies:
 *    jquery.js
 */

if (!window.jQuery || (window.jQuery && window.jQuery.fn.jquery < '1.8.3')) {
	alert('getScripts requires jQuery 1.8.3 or greater.');
}

(function($) {
	var methods = {
		"init" : function(files, callback) {
			return this.each(function() {
				if (! $.isArray(files) || files.length == 0) {
					throw(new Error('Invalid array'));
				}

				if (callback && ! $.isFunction(callback) ) {
					throw(new Error('Invalid callback function'));
				}

				var count = 0;

				// execute as recursive callback
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
							throw(new Error("Script '" + script + "' failed with exception\n" + exception));
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
