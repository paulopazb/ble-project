const mqtt = require('mqtt')
import {db} from './db.js'

db.connect(()=>{
    console.log('Database Ok')
})
const WebSockect_URL = 'ws://35.206.124.114:8083/mqtt'

const sub= mqtt.connect(WebSockect_URL);
sub.on('clientConnected',(client)=>{
    console.log('Nuevo Cliente'+client.id)
})

sub.on('connect', () =>{
//Subscription
    sub.subscribe('deteccion')
})

sub.on('message',(topic,message)=>{
   //console.log(message.toString())
   message = message.toString()
   message = message.split(' ')
   message = parseInt(message[1])
   console.log(message)
   db.query(
       'insert into arduino set ?',
       {data: message},
       (err, rows) => {
           if(!err) console.log('data saved!')
       }
   )
})


