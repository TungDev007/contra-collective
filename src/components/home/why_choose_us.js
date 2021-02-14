import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Logo1 from '../../assets/images/logos/molson.svg';
// import Logo2 from '../../assets/images/logos/marketo.svg';
// import Logo3 from '../../assets/images/logos/sendspark.svg';
// import Logo4 from '../../assets/images/logos/spart.svg';
// import Logo5 from '../../assets/images/logos/positive.svg';
// import Logo6 from '../../assets/images/logos/yale.svg';
import Logo1 from '../../assets/images/live/logo1.png';
import Logo2 from '../../assets/images/live/logo2.png';
import Logo3 from '../../assets/images/live/logo3.png';

// const logoList1 = [Logo1, Logo2, Logo3, Logo4];
// const logoList2 = [Logo5, Logo6, Logo1];

const logoList = [Logo1, Logo2, Logo3];

const useStyles = makeStyles((theme) => ({
    image_group: {
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    image_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& img': {
            width: '100%',

            [theme.breakpoints.down('sm')]: {
                width: 200,
                height: 100,
                objectFit: 'cover',
            },
        }
    }
}))

const WhyChooseUs = () => {
    const classes = useStyles();
    return (
        <section id="why-choose-us">
            <div className="content-container">
                <h1 className="title">Why do people choose us?</h1>
                <p className="title-description">Contra is a powerhouse engineering collective of developers, creatives, and corporate nonconformists who innovate and develop cross-device, cross-platform software for SMEs as well as the occasional Fortune 500 company.</p>
                {/* <Grid container spacing={3}>                    
                    {
                        logoList1.map((item, index) => (
                            <Grid item xs={12} md={3} key={index} className={classes.image_item}>
                                <img src={item} alt=""/>
                            </Grid>                            
                        ))
                    }
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={2}></Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            {
                                logoList2.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index} className={classes.image_item}>
                                        <img src={item} alt=""/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>                    
                    <Grid item xs={12} md={2} ></Grid>
                </Grid> */}
                <Grid container spacing={3} className={classes.image_group}>                 
                    {
                        logoList.map((item, index) => (
                            <Grid item xs={12} md={3} key={index} className={classes.image_item}>
                                <img src={item} alt=""/>
                            </Grid>                            
                        ))
                    }
                </Grid>                            
            </div>
        </section>
    )
}

export default WhyChooseUs;