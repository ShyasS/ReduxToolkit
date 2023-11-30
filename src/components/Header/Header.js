import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Header.css';


const Header = () => {
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
   
            <Link style={{textDecoration:'none',color:'white',marginLeft:'20px'}} to={'/admin'}>Manager</Link>
            <Link style={{textDecoration:'none',color:'white',marginLeft:'20px'}} to={'/AdminEmployee'}>Employee</Link>
            
            <span style={{ marginLeft: '75%',textDecoration:'none',color:'white' }}>Welcome <b>{displayusername}</b></span>
            <Link style={{ float: 'right',textDecoration:'none',color:'white' }} to={'/'}>Logout</Link>
        </div>
    }
</div>
  );
}

export default Header;
