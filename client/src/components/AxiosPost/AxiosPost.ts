import axios, { AxiosResponse } from 'axios';
export const post =async (url:string,data:any):Promise<any> => {
    const response = await axios.post(`http://localhost:5000/${url}`,data)
    return response.data
}