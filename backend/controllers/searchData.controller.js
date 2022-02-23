const Axios = require('axios');

exports.get = async (req, res) => {
  // Axios
  //   .get(`http://api.ipstack.com/${req.params.adress}?access_key=${process.env.ipstack}`)
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

  if (req.params.adress === '1') {
    res.json({adressData:[{name:'ipv4',content:'172.217.164.142'},{name:'Continent',content:'NA'},{name:'Country',content:'United States'},{name:'Region',content:'Virginia'},{name:'City',content:'Herndon'},{name:'Zip',content:'20170'}],geolocation:{latitude:38.98371887207031,longitude:-77.38275909423828}});
  } else if (req.params.adress === 'error') {
    res.json('error');
  } else {
    res.json({adressData:[{name:'ipv4',content:'89.64.93.70'},{name:'Continent',content:'EU'},{name:'Country',content:'Poland'},{name:'Region',content:'Mazovia'},{name:'City',content:'Ursynów'},{name:'Zip',content:'02-778'}],geolocation:{latitude:52.15193176269531,longitude: 21.059459686279297}});
  }
};


// `http://api.ipstack.com/${req.params.adress}?access_key=${IPSTACK}`
