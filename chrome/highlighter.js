/**
 * Highlights an element once clicked
 */

/**
 * @cssuh
 * Initialize empty array to be populated with elements that have been clicked
 */
var highlightClass = 'charlotte-web-highlit';
var hasUI = false;
var ACTIVATE = function(){
    $(document).click(handler);
    toggleUI();
}

var DEACTIVATE = function(){
    $("."+highlightClass).toggleClass(highlightClass);
    $(document).off("click", handler);
    toggleUI();
}

var h_controls = document.createElement('div');
    h_controls.classList.add("charlotte-highlighter");
    h_controls.innerHTML = "<div class=''><button> Scrape </button> <button class='highlighter-close'> Close </button> </div>";

function toggleUI(){
    hasUI = !hasUI;
    if(hasUI){
         document.body.appendChild(h_controls);
         $('.highlighter-close').click(function(){
            DEACTIVATE();
         });
    }
    else
        document.body.removeChild(h_controls);
}

var handler = function(e){
    //e.preventDefault();
    var target = $(e.target);
    if(e.altKey){ //inteligent select
        $("."+highlightClass).toggleClass(highlightClass);
        console.log(target.attr('class'));
        $("[class='"+target.attr('class')+"']").not('body, html').toggleClass( highlightClass );
    }
    else if(e.ctrlKey){
        target.toggleClass( highlightClass );
    }else{
        $("."+highlightClass).toggleClass(highlightClass);
        target.not('body, html').toggleClass( highlightClass );
    }
}

/**
 * Messsage Listener
 */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    if (request.status == "activate"){
        ACTIVATE();
        sendResponse({farewell: "goodbye"});
        
    }
});

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


