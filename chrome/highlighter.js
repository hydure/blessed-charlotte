/**
 * Highlights an element once clicked
 */

/**
 * @cssuh
 * Initialize empty array to be populated with elements that have been clicked
 */
var highlightClass = 'charlotte-web-highlit';
var excludeString = ".charlotte-highlighter, .charlotte-highlighter *, body, html, #context-menu-layer, .context-menu-list, .context-menu-root";
var selectors = [];
var hasUI = false;

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
         $('li.context-menu-item>span').addClass('context-menu-charlotte');
    }
    else
        document.body.removeChild(h_controls);
}

/**
 * Click Handler for "selection mode"
 */
var handler = function(e){
    if(e.target == document.body ) return;
    var target = $(e.target);
    // alt click tries to "intelligently" select data
    if(e.altKey){ 
        $("."+highlightClass).toggleClass(highlightClass);
        selectors = [];
        selectors.push("[class='"+target.attr('class')+"']");
        $("[class='"+target.attr('class')+"']").not(excludeString).toggleClass( highlightClass );
    }else if(e.ctrlKey){
        target.toggleClass( highlightClass );
        selectors.push(target.getPath());
    }
    else{
        if(!target.attr('class')|| (target.attr('class') && target.attr('class').search('context-menu') == -1) ) {
            $("."+highlightClass).toggleClass(highlightClass);
            $(target).not(excludeString).toggleClass( highlightClass );
            selectors = [];
            selectors.push(target.getPath());
        }
    }
    return false;
}

var ACTIVATE = function(){
    $(document).click(handler);
    toggleUI();
}

var DEACTIVATE = function(){
    $("."+highlightClass).toggleClass(highlightClass);
    $(document).off("click", handler);
    toggleUI();
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
/**
 * Context Menu that pops up on right click
 * allows the user to 
 */
$(function(){
    $.contextMenu({
        selector: "."+highlightClass, 
        callback: function(key, options) {
            switch(key){
                case "MFS":
                case "watch":
                    // TODO: Maintain selectors
                    var module = {
                        name : (document.querySelector('title') && document.querySelector('title').innerText) || "",
                        description : window.location.href,
                        url : window.location.href,
                        data : selectors.map(function(a){
                            return {
                                key : null,
                                value : a
                            }
                        })
                    }
                    chrome.storage.sync.get(["blessed-charlotte-webcrawler"], function(items){
                        if(!items["blessed-charlotte-webcrawler"]||!(items["blessed-charlotte-webcrawler"]instanceof Array)) {
                            items = [module]
                        }else{ 
                            items = items['blessed-charlotte-webcrawler']; 
                            items.push(module); 
                        };
                            chrome.storage.sync.set({"blessed-charlotte-webcrawler":items}, function(){});
                    });
                    break;
            }
        },
        items: {
            //"MFS": {name: "New Module From Selection(s)" },
            "watch": {name: "Watch Selected Fields" },
            "link": {name: "Link Selected Field to Module Field" }
        }
    });

});

/**Adds getPath function to jquery selected elements */
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


