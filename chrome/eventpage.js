//ACTIVATE();

var parentMenuItem = {
    "id": "charlotte",
    "title": "Charlotte",
    "contexts": ["all"]
}

var childActivate = {
    "type": "checkbox",
    "id": "activate",
    "title": "Activate",
    "contexts": ["all"],
    "parentId": "charlotte",
    "checked": false,
    "onclick" : activateOnClick
}

var childScrape = {
    "id": "scrape",
    "title": "Scrape",
    "contexts": ["all"],
    "parentId": "charlotte",
//    "onClick" : "scrapeOnClick"
}

function activateOnClick() {
    if(childActivate.checked == false){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {status: "activate"}, function(response) {
                //console.log(response.farewell);
         });
        });
        childActivate.checked = true;
    }
    else{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {status: "deactivate"}, function(response) {
                //console.log(response.farewell);
         });
        });
        childActivate.checked = false;
    }
    
}

function scrapeOnClick() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {status: "scrape"}, function(response) {
            //console.log(response.farewell);
        });
    });
}

chrome.contextMenus.create(parentMenuItem);
chrome.contextMenus.create(childActivate);
chrome.contextMenus.create(childScrape);