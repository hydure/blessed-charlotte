/**
 * Highlights an element once clicked
 */

/**
 * @cssuh
 * Initialize empty array to be populated with elements that have been clicked
 */
var clickedElements = new Array();


/**
 * @cssuh
 * This function will be a click listener that highlights elements that have been clicked on - 
 * single clicks toggle selection of single elements, and shift clicks toggle selection of 
 * elements of the same class.
 */

$ (document).click(function(e){
    // if shift key is pressed during click
    if(e.shiftKey){
        className = e.target.className;
        // populate an array of elements with same class name
        var elements = document.getElementsByClassName(className);

        //counts how many from elements list have been already clicked
        counter = 0;
        for (i = 0; i < elements.length; i++){
            if(clickedElements.includes(elements[i])){
                counter ++;
            }
        }
        
        // case 1: all selected, all must be deselected
        if (counter == elements.length){
            for (i = 0; i < elements.length; i++){
                index = clickedElements.indexOf(elements[i]);
                clickedElements.splice(index, 1);
                $(elements[i]).css("background-color", "");
            }
        }
        
        // case 2: some selected, deselect all and re-select all
        else if (counter > 0){
            // remove all selected from selected list 
            for (i = 0; i < elements.length; i++){
                index = clickedElements.indexOf(elements[i]);
                clickedElements.splice(index, 1);
                $(elements[i]).css("background-color", "");
            }
            // add all elements of same class to selected list
            for (i = 0; i < elements.length; i++){
                clickedElements.push(elements[i]);
                $(elements[i]).css("background-color", "#ffff00");
            }
        }

        // case 3: none selected, all must be selected
        else{
            // add all elements of same class to selected class
            for (i = 0; i < elements.length; i++){
                clickedElements.push(elements[i]);
                $(elements[i]).css("background-color", "#ffff00");
            }
        }
    }
    // if shift key is not pressed during click
    else{
        // do nothing if the user clicks the body of the document
        if (e.target == document.body){}
        // remove element from selected elements array if is already inside the array
        else if (clickedElements.includes(e.target)){
        index = clickedElements.indexOf(e.target);
        clickedElements.splice(index, 1);
        $(e.target).css("background-color", "");
        }
        // add element to selected elements array 
        else{
            clickedElements.push(e.target);
            $(e.target).css("background-color", "ffff00");
        } 
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


