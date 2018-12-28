import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import 'font-awesome/css/font-awesome.min.css';
import FilterWithSearch from './components/FilterWithSearch';
import cookie from 'react-cookies';
import './Page4.scss';
import Pig from './components/showmsg/pig';
import Health from './components/showmsg/health';
import Pigsty from './components/showmsg/pigsty';
import Environmental from './components/showmsg/environmental';
import Operation from '../../api/api';
import src from './img/pig.png';

const { pigsty, showDetail, pigfarm, pigsensor, pigstysensor, showEnvironmentalMin, showHealthMin } = Operation;
const { Row, Col } = Grid;

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {
      id: cookie.load('id') == undefined ? ('') : (cookie.load('id')),
      data: undefined,
      pigdata: {},
      pigfarmdata: {},
      pigsensordata: {},
      pigstysensordata: {},
      pigstyId: '',
      showEnvironmentaldata: [],
      showHealthdata: [],
      pigstyheight: '100px',
      pigheight: '100px',
      healthheight: '100px',
      environmentalheight: '100px',
      healthtime:`${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
      environmentaltime: `${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
      pigstytime: '',
    };
    this.health = this.health.bind(this);
    this.environmental = this.environmental.bind(this);
    this.pigstyshow = this.pigstyshow.bind(this);
    this.pigshow = this.pigshow.bind(this);
  }
  componentWillMount = async () => {
    const athis = this;
    if (cookie.load('id') != undefined) {
      const pigresult = await showDetail(athis.state.id);
      const pigfarmresult = await pigfarm();
      const pigsensorreult = await pigsensor(athis.state.id);
      const pigstysensorresult = await pigstysensor(pigresult.pigstyId);
      const showEnvironmentalresult = await showEnvironmentalMin(pigresult.pigstyId);
      const result = await pigsty(pigresult.pigstyId);
      const showHealthresult = await showHealthMin(athis.state.id);
      athis.setState({
        data: result,
        pigstyId: pigresult.pigstyId,
        pigdata: pigresult,
        pigfarmdata: pigfarmresult,
        pigsensordata: pigsensorreult,
        pigstysensordata: pigstysensorresult,
        showEnvironmentaldata: showEnvironmentalresult,
        showHealthdata: showHealthresult,
        pigstytime: result.time,
      });
      if (showEnvironmentalresult.length > 0) {
        athis.setState({
          environmentaltime: showEnvironmentalresult[(showEnvironmentalresult.length - 1)].datetime,
        });
      } else {
        athis.setState({
          environmentaltime: `${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
        });
      }
      if (showHealthresult.length > 0) {
        athis.setState({
          healthtime: showHealthresult[(showHealthresult.length - 1)].datetime,
        });
      } else {
        athis.setState({
          healthtime: `${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
        });
      }
      setInterval(() => this.syncData(this.state.pigstyId), 10000);
      setInterval(() => this.syncHealthData(this.state.id), 10000);
    }
  }
  syncData = async (id) => {
    const athis = this;
    const result = await showEnvironmentalMin(id);
    if (result.length > 0) {
      athis.setState({
        environmentaltime: result[(result.length - 1)].datetime,
      });
    } else {
      athis.setState({
        environmentaltime: `${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
      });
    }
    this.setState({
      showEnvironmentaldata: result,
    });
  }
  syncHealthData = async (id) => {
    const athis = this;
    const showHealth = await showHealthMin(id);
    if (showHealth.length > 0) {
      athis.setState({
        healthtime: showHealth[(showHealth.length - 1)].datetime,
      });
    } else {
      athis.setState({
        healthtime: `${new Date().toLocaleDateString().replace(/\//g, '-')} ${new Date().toTimeString().substr(0, 8)}`,
      });
    }
    this.setState({
      showHealthdata: showHealth,
    });
  }
  // 将时间戳转换为时间
  getLocalTime=(nS) => {
    return (`${new Date(parseInt(nS)).toLocaleDateString().replace(/\//g, '-')} ${new Date(parseInt(nS)).toTimeString().substr(0, 8)}`);
  }

  health = () => {
    const athis = this;
    if (this.state.healthheight != '') {
      athis.setState({
        healthheight: '',
      });
    } else {
      athis.setState({
        healthheight: '100px',
      });
    }
  }
  environmental = () => {
    const athis = this;
    if (this.state.environmentalheight != '') {
      athis.setState({
        environmentalheight: '',
      });
    } else {
      athis.setState({
        environmentalheight: '100px',
      });
    }
  }
  pigstyshow = () => {
    const athis = this;
    if (this.state.pigstyheight != '') {
      athis.setState({
        pigstyheight: '',
      });
    } else {
      athis.setState({
        pigstyheight: '100px',
      });
    }
  }
  pigshow = () => {
    const athis = this;
    if (this.state.pigheight != '') {
      athis.setState({
        pigheight: '',
      });
    } else {
      athis.setState({
        pigheight: '100px',
      });
    }
  }
  render() {
    if (cookie.load('id') == undefined) {
      return (
        <div>
          <FilterWithSearch />
          <span>请输入要查询的链码</span>
        </div>
      );
    }
    // noinspection JSAnnotator
    return (
      <div className="page4-page">
        <FilterWithSearch />
        <Row>
          <Col xxs="8" s="8" l="8">
            <Col className="ibox float-e-margins " xxs="24" s="24" l="24">
              <div className="ibox-title">
                <img
                  src={src}
                  style={{ float: 'left' }}
                  alt="pig"
                />
                <h5>身份证</h5>
              </div>
            </Col>
            <Row>
              <Col xxs="8" s="8" l="8" style={{ marginRight: '3%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>链码</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.erc721ID}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="8" s="8" l="8" style={{ marginRight: '3%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>耳号</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.earId}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>品种</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.breed}</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>猪舍号</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins" >{this.state.pigdata.pigstyId}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>栋栏</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.column}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>圈号</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.ringNumber}</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xxs="8" s="8" l="8" style={{ marginRight: '3%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>出生日期</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins" >{this.getLocalTime(this.state.pigdata.earId)}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>备注</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">{this.state.pigdata.remarks == '' ? ('无') : (this.state.pigdata.remarks)}</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>饲养员</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">张三</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Col className="ibox float-e-margins " xxs="24" s="24" l="24">
              <div className="ibox-title">
                <h5>养殖场信息</h5>
              </div>
              <Col className="ibox-content">
                <p><i className="fa fa-star" /> 养殖场名称：
                  <a>{this.state.pigfarmdata.name}</a>
                </p>
                <p><i className="fa fa-home" /> 养殖场地址：
                  <a >{this.state.pigfarmdata.address}</a>
                </p>
                <p><i className="fa fa-font" /> 养殖场ID：
                  <a className="">{this.state.pigfarmdata.pigfarmId}</a>
                </p>
                <p><i className="fa fa-user" /> 饲养员ID：
                  <a className="">{this.state.pigfarmdata.personId}</a>
                </p>
              </Col>
            </Col>
          </Col>
          <Col xxs="16" s="16" l="16">
            <Timeline style={{ margin: '0 auto', float: 'right' }}>
              <TimelineEvent
                key="1"
                title={`${this.state.pigstytime} 创建猪舍`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%', height: this.state.pigstyheight, overflow: 'hidden' }}
                cardHeaderStyle={{
                           backgroundColor: '#6283D0',
                           fontSize: '11pt',
                         }}
              >
                <i className="fa fa-chevron-down" onClick={this.pigstyshow} style={{ position: 'absolute', right: '10px' }} />
                <Pigsty value={this.state.data} />
              </TimelineEvent>
              <TimelineEvent
                key="2"
                title={`${this.state.pigstysensordata.time} 初始化猪舍传感器`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%' }}
                cardHeaderStyle={{
                           backgroundColor: '#6283D0',
                           fontSize: '11pt',
                         }}
                contentStyle={{
                           backgroundColor: 'transparent',
                         }}
              >
                <Row style={styles.formItem}>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    编号：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigstysensordata.id}
                  </Col>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    类型：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigstysensordata.type}
                  </Col>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    时间：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigstysensordata.time}
                  </Col>
                </Row>
              </TimelineEvent>
              <TimelineEvent
                key="3"
                title={`${this.getLocalTime(this.state.pigdata.earId)} 添加公猪`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%', height: this.state.pigheight, overflow: 'hidden' }}
                cardHeaderStyle={{
                           backgroundColor: '#6283D0',
                           fontSize: '11pt',
                         }}
                contentStyle={{
                           backgroundColor: 'transparent',
                         }}
              >
                <i className="fa fa-chevron-down" onClick={this.pigshow} style={{ position: 'absolute', right: '10px' }} />
                <Pig value={this.state.pigdata} />
              </TimelineEvent>
              <TimelineEvent
                key="4"
                title={`${this.state.pigsensordata.time} 初始化公猪传感器`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%' }}
                cardHeaderStyle={{
                           backgroundColor: '#6283D0',
                           fontSize: '11pt',
                         }}
                contentStyle={{
                           backgroundColor: 'transparent',
                         }}
              >
                <Row style={styles.formItem}>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    编号：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigsensordata.id}
                  </Col>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    类型：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigsensordata.type}
                  </Col>
                  <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                    时间：
                  </Col>
                  <Col s="6" l="5">
                    {this.state.pigsensordata.time}
                  </Col>
                </Row>
              </TimelineEvent>
              <TimelineEvent
                key="5"
                title={`${this.state.healthtime} 健康信息`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%', height: this.state.healthheight, overflow: 'hidden' }}
                cardHeaderStyle={{
                           backgroundColor: '#6283D0',
                           fontSize: '11pt',
                         }}
                contentStyle={{
                           backgroundColor: 'transparent',
                         }}
              >
                <i className="fa fa-chevron-down" onClick={this.health} style={{ position: 'absolute', right: '10px' }} >最近5分钟健康信息</i>
                <Health data={this.state.showHealthdata} />
              </TimelineEvent>
              <TimelineEvent
                key="6"
                title={`${this.state.environmentaltime} 环境信息`}
                icon={<i className="fa fa-briefcase" />}
                iconColor="#0D3799"
                container="card"
                className="timeline-event"
                titleStyle={{ fontWeight: '400' }}
                style={{ width: '80%', height: this.state.environmentalheight, overflow: 'hidden' }}
                cardHeaderStyle={{
                  backgroundColor: '#6283D0',
                  fontSize: '11pt',
                }}
                contentStyle={{
                  backgroundColor: 'transparent',
                }}
              >
                <i className="fa fa-chevron-down" onClick={this.environmental} style={{ position: 'absolute', right: '10px' }} >最近5分钟环境信息</i>
                <Environmental data={this.state.showEnvironmentaldata} />
              </TimelineEvent>
            </Timeline>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
};
