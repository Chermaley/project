import React from 'react';
// import Profile from '../profile';
import Header from '../header';
import NavBar from '../nav/nav';
import Dialogs from "../dialogs";
import './app.scss';
const App = () => {
    return (
        <div className='app'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
};

export default App;