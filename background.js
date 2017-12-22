var popupsettings = {
  "type": "panel",
  "height": 200,
  "width": 450,
  "url": browser.extension.getURL("popup.html"),
  "allowScriptsToClose": true
}

function openPopup() {
  popup_win = browser.windows.create(popupsettings);
}

browser.contextMenus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "open-popup":
      openPopup(); 
      break;
  }
});
