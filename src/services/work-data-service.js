
import axios from "axios";

export const getTabData = async (url)=>{
    try{
        const { data } = await axios.get(`https://blue-envy-api.herokuapp.com/${url}`)
        return data
    } catch(err) {
        console.log(err)
    }
}
