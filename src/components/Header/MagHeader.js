import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';

const MagHeader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username.name === '' || username.password === null) {
                usenavigate('/');
            } else {
                displayusernameupdate(username);
            }
        }
    }, [location])
  return (
    <div>
        {showmenu &&
        <div className="header">

            {/* <Link style={{textDecoration:'none',color:'white'}} to={'/admin'}>Home</Link> */}
   
            {/* <Link style={{textDecoration:'none',color:'white',marginLeft:'20px'}} to={'/admin'}>Manager</Link> */}
         
            <span style={{ marginLeft: '55%',textDecoration:'none',color:'white' }}><h2>Welcome <b>{displayusername}</b></h2></span>
            <Link style={{textDecoration:'none',color:'white'}} to={'/MyMangDetails'}>My Details</Link>
            <Link style={{ float: 'right',textDecoration:'none',color:'white',margin:'-30px 30px' }} to={'/'}><h5>Logout</h5></Link>
        </div>
    }
    </div>
  );
}

export default MagHeader;
