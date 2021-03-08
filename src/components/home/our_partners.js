import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo1 from '../../assets/images/new_partners/partner1.png';
import Logo2 from '../../assets/images/new_partners/partner2.png';
import Logo3 from '../../assets/images/new_partners/partner3.png';

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
                objectFit: 'contain',
            },
        }
    }
}))

const OurPartners = () => {
    const classes = useStyles();
    return (
        <section id="our-partners">
            <div className="content-container">
                <h1 className="title">Our Partners</h1>
                <p className="title-description">Contra Collective has partnerships with some of the web’s most popular service providers.  We work closely with our partners to deliever high quality products.</p>
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

export default OurPartners;