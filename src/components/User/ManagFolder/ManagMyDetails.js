import React,{useState,useEffect} from 'react';
import { addUser } from '../../../Redux/UserReducer'
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManagMyDetails = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [selectedImage, setSelectedImage] = useState('');
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const HandleSubmit =()=>{
        if(name && email && selectedImage !== ''){
        dispatch(addUser({id: users[users.length-1].id + 1,name,email}))
        navigate('/ManagEmp')
        console.log(name)
        console.log(email)
        console.log(selectedImage)
        }
        else{
          toast.error('Please fill the details')
        }
    }
    useEffect(() => {
      localStorage.setItem('selectedImage', selectedImage);
      console.log(selectedImage)
   }, [selectedImage]);
   
//    const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageURL(reader.result);
//     };
//     reader.readAsDataURL(file);
//  };
  
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Change My Details</h3>
      <p>Use this form to edit your personal details</p>
       <div>
       <label for="floatingInput">Name</label>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter your Name" required/>
       </div>

       <div>
       <label for="floatingInput">Email</label>
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control"  placeholder="Enter your Email" required />
       </div>
       <div>
       <div class="mb-3">
       <label for="formFile" class="form-label">Choose Image</label>
       <input class="form-control" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} accept="image/*" required/>
       </div>
      </div>
       <br/>
       <button type="button" onClick={HandleSubmit} class="btn btn-primary">Submit</button>
    </div>
      
  </div>
  );
}

export default ManagMyDetails;
