import * as React from 'react';
import { get } from 'lodash';
import { getCurrentWeather, getFiveDaysWeather } from '../api';
import { IWeather, IWeatherWeek } from '../types';

interface ICity {
  name: string;
  nameWithCountry: string;
}

export interface IWeatherContext {
  errorMsg: string;
  selectedCity: ICity | null;
  setCity: (city: ICity) => void;
  isLoading: boolean;
  currentWeather: IWeather | null;
  weekWeather: IWeatherWeek;
}

interface IState {
  errorMsg: string;
  selectedCity: ICity;
  isLoading: boolean;
  currentWeather: IWeather | null;
  weekWeather: IWeatherWeek | null;
}

const WeatherContext = React.createContext<IWeatherContext>(({
  selectedCity: null
} as unknown) as IWeatherContext);

const WeatherConsumer = WeatherContext.Consumer;

class WeatherProvider extends React.Component<{}, IState> {
  state: Readonly<IState> = {
    errorMsg: '',
    selectedCity: null,
    isLoading: false,
    currentWeather: null,
    weekWeather: null
  };

  setCity = (city: ICity) => {
    const { selectedCity } = this.state;

    if (!selectedCity || selectedCity.name !== city.name) {
      this.setState({ selectedCity: city, isLoading: true }, () => {
        this.getWeather(city.nameWithCountry);
      });
    }
  };

  getWeather = (city: string) => {
    Promise.all([getCurrentWeather(city), getFiveDaysWeather(city)])
      .then(([{ data: currentWeather }, { data: weekWeather }]) => {
        this.setState({
          errorMsg: '',
          isLoading: false,
          currentWeather,
          weekWeather
        });
      })
      .catch(err => {
        return this.setState({
          errorMsg: get(
            err,
            'response.data.message',
            'Ups... Something went wrong.'
          ),
          isLoading: false
        });
      });
  };

  render() {
    return (
      <WeatherContext.Provider
        value={{
          ...this.state,
          setCity: this.setCity
        }}>
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export { WeatherContext, WeatherConsumer, WeatherProvider };
