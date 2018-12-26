import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Balloon, Icon } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';
import IceImg from '@icedesign/img';
import Logo from '../Logo';
import './Header.scss';

@withRouter
export default class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark />
        </div>
      </div>
    );
  }
}
