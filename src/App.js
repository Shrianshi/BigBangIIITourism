import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Login from './Components/Login';
import Register from './Components/Register';
import HomeAdmin from './Components/HomeAdmin';
import HomeAgent from './Components/HomeAgent';
import RegisterAgent from './Components/RegisterAgent';
import Agents from './Components/Agents';
import Protected from './Components/Protected';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Packages from './Components/PackagesAdmin';
import ImageGallery from './Components/ImageGallery';
import PackagesView from './Components/PackagesView';
import AddPackage from './Components/AddPackage';
import PackageView from './Components/PackageView';
import MainComponent from './Components/MainComponent';
import PDFDocument from './Components/PDFDocument';
import AddImage from './Components/AddImage';
import FeedbackList from './Components/FeedbackList';
import Feedback from './Components/Feedback';
import Booking from './Components/Booking';
import PackagesAdmin from './Components/PackagesAdmin';
import Billing from './Components/Billing';
import AddBilling from './Components/AddBilling';
import Reviews from './Components/Reviews';
// import PackagesView from './Components/PackagesView';

function NotFound() {
  return( <h1 className='text-danger' align="center">🙃Page Not Found</h1>
  )
  ;
}

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <PackagesView/> */}
      {/* <h1>Your React Application</h1>
      <PackagesView/> */}

      
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Protected Component={Home}/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/HomeAgent" element={<Protected Component={HomeAgent}/>} />
          <Route path="/HomeAdmin" element={<Protected Component={HomeAdmin}/>}/>
          <Route path="/RegisterAgent" element={<RegisterAgent/>} />
          <Route path="/Agents" element={<Agents/>} />
          <Route path="/AddImage" element={<AddImage/>} />
          <Route path="/ImageGallery" element={<ImageGallery/>} />
          <Route path="/PackagesView" element={<PackagesView/>} />
          <Route path="/PackageView" element={<PackageView/>} />
          <Route path="/FeedbackList" element={<FeedbackList/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="/PackagesAdmin" element={<PackagesAdmin/>} />
          <Route path="/Billing" element={<Billing/>} />
          <Route path="/AddBilling" element={<AddBilling/>} />
          <Route path="/Reviews" element={<Reviews/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
      

    </div>
  );
}

export default App;
