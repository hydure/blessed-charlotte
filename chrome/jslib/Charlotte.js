/*
 * ----
 * Charlotte.js
 * 
 * Open Source Web Scraping Library
 * ---
 */
class Charlotte{
    constructor(){

    }

    mapSite(url){
        var req = new XMLHttpRequest();
        req.addEventListener("load", function(a, b, c){
            console.log(a, b, c, this.response);
        });
        req.open("GET", url);
        req.send()
    }
}

var spider = new Charlotte();
    spider.mapSite("https://www.microsoft.com/cognitive-services/en-US/subscriptions#");
