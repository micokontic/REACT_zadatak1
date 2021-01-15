const API_KEY='61c694c140169de86fea';
const callApi=()=>{
    fetch(`https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=${API_KEY}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then((json)=>{
           //console.log(json)
        })
        .catch(error => {
            console.error(error)})
}

const callApiCurrencies=()=>{
    
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then((json)=>{
            return(json);
        })
        .catch(error => {
            console.error(error)})
}

export {callApi,callApiCurrencies}