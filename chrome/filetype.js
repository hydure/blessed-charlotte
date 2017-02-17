 
 /**
  * @cssuh
  * JSON to CSV converter
  */

$(document).ready(function () {
     
      // Create Object
            var items = [
          { name: "Item 1", color: "Green", size: "X-Large" },
          { name: "Item 2", color: "Green", size: "X-Large" },
          { name: "Item 3", color: "Green", size: "X-Large" }];

      var csv = Papa.unparse(items);

      // 

      console.log(csv);
 
      // Convert Object to JSON
      // var jsonObject = JSON.stringify(items);
         
      // Display JSON
      //      $('#json').text(jsonObject);
       
      // Convert JSON to CSV & Display CSV
      //$('#anything').text(csv);

}); 

