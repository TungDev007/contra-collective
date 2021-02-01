import React from 'react';
import Slider from "react-slick";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import User1 from '../../assets/images/user1.jpg';
import User2 from '../../assets/images/user2.jpg';
import User3 from '../../assets/images/user3.jpg';

const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="slick-arrow right" onClick={onClick}>
            <ChevronLeftIcon fontSize={'large'}/>
        </div>
    );
};

const PrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div className="slick-arrow left" onClick={onClick}>
            <ChevronRightIcon fontSize={'large'}/>
        </div>
    );
};

const WhatPeopleSay = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <PrevArrow />,
        prevArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const slideData = [        
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor bibendum adipiscing erat adipiscing tellus. Vitae porttitor pretium, nec egestas justo morbi. Augue ipsum neque, faucibus pellentesque. Facilisis venenatis amet in lectus congue quam sus-pendisse.',
            name: 'Antony Johnsons',
            role: 'CEO @ Lorem Ipsum',
            location: 'California, USA',
            img: User1
        },
        {
            text: 'Faucibus pellentesque. Facilisis venenatis amet in lectus congue quam sus-pendisse. Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing erat adipis uguen ipsum neque, faucibus pellentesque. Facilisis venenatis amet neuro vagas.',
            name: 'Sigmund Neuram',
            role: 'Head Manager @ Dolor Amet',             
            location: 'Virginia, USA',
            img: User2
        },
        {
            text: 'Faucibus pellentesque. Facilisis venenatis amet in lectus congue quam sus-pendisse. Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing erat adipis uguen ipsum neque, faucibus pellentesque. Facilisis venenatis amet neuro vagas.',
            name: 'Sigmund Neuram',
            role: 'Head Manager @ Dolor Amet',             
            location: 'Virginia, USA',
            img: User2
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tortor bibendum adipiscing erat adipiscing tellus. Vitae porttitor pretium, nec egestas justo morbi. Augue ipsum neque, faucibus pellentesque. Facilisis venenatis amet in lectus congue quam sus-pendisse.',
            name: 'Antony Johnsons',
            role: 'CEO @ Lorem Ipsum',
            location: 'California, USA',
            img: User1
        },      
    ]

    return (
        <section id="what-people-say">
            <div className="content-container">
                <h3 className="title">What people say</h3>
                <p className="title-description">Whether you’re a startup or established brand, we develop the tools you need to transform your operational efficiency and reach your target audience.</p>
                <Slider {...settings}>
                    {
                        slideData.map((item, index) => (
                            <div key={index} className="slide-item">
                                <p className="description">“ {item.text} ”</p>
                                <div className="slide-content">
                                    <div className="text-part">
                                        <h5 className="client-name">{item.name}</h5>
                                        <p className="client-role">{item.role}</p>
                                        <p className="client-location">{item.location}</p>                                    
                                    </div>
                                    <div className="image-part">
                                        <img src={item.img} alt="" className="polygon"/>
                                        {
                                            index % 2 ?                                                 
                                                <>
                                                    <div className="rect3"></div>
                                                    <div className="rect4"></div>
                                                    <div className="rect5"></div>
                                                </> :
                                                <>
                                                    <div className="rect1"></div>
                                                    <div className="rect2"></div>
                                                </> 
                                        }
                                    </div>                                    
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default WhatPeopleSay;