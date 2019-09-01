import axios from 'axios'
import { reject } from 'q';
import SheetData from '@/modules/sheetData.js';
export default class SpreadsheetUtil {
  static getGoogleSheetData() {
    return new Promise((resolve) => {
      axios.get('https://sheetdb.io/api/v1/yendulnmcrp6l')
        .then((response) => {
          resolve(this.googledataToSheetdata(response.data));
        })
        .catch((error) => {
          resolve(error);
        })
      // let dummyData = "[{\"Date\":\"27-07-2020\",\"Start\":\"Grou\",\"End\":\"Akkrum\",\"Distance\":\"6,9\",\"Time\":\"0:39:00\",\"AverageSpeed\":\"10,46153846\"},{\"Date\":\"29-07-2019\",\"Start\":\"Akkrum\",\"End\":\"Amsterdam\",\"Distance\":\"6,8\",\"Time\":\"0:45:00\",\"AverageSpeed\":\"9,066666667\"},{\"Date\":\"01-08-2019\",\"Start\":\"Grou\",\"End\":\"Duisburg\",\"Distance\":\"6,8\",\"Time\":\"0:35:00\",\"AverageSpeed\":\"11,65714286\"},{\"Date\":\"04-08-2019\",\"Start\":\"Grou\",\"End\":\"Den Haag\",\"Distance\":\"6,8\",\"Time\":\"0:33:00\",\"AverageSpeed\":\"12,36363636\"},{\"Date\":\"14-08-2019\",\"Start\":\"Grou\",\"End\":\"Jirnsum\",\"Distance\":\"6,8\",\"Time\":\"0:32:00\",\"AverageSpeed\":\"12,75\"},{\"Date\":\"16-08-2019\",\"Start\":\"Grou\",\"End\":\"Jirnsum\",\"Distance\":\"6,8\",\"Time\":\"0:30:30\",\"AverageSpeed\":\"13,37704918\"},{\"Date\":\"18-08-2019\",\"Start\":\"Grou\",\"End\":\"Jirnsum\",\"Distance\":\"6,8\",\"Time\":\"0:30:40\",\"AverageSpeed\":\"13,30434783\"},{\"Date\":\"20-8-2019\",\"Start\":\"Grou\",\"End\":\"Jirnsum\",\"Distance\":\"6,8\",\"Time\":\"0:29:28\",\"AverageSpeed\":\"13,84615385\"}]";
      // resolve(this.googledataToSheetdata(JSON.parse(dummyData)));
    })
  }
  static addNewRunningData(input) {
    return new Promise((resolve) => {
      let data = [];
      console.log(input.sheetdataToGoogledata());
      data.push(input.sheetdataToGoogledata());

      let jsonData = {
        data
      }

      this.getSheetLink()
      .then((sheetReponse) => {
        axios.post(sheetReponse.data.link,
          jsonData, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
      })

    })
  }
  static getSheetLink() {
    return new Promise((resolve) => {
      let token = localStorage.getItem('user-token');
      axios.get('https://localhost:5001/api/authentication/runningviewer/' + token)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error);
      })
    })
  }
  static googledataToSheetdata(array){

    let convertedArray = [];

    array.forEach((element) => {
      let date = element.Date;
      let start = element.Start;
      let end = element.End;
      let distance = element.Distance;
      let time = element.Time;
      let averageSpeed = element.AverageSpeed;
      let convertedElement = new SheetData(date, start, end, distance, time, averageSpeed);
      convertedArray.push(convertedElement);
    })
    return convertedArray;
  }
}