var s = document.createElement('script');
s.src = chrome.extension.getURL("create_feed_url.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);