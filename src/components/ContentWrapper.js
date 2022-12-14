import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper() {
    return (

    <div id="content-wrapper" className="d-flex flex-column">
        {/*Divider*/}
            {/*Main Content*/}
            <div id="content">

                <TopBar/>
                <ContentRowTop/>
            </div>
            {/*End of MainContent*/}
            <Footer/>
    </div>
    );
  }
  
  export default ContentWrapper; 