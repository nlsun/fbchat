chrome.tabs.create({
    url: 'http://www.facebook.com/'
}, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "removeContent.js"}, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});

/*function openChat(url) {
    var newWindow = window.open(url);
    document.addEventListener('DOMContentLoaded', function () {
      newWindow.document.getElementById('pagelet_bluebar').innerHTML='';
    });
    window.open(url);
    //chrome.tabs.executeScript(null, {file: "removeContent.js"});
}

document.addEventListener('DOMContentLoaded', function () {
  //openChat("http://www.facebook.com/");
  chrome.tabs.executeScript(null, {file: "removeContent.js"});
});
*/
