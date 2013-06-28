chrome.tabs.create({
    url: 'http://www.facebook.com/'
}, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "removeContent.js"}, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});
