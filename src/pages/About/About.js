import React from 'react';
import about from '../../img/About .jpg'
import PageTitle from '../Shared/PageTitle/PageTitle';
const About = () => {
    return (
        <div className='container'>
            <PageTitle title='About'></PageTitle>
            <h1 className='text-center p-5 m-3'>About Aesthetic bike mart</h1>
            <div className="row g-5 mb-5 pb-5 pt-2 d-flex align-items-center">
                <div className="col-12 col-lg-7">
                    <p>Aesthetic bike mart A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies. The 1885 Daimler Reitwagen made by Gottlieb Daimler and Wilhelm Maybach in Germany was the first internal combustion, petroleum-fueled motorcycle. In 1894, Hildebrand  Wolfmüller became the first series production motorcycle

                    </p>
                </div>
                <div className='col-12 col-lg-5'>
                    <img className='img-fluid' src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;