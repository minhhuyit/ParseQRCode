chrome.tabs.getSelected(null,function(tab) {
    var data = tab.url;
    document.getElementById("qrcode_image").src = "https://api.qrserver.com/v1/create-qr-code/?data="+ data +"&amp;size=100x100";
});
