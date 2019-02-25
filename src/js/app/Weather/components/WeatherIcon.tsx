import * as React from 'react';
import { FunctionComponent } from 'react';

interface IProps {
  icon: string;
}

const WeatherIcon: FunctionComponent<IProps> = ({ icon }) => {
  return <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />;
};

export default WeatherIcon;
