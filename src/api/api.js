import cookie from 'react-cookies';
import { get, post } from './request.js';

// 猪详情
const showDetail = (id) => {
  return get(`http://172.16.1.170:8080/getPigInfo/${id}`).then((resp)=>{
    if (resp == null){
      cookie.remove("id");
      window.location.reload()
    } else {
      return resp;
    }
  });
};

// 健康信息
const showHealthMin = (id) => {
  return get(`http://172.16.1.170:8080/getPigHealthInfo/${id}`).then((resp) => {
    return resp;
  });
};
// 环境信息
const showEnvironmentalMin = (id) => {
  return get(`http://172.16.1.170:8080/getPigHouseEnv/${id}`)
    .then((resp) => {
      return resp;
    });
};

//猪传感器
const pigsensor = (id) => {
  return get(`http://172.16.1.170:8080/getPigSensorByERC721/${id}`)
    .then((resp) => {
      return resp;
    });
}

//猪舍传感器
const pigstysensor = (id) => {
  return get(`http://172.16.1.170:8080/getPigHouseSensorBypighouseID/${id}`)
    .then((resp) => {
      return resp;
    });
};

// 猪舍详情
const pigsty = (id) => {
  return get(`http://172.16.1.170:8080/getPigHouseInfoByERC721/${id}`)
    .then((resp) => {
      return resp;
    });
};

// mock




// 养殖场信息
const pigfarm = () => {
  const result = {
    name: '*****养殖场',
    address: '北京市海淀区',
    pigfarmId: 1,
    personId: 2,
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
