const Days = document.getElementById("days-js");
const Hours = document.getElementById("hours-js");
const Mins = document.getElementById("mins-js");
const Secs = document.getElementById("secs-js");


// UpdateCountDown Function
const updateCountDown = (deadline) => {
    const currentTime = new Date(); // accesing currentTime
    const timeDifferece = deadline - currentTime; // calc time difference
    
    // converting miliseconds to seconds, miliseconds to minutes, miliseconds to hours, miliseconds to days
    const remainingSeconds = Math.floor((timeDifferece / 1000) % 60);
    const remainingMinutes = Math.floor((timeDifferece / 1000 / 60) % 60);
    const remainingHours = Math.floor((timeDifferece / 1000 / 60 / 60) % 24);
    const remainingDays = Math.floor((timeDifferece / 1000 / 60 / 60 / 24));

    // format time function to make time in two digits even if time is less than 10
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    }

    // dsiplaying results in Website
    Days.textContent = formatTime(remainingDays);
    Hours.textContent = formatTime(remainingHours);
    Mins.textContent = formatTime(remainingMinutes);
    Secs.textContent = formatTime(remainingSeconds);
};

// countDown Function
const countDown = (targetDate) => {
    setInterval( () => { updateCountDown(targetDate) }, 1000);  //updateCountDown function in each sec
};

// Giving Target Date
const targetDate = new Date("October 05 2024");

// calling CountDown function
countDown(targetDate);