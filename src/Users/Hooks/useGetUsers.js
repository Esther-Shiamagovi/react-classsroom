import { getUsers } from "../utils";
import { useEffect, useState } from "react";

 export const  useGetUsers =()=>{
    const [users,setUsers] = useState([]);
    const[error,setError] = useState('');
    const[loading,setLoading] = useState(false);


    useEffect(()=>{
        const fetchUsers= async()=>{
            try{
                setLoading(true);
                const response = await getUsers();
                setUsers(response.users);
                setLoading(false);
            }
            catch (error){
                setLoading(false)
                setError(`Error ${error.message}`)

            }
        }
        fetchUsers();
    },[])
    return {users,loading,error}
 }