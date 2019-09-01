export default class tableUtil {

    static sortByDate(array) {
        return array.sort(function (a, b) {
            var aa = a.date.split('-').reverse().join(),
                bb = b.date.split('-').reverse().join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        });
    }
    static sortByStart(array) {
        return array.sort(function (a, b) {
            if (a.start < b.start)
                return -1;
            if (a.start > b.start)
                return 1;
            return 0;
        })

    }
    static sortByEnd(array) {
        return array.sort(function (a, b) {
            if (a.end < b.end)
                return -1;
            if (a.end > b.end)
                return 1;
            return 0;
        })

    }
    static sortByDistance(array) {
        return array.sort(function (a, b) {
            let formattedA = a.distance.replace(',', '.');
            let formattedB = b.distance.replace(',', '.');
            return parseFloat(formattedA) - parseFloat(formattedB);
        });
    }
    static sortByTime(array) {
        return array.sort(function (a, b) {
            let formattedA = a.averageSpeed.replace(',', '.');
            let formattedB = b.averageSpeed.replace(',', '.');
            return parseFloat(formattedB) - parseFloat(formattedA);
        });
    }
    static sortBySpeed(array) {
        return array.sort(function (a, b) {
            let formattedA = a.averageSpeed.replace(',', '.');
            let formattedB = b.averageSpeed.replace(',', '.');
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