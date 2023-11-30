import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from '../../../Redux/UserReducer';
import Header from "../../Header/Header";

const AdminEmployee = () => {
        const users = useSelector((state) => state.users);
        const dispatch = useDispatch();
        const HandleDelete = (id) =>{
          dispatch(deleteUser({
              id:id
          }))
        }
  return (
    <div>
      <div className="container mx-auto p-2">
        <h1 style={{textAlign:'center'}}>Employee's Data</h1>
        <Link to='/EmpCreate'><button className="btn btn-success my-3">Create +</button></Link>
        <table class="table table-dark table-hover w-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>
                <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                   <td>
                    <Link to={`/EmpUpdate/${user.id}`} className="btn btn-sm btn-success">Edit</Link>
                    <button onClick={()=>HandleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                    <Link to={`/EmpView/${user.id}`} className="btn btn-sm btn-primary">View</Link>
                   
                </td>
              </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminEmployee;
