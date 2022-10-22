import axios from 'axios'

export const getHeaderData = async ()=>{
    try{
        const {data} = await axios.get('https://run.mocky.io/v3/9e343425-c47c-4c7f-a1ac-972c099be0ed')
        return data
        
    } catch(err){
        console.log("an error occured when getting Header Data")
    }
}

export const getGroupByFunction = async ()=>{
    try{
        const {data} = await axios.get('https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8')
        return data
       
    } catch(err){
        console.log("an error occured when getting groupByFunction data")
    }
}

export const getGroupByRole = async ()=>{
    try{
        const {data} = await axios.get('https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a')
        return data
        
    } catch(err){
        console.log("an error occured when getting groupByRole Data")
    }
}

