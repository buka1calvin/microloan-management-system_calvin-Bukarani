import customAxios from "../customAxios";

export const getTasks = async () => {
  try {
    const res = await customAxios.get("/tasks");
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const addTask = async (task: Task) => {
  try {
    const res = await customAxios.post(`/tasks`, task);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const removeTask=async(taskId:number)=>{
try{
const res=await customAxios.delete(`/users/${taskId}`)
return res.data
}
catch(error:any){
    return error.response.data;
}
}

export const updateTask=async(task:Task)=>{
    try{
    const res=await customAxios.put(`/users/${task.id}`,task)
    return res.data
    }
    catch(error:any){
        return error.response.data;
    }
    }
