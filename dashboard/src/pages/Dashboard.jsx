import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import AdminSidebar from '../components/AdminSidebar';
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import szlogo from '../assets/szlogo.png';
import { FaSearch } from "react-icons/fa";
import "../styles/dashboard.css";
import { FaBold } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='adminContainer '>
      {/* sidebar */}
      <AdminSidebar />
      
      {/* main */}
      <main> 
        <div className='maindashboard'>
          <div className ='dashHeader'>
            <ul className='ulheader'>
              <li style={{float:'left'}}><Link to="#home">Home |</Link></li>
              <li style={{float:'left'}}><Link to="#news">Edit profile |</Link></li>
              <li style={{float:'left'}}><Link to="#contact">Change password |</Link></li>
              <li style={{float:'left'}}><Link to="#about">Sign Out</Link></li>
              <li style={{float:'right'}}><Link to="#about">login Traffic</Link></li> 
              <li  style={{float:'right'}}><Link to="#about">Set Alert</Link></li>
              <li  style={{float:'right'}}><Link to="#contact">BackUp</Link></li>
              <li  style={{float:'right'}}><Link to="#news"> | Manage | </Link></li>
              <li style={{float:'right'}} ><Link to="#home" style={{color:'red'}}> Premium Ads on </Link></li>
            </ul>
            <div className='centerImage'>
              <img src={szlogo} width={140} height={140} alt='Your Image' />
            </div>
          </div>
          
          <div className='searchSection'>
            <div className='searchField'>
              <label > <b> Search investor -: </b></label>
              <input 
                type='text'
                placeholder='Search...'
              /> 
              <button value ='Submit'> 
                <FaSearch  size={23}/>
              </button>
            </div>
          
            <div className='linkSection'>
              <div className='row'>
                <div className='column'>
                  <div className='clientManagement'>
                    <p>Client Management</p>
                    <ul>
                    <li><Link to="/search-folio-investor">Search Folio / Investor</Link></li>
        <li><Link to="/add-new-investor">Add New Investor</Link></li>
        <li><Link to="/groups-families">Groups / Families</Link></li>
        <li><Link to="./Investors">Recently added Investors</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='dataManagement'>
                  <p>Data Management</p>
                  <ul>
                  <li><Link to="/import-client-master">Import Client Master</Link></li>
        <li><Link to="/import-transactions">Import Transactions</Link></li>
        <li><Link to="/import-brokerage">Import Brokerage</Link></li>
        <li><Link to="/import-large-files">Import Large File(s)</Link></li>
                  </ul>
                </div>
                <div className='column'>
                  <h3>Column 1</h3>
                  <ul>
                    <li><Link to='#'>Link 1</Link></li>
                    <li><Link to='#'>Link 2</Link></li>
                    <li><Link to='#'>Link 3</Link></li>
                  </ul>
                </div>
                <div className='column'>
                  <h3>Column 2</h3>
                  <ul>
                    <li><Link to='#'>Link 4</Link></li>
                    <li><Link to='#'>Link 5</Link></li>
                    <li><Link to='#'>Link 6</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
