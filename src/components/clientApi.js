import axios from 'axios'

const URL = 'http://127.0.0.1:5000'
export const get_users = async ()=>{
    try{
        const res = await axios.get(`${URL}/get_users`)
        // console.log('api' , res.data, typeof(res.data))
        return res.data
    }
     catch (error) {
    console.log(error);
    return []; // Return an empty array in case of an error
  }
   
}
export const register_users = async (user)=>{
    try{
        const res = await axios.post(`${URL}/register` , user)
        return res.data;
    }
    catch(error){
        console.log(error);
        return "error"
    }
   

}

export const transferData = async (transaction)=>{
    try{
       const res =await axios.post(`${URL}/transfer` , transaction)
            console.log("api", res.data)
            return res.data
    }
    catch(error){
        console.log(error);
        return "error"
    }
   
    
}
export const get_transactions = async()=>{
   try{
       const res = await axios.get(`${URL}/get_transactions`)
            console.log("api", res.data)
            return res.data
   }
   catch(error){
    console.log(error);
    return "error"
}
   
}

export const get_user_by_id = async(id)=>{
    try{
       const res = await axios.get(`${URL}/user/${id}`)
            // console.log("api", res.data)
            return res.data
    
    }   
    catch(error){
        console.log(error);
        return "error"
    }
       
}

export const withdraw_deposite = async (instruction)=>{
    try{
        const res = await axios.post(`${URL}/withdraw_deposite`, instruction)
            console.log("api", res.data)
            return res.data
    }
    catch(error){
        console.log(error);
        return "error"
    }
  
}
