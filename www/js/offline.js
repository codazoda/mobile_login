function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if (states[networkState] != 'No network connection') {
        $('.loginArea').show();
        $('.offlineNote').hide();  
    } else {
        $('.loginArea').hide();
        $('.offlineNote').show();
    }

}

setInterval(checkConnection, 1000);

window.open = cordova.InAppBrowser.open;