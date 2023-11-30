import React,{useState,useEffect} from 'react';
import { addUser } from '../../../Redux/UserReducer'
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmpHeader from './EmpHeader';

const EmpMyDetails = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [skills,setSkills] = useState('')
    const [imageURL, setImageURL] = useState('');
    const [documentURL,setDocumentURL] = useState('')
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const HandleSubmit =()=>{
        if(name && email&& imageURL && documentURL !== ''){
        dispatch(addUser({id: users[users.length-1].id + 1,name,email}))
        navigate('/EmpDashboard')
        toast.success('Updated Successfully')
        }
        else{
          toast.error('Please fill the details')
        }
    }
    useEffect(() => {
      localStorage.setItem('imageURL', imageURL);
   }, [imageURL]);
   
   const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(file);
 };
  return (
    <div>
      <EmpHeader/>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Change My Details</h3>
      <p>Use this form to edit your personal details</p>
       <div>
       <label for="floatingInput">Name</label>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter your Name"/>
       </div>

       <div>
       <label for="floatingInput">Email</label>
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control"  placeholder="Enter your Email"/>
       </div>
       <div>
       <label for="floatingInput">Skills</label>
       <input type="email" value={skills} onChange={(e)=>setSkills(e.target.value)} class="form-control"  placeholder="Enter your Skills"/>
       </div>
       <div>
       <div class="mb-3">
       <label for="formFile" class="form-label">Choose Image</label>
       <input class="form-control" type="file" onChange={handleImageUpload} accept="image/*" required/>
       </div>
      </div>
      <div>
       <div class="mb-3">
       <label for="formFile" class="form-label">Choose document</label>
       <input class="form-control" type="file" onChange={(e) => setDocumentURL(e.target.files[0])} accept="image/*" required/>
       </div>
      </div>
       <br/>
       <button type="button" onClick={HandleSubmit} class="btn btn-primary">Submit</button>
    </div>
      
  </div>
  </div>
  );
}

export default EmpMyDetails;
