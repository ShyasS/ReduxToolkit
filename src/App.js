import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import Create from './components/CRUD/Create';
import Update from './components/CRUD/Update'
import Login from './components/LoginPage/Login';
import Admin from './components/User/Admin';
import Employee from './components/User/Employee';
import Manager from './components/User/Manager';
import View from './components/CRUD/View';
import AdminEmployee from './components/User/EmpFolder/AdminEmployee';
import EmpCreate from './components/User/EmpFolder/EmpCreate';
import EmpUpdate from './components/User/EmpFolder/EmpUpdate';
import EmpView from './components/User/EmpFolder/EmpView';
import AdminEmp from './components/User/EmpFolder/AdminEmp';
import ManagView from './components/User/ManagFolder/ManagView';
import ManagEmp from './components/User/ManagFolder/ManagEmp';
import MangCreate from './components/User/ManagFolder/MangCreate';
import MangEdit from './components/User/ManagFolder/MangEdit';
import ManagMyDetails from './components/User/ManagFolder/ManagMyDetails';
import EmpHeader from './components/User/EmpDetails/EmpHeader';
import EmpMyDetails from './components/User/EmpDetails/EmpMyDetails';
import EmpDashboard from './components/User/EmpDetails/EmpDashboard';

function App() {
  return (
    <div>
      <ToastContainer theme='colored' position='top-center'/>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/manager' element={<Manager/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/AdminEmp' element={<AdminEmployee/>}/>
        <Route path='/EmpCreate' element={<EmpCreate/>}/>
        <Route path='/EmpUpdate/:id' element={<EmpUpdate/>}/>
        <Route path='/EmpView/:id' element={<EmpView/>}/>
        <Route path='/AdminEmployee' element={<AdminEmp/>}/>
        <Route path='/ManagEmp' element={<ManagEmp/>}/>
        <Route path='/ManagView/:id' element={<ManagView/>}/>
        <Route path='/ManagCreate' element={<MangCreate/>}/>
        <Route path='/ManagEdit/:id' element={<MangEdit/>}/>
        <Route path='/MyMangDetails' element={<ManagMyDetails/>}/>
        <Route path='/EmpHeader' element={<EmpHeader/>}/>
        <Route path='/EmpMyDetails' element={<EmpMyDetails/>}/>
        <Route path='/EmpDashboard' element={<EmpDashboard/>}/>
</Routes>
    </Router>
    </div>
  );
}

export default App;
