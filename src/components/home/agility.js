import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../../assets/images/agility/1.png';
import Image2 from '../../assets/images/agility/2.png';
import Image3 from '../../assets/images/agility/3.png';

const agilityList = [
    { id: 1, text: 'Allows you to interact with your customers in a real way.', img: Image1},
    { id: 2, text: 'Increases product diversification and customer accessibility.', img: Image2},
    { id: 3, text: 'Solves inefficiencies and maximizes profitability.', img: Image3},
];

const useStyles = makeStyles((theme) => ({
    agility_item: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        '& .title_part': {            
            width: '100%'
        },

        '& p': {
            fontSize: 17.5,
            lineHeight: '28px',
            fontWeight: 400,
            color: '#1A1A1A',
            letterSpacing: '0.02em',
            maxWidth: 304,            
        },

        '&  h1': {
            fontSize: 48,
            lineHeight: '58px',
            fontWeight: 800,
            letterSpacing: '0.02em',
            margin: 0,
            textShadow: '0px 6px 25px #E7ECFF',
        },

        '& .border': {
            width: 66
        },

        '&.item-1': {

            '&  h1': {                
                color: '#EC772F',              
            },

            '& .border': {                
                borderBottom: '5px solid #EC772F'
            }
        },

        '&.item-2': {

            '&  h1': {                
                color: '#469ADF'               
            },

            '& .border': {                
                borderBottom: '5px solid #469ADF'
            }
        },

        '&.item-3': {

            '&  h1': {                
                color: '#000D46',                
                           
            },

            '& .border': {                
                borderBottom: '5px solid #000D46'
            }
        }
    },
    [theme.breakpoints.up('md')]: {
        agility_item: {
            '&:not(:last-child)': {
                '& .title_part': {
                    borderRight: '2.5px solid #FFFFFF'
                },            
            },
        }
    },
}));

const Agility = () => {
    const classes = useStyles();
    return (
        <section id="agility">
            <div className="content-container">
                <h1 className="title">Agility</h1>
                <p className="title-description">Our agility as a nimble team coupled with our technical acumen allows us to build cross-device software that is highly consumable and achieves your product goals:</p>
                <Grid container>
                    {
                        agilityList.map((item, index) =>(
                            <Grid item xs={12} md={4} key={index} className={classes.agility_item + ' item-' + item.id}>
                                <div className="title_part">
                                    {/* <h1>{item.id}</h1> */}
                                    <img src={item.img} alt=""/>
                                </div>
                                {/* <div className="border"/> */}
                                <p>{item.text}</p>
                            </Grid>
                        ))
                    }                    
                </Grid>
            </div>              
        </section>
    )
}

export default Agility;