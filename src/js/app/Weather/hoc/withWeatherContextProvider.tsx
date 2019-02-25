import * as React from 'react';
import { WeatherProvider } from '../context/WeatherContext';

const withWeatherContextProvider = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithContext extends React.Component<P> {
    render() {
      return (
        <WeatherProvider>
          <Component {...this.props} />
        </WeatherProvider>
      );
    }
  };

export { withWeatherContextProvider };
