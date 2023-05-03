import React from 'react';
import components from '../components/index';
import './MainPage.css';

function MainPage () {
    return (
        <>
            <div className='main_header'>
                Header
            </div>
            <div>
                <components.ListView>
                    
                </components.ListView>
                <components.Login>
                    
                </components.Login>
            </div>
            <div className='main_footer'>
                Footer
            </div>
        </>
    );
}

export default MainPage;