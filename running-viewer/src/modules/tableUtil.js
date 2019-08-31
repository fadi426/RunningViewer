export default class tableUtil {

    static sortByDate(array) {
        return array.sort(function (a, b) {
            var aa = a.Date.split('-').reverse().join(),
                bb = b.Date.split('-').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });
    }
    static sortByStart(array) {
        return array.sort(function (a, b) {
            if (a.Start < b.Start)
                return -1;
            if (a.Start > b.Start)
                return 1;
            return 0;
        })

    }
    static sortByEnd(array) {
        return array.sort(function (a, b) {
            if (a.End < b.End)
                return -1;
            if (a.End > b.End)
                return 1;
            return 0;
        })

    }
    static sortByDistance(array) {
        return array.sort(function (a, b) {
            let formattedA = a.Distance.replace(',', '.');
            let formattedB = b.Distance.replace(',', '.');
            return parseFloat(formattedA) - parseFloat(formattedB);
        });
    }
    static sortByTime(array) {
        return array.sort(function (a, b) {
            let formattedA = a.AverageSpeed.replace(',', '.');
            let formattedB = b.AverageSpeed.replace(',', '.');
            return parseFloat(formattedB) - parseFloat(formattedA);
        });
    }
    static sortBySpeed(array) {
        return array.sort(function (a, b) {
            let formattedA = a.AverageSpeed.replace(',', '.');
            let formattedB = b.AverageSpeed.replace(',', '.');
            return parseFloat(formattedB) - parseFloat(formattedA);
        });
    }
    static timeToDecimal(time) {
        let decimal = time
            .split(":")
            .map(function (val) {
                return parseInt(val, 10);
            })
            .reduce(function (previousValue, currentValue, index, array) {
                return previousValue + currentValue / Math.pow(60, index);
            });
        return decimal;
    }
}