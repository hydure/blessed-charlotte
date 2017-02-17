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

/**
 * Temporary events queue used to track notifications that appear periodically
 */
var eventsQueue = [];

function createEvent(interval){
    var event = function(){

    }
}