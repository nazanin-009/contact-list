import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';
import { AccountCircle } from '@mui/icons-material';
import DarkModeProvider from './data/contexts/DarkMode.context';
import Home from './components/home/Home';
import NewContact from './components/contacts/NewContact';
import HabitProvider, { ContactContext } from './data/contexts/ContactsData.context';
import ContactProvider from './data/contexts/ContactsData.context';


function App() {
  const [currentPage,setCurrentPage]=useState("home")
  const changePage=(pageName:string)=>{
    setCurrentPage(pageName)
  }
const goHome=()=>{
  setCurrentPage("home")
}
  return (
   <DarkModeProvider>
  <ContactProvider>
    <div className='App'>
      <Header title='conatct'/>
     {currentPage == "Add" && <NewContact onButtonClick={goHome} contactIndex={0}/>}
     {currentPage == "home" && <Home onPageSelect={changePage}/>}

     </div>
     </ContactProvider>
    </DarkModeProvider>
 
  );
}

export default App;
