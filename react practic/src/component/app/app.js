import React from 'react';
import Profile from '../profile';
import Header from '../header';
import NavBar from '../nav/nav';
import './app.scss';
const App = () => {
    return (
        <div className='app'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
};

export default App;