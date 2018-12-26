// import { get, post } from './request.js';

// mock
// 猪场环境信息
const showEnvironmentalMin = (id) => {
  const result = [
    {
      temperature: '25.4',
      humidity: '28.3',
      datetime: '2018-12-21 11:09:06',
      co2: '400',
    },
    {
      temperature: '26.2',
      humidity: '27.8',
      datetime: '2018-12-21 11:09:37',
      co2: '400',
    },
  ];
  return result;
};

// 健康信息
const showHealthMin = (id) => {
  const result = [
    {
      temperature: '27.6',
      datetime: '2018-12-19 19:34:00',
    },
    {
      temperature: '27.7',
      datetime: '2018-12-19 19:34:31',
    },
  ];
  return result;
};

// 猪舍详情
const pigsty = (id) => {
  const result = {
    pigfarm: '***养殖场',
    pigstyid: 123,
    column: 456,
    ringNumber: 789,
    person: '张三',
  };
  return result;
};
export default {
  showHealthMin,
  showEnvironmentalMin,
  pigsty,
};
