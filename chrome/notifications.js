function createNotification(){
    console.log("Hello");
    chrome.notifications.create("watching",{ TemplateType: "basic", iconUrl:"images/bell.png", title: "Now Watching", message: "Configure this Notification through the main Charlotte Popup"}, 
        function(id){
                                    
        });
}

chrome.app.runtime.onLaunched.addListener(createNotification);