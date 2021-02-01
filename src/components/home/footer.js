import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/images/footer_logo.png';
import FooterLeftImg from '../../assets/images/footer_left.png';

const useStyles = makeStyles((theme) => ({
    footer_item: {
        zIndex: 2,
        
        '& h1': {
            fontWeight: 700,
            fontSize: 17.5,
            lineHeight: '24px',
            color: '#FFFFFF',
            margin: '0 0 32px',
        },

        '& ul': {
            listStyle: 'none',
            padding: 0,

            '& li': {
                marginBottom: 16,

                '& a': {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 16,
                    letterSpacing: '0.02em'
                },

                '& p': {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 16,
                    letterSpacing: '0.02em'
                }
            }
        }
    },
    footer_other_item: {
        textAlign: 'right',

        '& p': {
            color: 'white',
            textDecoration: 'none',
            fontSize: 16,
            letterSpacing: '0.02em'
        }
    },
    left_img: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    [theme.breakpoints.down('md')]: {
        footer_other_item: {
            textAlign: 'left'
        },
        left_img: {
            display: 'none'
        }
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div id="footer">
            <div className="content-container">
                <Grid container spacing={3}>                    
                    <Grid item xs={12} md={3} className={classes.footer_item}>
                        <h1>MENU</h1>
                        <ul>
                            <li><a href="#who-we-are">Who We Are</a></li>
                            <li><a href="#what-we-do">What We Do</a></li>
                            <li><p>Get in Touch</p></li>
                        </ul>                                                                    
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.footer_item}>
                        <h1>GET IN TOUCH</h1>
                        <ul>
                            <li><a href="mailto: hello@contracollective.com">hello@contracollective.com</a></li>
                            <li><a href="mailto: support@contracollective.com">support@contracollective.com</a></li>
                            <li></li>
                        </ul>                                                
                    </Grid>
                    <Grid item xs={12} md={3}/>
                    <Grid item xs={12} md={3} className={classes.footer_other_item}>
                        <img src={Logo} alt=""/>
                        <p>© 2021 Contra Collective LLC.</p>
                    </Grid>
                </Grid>
            </div>
            <img src={FooterLeftImg} alt="" className={classes.left_img}/>
        </div>
    )
}

export default Footer;