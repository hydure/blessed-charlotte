/**
 * Highlights an element once clicked
 */

/**
 * @cssuh
 * Initialize empty array to be populated with elements that have been clicked
 */
var hightlightClass = 'charlotte-web-highlit';

var handler = function(e){
    //e.preventDefault();
    var target = $(e.target);
    if(e.altKey){ //inteligent select
        $("."+hightlightClass).toggleClass(hightlightClass);
        console.log(target.attr('class'));
        $("[class='"+target.attr('class')+"']").not('body, html').toggleClass( hightlightClass );
    }
    else if(e.ctrlKey){
        target.toggleClass( hightlightClass );
    }else{
        $("."+hightlightClass).toggleClass(hightlightClass);
        target.not('body, html').toggleClass( hightlightClass );
    }
}
var ACTIVATE = function(){
    $(document).click(handler);
}

var DEACTIVATE = function(){
    $("."+hightlightClass).toggleClass(hightlightClass);
    $(document).off("click", handler);
}


jQuery.fn.extend({
    getPath: function () {
        var path, node = this;
        while (node.length) {
            var realNode = node[0], name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();

            var parent = node.parent();

            var sameTagSiblings = parent.children(name);
            if (sameTagSiblings.length > 1) { 
                allSiblings = parent.children();
                var index = allSiblings.index(realNode) + 1;
                if (index > 1) {
                    name += ':nth-child(' + index + ')';
                }
            }

            path = name + (path ? '>' + path : '');
            node = parent;
        }

        return path;
    }

});


