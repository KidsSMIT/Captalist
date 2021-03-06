// wait for an updateReady message
ipcRenderer.on('updateReady', function(event, text) {
    // changes the text of the button
    ipcRenderer.send('app_version');
});

ipcRenderer.on("app_version", function(event, data){
    var show_update_div = document.getElementById("show_update");

    show_update_div.innerHTML = `
    <div style="width: 160px; background-color: blue; color: white; text-align: center;border-radius: 6px; padding: 8px 0; position: absolute; z-index: 1; bottom: 50%; left: 50%; margin-left: -80px;">
        <p>You are currently on Version: ${data.version}</p>    
        <p>And a new update for Captalist is now availiable</p>
        <button onClick="ipcRenderer.send('quitAndInstall')">Update Now!!!</button>
    </div>
    `
});