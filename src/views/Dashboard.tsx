import React from 'react';
import Cards from "../components/Dashboard/Cards";
import Charts from '../components/Dashboard/Charts';
import Statics from '../components/Dashboard/Statics';
import Portfolio from '../components/Dashboard/Portfolio';
import Myholdings from '../components/Dashboard/Myholdings';
import Watchlist from '../components/Dashboard/Watchlist';
import Mytransection from '../components/Dashboard/Mytransection';

function Dashboard() {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-20 mt-6 sm:mt-10'>
      <Cards/>

      <div className='flex flex-col justify-between lg:flex-row gap-5 mt-6'>
          <Charts/>
          <Statics/>
      </div>

      <div className='mt-6'>
        <Portfolio/>
      </div>

      <div className='mt-6'>
        <Myholdings/>
      </div>

      <div className='mt-6'>
        <Watchlist/>
      </div>

      <div className='mt-6'>
        <Mytransection/>
      </div>
    </div>
  );
}

export default Dashboard;
