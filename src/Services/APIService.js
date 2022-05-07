
//Websocket URL : 
//---------------------------------------------------------------------------------------------------------------
const backend_url = "http://localhost:5001";

  

//Websocket initialization : 
//---------------------------------------------------------------------------------------------------------------



export async function getAllUsers(request,Type,endPoint) {

    try{
        const response = await fetch(`${backend_url}/${endPoint}`);
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data,endPoint) {
    const response = await fetch(`${backend_url}/${endPoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({user: data})
      })
    return await response.json();
}



export async function getStatistics(data) {
    const response = await fetch(`${backend_url}/statistics`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}


export async function getRoomConfig() {
    const response = await fetch(`${backend_url}/roomConfig`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }) 
    //   .then(res=>res.json())
    //      .then(data => {console.log(data); });
    return response;

}


export function getRoomConfig1(){
    fetch(`${backend_url}/roomConfig`,{
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        })
        .then(response => response.json())
        .then(data => console.log(data));
}

