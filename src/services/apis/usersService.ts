import customAxios from "../customAxios"


export const getUsers=async()=>{
    try{
        const res=await customAxios.get("/users");
        return res.data
    }catch(error:any){
        
    }
}