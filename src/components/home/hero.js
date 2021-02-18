import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LogoWhite from '../../assets/images/white-logo.svg';
import LogoBlack from '../../assets/images/contralogo.svg';
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
    contact_link: {
        marginTop: 70
    },
    [theme.breakpoints.down('sm')]: {
        right_image: {
            display: 'none'
        },
        text_part: {
            '& h1': {
                fontSize: 34,
                lineHeight: '55px'
            }
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

const useOnClickOutside = (ref, handler, exceptional) => {
    useEffect(
      () => {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target) || exceptional.current.contains(event.target) ) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      
      [ref, handler, exceptional]
    );
  }
  

const Hero = () => {
    const classes = useStyles();

    const width = WindowWidth();
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [sticky, setSticky] = useState();
    const ref = useRef();
    const exceptional = useRef();
    
    useOnClickOutside(ref, () => setShowMobileMenu(false), exceptional);

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

    const goToPage = () => {
        setShowMobileMenu(false)
    }

    return (
        <section id="hero-part">
            <div className="bg"></div>
            <div className="fake-background"></div>           
            <div className={`header ${sticky ? "sticky" : ""}`}>
                <div className="content-container">
                    <a href="#hero-part">
                        {
                            sticky ? <img src={LogoBlack} alt=""/> : <img src={LogoWhite} alt=""/>
                        }
                    </a>                    
                    {
                        width > 1024 ? 
                        <div className={`right-control ${sticky ? "sticky" : ""}`}>
                            <div className="nav-item">
                                <a href="#who-we-are">WHO WE ARE</a>
                            </div>
                            <div className="nav-item">
                                <a href="#what-we-do">WHAT WE DO</a>
                            </div>
                            <div className="nav-item">
                                <a href="#contact" className={`outline-btn ${sticky ? "sticky" : ""}`}>GET IN TOUCH</a>
                            </div>                                                 
                        </div> : 
                        <img src={sticky ? MenuImgBlack : MenuImgWhite} alt="" onClick={() => toggleMobileMenu()} ref={exceptional}/>
                    }                    
                </div>
                {
                    showMobileMenu ? 
                    <div className="mobile-menu" ref={ref}>
                        <div className="menu-item" >
                            <a href="#who-we-are" onClick={() => goToPage()}>WHO WE ARE</a>                            
                        </div>
                        <div className="menu-item">
                            <a href="#what-we-do" onClick={() => goToPage()}>WHAT WE DO</a>                            
                        </div>
                        <div className="menu-item">
                            <a href="#contact" className="outline-btn">GET IN TOUCH</a>
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
                            <div className={classes.contact_link}>
                                <a href="#contact" className="default-btn">Let’s Talk</a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <img src={RightImg} alt="" className={classes.right_image}/>
            </div>         
        </section>
    )
}

export default Hero;