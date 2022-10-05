const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  var beacon= advertisement["iBeacon"];
  beacon.id_beacon= advertisement["id"];
  beacon.address= advertisement["address"];
  beacon.rssi = advertisement["rssi"];
  console.log(JSON.stringify(beacon, null, '  '));
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Buscando Beacons en la Oficina.')  ;
}).catch((error) => {
  console.error(error);
});
