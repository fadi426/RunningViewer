import axios from 'axios'
export default class SpreadsheetUtil {
  static getGoogleSheetData() {
    return new Promise((resolve) => {
      axios.get('https://sheetdb.io/api/v1/yendulnmcrp6l')
        .then(function (response) {
          // handle success
          resolve(response);
        })
        .catch(function (error) {
          // handle error
          resolve(response);
        })
    })
  }
  static addNewRunningData(input) {
    return new Promise((resolve) => {
      let data = [];
      data.push(input);

      let jsonData = {
        data
      }
      axios.post('https://sheetdb.io/api/v1/yendulnmcrp6l',
          jsonData, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  }
}