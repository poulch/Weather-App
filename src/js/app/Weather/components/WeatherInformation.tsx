import * as React from 'react';
import { FunctionComponent } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { IWeatherContext } from '../context/WeatherContext';
import WeatherIcon from './WeatherIcon';

interface IProps
  extends Pick<IWeatherContext, 'currentWeather' | 'selectedCity'> {}

const WeatherInformation: FunctionComponent<IProps> = ({
  currentWeather,
  selectedCity
}) => {
  return (
    <>
      <Grid.Row>
        <Grid.Column as="h1" className="text-center">
          <WeatherIcon icon={currentWeather.weather[0].icon} />
          {selectedCity.name}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <h3>Humidity</h3>
              <p>{currentWeather.main.humidity} % </p>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <h3>Pressure</h3>
              <p>{currentWeather.main.pressure} hPa</p>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <h3>Temperature</h3>
              <p>{currentWeather.main.temp} &#8451;</p>
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width={4}>
          <Card>
            <Card.Content textAlign="center">
              <h3>Temperature</h3>
              <p>{currentWeather.wind.speed} m/s</p>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default WeatherInformation;
