console.log('setting up gui.');
var gui = require('nw.gui');
var main = process.mainModule.exports;

// Create a tray icon
var tray = new gui.Tray({
    title: 'Tray', icon: 'img/icon.png'
});

// Give it a menu
var menu = new gui.Menu();

var pauseItem = new gui.MenuItem({
    label: 'Pause',
    click: function() {
        main.player.pause();
    }
});
menu.append(pauseItem);

var playItem = new gui.MenuItem({
    label: 'Play',
    click: function() {
        main.player.play();
    }
});
menu.append(playItem);

var quitItem = new gui.MenuItem({
    label: 'Quit',
    click: gui.App.quit,
});
menu.append(quitItem);

tray.menu = menu;
