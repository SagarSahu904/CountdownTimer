window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick=reset;
    let endtime,interval;


function calculate(){
    
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value ;
    
    const stop = document.querySelector('#stop')

    endtime = new Date(date + "  " + time);

    interval =setInterval(() => calculateTime(endtime), 1000);
    
}

function calculateTime(endtime){
    const currenttime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endtime > currenttime){
        const timeleft =(endtime - currenttime) / 1000;

        
        days.innerText = Math.floor(timeleft /(24 *60 *60));
        hours.innerText = Math.floor((timeleft /(60 *60)) %24);
        minutes.innerText = Math.floor((timeleft /60) % 60);
        seconds.innerText = Math.floor(timeleft % 60);

    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;

    }
}

document.querySelector('stop').onclick = () => {
    clearInterval(interval);

};

    function reset() {
         document.querySelector('countdown-days').innerText = 0;
         document.querySelector('countdown-hours').innerText = 0;
         document.querySelector('countdown-minutes').innerText = 0;
         document.querySelector('countdown-seconds').innerText = 0;
         document.querySelector('#date').value = '';
         document.querySelector('#time').value = '';
    }

    
}