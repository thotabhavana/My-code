// import './src/App';
import '@mantine/core/styles.css';
import React from 'react';
import Myform from './form';
import UserTable from './table';
import { MantineProvider } from '@mantine/core';
import Usercard from './usercard';
// import DropdownComponent from './Dropdown';
import './form.css';
const App = ()  =>{
  return (
    <div className='App'>
      <MantineProvider>
      <Myform></Myform>
      <UserTable></UserTable>
     <Usercard></Usercard>
     {/* <DropdownComponent></DropdownComponent> */}
     </MantineProvider>
    </div>
  );
}

export default App;
