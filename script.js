document.addEventListener('DOMContentLoaded', function() {
  let dailyIntakeWater = 2000;
  let cupsPerDay = 8;
  let drinkenCups = 0;
  const cup = 250;

  const dailyIntakeElement = document.getElementById('dailyIntake');
  const cupsPerDayElement = document.getElementById('cupsPerDay');
  const startReminderButton = document.getElementById('startReminder');
  const drinkenCupsButton = document.getElementById('drinkenCups');

  dailyIntakeElement.textContent = `${dailyIntakeWater} мл`;
  cupsPerDayElement.textContent = `${cupsPerDay} склянок`;
  drinkenCupsButton.textContent = `Випито: ${drinkenCups}`;

  let reminderInterval;

  function remindTimer() {
    alert('Випийте склянку води!');
  }

  startReminderButton.addEventListener('click', function() {
    reminderInterval = setInterval(remindTimer, 60 * 60 * 1000);
    alert('Нагадвання розпочато!');
  });

  drinkenCupsButton.addEventListener('click', function() {
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
  
      clearInterval(remindTimer);
  
      alert('Вітаю, ви упісяєтесь незабаром!:)');
    }
  });
});