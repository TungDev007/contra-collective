import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RightImg from '../../assets/images/what_we_do_right.png';

const useStyles = makeStyles((theme) => ({
    text_part: {
        '& h1': {
            fontWeight: 700,
            fontSize: 36,
            lineHeight: '50px',
            color: '#FFFFFF',
            textShadow:'0px 6px 25px #000D46',
            margin: '0 0 55px'
        },

        '& p': {
            fontWeight: 400,
            fontSize: 17.5,
            lineHeight: '28px',
            color: '#FFFFFF',
            letterSpacing: '0.02em',
            margin: '0 0 19px'
        }
    },
    right_image: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    [theme.breakpoints.down('sm')]: {
        right_image: {
            display: 'none'
        }
    },
}))

const WhatWeDo = () => {
    const classes = useStyles();
    return (
        <section id="what-we-do">
            <div className="content-container">
                <div className="text-description">
                    <Grid container> 
                        <Grid item xs={12} md={6} className={classes.text_part}>
                            <h1>What we Do</h1>
                            <p>Whether you’re a startup or established brand, we develop the tools you need to transform your operational efficiency and reach your target audience. </p>
                            <p>That way, you can focus on strategic projects and remain competitive in today’s marketplace.</p>
                        </Grid>
                    </Grid>                    
                </div>
            </div>
            <img src={RightImg} alt="" className={classes.right_image}/>
        </section>
    )
}

export default WhatWeDo;