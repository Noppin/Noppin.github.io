
const countdown = document.querySelectorAll(".countdown h2");
const now = new Date();
const year = now.getFullYear();
let newYear = new Date(year, 0, 1);

function remainingTime(){

if(now > newYear){
  newYear = new Date(year +1, 0, 1);
}
else if(year === newYear.getFullYear() +1){
  newYear = new Date(year, 0, 1);
}
const eventDate = newYear.getTime();
const currentDate = new Date().getTime();
    
const t = eventDate - currentDate;
 // values in ms
 const oneDay = 24*60*60*1000;
 const oneHour = 60*60*1000;
 const oneMinutes = 60*1000;

const days = Math.floor(t/oneDay);
const hours = Math.floor((t%oneDay)/oneHour);
const minutes = Math.floor((t%oneHour)/oneMinutes);
const seconds = Math.floor((t%oneMinutes)/1000);

    function twoDigits(x){
        if(x < 10){
            return `0${x}`;
        }
        return x;
    }
const arr = [days, hours, minutes, seconds];
 countdown.forEach((x, index)=>{
    x.textContent = twoDigits(arr[index]);

 });
}

let interval = setInterval(remainingTime, 1000);
remainingTime();

