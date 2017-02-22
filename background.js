// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Skipping ad...');
  chrome.tabs.executeScript({
    code: "document.querySelector('video').currentTime = document.querySelector('video').duration"
  });
});