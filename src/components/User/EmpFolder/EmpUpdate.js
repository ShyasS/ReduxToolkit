import React,{useState} from 'react';
import {  updateUser } from '../../../Redux/UserReducer';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const EmpUpdate = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id)
    const {name, email} = existingUser[0]
    const [Uname,setName] = useState(name)
    const [Uemail,setEmail] = useState(email)
    const dispatch = useDispatch();
    const HandleSubmit =()=>{
      if(Uname && Uemail !== ''){
        dispatch(updateUser({
          id: id,
          name : Uname,
          email : Uemail,
      
        }))
      }
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Update User Detail</h3>
       <div>
       <label for="floatingInput">Name</label>
       <input type="text" value={Uname} onChange={(e)=>setName(e.target.value)}  class="form-control" placeholder="Enter your Name"/>
       </div>

       <div>
       <label for="floatingInput">Email</label>
       <input type="email" value={Uemail} onChange={(e)=>setEmail(e.target.value)} class="form-control"  placeholder="Enter your Email"/>
       </div>

       <br/>
       <Link to='/AdminEmployee'><button type="button" onClick={HandleSubmit} class="btn btn-primary">Update</button></Link>
    </div>   
  </div>
  );
}

export default EmpUpdate;
