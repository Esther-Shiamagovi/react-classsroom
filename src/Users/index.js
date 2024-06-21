import { useGetUsers } from "./Hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";
import "./index.css";

const Users = ()=>{
    const {users,loading,error} = useGetUsers();
    console.log({users});
    return (
        <div>
        <div>
        <button type="submit" className="btnlogin">login</button>
        </div>
        <div className="imageView">
{loading && <h2>Loading users...</h2>}
{error.length>0 && <h2>{error}</h2>}
{users.length >0 
? users.map((user) =>(
    <UserCard
    key ={user.id}
    image = {user.image}
    fullName={`{${user.firstName} ${user.lastName}}`}
    />
))
:!loading && <h2>User not found</h2>}
     </div>
     </div>
    );
};
export default Users;

