import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
            },[]);
            
    const ProceedLogin = () => {
      
        if (validate()) {
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0){
                    toast.error('Please Enter valid username');
                } 
                else {
                     if(username === "admin" && resp.password === "admin"){
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        navigate('/admin')
                     }
                     else if(username === "manager" && resp.password === "manager"){
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        navigate('/manager')
                     }
                     else if(username === "employee" && resp.password === "employee"){
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        navigate('/employee')
                     }
                     else{
                        toast.error('Please Enter valid credentials');
                     }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
  return (
    <div className="row">
    <div className="offset-lg-3 col-lg-4" style={{ margin:'140px auto' }}>
            <div className="card">
                <div className="card-header">
                    <h2>User Login</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>User Name <span className="errmsg">*</span></label>
                        <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={ProceedLogin} type="submit" className="btn btn-primary">Login</button> 
                </div>
            </div>
    </div>
</div>
  );
}

export default Login;
