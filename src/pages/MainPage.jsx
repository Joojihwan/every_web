import React from 'react';
import {ListView, Header, Footer} from '../components';
import './MainPage.css';

function MainPage () {
    return (
        <>
            <Header/>
            <div>
                <ListView>

                </ListView>
            </div>
            <Footer/>
        </>
    );
}

export default MainPage;