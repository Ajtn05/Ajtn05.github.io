// Show Time
function showTime() {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds(),
      day = today.getUTCDate(),
      month = today.getUTCMonth(),
      year = today.getFullYear();
  
    switch (month) {
      case 1:
         month = 'Jan';
         break;
      case 2:
         month = 'Feb';
         break;
      case 3:
         month = 'Mar';
         break;
      case 4:
         month = 'Apr';
         break;
      case 5:
         month = 'May';
         break;
      case 6:
         month = 'Jun';
         break;
      case 7:
         month = 'Jul';
         break;
      case 8:
         month = 'Aug';
         break;
      case 9:
         month = 'Sep';
         break;
      case 10:
         month = 'Oct';
         break;
      case 11:
         month = 'Nov';
         break;
      case 12:
         month = 'Dec';
         break;
    }
    // Output Time
    document.getElementById('time').innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    document.getElementById('date').innerHTML = `${month}<span> </span>${day}<span>, </span>${year}`;
  
    setTimeout(showTime, 1000);
  }
  
  // Add Zeros
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }
      
  function haha() {
    document.getElementById('pic').src='haha.png';
  }
  function hover() {
    document.getElementById('pic').src='jean.png';
  }

  function out() {
   document.getElementById('pic').src='jeangif.gif' ;
  }

  function change(){
   let n = Math.floor((Math.random() * 4) + 1);
   document.getElementById('music').src= `${n}.webm`;
   document.getElementById('music').play()
   document.getElementById('music').addEventListener('ended', function change2(){
      let m = Math.floor((Math.random() * 4) + 1);
      document.getElementById('music').src= `${m}.webm`;
      document.getElementById('music').play()
   });
  }


  //document.getElementById('music').src= `${i}.webm`;
  //document.getElementById('music').play();
  // Run
  change();
  showTime();

 
  
  
  
  
