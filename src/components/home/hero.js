import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LogoWhite from '../../assets/images/logo-white.png';
import LogoBlack from '../../assets/images/logo-black.png';
import RightImg from '../../assets/images/hero-right.svg';
import MenuImgBlack from '../../assets/images/mobile-menu_black.svg';
import MenuImgWhite from '../../assets/images/mobile-menu_white.svg';

const useStyles = makeStyles((theme) => ({
    text_part: {
        '& h1': {
            fontWeight: 700,
            fontSize: 48,
            lineHeight: '66px',
            color: '#FFFFFF',
            margin: '0 0 33px',
            maxWidth: 508
        },

        '& p': {
            fontWeight: 400,
            fontSize: 15,
            lineHeight: '21px',
            color: '#E0E0E0',
            letterSpacing: '0.02em',
            margin: '0 0 39px',
            maxWidth: 489
        }
    },
    right_image: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    [theme.breakpoints.down('sm')]: {
        right_image: {
            display: 'none'
        }
    },
}));

const WindowWidth = () => {
    const [width, setWidth] = useState();
  
    useEffect(() => {
      function handleWidth() {      
        setWidth(window.innerWidth);
      }
      
      window.addEventListener("resize", handleWidth);
      handleWidth();
  
      return () => window.removeEventListener("resize", handleWidth);
    }, []);
  
    return width;
  }
  

const Hero = () => {
    const classes = useStyles();

    const width = WindowWidth();
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [sticky, setSticky] = useState();
    const handleScroll = () => {
        if(window.pageYOffset > 61) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    };

    useEffect(() => {
        if(width < 960) {
          setShowMobileMenu(false)
        }
      }, [width])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <section id="hero-part">
            <div className="bg"></div>
            <div className="fake-background"></div>           
            <div className={`header ${sticky ? "sticky" : ""}`}>
                <div className="content-container">
                    {
                        sticky ? <img src={LogoBlack} alt=""/> : <img src={LogoWhite} alt=""/>
                    }
                    {
                        width > 1024 ? 
                        <div className={`right-control ${sticky ? "sticky" : ""}`}>
                            <div className="nav-item">
                                <a href="#who-we-are">WHO WE ARE</a>
                            </div>
                            <div className="nav-item">
                                <a href="#what-we-do">WHAT WE DO</a>
                            </div>                        
                            <button className={`outline-btn ${sticky ? "sticky" : ""}`}>WHAT WE DO</button>
                        </div> : 
                        <img src={sticky ? MenuImgBlack : MenuImgWhite} alt="" onClick={() => toggleMobileMenu()}/>
                    }                    
                </div>
                {
                    showMobileMenu ? 
                    <div className="mobile-menu">
                        <div className="menu-item" >
                            <a href="#who-we-are">WHO WE ARE</a>
                        </div>
                        <div className="menu-item">
                            <a href="#what-we-do">WHAT WE DO</a>
                        </div>
                        <div className="menu-item">
                            <button className="outline-btn">WHAT WE DO</button>
                        </div>            
                    </div> : null
                }
            </div>
            <div className="hero-section">
                <div className="content-container">
                    <Grid container> 
                        <Grid item xs={12} md={6} className={classes.text_part}>
                            <h1>We’re a full-stack engineering house without the extra baggage.</h1>
                            <p>Our agility as a nimble team coupled with our technical acumen allows us to build cross-device software that is highly consumable and achieves your product goals.</p>
                            <button className="default-btn">Let’s Talk</button>
                        </Grid>
                    </Grid>
                </div>
                <img src={RightImg} alt="" className={classes.right_image}/>
            </div>         
        </section>
    )
}

export default Hero;