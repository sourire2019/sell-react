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

const { pigsty } = Operation;
const { Row, Col } = Grid;

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {
      show: '',
      id: cookie.load('id') == undefined ? ('') : (cookie.load('id')),
      pigstytime: '2018-12-26 12:48:34',
      pigtime: '2018-12-26 12:58:21',
      time: '2017-12-1 12:12:12',
      data: undefined,
      pigstyId: '',
      pigstyheight: '100px',
    };
    this.health = this.health.bind(this);
    this.environmental = this.environmental.bind(this);
    this.pigsty = this.pigsty.bind(this);
    this.pigstyshow = this.pigstyshow.bind(this);
  }
  componentWillMount = async () => {
    const athis = this;
    if (cookie.load('id') != undefined) {
      const result = await pigsty(this.state.id);
      athis.setState({
        data: result,
        pigstyId: result.pigstyid,
      });
    }
  }
  health = () => {
    this.setState({
      show: <Health id={this.state.id} />,
    });
  }
  environmental = () => {
    this.setState({
      show: <Environmental pigstyId={this.state.pigstyId} />,
    });
  }
  pigsty = () => {
    this.setState({
      show: <Pigsty value={this.state.data} />,
    });
  }
  pigstyshow = () => {
    this.setState({
      pigstyheight: '',
    });
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
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>链码</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">123</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>耳号</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">457</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>品种</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">789</h4>
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
                    <h4 className="no-margins">25</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>栋栏</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">1234</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>圈号</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">789</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>出生日期</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">25-732-93</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7" style={{ marginRight: '5%' }}>
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>备注</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">无</h4>
                  </div>
                </div>
              </Col>
              <Col xxs="7" s="7" l="7">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>饲养员</h5>
                  </div>
                  <div className="ibox-content">
                    <h4 className="no-margins">789</h4>
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
                  <a>dsc</a>
                </p>
                <p><i className="fa fa-home" /> 养殖场地址：
                  <a >很多公司从</a>
                </p>
                <p><i className="fa fa-font" /> 养殖场ID：
                  <a className="">效果不好的元素额哎</a>
                </p>
                <p><i className="fa fa-user" /> 饲养员ID：
                  <a className="">37</a>
                </p>
              </Col>
            </Col>
          </Col>
          <Col xxs="16" s="16" l="16">
            <Timeline style={{ margin: '0 auto', float: 'right' }}>
              <TimelineEvent
                key="1"
                title="创建猪舍"
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
                <i className="fa fa-chevron-down" onClick={this.pigstyshow} />
                <Pigsty value={this.state.data} />
              </TimelineEvent>
              <TimelineEvent
                key="2"
                title="初始化传感器"
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
                <span>时间:{this.state.pigstytime}</span>
              </TimelineEvent>
              <TimelineEvent
                key="3"
                title="添加公猪"
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
                <Pig />
              </TimelineEvent>
              <TimelineEvent
                key="4"
                title="初始化传感器"
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
                <span>时间: {this.state.pigtime}</span>
              </TimelineEvent>
              <TimelineEvent
                key="5"
                title="健康信息"
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
                <a onClick={this.health}>健康信息</a>
              </TimelineEvent>
              <TimelineEvent
                key="6"
                title="环境信息"
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
                <a>环境信息</a>
              </TimelineEvent>
            </Timeline>
          </Col>
        </Row>
      </div>
    );
  }
}
