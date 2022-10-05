const mqtt = require('mqtt')

const WebSockect_URL = 'ws://35.206.124.114:8083/mqtt'

const client= mqtt.connect(WebSockect_URL);

//Configuracion BLE BEACON
const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();
let cont=0;
  // Set an Event handler for beacons
  scanner.onadvertisement = (advertisement) => {
      var beacon= advertisement["iBeacon"];
      beacon.id_beacon=advertisement["id"];
      beacon.id_gateway="gw01";
      beacon.rssi = advertisement["rssi"]; 
      console.log(JSON.stringify(beacon, null, '  '));
      
    client.publish('deteccion',JSON.stringify(beacon, null, '  '),(error)=>{ 
      console.log(error || 'Beacon encontrado!,Detección:'+cont)
      cont=cont+1; 

       });
  };
 // Start scanning
 scanner.startScan().then(() => {
    console.log('Buscando Beacons en la Oficina.')  ;
  }).catch((error) => {
    console.error(error);
  });






   /* axios.post('gateway_beacon/add',{
        id_beacon:beacon.id_beacon,
        id_gateway: beacon.id_gateway,
        rssi:beacon.rssi,

      })*/
   
   
 
   
  
   