/**
 * @brief 若位数不够，则在前面补0
 * @param num 数字
 * @param digits 位数
 */
function sup0(num: number, digits: number): string {
    var s = num.toString();
    if (s.length >= digits) { return s; }
    var ret = "";
    for (let i = s.length; i < digits; ++i) { ret += "0"; }
    return ret + s;
}

var lastBodyWidth: number = 0, lastBodyHeight: number = 0,
    bodyWidth: number, bodyHeight: number,
    $second: JQuery<HTMLElement>, $timer: JQuery<HTMLElement>,
    bodyChanged: boolean, dateNow: Date,
    hour: number, minute: number, second: number,
    secondWidth: number, lastHour: number, lastMinute: number;

var $second = $("#second"),
    $timer = $("#timer");

function refresh() {
    var bodyWidth = innerWidth;
        bodyHeight = innerHeight,
        dateNow = new Date(),
        hour = dateNow.getHours(),
        minute = dateNow.getMinutes();
    if (innerWidth !== lastBodyWidth || bodyHeight !== lastBodyHeight) {
        var timerWidth = $timer.width() as number,
            timerHeight = $timer.height() as number,
            widthRatio = bodyWidth / timerWidth,
            heightRatio = bodyHeight / timerHeight,
            scale = Math.min(heightRatio, widthRatio),
            left: number, top: number;
        $timer.css("--scale", scale.toFixed(5));
        left = (bodyWidth - timerWidth) / 2;
        top = (bodyHeight - timerHeight) / 2;
        $timer.css("--top", top.toFixed(0));
        $timer.css("--left", left.toFixed(0));
        lastBodyWidth = bodyWidth;
        lastBodyHeight = bodyHeight;
    }
    second = dateNow.getSeconds() + dateNow.getMilliseconds() / 1000;
    $second.css("--w", (second / 60).toFixed(5));
    if (hour !== lastHour || minute !== lastMinute) {
        lastHour = hour;
        lastMinute = minute;
        $timer.text(`${sup0(hour, 2)}:${sup0(minute, 2)}`);
    }
}

refresh();
setInterval(refresh, 1000);