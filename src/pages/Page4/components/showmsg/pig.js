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
      earId: '',
      breed: '',
      column: '',
      ringNumber: '',
      matingWeek: '',
      remarks: '',
      status: '正常',
      pigstyId: '',
      person: '张三',
      erc721Id: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      erc721Id : nextProps.value.erc721ID,
      earId: nextProps.value.earId,
      breed: nextProps.value.breed,
      column: nextProps.value.column,
      ringNumber: nextProps.value.ringNumber,
      matingWeek: nextProps.value.matingWeek,
      remarks: nextProps.value.remarks,
      pigstyId: nextProps.value.pigstyId,
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
                  链码：
                </Col>
                <Col s="6" l="5">
                  {this.state.erc721Id}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  耳号：
                </Col>
                <Col s="6" l="5">
                  {this.state.earId}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  品种：
                </Col>
                <Col s="6" l="5">
                  {this.state.breed}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  饲养员：
                </Col>
                <Col s="6" l="5">
                  {this.state.person}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  圈号：
                </Col>
                <Col s="6" l="5">
                  {this.state.ringNumber}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  本周配种：
                </Col>
                <Col s="6" l="5">
                  {this.state.matingWeek}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  目前状态：
                </Col>
                <Col s="6" l="5">
                  {this.state.status}
                </Col>
                <Col xxs="6" s="2" l="3" style={styles.formLabel}>
                  猪舍：
                </Col>
                <Col s="6" l="5">
                  {this.state.pigstyId}
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
                  备注：
                </Col>
                <Col s="6" l="5">
                  {this.state.remarks == ''? ('无') : (this.state.remarks)}
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
