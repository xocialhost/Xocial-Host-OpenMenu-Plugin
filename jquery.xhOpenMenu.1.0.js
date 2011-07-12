// jQuery xhOpenMenu
// Plugin to access OpenMenu
// version 0.0.1, July 12, 2011
// by Dustin Nielson - http://www.xocialhost.com


(function($) {

    // here we go!
    $.xhOpenMenu = function(element, options) {

        // plugin's default options
        // this is private property and is  accessible only from inside the plugin
        var defaults = {

            foo: 'bar',

            // if your plugin is event-driven, you may provide callback capabilities for its events.
            // execute these functions before or after events of your plugin, so that users may customize
            // those particular events without changing the plugin's code
            onFoo: function() {}

        }

        // to avoid confusions, use "plugin" to reference the current instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('xhOpenMenu').settings.propertyName from outside the plugin, where "element" is the
        // element the plugin is attached to;
        plugin.settings = {}

        var $element = $(element),  // reference to the jQuery version of DOM element the plugin is attached to
             element = element;        // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {

            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            // code goes here

        }

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // element.data('xhOpenMenu').publicMethod(arg1, arg2, ... argn) from outside the plugin, where "element"
        // is the element the plugin is attached to;

        // a public method. for demonstration purposes only - remove it!
        plugin.foo_public_method = function() {

            // code goes here

        }

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)

        // a private method. for demonstration purposes only - remove it!
        var foo_private_method = function() {

            // code goes here

        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.xhOpenMenu = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('xhOpenMenu')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.xhOpenMenu(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('xhOpenMenu').publicMethod(arg1, arg2, ... argn) or
                // element.data('xhOpenMenu').settings.propertyName
                $(this).data('xhOpenMenu', plugin);

            }

        });

    }


})(jQuery);