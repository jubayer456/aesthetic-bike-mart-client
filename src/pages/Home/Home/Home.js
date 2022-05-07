import React from 'react';
import Banner from '../Banner/Banner';
import Benifit from '../Benifit/Benifit';
import Review from '../Review/Review';
import Services from '../Services/Services';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Benifit></Benifit>
            <Review></Review>
        </>
    );
};

export default Home;