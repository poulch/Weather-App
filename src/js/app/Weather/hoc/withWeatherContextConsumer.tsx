import * as React from 'react';
import { Subtract } from 'utility-types';
import { IWeatherContext, WeatherConsumer } from '../context/WeatherContext';

interface IInjectedProps {
  weatherContext: IWeatherContext;
}

const withWeatherContextConsumer = <P extends IInjectedProps>(
  Component: React.ComponentType<P>
) =>
  class WithContext extends React.Component<Subtract<P, IInjectedProps>> {
    render() {
      return (
        <WeatherConsumer>
          {value => <Component {...this.props as P} weatherContext={value} />}
        </WeatherConsumer>
      );
    }
  };

export { withWeatherContextConsumer };
