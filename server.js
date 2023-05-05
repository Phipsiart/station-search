const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api', async (req, res) => {
  let station = req.query.station || "";
  let results = req.query.results || "1";

  console.log(station)
  console.log(results)
  const fetchstationurl  = "http://transport.phipsiart.de/stations?query=" + station + "&" + results

  try {
    const response = await fetch(fetchstationurl);
    const stationsfetchresult = await response.json();
    const stations = Object.values(stationsfetchresult).map((station) => ({
      name: station.name
    }));

    res.status(200).json(stations);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
