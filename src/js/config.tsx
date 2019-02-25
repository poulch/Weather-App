const config = {
  API_URL: process.env.API_URL,
  APPID: process.env.APP_ID,
  cities: [
    {
      text: 'Cracow',
      value: 'Krakow,pl'
    },
    {
      text: 'Warsaw',
      value: 'Warsaw,pl'
    },
    {
      text: 'Paris',
      value: 'Paris,fr'
    },
    {
      text: 'Madrid',
      value: 'Madrid,es'
    },
    {
      text: 'London',
      value: 'London,gb'
    },
    {
      text: 'New York',
      value: 'New York,us'
    },
    {
      text: 'Oslo',
      value: 'oslo,no'
    },
    {
      text: 'Tokyo',
      value: 'Tokyo,jp'
    }
  ]
};

export { config };
