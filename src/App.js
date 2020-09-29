import React, { useState, useEffect } from 'react';
import './App.css';
import {Header} from './header.js';
import {Main} from './main.js';
import {Footer} from './footer.js';
import {SideNav} from './side-nav.js';
import {AccountSettings} from './account-settings';
import {Login} from './login';
import {Account} from './account';
import {AboutUs} from './about-us';
import {Meetings} from './meetings';






function App () {

  const [activeComponent, setActiveComponent] = useState(1);
  const [cName, setCName] = useState('App1');

  const handleSetActiveComponent = (id) => {
    setActiveComponent(id)
  }

  useEffect(() => {
    setCName(`App${activeComponent}`);
  },[activeComponent])

 return (
      <div className={`App ${cName}`}>
      <Header onclick = {handleSetActiveComponent}/>
      {activeComponent === 1 && <Main />}
      {activeComponent === 2 && <AboutUs />}
      {activeComponent === 3 && <Login />}
      {activeComponent === 4 && <Meetings />}
      {activeComponent === 5 && <Account onclick = {handleSetActiveComponent}/>}
      {activeComponent === 6 && <AccountSettings />}
      {activeComponent === 1 && <SideNav onclick = {handleSetActiveComponent} />}
     <Footer onclick = {handleSetActiveComponent} />
    </div>
  );
}

export default App;
