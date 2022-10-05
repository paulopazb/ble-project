

  
  //connect options
  
  const options={
		connectionTimeout: 4000,
		clientId: 'iotmc',
		keepalive: 60,
		clean: true,
		}
		
	//WebSockect connect url
	 const WebSockect_URL = 'ws://35.206.124.114:8083/mqtt'
	 const client= mqtt.connect(WebSockect_URL, options);
	 
	 client.on('connect', () =>{
			console.log('Mqtt conectado pow WS! Exitosamentet!')
			
		//Me suscribo
		
		client.subscribe('prueba',{ qos: 0 },(error) => {
		  if(!error){
				console.log('suscripción exitosa!')
		  }else{
				cons ole.log('Sucripcion Fallida!')
			}
		}
		)
		
		client.on('message', (topic,message)=>{
			console.log('Mensaje recibido bajo topico:',topic,'->', message.toString())
			})
		
			
	
		
const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

// Set an Event handler for beacons
scanner.onadvertisement = (advertisement) => {
  var beacon= advertisement["iBeacon"];
  beacon.id= advertisement["id"];
  beacon.address= advertisement["address"];
  beacon.rssi = advertisement["rssi"];
  //publico mensaje
		client.publish('salida',JSON.stringify(beacon, null, '  '),(error)=>{
			console.log(error || 'Mensaje Envivado!!!')
		   });
		
		})
  
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Buscando Beacons en la Oficina.')  ;
}).catch((error) => {
  console.error(error);
});

