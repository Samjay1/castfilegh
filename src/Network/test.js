
let setData ;
const useFetch = ()=>{
    fetch('http://localhost:7001/organiser/test')
    .then((response) => response.json())
    .then((json) => {
        setData=json.response
        // setGlobalState('sample', json)
        console.log("API",setData)
        return setData;
    });
    return setData;
}

export default useFetch;