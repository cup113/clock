/**
 * @brief 若位数不够，则在前面补0
 * @param num 数字
 * @param digits 位数
 */
function sup0(num, digits) {
    var str = num.toString();
    while (str.length < digits) {
        str = '0' + str;
    }
    return str;
}
var lastBodyWidth = 0, lastBodyHeight = 0, bodyWidth, bodyHeight, $second, $timer, bodyChanged, dateNow, hour, minute, second, secondWidth, lastHour, lastMinute;
function refresh() {
    $second = $("#second");
    $timer = $("#timer");
    bodyWidth = innerWidth;
    bodyHeight = innerHeight;
    bodyChanged = (bodyWidth !== lastBodyWidth) || (bodyHeight !== lastBodyHeight),
        dateNow = new Date(),
        hour = dateNow.getHours(),
        minute = dateNow.getMinutes();
    if (bodyChanged) {
        var timerWidth = $timer.width(), timerHeight = $timer.height(), widthRatio = bodyWidth / timerWidth, heightRatio = bodyHeight / timerHeight, scale = Math.min(heightRatio, widthRatio), left, top;
        $timer.css("--scale", scale.toFixed(5));
        left = (bodyWidth - $timer.width()) / 2;
        top = (bodyHeight - $timer.height()) / 2;
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
        $timer.text("".concat(sup0(hour, 2), ":").concat(sup0(minute, 2)));
    }
    setTimeout(refresh, 1000);
}
refresh();
