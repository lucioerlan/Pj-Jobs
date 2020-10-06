import React, { useState } from 'react';

export default () => {
  const [time, setTime] = useState(' ');

  function tick() {
    let currentTime = new Date();

    let hours = (currentTime.getHours() + 24) % 24 || 12;

    let formatTime =
      hours +
      ':' +
      addZero(currentTime.getMinutes()) +
      ':' +
      addZero(currentTime.getSeconds());
    setTime(formatTime);
  }

  function addZero(t) {
    if (t < 10) {
      t = '0' + t;
    }
    return t;
  }
  setInterval(tick, 1000);

  return (
    <div>
      <span className="time"> {time}</span>
    </div>
  );
};
