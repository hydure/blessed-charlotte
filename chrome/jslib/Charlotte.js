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

    crawlTo(url){
        var p = new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();
            req.addEventListener("load", function(){
                resolve(new Spider(this.response));
            });
            req.responseType = "document";
            req.open("GET", url);
            req.send();
        });
        return p;
    }

    static isValidURL(url){
        var pattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i; // fragment locater
        return pattern.test(url);
    }

    static isSameOrigin(url1, url2){
        return url1.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0] == url2.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[0];
        return true;
    }
    /**
     * Map a website
     */
    mapSite(url, max){
        var that = this;
        var p = new Promise(function(resolve, reject){
            var result = [], queue = [];
            function queueHelper(){
                if(queue.length <= 0 || result.length == max){
                    resolve(result);
                }else{
                    var href = queue.splice(0,1);
                    that.crawlTo(href).then(function(spider){
                        var aarr = spider.doc.getElementsByTagName("a"), link;
                        for(var i = 0; i < aarr.length; i++){
                            link = aarr[i].href;
                            if(result.indexOf(link) == -1 && Charlotte.isValidURL(link) && Charlotte.isSameOrigin(link, url)){
                                queue.push(link);
                                if(result.length < max){
                                    result.push(link);
                                } else {
                                    resolve(result);
                                }
                            }
                        }
                        if (result.length <= max)
                            queueHelper()
                    });
                }
            }
            queue.push(url);
            queueHelper();
        })
        return p;
         
    }
}

class Spider{
    constructor(doc){
        this.doc = doc;
        this.web = []; // things collected by the spider
    }

    toCSV(){

    }

    capture(str){

    }
    /**
     * Finds an element and returns information(?) about it
     */
    querySelector(str){
        document.querySelector(str);
    }
    /**
     * Performs data collection and exports data to file
     */
    export(as){
        switch(as ? as.toLowerCase() : "json"){
            case "csv":
                break;
            case "xml":
                break;
            case "yaml":
            case "yml":
                break;
            default:
                break;
        }
    }
}

//var spider = new Charlotte();
//console.log(spider);
    //spider.mapSite("http://www.wm.edu/", 500).then(function(res){ console.log( res ); });
