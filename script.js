function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let area = document.querySelector(".#clockDisplay");
    let pm = false;
    if(hour >= 12){
        pm = true;
        hour -= 12;
    }
    let display = `${hour} ${minutes} ${seconds}`;
    display += (pm ? " PM": " AM");
    area.innerHTML = display;
    setTimeout(showTime,1000);
}

showTime();