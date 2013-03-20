/**
 * jQuery Pluginifier - A jQuery Plugin Instantiator (Write Less, Do More)
 *  |- Plugin Boilerplate Test Stub
 *
 * Copyright (c) 2011 Paul Giberson - http://aknosis.com
 * Licensed under the MIT license.
 * http://aknosis.mit-license.org/2011/
 */

var namespace = {
	plugins : {}
};

(function( $ ){

	namespace.plugins.testPlugin = function( ele , options ){
		this.$this = $( ele );
		this.options = $.extend( {} , this.defaults , options );
	};

	namespace.plugins.testPlugin.prototype = {
		defaults : {
			opt: "tion"
		},
		_init : function(){
			this.foo = 'bar';
			return this;
		},
		_aPrivateMethod : function(){
			this.foo = 'private';
		},
		aPublicMethod : function(){
			this.foo = 'baz';
		}
	};

})( jQuery );