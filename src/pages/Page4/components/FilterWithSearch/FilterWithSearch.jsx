import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid } from '@icedesign/base';
import './FilterWithSearch.scss';

const { Row, Col } = Grid;

export default class FilterWithSearch extends Component {
  static displayName = 'FilterWithSearch';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleSearch = (e) => {
    console.log(e);
    this.setState({
      key: e.key,
    });
  };

  render() {
    return (
      <div className="filter-with-search" style={styles.filterWithSearch}>
        <IceContainer
          className="filter-with-search-container"
          style={styles.filterWithSearchContainer}
        >
          <Row wrap justify="space-between" style={styles.row}>
            <Col xxs={24} s={8} style={styles.filterContainer}>
              <span
                className="filter-item selected"
                style={styles.filterItem}
              >
                耳号/链码：{this.state.key}
              </span>
            </Col>
            <Col xxs={24} s={16} style={styles.searchWrapper}>
              <Search
                inputWidth={250}
                searchText=""
                size="large"
                placeholder="请输入耳号或链码"
                onSearch={this.handleSearch}
                style={{ display: 'inline-block' }}
              />
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  row: {
    alignItems: 'center',
  },
  filterContainer: {
    lineHeight: '32px',
  },
  filterItem: {
    height: '20px',
    padding: '0 20px',
    color: '#333',
    fontSize: '14px',
    cursor: 'pointer',
    borderRight: '1px solid #D8D8D8',
  },
  searchWrapper: {
    textAlign: 'right',
    margin: '10px 0',
  },
};
