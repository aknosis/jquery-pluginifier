/**
 * jQuery Pluginifier - A jQuery Plugin Instantiator (Write Less, Do More)
 *
 * Copyright (c) 2011 Paul Giberson - http://aknosis.com
 * Licensed under the MIT license.
 * http://aknosis.mit-license.org/2011/
 */

//Wrap in a closure to secure $ for jQuery
(function( $ ) {

	/**
	 * prototype - your plugin's prototype
	 * [name] - if you do not provide a name for your plugin, the prototype must have a pluginifier property
	 */
	$.pluginifier = function( prototype , name ) {

		if ( name === undefined ) {
			if ( prototype.pluginifier === undefined ) {
				throw 'Cannot register plugin: need a name or the pluginifier propterty set on the prototype';
			}
			name = prototype.pluginifier;
		}

		if ( $.fn[name] !== undefined ) {
			throw 'Cannot register plugin: plugin '+name+' already defined';
		}

		//Create the prototype function for the plugin
		$.fn[name] = function( options ) {

			//args isset to everything passed in after options item
			var args = Array.prototype.slice.call( arguments , 1 );

			//Don't waste time if there are no matching elements
			if( this.length ) {

				//Support chaining by returning this
				return this.each( function() {

					//Retrieve the instance from $.data() OR create the instance, _init() it, and store that instance in $.data()
					var instance = $.data( this , name ) || $.data( this , name , new prototype( this , options )._init() );

					//If the first arg is a string we assume you are calling a method inside the plugin instance
					if( typeof options === "string" ){

						//underscored methods are "private" (similar to jQuery UI's $.widget we allow this to make methods not availble via public api)
						options = options.replace( /^_/ , "" );

						//Check if underscore filtered method exists
						if( instance[options] ) {

							//Call method with args
							instance[options].apply( instance , args );
						}
					}
				});
			}
		};
	};
})( jQuery );

//After pluginifier and your plugin are in place you need to register your plugins
//$.pluginifier( "myAwesomeSauce" );
