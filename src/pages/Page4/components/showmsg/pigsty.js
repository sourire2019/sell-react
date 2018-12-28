import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
} from '@icedesign/form-binder';
import {
  Grid,
} from '@icedesign/base';


const { Row, Col } = Grid;


export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      pigfarm: '*******养殖场',
      pigstyid: '',
      column: '',
      ringNumber: '',
      person: '',
      time: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pigstyid: nextProps.value.pigstyId,
      column: nextProps.value.column,
      ringNumber: nextProps.value.ringNumber,
      person: nextProps.value.person,
      time: nextProps.value.time,
    });
  }
  render() {
    return (
      <div className="create-activity-form">
        <IceContainer style={styles.container}>
          <IceFormBinderWrapper >
            <div>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  猪场名称：
                </Col>
                <Col s="6" l="5">
                  {this.state.pigfarm}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  猪舍编号：
                </Col>
                <Col s="6" l="5">
                  {this.state.pigstyid}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  栋栏：
                </Col>
                <Col s="6" l="5">
                  {this.state.column}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  圈号：
                </Col>
                <Col s="6" l="5">
                  {this.state.ringNumber}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  负责人：
                </Col>
                <Col s="6" l="5">
                  {this.state.person}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  时间：
                </Col>
                <Col s="6" l="5">
                  {this.state.time}
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </IceContainer>
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
