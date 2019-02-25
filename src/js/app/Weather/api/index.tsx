import axios, { AxiosPromise } from 'axios';
import { IWeather } from '../types';
import { config } from '../../../config';

const getCurrentWeather = (city: string): AxiosPromise<IWeather> =>
  axios.get(config.API_URL + 'weather', {
    params: {
      q: city,
      units: 'metric',
      appid: config.APPID
    }
  });

const getFiveDaysWeather = (city: string) =>
  axios.get(config.API_URL + 'forecast', {
    params: {
      q: city,
      cnt: '7',
      units: 'metric',
      appid: config.APPID
    }
  });

export { getCurrentWeather, getFiveDaysWeather };
