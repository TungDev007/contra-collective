import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VSImg from '../../assets/images/vs.svg';

const ourApproach = [
    'Nimble, agile teams.',
    'Strategic, targeted solutions.',
    'MVP development.',
    'Direct communication and proactive management.',
    'Under promising and over delivering.',
];

const agencyModels = [
    'Over zealous project management fees.',
    'Long-term vested interest or monthly obligations.',
    'Project delays and cost overruns.',
    '“Waterfall” approach to software development.',
];

const useStyles = makeStyles((theme) => ({
    our_approach: {
        "& div": {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 50,

            '& h3': {
                fontSize: 24,
                lineHeight: '29px',
                fontWeight: 'bold',
                color: '#151515',
                letterSpacing: '0.02em'
            },

            '& img': {
                marginLeft: 30,
                marginRight: 14
            }
        }, 
        "& ul": {
            paddingLeft: 0,
            '& li': {
                color: '#1A1A1A',
                fontSize: 15,
                lineHeight: '21px',
                fontWeight: 500,
                marginBottom: 17,
                letterSpacing: '0.02em'
            }
        }
    },
    agency_model: {
        "& div": {
            marginBottom: 74,
            '& h3': {
                fontSize: 24,
                lineHeight: '29px',
                fontWeight: 500,
                color: '#151515',
                letterSpacing: '0.02em',
                maxWidth: 171
            }
        }, 
        "& ul": {
            paddingLeft: 0,
            '& li': {
                color: '#4F4F4F',
                fontSize: 15,
                lineHeight: '21px',
                fontWeight: 300,
                marginBottom: 18,
                letterSpacing: '0.02em'
            }
        }
    },
    main_description: {
        '& h3': {
            fontSize: 36,
            fontWeight: 700,
            lineHeight: '43px',
            margin: '0 0 55px',
            maxWidth: 267,
            textShadow: '0px 6px 25px #EBEFFF',
            color: '#151515'
        },
        '& p': {
            fontSize: 17.5,
            fontWeight: 400,
            lineHeight: '28px',
            margin: '0 0 26px',
            maxWidth: 389
        }
    },
    [theme.breakpoints.down('md')]: {
        our_approach: {
            padding: 20,
            "& ul": {
                paddingLeft: 20
            }
        },
        agency_model: {
            padding: 20,
            "& ul": {
                paddingLeft: 20
            },
            "& div": {                
                '& h3': {                    
                    maxWidth: 272
                }
            }, 
        },

    },
}));

const DifferentApproach = () => {
    const classes = useStyles();
    return (
        <section id="different-approach">
            <div className="content-container">
                <Grid container spacing={3}>                
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>  
                            <Grid item xs={12} sm={6} className={classes.our_approach}>
                                <div>
                                    <h3>Our Approach</h3>
                                    <img src={VSImg} alt=""/>
                                </div>                        
                                <ul>
                                    {
                                        ourApproach.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.agency_model}>
                                <div>
                                    <h3>Most Agency Models</h3>                            
                                </div>                        
                                <ul>
                                    {
                                        agencyModels.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.main_description}>
                        <h3>A Different Approach</h3>
                        <p>Oftentimes, you have to take a step back and see the big picture to determine the road forward. </p>
                        <p>At Contra Collective, we come in detached and solve problems with  “bird’s eye” intelligence and innovative “deep dive” engineering.</p>
                        <button className="default-btn">Let’s Build My Product</button>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default DifferentApproach;