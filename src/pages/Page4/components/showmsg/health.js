import React from 'react';

const ReactHighcharts = require('react-highcharts');

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
    });
  }

  render() {
    const datetime = [],
      temperature = [];
    const data = this.state.data;
    for (let i = 0; i < this.state.data.length; i++) {
      datetime.push(data[i].datetime);
      temperature.push(parseFloat(data[i].temperature));
    }
    const config = {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: '时间',
        },
        categories: datetime,
      },
      yAxis: [
        {
          title: {
            text: '体温',
          },
        },
      ],
      series: [
        {
          name: '体温',
          type: 'spline',
          pointStart: 0,
          color: '#f29b70',
          zIndex: 3,
          data: temperature,
        },
      ],
    };

    return (
      <div>
        <div style={{ marginBottom: '20px', overflow: 'hidden' }} />
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default LineChart;
