import React,{useState} from 'react';
import { addUser } from '../../Redux/UserReducer';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const HandleSubmit =()=>{
        if(name && email !== ''){
        dispatch(addUser({id: users[users.length-1].id + 1,name,email}))
     
        }
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add User Detail</h3>
         <div>
         <label for="floatingInput">Name</label>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter your Name"/>
         </div>

         <div>
         <label for="floatingInput">Email</label>
         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control"  placeholder="Enter your Email"/>
         </div>
         <br/>
         <Link to='/admin'><button type="button" onClick={HandleSubmit} class="btn btn-primary">Submit</button></Link>
      </div>
        
    </div>
  );
}

export default Create;
