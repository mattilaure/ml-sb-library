let ws = null;

export const connectWs = () => {
    ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
    ws.onopen = ()=>{
      console.log('CONNECTED TO WS');
    }

}

export const sendMessage = (message) =>{
    setTimeout(() => {
        ws.send(JSON.stringify(message));
     }, 200);
}

export const readMessage = () => {
    ws.onMessage = (event) => {
        console.log(JSON.parse(event));
    }
    
    // const obj = JSON.parse(event.data);
    // if (obj.hasOwnProperty("idLobby")) {
    //    this.lobby = obj;
    // } else {
    //    if (this.match == null) {
    //       this.match = obj;
    //       setTimeout(() => {
    //          this.requestCard();
    //       }, 1000);
    //    } else {
    //       this.match = obj;
    //    }
    // }
 }