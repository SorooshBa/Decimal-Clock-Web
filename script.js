var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];



function clock() {
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
      //-------------
      totalSecond = (((h*60)+m)*60)+s;
      dSeconds = (100000 * totalSecond) / 86400;
      dHour= Math.floor(dSeconds/10000);
      dMinut=Math.floor((dSeconds%10000)/100);
      ddSecond=Math.floor( dSeconds%100);
      //-------------
      hDeg = (((dHour * 100) + dMinut) * 360) / 1000,
      mDeg = (360*dMinut)/100,
      sDeg = (360 * ddSecond) / 100,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = "Decimal Clock By Soroosh.B";
  dayEl.innerHTML = dHour+":"+dMinut+":"+ddSecond;
}

setInterval("clock()", 100);