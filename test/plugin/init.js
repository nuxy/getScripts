module('getScripts', {
	setup : function() {
		stop();

		$(this).getScripts([
			'test/plugin/scripts/1.js',
			'test/plugin/scripts/2.js',
			'test/plugin/scripts/3.js',
			'test/plugin/scripts/4.js',
			'test/plugin/scripts/5.js'
		],
		function() {
			start();
		});
	}
});

test('Loaded', function() {
	equal(count, 5);
});
