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

(function($) {
	var methods = {
		"init" : function(files, callback) {
			return this.each(function() {
				var count = 1;

				if (!files instanceof Array || files.length == 0) {
					throw(new Error('Invalid array'));
				}

				if (callback && typeof callback !== 'function') {
					throw(new Error('Invalid callback function'));
				}

				var _callback = function() {
					if (files.length == count++ && callback) {
						callback();
					}
				};

				for (var i = 0; i < files.length; i++) {
					$.getScript(files[i])
						.done(_callback)
						.fail(function() {
							throw(new Error("Import path '" + files[i] + "' is not valid"));
						});
				}
			});
		},
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
