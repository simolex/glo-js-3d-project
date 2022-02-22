const timer = (deadLine, hasDays = false) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const dateStop = new Date(deadLine).getTime();
  let timerHandle;

  const leadingZero = (num) => (num < 10 ? "0" + num : "" + num);

  const getTimeRemaining = () => {
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor(timeRemaining / 3600);
    hours = hasDays ? hours % 24 : hours;
    const minutes = Math.floor(timeRemaining / 60) % 60;
    const seconds = Math.floor(timeRemaining) % 60;
    return {
      timeRemaining,
      days: leadingZero(days),
      hours: leadingZero(hours),
      minutes: leadingZero(minutes),
      seconds: leadingZero(seconds),
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.timeRemaining <= 0) {
      clearInterval(timerHandle);
    } else {
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    }
  };

  timerHandle = setInterval(updateClock, 1000);
};

export default timer;
