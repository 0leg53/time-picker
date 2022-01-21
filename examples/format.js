import '../assets/index.less';
import React from 'react';
import dayjs from '../src/dayjs';
import TimePicker from '..';

const App = () => (
  <>
    <TimePicker defaultValue={dayjs()} showHour={false} />
    <TimePicker defaultValue={dayjs()} showMinute={false} />
    <TimePicker defaultValue={dayjs()} showSecond={false} />

    <TimePicker defaultValue={dayjs()} showMinute={false} showSecond={false} />
    <TimePicker defaultValue={dayjs()} showHour={false} showSecond={false} />
    <TimePicker defaultValue={dayjs()} showHour={false} showMinute={false} />
  </>
);

export default App;
