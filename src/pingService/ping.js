import axios from "axios";

const ping = async () => {
  try {
    if(!localStorage.getItem("key")){
        const { data } = await axios.get("http://localhost:3000/sitepings");
        localStorage.setItem("key", data.key)
        return
    }
    await axios.get("http://localhost:3000/sitepings", {params: {key: localStorage.getItem("key")}}); 
  } catch(err) {

  }
};

export default ping;
