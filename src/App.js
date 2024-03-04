import {Routes, Route, HashRouter} from 'react-router-dom'
import Page1 from './Forms/Page1'
import Page2 from './Forms/Page2'

import Login from './Organiser/Login';
import Register from './Organiser/Register';
import ResetPassword from './Organiser/ResetPassword';
import ForgotPassword from './Organiser/ForgotPassword';
import Dashboard from './Organiser/Dashboard';
import Forms from './Organiser/Forms';
import AddForm from './Organiser/AddForm';
import Nominee from './Organiser/Nominee';
import NomineeTable from './Organiser/NomineeTable';
import Payments from './Organiser/Payments';
import Edit from './Organiser/Edit';
import List from './Organiser/List';

import Welcome from './Organiser/welcome';

import ALogin from './Admin/Login';
// import ARegister from './Admin/Register';
// import AResetPassword from './Admin/ResetPassword';
// import AForgotPassword from './Admin/ForgotPassword';
import ADashboard from './Admin/Dashboard';
import AForms from './Admin/Forms';
import AAddForm from './Admin/AddForm';
import ANominee from './Admin/Nominee';
// import APayments from './Admin/Payments';
import AEdit from './Admin/Edit';
import Organiser from './Admin/organisers';
import ANomineeTable from './Admin/NomineeTable';
import OrgDashboard from './Admin/OrgDashboard';
import React from 'react';




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          
          <Login />
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

function App() {
  return (
    <div>
      <HashRouter basename={'/'}>
       <Routes>
       <Route exact path={`${process.env.PUBLIC_URL}/*`} element={<Welcome/>}/>
       
         <Route exact path={`${process.env.PUBLIC_URL}/`} element={
         <ErrorBoundary>
         <List/>
       </ErrorBoundary>}/> 

       <Route exact path={`${process.env.PUBLIC_URL}/welcome`} element={<Welcome/>}/>
 
       <Route exact path={`${process.env.PUBLIC_URL}/list`} element={
         <ErrorBoundary>
           <List/>
         </ErrorBoundary>
         }/> 
 
         <Route exact path={`${process.env.PUBLIC_URL}/fill/:id`} element={
         <ErrorBoundary>
           <Page1/>
         </ErrorBoundary>
         }/> 
 
         <Route exact path={`${process.env.PUBLIC_URL}/next`} element={
         <ErrorBoundary>
             <Page2/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/login`} element={
         <ErrorBoundary>
             <Login/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/register`} element={
         <ErrorBoundary>
             <Register/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/resetpassword/:email`} element={<ResetPassword/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/forgotpassword`} element={<ForgotPassword/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} element={
         <ErrorBoundary>
             <Dashboard/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/Forms`} element={
         <ErrorBoundary>
             <Forms/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/add`} element={
         <ErrorBoundary>
             <AddForm/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/nominees`} element={
         <ErrorBoundary>
             <Nominee/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/nomineestable/:id`} element={
         <ErrorBoundary>
             <NomineeTable/>
         </ErrorBoundary>}/>
 
         <Route exact path={`${process.env.PUBLIC_URL}/payments`} element={<Payments/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/edit/:id`} element={
         <ErrorBoundary>
             <Edit/>
         </ErrorBoundary>}/>
         {/* <Route path={`${process.env.PUBLIC_URL}/settings`} element={<Settings/>}/> */} 
         <Route path="/*" component={Register} />
 
         <Route exact path={`${process.env.PUBLIC_URL}/admin/login`} element={<ALogin/>}/>
         {/* <Route exact path={`${process.env.PUBLIC_URL}/admin/register`} element={<ARegister/>}/> */}
         {/* <Route exact path={`${process.env.PUBLIC_URL}/admin/resetpassword`} element={<AResetPassword/>}/> */}
         {/* <Route exact path={`${process.env.PUBLIC_URL}/admin/forgotpassword`} element={<AForgotPassword/>}/> */}
         <Route exact path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<ADashboard/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/Forms`} element={<AForms/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/add`} element={<AAddForm/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/nominees`} element={<ANominee/>}/> 
         <Route exact path={`${process.env.PUBLIC_URL}/admin/nomineestable/:id`} element={<ANomineeTable/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/preview/:orgId`} element={<OrgDashboard/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/edit/:id`} element={<AEdit/>}/>
         <Route exact path={`${process.env.PUBLIC_URL}/admin/organisers`} element={
           <ErrorBoundary>
               <Organiser/>
           </ErrorBoundary>}/>
       </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
 

