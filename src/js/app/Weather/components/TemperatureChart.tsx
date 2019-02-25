import * as React from 'react';
import { FunctionComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { IWeatherWeek } from '../types';

interface IProps {
  data?: IWeatherWeek;
}

const defaultData = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10
};

const TemperatureChart: FunctionComponent<IProps> = ({ data }) => {
  console.log(data);
  const chartData = {
    labels: data.list.map(day => new Date(day.dt * 1000).toDateString()),
    datasets: [
      Object.assign({}, defaultData, {
        label: 'Minimum Temperature',
        backgroundColor: 'rgba(174, 214, 241, .4)',
        borderColor: 'rgba(174, 214, 241, 1)',
        pointBorderColor: 'rgba(174, 214, 241, 1)',
        pointHoverBackgroundColor: 'rgba(174, 214, 241, 1)',
        data: data.list.map(day => day.main.temp_min)
      }),
      Object.assign({}, defaultData, {
        label: 'Temperature',
        backgroundColor: 'rgba(255, 195, 0, 0.4)',
        borderColor: 'rgba(255, 195, 0, 1)',
        pointBorderColor: 'rgba(255, 195, 0, 1)',
        pointHoverBackgroundColor: 'rgba(255, 195, 0, 1)',
        data: data.list.map(day => day.main.temp)
      }),
      Object.assign({}, defaultData, {
        label: 'Maximum Temperature',
        backgroundColor: 'rgba(199, 0, 57, .4)',
        borderColor: 'rgba(199, 0, 57, 1)',
        pointBorderColor: 'rgba(199, 0, 57, 1)',
        pointHoverBackgroundColor: 'rgba(199, 0, 57, 1)',
        data: data.list.map(day => day.main.temp_max)
      })
    ]
  };

  return (
    <>
      <h2 className="text-center">Temperature for next 7 days</h2>
      <div className="chart">
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </>
  );
};

export default TemperatureChart;
