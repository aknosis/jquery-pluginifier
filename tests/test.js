/**
 * jQuery Pluginifier - A jQuery Plugin Instantiator (Write Less, Do More)
 *  |- Unit Tests
 *
 * Copyright (c) 2011 Paul Giberson - http://aknosis.com
 * Licensed under the MIT license.
 * http://aknosis.mit-license.org/2011/
 */

(function( $ ){

	test("plugin registration", function(){
		equal("undefined", typeof $('#qunit-fixture').testPlugin);
		strictEqual($('#qunit-fixture').testPlugin, undefined);
	});

	test("plugin registration failure - missing name", function(){
		throws(function(){$.pluginifier('testPlugin')})
		throws(function(){$.pluginifier(namespace.plugins.testPlugin)})
	});

	test("plugin registration with name", function(){
		$.pluginifier(namespace.plugins.testPlugin, 'testPlugin');
		equal("function", typeof $('#qunit-fixture').testPlugin);
		notStrictEqual($('#qunit-fixture').testPlugin, undefined);
	});

	test("plugin registration with any name", function(){
		$.pluginifier(namespace.plugins.testPlugin, 'fooPlugin');
		equal("function", typeof $('#qunit-fixture').fooPlugin);
		notStrictEqual($('#qunit-fixture').fooPlugin, undefined);
	});

	test("plugin registration without name", function(){
		namespace.plugins.testPlugin.pluginifier = 'barPlugin';
		$.pluginifier(namespace.plugins.testPlugin);
		equal("function", typeof $('#qunit-fixture').barPlugin);
		notStrictEqual($('#qunit-fixture').barPlugin, undefined);
	});

	test("initialization", function(){
		$('#qunit-fixture').testPlugin({ key : "value"});
		equal('bar', $('#qunit-fixture').data('testPlugin').foo);
		equal('value', $('#qunit-fixture').data('testPlugin').options.key);
		equal("object", typeof $('#qunit-fixture').data('testPlugin').$this);
	});

	test("public method access", function(){
		$('#qunit-fixture').testPlugin('aPublicMethod');
		equal('baz', $('#qunit-fixture').data('testPlugin').foo);
	});

	test("private method lack of access", function(){
		$('#qunit-fixture').testPlugin('_aPrivateMethod');
		notEqual('private', $('#qunit-fixture').data('testPlugin').foo);
	});

	test("plugin overwriting", function(){
		throws(function(){$.pluginifier('testPlugin')})
	});

})( jQuery );

