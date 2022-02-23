const Axios = require('axios');

exports.get = async (req, res) => {
  // Axios
  //   .get(`http://api.ipstack.com/${req.headers['x-forwarded-for']}?access_key=${process.env.ipstack}`)
  //   .then(response => {
  //     const geoData = {
  //       adressData: [],
  //       geolocation: {},
  //     };
  //
  //     geoData.adressData.push({name: response.data.type , content: response.data.ip});
  //     geoData.adressData.push({name: 'Continent' , content: response.data.continent_name});
  //     geoData.adressData.push({name: 'Country' , content: response.data.country_name});
  //     geoData.adressData.push({name: 'Region' , content: response.data.region_name});
  //     geoData.adressData.push({name: 'City' , content: response.data.city});
  //     if (response.data.zip) {geoData.adressData.push({name: 'Zip' , content: response.data.zip});}
  //
  //     geoData.geolocation.latitude = response.data.latitude;
  //     geoData.geolocation.longitude = response.data.longitude;
  //
  //     res.json(geoData);
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });

  res.json({adressData:[{name:'ipv4',content:'89.64.93.70'},{name:'Continent',content:'EU'},{name:'Country',content:'Poland'},{name:'Region',content:'Mazovia'},{name:'City',content:'Ursynów'},{name:'Zip',content:'02-778'}],geolocation:{latitude:52.15193176269531,longitude: 21.059459686279297}});
};
