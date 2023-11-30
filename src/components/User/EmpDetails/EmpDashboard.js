import React,{useState,useEffect} from 'react';
import { addUser } from '../../../Redux/UserReducer'
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmpHeader from './EmpHeader';

const EmpDashboard = () => {
  const [data,setData] = useState('')
  const [newData,setNewData] = useState([])
  const [show,setShow] = useState(false)
  const [editIndex,setEditIndex] = useState('')
const HandleSubmit  =()=>{
  if(data !== ''){
   setNewData((Ndata)=>[...Ndata,data])
   setData('')
  }
}

const HandleDelete = (index)=>{
   newData.splice(index,1)
   setNewData([...newData])
}

const HandleEdit = (i)=>{
  setData(newData[i])
  setEditIndex(i)
  setShow(true)
}

const HandleUpdate = () =>{
  newData.splice(editIndex,1,data)
  setNewData([...newData])
  setData('')
  setShow(false)
}

 
   
   return (
    <div>
      <EmpHeader/>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>My Dashboard</h3>
       <div>
       <label for="floatingInput">Name</label>
       <input class="form-control" type="text" placeholder="Employee" aria-label="Disabled input example" disabled/>
       </div>

       <div>
       <label for="floatingInput">Email</label>
       <input class="form-control" type="text" placeholder="Employee@gmail.com" aria-label="Disabled input example" disabled/>
       </div>
       <div>
       <label for="floatingInput">Mobile No:</label>
       <input class="form-control" type="text" placeholder="1234567890" aria-label="Disabled input example" disabled/>
       </div>
       <div>
       <label for="floatingInput">Age</label>
       <input class="form-control" type="text" placeholder="25" aria-label="Disabled input example" disabled/>
       </div>
       <div>
       <label for="floatingInput">Skills      {
       !show ? <button className='btn btn-primary' onClick={HandleSubmit}> Add</button>:
        <button className='btn btn-primary' onClick={HandleUpdate}>Update</button>
} </label>
       <input type="text" value={data} onChange={(e)=>setData(e.target.value)} class="form-control" aria-label="Username" aria-describedby="basic-addon1"/> 
       <div class="card" style={{width: "10rem"}}>
       <div class="card-body">
{newData.map((val, i)=>
            <div>
                <h5  key={i} class="card-title">{val}</h5>  
                 <button className='btn btn-primary' onClick={()=>HandleEdit(i)} >Edit</button>
                 <button className='btn btn-primary' onClick={()=>HandleDelete(i)}>Delete</button>
            </div>)}
            </div>

       </div>
       <br/>
       <button type="button" onClick={HandleSubmit} class="btn btn-primary">Submit</button>
    </div>
      
  </div>
    </div>
    </div>
  );
}

export default EmpDashboard;
