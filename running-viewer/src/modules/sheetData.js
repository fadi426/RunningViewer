export default class SheetData {
    date = "";
    start = "";
    end = "";
    distance = "";
    time = "";
    averageSpeed = 0;

    constructor(date, start, end, distance, time, averageSpeed){
        this.date = date;
        this.start = start;
        this.end = end;
        this.distance = distance;
        this.time = time;
        this.averageSpeed = averageSpeed;
    }
 
    get date() {
        return this.date;
    }

    get start() {
        return thisstart;
    }

    get end() {
        return this.end;
    }

    get distance() {
        return this.distance;
    }

    get time() {
        return this.time;
    }

    get averageSpeed() {
        return this.averageSpeed;
    }

    set date(value) {
        this.date = value;
    }

    set start(value) {
        this.start = value;
    }

    set end(value) {
        this.end = value;
    } 

    set distance(value) {
        this.distance = value;
    } 

    set time(value) {
        this.time = value;
    } 

    set averageSpeed(value) {
        this.averageSpeed = value;
    }

    reset() {
        this.date = "";
        this.start = "";
        this.end = "";
        this.distance = "";
        this.time = "";
        this.averageSpeed = 0;
    }

    sheetdataToGoogledata(element) {
        return {
          Date: this.date,
          Start: this.start,
          End: this.end,
          Distance: this.distance,
          Time: this.time,
          AverageSpeed: this.averageSpeed
        }
      }
}