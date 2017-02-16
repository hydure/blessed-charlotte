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

// when you shift + click select all the elements of the same class 


var clickedElements = new Array();



document.addEventListener("click",function(e){
    // console.log($(e.target).getPath());
    if (clickedElements.includes(e.target.id)){
        // console.log(e.target.id);
        index = clickedElements.indexOf(e.target.id);
        // console.log(index);
        clickedElements.splice(index, 1);
        // console.log(clickedElements);
        $(e.target).css("background-color", "");
        // console.log(clickedElements);

    }
    else{
        clickedElements.push(e.target.id);
        $(e.target).css("background-color", "ffff00");
        // console.log(clickedElements);
    } 
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
//     console.log("testDiv".id);
// });

// $(document).ready(function(){
//     var id = $("#testDiv").attr("id");
//     clickedElements.push(id);
//     console.log(clickedElements);
// });

clicked = true;
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