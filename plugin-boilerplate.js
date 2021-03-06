/**
 * jQuery Pluginifier - A jQuery Plugin Instantiator (Write Less, Do More)
 * 	|- Plugin Boilerplate Code
 *
 * Copyright (c) 2011 Paul Giberson - http://aknosis.com
 * Licensed under the MIT license.
 * http://aknosis.mit-license.org/2011/
 */

//This should be available somewhere, doesn't have to be here explicitly
var namespace = {

	//This will hold all of the plugins
	plugins : {}
};

//Wrap in a closure to secure $ for jQuery
(function( $ ){

	//Constructor - This is what is called when we create call new namspace.plugins.pluginNameHere( this , options );
	namespace.plugins.pluginNameHere = function( ele , options ){
		this.$this = $( ele );
		this.options = $.extend( {} , this.defaults , options );
	};

	//These prototype items get assigned to every instance of namespace.plugins.pluginNameHere
	namespace.plugins.pluginNameHere.prototype = {

		//This is optional, you only need to include it if you don't want to pass the name to $.pluginifier
		pluginifier : "pluginNameHere",

		//This is the default option all instances get, can be overridden by incoming options argument
		defaults : {
			opt: "tion"
		},

		//private init method - This is called immediately after the constructor
		_init : function(){
			//useful code here
			return this; //This is very important if you want to call into your plugin after the initial setup
		},

		//private method - We filter out method names that start with an underscore this won't work outside
		_aPrivateMethod : function(){
			//Something useful here that is not needed externally
		},

		//public method - This method is available via $("#element").pluginNameHere("aPublicMethod","aParameter");
		aPublicMethod : function(){
			//Something useful here that anyone can call anytime
		}
	};

	//
	/**
	 * Here we register the plugin - $("#ele").pluginNameHere(); now works as expected.
	 * You should only call this after pluginifier is included, i.e. you can defer to a document.ready to register the plugin.
	 * The second parameter is optional, but it allows you to customize the name used to access the plugin
	 * You could $.pluginifier( namespace.plugins.pluginNameHere , "foobar") and $('#ele').foobar() is now available
	 */
	$.pluginifier( namespace.plugins.pluginNameHere, "pluginNameHere" );

})( jQuery );
