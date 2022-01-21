import '../assets/index.less';
import React from 'react';
import dayjs from 'dayjs';
import TimePicker from '..';

const App = () => (
  <TimePicker
    defaultValue={dayjs().second(0)}
    onChange={(value) => console.log(value)}
    showSecond={false}
    minuteStep={15}
  />
);

export default App;
