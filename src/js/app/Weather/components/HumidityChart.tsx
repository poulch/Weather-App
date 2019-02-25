import * as React from 'react';
import { FunctionComponent } from 'react';
import { Bar } from 'react-chartjs-2';
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

const HumidityChart: FunctionComponent<IProps> = ({ data }) => {
  const chartData = {
    labels: data.list.map(day => new Date(day.dt * 1000).toDateString()),
    datasets: [
      Object.assign({}, defaultData, {
        label: 'Humidity',
        backgroundColor: 'rgba(41, 128, 185, .4)',
        borderColor: 'rgba(41, 128, 185, 1)',
        pointBorderColor: 'rgba(41, 128, 185, 1)',
        pointHoverBackgroundColor: 'rgba(41, 128, 185, 1)',
        data: data.list.map(day => day.humidity)
      })
    ]
  };

  return (
    <>
      <h2 className="text-center">Humidity for next 7 days</h2>
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </>
  );
};

export default HumidityChart;
