chrome.browserAction.onClicked.addListener(function(tab) {
    //var create_feed_url = "http://page2rss.com/api/page?url=" + encodeURIComponent(tab.url); //+ "&callback=page2rss_bookmark_urlr" 
    //http://page2rss.com/page?url=" + tab.url + "/";
    var feed_url = "http://page2rss.com/page?url=" + tab.url;
    // chrome.tabs.create({"url": create_feed_url}); 
    // chrome.tabs.getSelected(null, function(tab) {
    //         chrome.tabs.remove(tab.id);
    //     });
    var open_feed = function() {
        chrome.tabs.create({"url": feed_url});
    };

    chrome.tabs.executeScript(null, {file: "create_feed_url.js"}, function(results) {
        setTimeout(open_feed, 5000);
    });

    //setTimeout(open_feed, 5000);

    open_feed();

    //(function(){if(!window.page2rss_bookmark_urlr)window.page2rss_bookmark_urlr=function(ur){if(ur.error)alert(ur.error);if(ur.page&&ur.page.page)location.href=ur.page.page};var r=document.getElementById('urlFormRequest');if(r)r.parentNode.removeChild(r);r=document.createElement('script');r.id='urlFormRequest';r.type='text/javascript';r.src='http://page2rss.com/api/page?url='+encodeURIComponent(location.href)+'&callback=page2rss_bookmark_urlr';document.body.appendChild(r);})();
});