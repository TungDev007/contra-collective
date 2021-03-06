import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import productImg1 from '../../assets/images/products/custom.svg';
import productImg2 from '../../assets/images/products/shopify.svg';
import productImg3 from '../../assets/images/products/web.svg';
import productImg4 from '../../assets/images/products/erp.svg';
import productImg5 from '../../assets/images/products/ui.svg';
import productImg6 from '../../assets/images/products/store.svg';

const products = [
    {
        img: productImg1,
        title: 'Custom & Native Mobile Apps',
        description: 'We develop cross-platform mobile apps that scale for iOS and Android, desktop and mobile.'
    },
    {
        img: productImg2,
        title: 'Shopify & Wordpress Development ',
        description: 'Increase revenue and improve conversions with streamlined eCommerce solutions.'
    },
    {
        img: productImg3,
        title: 'Beautiful Web Applications',
        description: 'We build custom web apps, from tailored dashboards to headless eCommerce experiences.'
    },
    {
        img: productImg4,
        title: 'ERP Implementations & Connectors',
        description: 'We implement customizations, integrations, and workflows to maximize your efficiency.'
    },
    {
        img: productImg5,
        title: 'UI/UX Design',
        description: 'We build custom web apps, from tailored dashboards to headless eCommerce experiences.'
    },
    {
        img: productImg6,
        title: 'Storefront Migrations',
        description: 'Get setup and running no matter your eCommerce storefront of choice.'
    },
]

const useStyles = makeStyles((theme) => ({
    product_item: {
        padding: '35px !important',

        '& .product-item': {
            maxWidth: 539,
            background: '#F6F8FF',
            minHeight: 206,
            padding: '90px 55px',
            margin: '0 auto',

            '& img': {
                marginBottom: 43
            },

            '& h3': {
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '38px',
                color: '#151515',
                margin: '0 0 41px'
            },

            '& p': {
                fontWeight: 400,
                fontSize: 15,
                lineHeight: '24px',
                color: '#1A1A1A',
                letterSpacing: '0.02em',
                margin: 0
            }
        }
    },
    [theme.breakpoints.down('md')]: {
        product_item: {
            padding: '15px !important',
            '& .product-item': {
                padding: '40px 20px',
            }
        }
    },
}))

const ProductList = () => {
    const classes = useStyles();
    return (
        <section id="product-list">
            <div className="content-container">
                <Grid container spacing={3}>
                    {
                        products.map((item, index) => (
                            <Grid item xs={12} md={6} key={index} className={classes.product_item}>
                                <div className="product-item">
                                    <img src={item.img} alt=""/>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>                                
                            </Grid>                            
                        ))
                    }
                </Grid>                
            </div>
        </section>
    )
}

export default ProductList;