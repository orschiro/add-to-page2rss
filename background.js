chrome.browserAction.onClicked.addListener(function(tab) {
    // Original bookmark JS code
    //(function(){if(!window.page2rss_bookmark_urlr)window.page2rss_bookmark_urlr=function(ur){if(ur.error)alert(ur.error);if(ur.page&&ur.page.page)location.href=ur.page.page};var r=document.getElementById('urlFormRequest');if(r)r.parentNode.removeChild(r);r=document.createElement('script');r.id='urlFormRequest';r.type='text/javascript';r.src='http://page2rss.com/api/page?url='+encodeURIComponent(location.href)+'&callback=page2rss_bookmark_urlr';document.body.appendChild(r);})();
    
    var create_feed_url = "http://page2rss.com/api/page?url=" + encodeURIComponent(tab.url); //+ "&callback=page2rss_bookmark_urlr" 
    var feed_url = "http://page2rss.com/page?url=" + tab.url;

    chrome.tabs.create({"url": create_feed_url, active: false}, function(tab) {
        chrome.browserAction.setBadgeText({text: 'wait'});
        setTimeout(function() { 
            chrome.tabs.remove(tab.id, function(tab) {
                chrome.browserAction.setBadgeText({text: ''});
            }); 

        }, 5000);

        // chrome.tabs.onUpdated.addListener(function( tabId , info ) {
        //     if ( info.status == "complete" ) {
        //         // your code ...
        //         chrome.tabs.remove(tab.id);
        //     }
        // });
    });

    setTimeout(function() { 
        chrome.tabs.create({"url": feed_url, active: true}, function(tab) {
            chrome.tabs.onUpdated.addListener(function( tabId , info ) {
                if ( info.status == "complete" ) {
                    chrome.browserAction.setBadgeText({text: 'done', tabId: tabId});
                }
            });
        }); }
    , 1000);    
});