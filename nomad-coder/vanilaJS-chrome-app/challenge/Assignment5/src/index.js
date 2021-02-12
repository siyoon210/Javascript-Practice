// import "./styles.css";

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const now = Date.now()
  const timestampGap = xmasDay - now;
  const remainingDays = Math.floor(timestampGap / (1000*60*60*24));
  const remainingHours = Math.floor((timestampGap - (remainingDays * (1000*60*60*24))) / (1000*60*60));
  const remainingMins = Math.floor((timestampGap - (remainingDays * (1000*60*60*24) + remainingHours * (1000*60*60))) / (1000*60)); 
  const remainingSeconds = Math.floor((timestampGap - (remainingDays * (1000*60*60*24) + remainingHours * (1000*60*60) + remainingMins * (1000*60))) / (1000)); 

  return {
      days: remainingDays,
      hours: remainingHours,
      mins: remainingMins,
      seconds: remainingSeconds
  }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}

function init() {
    const time = document.querySelector('h2');
    setInterval(() => {
        const remaining = getTime();
        time.innerText = `${formatTime(remaining.days)}d ${formatTime(remaining.hours)}h ${formatTime(remaining.mins)}m ${formatTime(remaining.seconds)}s`
    }, 1000);
}
init();
