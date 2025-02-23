import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';
import { AccountCircle } from '@mui/icons-material';

function App() {
  return (
    <div className='App'>
      <Header title='conatct'/>
     <Contacts
     name='Amir'
     email='amir@gmail.com'
     number='09056082788'
     icon={<AccountCircle/>}
     />
     <Contacts
     name='Nazanin'
     email='nazaninsgh9@gmail.com'
     number='09056364770'
     icon={<AccountCircle/>}
     />
     <Contacts
     name='Farzin'
     email='farzin@gmail.com'
     number='09925094247'
     icon={<AccountCircle/>}
     />
    </div>
  );
}

export default App;
