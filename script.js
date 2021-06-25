
function datetime() {
  setInterval(datetime,1000);
  var date=new Date();
  document.getElementById('pp').innerHTML="Today time is:"+date.toLocaleString();
}
