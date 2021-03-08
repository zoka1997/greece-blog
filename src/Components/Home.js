import React from 'react';
import HomeSection from '../Pages/HomeSection';
import '../Pages/HomeSection.css';
import HomeSectionTwo from '../Pages/HomeSectionTwo';
import '../Pages/HomeSectionTwo.css';

function Home() {
  return (
    <div className="Home">
       <HomeSection />
       <HomeSectionTwo />
    </div>
  );
}

export default Home;
