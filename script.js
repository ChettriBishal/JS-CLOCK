function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // console.log(seconds);
    let pm = false;
    if(hour == 0)
        hour = 12;
    if(hour > 12){
        pm = true;
        hour -= 12;
    }
    /* display */
    hour = (hour < 10)? "0" + hour : hour;
    minutes = (minutes < 10)? "0" + minutes: minutes;
    seconds = (seconds < 10) ? "0" + seconds: seconds;

    let time = `${hour} : ${minutes} : ${seconds}`;
    time += (pm ? " PM": " AM");


    let area = document.querySelector(".clock");
    area.textContent = time;
    setTimeout(showTime,1000);
}

showTime();