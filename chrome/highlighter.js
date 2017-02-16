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

$(document).click(function(){
    console.log("testDiv".id);
});

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