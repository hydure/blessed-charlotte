/**
 * Highlights an element once clicked
 */

// ** this one works but we need to alter css in this case
// $(".testDiv").click(
//     function(){
//     $(this).toggleClass("highlight");
//         console.log("click");
//     }
//     );

// make an array that stores what the user clicked on and 
// when the item is in the array 

var clickedElements = new Array();



document.addEventListener("click",function(e){
    // when you shift + click select all the elements of the same class 
    if(e.shiftKey){
        className = e.target.className;

        var elements = document.getElementsByClassName(className);
        // console.log(elements);
        // if (clickedElements.includes())
        counter = 0;
        for (i = 0; i < elements.length; i++){
            console.log("iterative counter = ", counter);
            console.log("i = ", i);
            // console.log(elements[i]);
            console.log(elements[i]);
            if(clickedElements.includes(elements[i])){
                counter ++;
            }
        }
        console.log("counter = ", counter);
        console.log("elements.length = ", elements.length);
        
        // all selected, all must be deselected
        if (counter == elements.length){
            console.log("enter case 1");
            for (i = 0; i < elements.length; i++){
                // console.log(elements[i]);
                index = clickedElements.indexOf(elements[i]);
                console.log(index);
                clickedElements.splice(index, 1);
                console.log(clickedElements);
                $(elements[i]).css("background-color", "");
            }
        }
        
        // some selected, deselect all and re-select all
        else if (counter > 0){
            for (i = 0; i < elements.length; i++){
                // console.log(elements[i]);
                index = clickedElements.indexOf(elements[i]);
                // console.log(index);
                clickedElements.splice(index, 1);
                // console.log(clickedElements);
                $(elements[i]).css("background-color", "");
            }
            for (i = 0; i < elements.length; i++){
                // console.log(elements[i]);
                clickedElements.push(e.target);
                $(elements[i]).css("background-color", "#ffff00");
            }
        }

        // none selected, all must be selected
        else{
            for (i = 0; i < elements.length; i++){
                // console.log(elements[i]);
                clickedElements.push(elements[i]);
                $(elements[i]).css("background-color", "#ffff00");
            }
            console.log(clickedElements);
        }
    }
    else{
        if (e.target == document.body){}
        else if (clickedElements.includes(e.target)){
        // console.log(e.target);
        index = clickedElements.indexOf(e.target);
        // console.log(index);
        clickedElements.splice(index, 1);
        // console.log(clickedElements);
        $(e.target).css("background-color", "");
        // console.log(clickedElements);
        }
        else{
            clickedElements.push(e.target);
            $(e.target).css("background-color", "ffff00");
            // console.log(clickedElements);
        } 
    }
    // console.log($(e.target).getPath());
    
})


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






// $(document).click(function(){
//     console.log("testDiv");
// });

// $(document).ready(function(){
//     var id = $("#testDiv").attr("id");
//     clickedElements.push(id);
//     console.log(clickedElements);
// });

// originalColor = $(".testDiv").css("background-color");

// $(".testDiv").click(function(){
//     if(clicked == true){
//         $(this).css("background-color", "ffff00");
//         clicked = false;
//         console.log("click true");
//     }
//         // var original = "background-color";
//     else{
//         $(this).css("background-color", "");
//         clicked = true;
//         console.log("click false");
//     }

    

//     }
//     );



// $(".testDiv").click(function() {
//     $(this).show().effect('Highlights');
//     console.log("click");

// });


// $(".testDiv").click(function(){
//     $(this).toggleClass("background","red");
//     console.log("click");
// });

// $("p").on("click", function(){
//     $("p").css("background-color", "yellow");
//     console.log("click");
// })


// console.log($('body'));