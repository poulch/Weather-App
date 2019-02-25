export interface IWeather {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface IWeatherWeek {
  list: [
    {
      clouds: number;
      deg: number;
      dt: number;
      humidity: number;
      pressure: number;
      rain: number;
      speed: number;
      main: {
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
    }
  ];
}
