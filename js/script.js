const deadline = '2021-03-8';

function getTimeRemaining(endtime){
    
    let now = new Date();
    const t = Math.floor((Date.parse(deadline)-Date.parse(now))/(1000*60*60*24)),
          days = Math.floor((Date.parse(deadline)-Date.parse(now))/(1000*60*60*24)),
          hours = Math.floor((Date.parse(deadline)-Date.parse(now))/(1000*60*60)%24),
          minutes = Math.floor((Date.parse(deadline)-Date.parse(now))/(1000*60)%60),
          seconds =Math.floor((Date.parse(deadline)-Date.parse(now))/(1000)%60);
    return {
        total:t,
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
}
function setTimer(selector,endtime){
    let timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        interval = setInterval(updateClock,1000);
        updateClock();
    function plusZero(num){
        if(num >= 0 && num < 10){
            return num.innerHTML = `0${num}`;
        }else{
            return num;
        }
    }
    
    function updateClock(){
        const t = getTimeRemaining(endtime);
            days.innerHTML = plusZero(t.days);
            hours.innerHTML = plusZero(t.hours);
            minutes.innerHTML = plusZero(t.minutes);
            seconds.innerHTML = plusZero(t.seconds);
            if(t.total<= 0){
                clearInterval(interval);
            }
    }
}

setTimer('#timer',deadline);