// counter down

class CounterDown {
  second = 1000; //ms
  minute = this.second * 60;
  hour = 60 * this.minute;
  day = 24 * this.hour;

  counterDownInteval = null;
  today = new Date().getTime();
  customDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 7,
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds()
  ).getTime();
  distance = this.customDate - this.today;

  start = (count) => {
    let distance = count;
    this.counterDownInteval = setInterval(() => {
      if (distance < 2000) {
        clearInterval(counterDownInteval);
        localStorage.setItem("distance", 0);
      }
      distance -= 1000;
      localStorage.setItem("distance", distance); //update

      let days = Math.floor(distance / this.day);

      let hours = Math.floor((distance % this.day) / this.hour);
      let minutes = Math.floor((distance % this.hour) / this.minute);
      let seconds = Math.floor((distance % this.minute) / this.second);
      let n = [days, hours, minutes, seconds].map((item) => {
        if (item < 10) {
          return `0${item}`;
        }
        return `${item}`;
      });

      [days, hours, minutes, seconds] = n;
      document.querySelector("#days").innerHTML = days;
      document.querySelector("#hours").innerHTML = hours;
      document.querySelector("#minutes").innerHTML = minutes;
      document.querySelector("#seconds").innerHTML = seconds;
    }, 1000);
  };
}

export default CounterDown;
