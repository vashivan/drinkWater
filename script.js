document.addEventListener('DOMContentLoaded', function() {
  let dailyIntakeWater = 2000;
  let cupsPerDay = 8;
  let drinkenCups = 0;
  const cup = 250;

  const dailyIntakeElement = document.getElementById('dailyIntake');
  const cupsPerDayElement = document.getElementById('cupsPerDay');
  const startReminderButton = document.getElementById('startReminder');
  const drinkenCupsButton = document.getElementById('drinkenCups');
  const countdownTimerElement = document.getElementById('countdownTimer');

  dailyIntakeElement.textContent = `${dailyIntakeWater} мл`;
  cupsPerDayElement.textContent = `${cupsPerDay} склянок`;
  drinkenCupsButton.textContent = `Випито: ${drinkenCups}`;

  let reminderInterval;
  let countdownTimer;

  function remindTimer() {
    alert('Випийте склянку води!');
    startCountdown();
  }

  function startCountdown() {
    let secondsLeft = 60 * 60;
    countdownTimer = setInterval(function() {
      const min = Math.floor(secondsLeft / 60);
      const sec = secondsLeft % 60;

      countdownTimerElement.textContent = `Наступне нагадуваня через ${min} хв та ${sec} сек`;

      if (secondsLeft === 0) {
        clearInterval(countdownTimer);
        remindTimer();
      }

      secondsLeft--;
    }, 1000);
  }

  startReminderButton.addEventListener('click', function() {
    startCountdown();
    reminderInterval = setInterval(remindTimer, 60 * 60 * 1000);
    alert('Нагадвання розпочато!');
  });

  drinkenCupsButton.addEventListener('click', function() {
    clearInterval(reminderInterval);
    clearInterval(countdownTimer);
    startCountdown();
    drinkenCups++;
    dailyIntakeWater -= cup;
    cupsPerDay--;

    dailyIntakeElement.textContent = `${dailyIntakeWater} мл`;
    cupsPerDayElement.textContent = `${cupsPerDay} склянок`;
    drinkenCupsButton.textContent = `Випито: ${drinkenCups}`;

    if (cupsPerDay <= 0) {
      dailyIntakeWater = 2000;
      cupsPerDay = 8;
      drinkenCups = 0;
  
      dailyIntakeElement.textContent = `${dailyIntakeWater} мл`;
      cupsPerDayElement.textContent = `${cupsPerDay} склянок`;
      drinkenCupsButton.textContent = `Випито: ${drinkenCups}`;      
      countdownTimerElement.textContent = '';
  
      clearInterval(remindTimer);
      clearInterval(countdownTimer);
  
      alert('Вітаю, ви упісяєтесь незабаром!:)');
    }
  });
})