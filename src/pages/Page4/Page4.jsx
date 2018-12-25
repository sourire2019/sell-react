import React, { Component } from 'react';
import FilterWithSearch from './components/FilterWithSearch';
import 'font-awesome/css/font-awesome.min.css';
import { Grid } from '@icedesign/base';
import { Timeline, TimelineEvent } from 'react-event-timeline';

const { Row, Col } = Grid;

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {
      show: 'aaaaa',
    };
    this.health = this.health.bind(this);
    this.environmental = this.environmental.bind(this);
  }
  health = () => {
    this.setState({
      show: 'health',
    });
  }
  environmental = () => {
    this.setState({
      show: 'environmental',
    });
  }
  render() {
    return (
      <div className="page4-page">
        <FilterWithSearch />
        <Row>
          <Col xxs="6" s="6" l="6">
            <Timeline style={{ margin: '0 auto' }}>
              <TimelineEvent
                key="1"
                title="创建猪舍"
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
              >
                <span>猪舍~</span>
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
                <span>时间</span>
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
                <span>猪信息~</span>
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
                <span>时间~</span>
              </TimelineEvent>
              <TimelineEvent
                key="5"
                title="采集最近5分钟信息"
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
                <br />
                <a onClick={this.environmental}>环境信息</a>
              </TimelineEvent>
            </Timeline>
          </Col>
          <Col xxs="18" s="18" l="18">
            {this.state.show}
          </Col>
        </Row>
        {/* <SimpleTimeline /> */}

      </div>
    );
  }
}
