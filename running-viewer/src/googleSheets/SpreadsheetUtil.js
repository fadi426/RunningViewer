export default class SpreadsheetUtil {

    static getGoogleSheetData() {
        var sheetsu = require("sheetsu-node");
        
        var config = {
            address: '92fb6b715d8a',
            api_key: 'Hk3xkCEqEKMmXVdWWsac',
            api_secret: 'o5LYSHeLgepPu51q6XXqmqrW8MQpsWzYsbThTSdb',
          };

        var client = sheetsu(config);
        client.read().then(
          function(data) {
            console.log(data);
          },
          function(err) {
            console.log(err);
          }
        );
    }
}