import * as React from 'react';
import { FunctionComponent } from 'react';
import { compose } from 'recompose';
import SelectCity from '../components/SelectCity';
import WeatherInformation from '../components/WeatherInformation';
import { IWeatherContext } from '../context/WeatherContext';
import { withWeatherContextProvider } from '../hoc/withWeatherContextProvider';
import { withWeatherContextConsumer } from '../hoc/withWeatherContextConsumer';
import { Grid, Loader, Segment } from 'semantic-ui-react';
import HumidityChart from '../components/HumidityChart';
import TemperatureChart from '../components/TemperatureChart';

interface IProps {
  weatherContext: IWeatherContext;
}

const Weather: FunctionComponent<IProps> = ({
  weatherContext: { currentWeather, isLoading, weekWeather, selectedCity }
}) => {
  return (
    <>
      <SelectCity />

      {isLoading ? (
        <Segment>
          <Loader inline="centered" active />
        </Segment>
      ) : (
        weekWeather &&
        currentWeather && (
          <Segment>
            <Grid>
              <WeatherInformation
                selectedCity={selectedCity}
                currentWeather={currentWeather}
              />
              <Grid.Row>
                <Grid.Column width={16}>
                  <TemperatureChart data={weekWeather} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <HumidityChart data={weekWeather} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
      )}
    </>
  );
};

export default compose(withWeatherContextProvider, withWeatherContextConsumer)(
  Weather
);
