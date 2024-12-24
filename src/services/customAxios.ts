import axios from "axios";

const customAxios = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  timeout: 50000,
  headers: {},
});

const handleRequest=(request:any)=>{
    const token=localStorage.getItem("token");
    if(token){
        request.headers.Authorization=`Bearer ${token}`
    }
    return request
}

const handleResponse=(response:any)=>response

export const handleError=(error:any)=>{
    if(error.status==="401"){
        return window.location.href="/login"
    }
    return Promise.reject
}

customAxios.interceptors.request.use(
    (request:any)=>handleRequest(request),
    (error:any)=>handleError(error)
)
customAxios.interceptors.response.use(
    (response:any)=>handleResponse(response),
    (error:any)=>handleError(error)
)

export default customAxios