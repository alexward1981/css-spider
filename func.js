// Namespacing
var Core = Core || {};

Core = {
    constructor: function () {
        // set global variables.
        this.bodyTag = $('body');
    },

    init: function () {
        var o = this;
        o.constructor();
        o.printclasses();
    },

    stripClasses: function () {
        var  o = this
            classArray = [];
        o.bodyTag.find('*').each( function ( ) {
            newclass = $(this).attr('class')
            classArray.push(newclass)
        });
        return classArray;
    },

    printclasses: function () {
        var o = this,
             contianer = o.bodyTag.append('<pre></pre>');
             o.stripClasses().appendTo(contianer);
    }
}

$(function() {
    Core.init();
})
