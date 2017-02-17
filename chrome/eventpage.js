/**
 * Javascript file for context menu.
 */

var charlotteMenuItem = {
    "id": "charlotte",
    "title": "Charlotte",
    "contexts": ["all"],
    "onclick": charlotteOnClick
}

function charlotteOnClick() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: "activate"}, function(response) {
                // Activates clicker and creates div
        });
    });
}

chrome.contextMenus.create(charlotteMenuItem);

// var childActivate = {
//     "type": "checkbox",
//     "id": "activate",
//     "title": "Activate",
//     "contexts": ["all"],
//     "parentId": "charlotte",
//     "checked": false,
//     "onclick" : activateOnClick
// }

// var childScrape = {
//     "id": "scrape",
//     "title": "Scrape",
//     "contexts": ["all"],
//     "parentId": "charlotte",
//     "onclick" : scrapeOnClick
// }

// function activateOnClick() {
//     if (childActivate.checked == false) {
//         console.log("YEAAAHHHHHHHHHHHHHHHHHH");
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {status: "activate"}, function(response) {
//                 // Activates clicker
//          });
//         });
//         childActivate.checked = true;
//     } else {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {status: "deactivate"}, function(response) {
//                 // Deactivates clicker
//             });
//         });
//         childActivate.checked = false;
//     }
// }

// function scrapeOnClick() {
//     if (childActivate.checked == false) {
//         // INSERT TOAST HERE telling user to check Activate
//         console.log("TOAST");
//     } else {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {status: "scrape"}, function(response) {
//                 // Begin Scraping
//             });
//         });
//     }
// }

//chrome.contextMenus.create(childActivate);
//chrome.contextMenus.create(childScrape);