function renderTime() {
  var currentTime =  new Date();
  var diem = "AM";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  
   if (h == 0) {
       h = 12
       } else if(h > 12) {
                 h = h - 12;
         diem = "PM";
                 }
  if (h < 10) {
      h = " " + h;
      }
  if (m < 10) {
      m = "0" + m;
      }
  
  var myClock =   document.getElementById('clockDisplay');
myClock.textContent = h + ":" + m + " " + diem; //firefox
  myClock.innerText = h + ":" + m + " " + diem;//IE
setTimeout('renderTime()', 1000);
  
}

renderTime();