import { get, post } from './request.js';

// 猪详情
const showDetail = (id) => {
  return get(`http://172.16.1.170:8080/getPigInfo/${id}`);
};

// 健康信息
// const showHealthMin = (id) => {
//   return get(`http://172.16.1.170:8080/getPigHealthInfo/${id}`).then((resp) => {
//     return resp;
//   });
// };
// 环境信息
// const showEnvironmentalMin = (id) => {
//   return get(`http://172.16.1.170:8080/getPigHouseEnv/${id}`)
//     .then((resp) => {
//       return resp;
//     });
// };
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
    pigstyId: '5664',
    column: '01',
    ringNumber: '01',
    person: 'adfasf',
    time: '2018-12-27 16:03:46',
  };
  return result;
};
//
// const showDetail = (id) => {
//   const result = {
//     earId: 1234567890123,
//     breed: 456,
//     column: 1,
//     ringNumber: 2,
//     matingWeek: 4,
//     remarks: 6734,
//     status: '正常',
//     pigstyId: 1000,
//     person: '张三',
//   };
//   return result;
// };

// 养殖场信息
const pigfarm = () => {
  const result = {
    name: '北京世纪诚链养殖场',
    address: '北京市海淀区',
    pigfarmId: 1,
    personId: 2,
  };
  return result;
};
// pig传感器
const pigsensor = (id) => {
  const result = {
    id: '123456',
    type: '树莓派',
    time: '2018-12-27 15:10:44',
    ERC721ID: '1234567890',
  };
  return result;
};
const pigstysensor = (id) => {
  const result = {
    id: '123456',
    type: '树莓派',
    time: '2018-12-27 15:10:44',
    ERC721ID: '1234567890',
  };
  return result;
};
export default {
  showHealthMin,
  showEnvironmentalMin,
  pigsty,
  showDetail,
  pigfarm,
  pigsensor,
  pigstysensor,
};
