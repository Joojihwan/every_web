import React from 'react';
import {ListView} from '../components';
import './MainPage.css';

function MainPage () {
    return (
        <>
            <div className='main_header'>
                Header
            </div>
            <div>
                <ListView>

                </ListView>
            </div>
            <div className='main_footer'>
                Footer
            </div>
        </>
    );
}

export default MainPage;