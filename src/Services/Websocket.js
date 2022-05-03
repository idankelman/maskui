export let ws = null
let messages = []
let last_token


//Websocket URL : 
//---------------------------------------------------------------------------------------------------------------

var channelId = "channel_1";
var clusterId = "demo";
var apiKey = "oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm";
// const wb_url = "wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self";
// const wb_url = "`wss://ws-api.enigma-x.app/?token=${token}`";
  

//Websocket initialization : 
//---------------------------------------------------------------------------------------------------------------


export const init_ws = ({ token }) => {
  try {
    if ((ws === null || ws.readyState === 3) && token) {
      last_token = token
      //ws = new WebSocket(`wss://${clusterId}.piesocket.com/v3/${channelId}?api_key=${apiKey}`)
      ws = new WebSocket(`ws://localhost:5000`)
      //ws://localhost:5000
    }

    ws.onopen = () => {
      console.log("connection astablished");
      messages.forEach((message) => {
        ws.send(JSON.stringify(message))
      })
    }


    //Websocket Recive Message : 
    //---------------------------------------------------------------------------------------------------------------


    ws.onmessage = (message) => {
      if (message.data.size !== 0) {
        // console.log(JSON.parse(message.data).content['BTC-USD'].filter.high);
        // console.log(JSON.parse(message.data).content['BTC-USD'].filter.low);
        // console.log("Recived Message\n"+ JSON.stringify(message));
        try{
          const response = JSON.parse(message.data);
          //console.log(response);
          postMessage(response);
        
        }
        catch{
          console.log("error");
        }
        
      }
    }


    //Websocket close/error :
    //---------------------------------------------------------------------------------------------------------------

    ws.onclose = () => {
      console.log('closing ws connection')
    }
    ws.onerror = (err) => {
      if (ws.code !== 4000) {
        setTimeout(() => {
          init_ws({ token: last_token })
        }, 2000)
      }
    }
  } catch (error) {
    console.log(error)
  }
}




//Websocket send_message : 
//---------------------------------------------------------------------------------------------------------------


export const send_message = (data) => {
  try {
    console.log('sending message :\n' + JSON.stringify(data));
    if (ws.readyState !== 1) {
      messages.push(data)
    } else {
      ws.send(JSON.stringify(data))
    }
  } catch (error) {
    console.log(error)
  }
}


//Websocket close session : 
//---------------------------------------------------------------------------------------------------------------



export const close_ws = () => {
  if (ws?.readyState === 1) {
    ws.send(JSON.stringify({ type: 'close-connection' }))
    ws.close()
    ws = null
  }
}