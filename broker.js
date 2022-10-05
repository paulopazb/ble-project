const mqtt = require('mqtt')

const WebSockect_URL = 'ws://35.206.124.114:8083/mqtt'


const broker= mqtt.connect(WebSockect_URL,);

broker.on('connect',()=>{
    console.log('Servidor MQTT listo!!!')
})

broker.on('clientConnected',(client)=>{
    console.log('Nuevo Cliente'+client.id)
})

/* broker.on('published', (packet) => {
     console.log(packet.payload.toString())
 })*/


