import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MainImg from '../../assets/images/who_we_are.png';

const useStyles = makeStyles((theme) => ({
    self_container: {
        alignItems: "center"
    },
    half_section: {
        "& h1": {
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '50px',
            margin: '0 0 55px',
            textShadow: '0px 6px 25px #EBEFFF',
            color: '#151515' 
        },
        "& p": {
            fontSize: 17.5,
            fontWeight: 400,
            lineHeight: '28px',
            margin: 0 
        },
        "& img": {
            width: '90%',
            float: 'right',
        }
    },
    [theme.breakpoints.down('md')]: {
        half_section: {
            "& img": {
                width: '100%',
                height: 350,
                objectFit: 'contain'
            }
        }
    },
}));

const WhoWeAre = () => {
    const classes = useStyles();
    return (
        <section id="who-we-are">
            <div className="content-container">
                <Grid container spacing={3} className={classes.self_container}>
                    <Grid item xs={12} md={6} className={classes.half_section}>
                        <h1>Who we are?</h1>
                        <p>We are Contra Collective. Our lean and mean dream team 
                            of expert developers, digital strategists, designers, 
                            and creatives are experts at innovating and building 
                            the applications, backend processes, and digital solutions 
                            you need to scale and flourish.</p>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.half_section}>
                        <img src={MainImg} alt=""/>
                    </Grid>
                </Grid>                
            </div>
        </section>
    )
}

export default WhoWeAre;