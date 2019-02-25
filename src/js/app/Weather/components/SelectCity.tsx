import * as React from 'react';
import { FunctionComponent } from 'react';
import { Dropdown, Message } from 'semantic-ui-react';
import { IWeatherContext } from '../context/WeatherContext';
import { withWeatherContextConsumer } from '../hoc/withWeatherContextConsumer';
import { config } from '../../../config';

interface IProps {
  weatherContext: IWeatherContext;
}

const SelectCity: FunctionComponent<IProps> = ({
  weatherContext: { errorMsg, setCity, selectedCity }
}) => {
  return (
    <>
      {!selectedCity && (
        <Message info>Please select city to get weather information</Message>
      )}
      {errorMsg && <Message warning>{errorMsg}</Message>}

      <Dropdown
        placeholder="Select city"
        fluid
        selection
        options={config.cities}
        onChange={(event, data) => {
          setCity({
            name: event.currentTarget.textContent,
            nameWithCountry: data.value as string
          });
        }}
      />
    </>
  );
};

export default withWeatherContextConsumer(SelectCity);
