function sup0(num, dig){
    let str = num.toString();
    while (str.length < dig){
        str = "0" + str
    }
    return str;
}
onload = main;
var lastWH = [0, 0];
function main(){
    var second = document.getElementById("second"),
    timer = document.getElementById("timer"),
    bodyWidth = innerWidth,
    bodyHeight = innerHeight,
    thisWH = [bodyWidth, bodyHeight],
    changedWH = ((thisWH[0] !== lastWH[0]) || (thisWH[1] !== lastWH[1]));
    lastWH = thisWH.slice(0);
    var round = (x, y) => Math.round(x*10**y)/10**y,
    nowDate = new Date(),
    hour = sup0(nowDate.getHours(), 2),
    minute = sup0(nowDate.getMinutes(), 2),
    seconds = nowDate.getSeconds() + nowDate.getMilliseconds() / 1000,
    secondPercent = round(seconds / 60 * 100, 2),
    timeString = `${hour} : ${minute}`;
    second.style.width = `${secondPercent}%`;
    timer.innerText = timeString;
    timerWidth = timer.offsetWidth;
    timerHeight = timer.offsetHeight;
    if (changedWH){
        var widthRatio = bodyWidth / timerWidth,
        heightRatio = bodyHeight / timerHeight,
        scale, left, top;
        if (widthRatio > heightRatio){
            // 对齐高度
            scale = round(heightRatio * 0.99, 5);
        }
        else{
            // 对齐宽度
            scale = round(widthRatio * 0.99, 5);
        }
        timer.style.transform = `scale(${scale})`;
        left = round((bodyWidth - timer.offsetWidth) / 2, 1);
        top = round((bodyHeight - timer.offsetHeight) / 2, 1);
        timer.style.top = `${top}px`;
        timer.style.left = `${left}px`;
    }
    setTimeout(main, 1000);
}