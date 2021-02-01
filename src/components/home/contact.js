import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

const useStyles = makeStyles((theme) => ({
    root: {
        '& input': {
            color: 'white',
            padding: '5px 0 10px'
        },
        '& select': {
            color: 'white',
            padding: '5px 0 10px'
        },
        '& label': {
            color: 'white',
            fontSize: 15
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid white !important'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    textField: {
        width: '100%',
    },
    half_item: {
        '& h3': {
            fontWeight: 700,
            fontSize: 36,
            lineHeight: '43px',
            color: '#FFFFFF',
            margin: '0 0 58px',
            maxWidth: 287            
        },

        '& p': {
            fontWeight: 400,
            fontSize: 17.5,
            lineHeight: '28px',
            color: '#fff',
            letterSpacing: '0.02em',
            margin: 0
        },

        '& textarea': {
            margin: '50px 0',
            backgroundColor: 'transparent',
            width: 'calc(100% - 24px)',
            border: '2px solid #FFFFFF',
            outline: 'none',
            padding: '31px 0 0 25px',
            color: 'white',

            '&::placeholder': {
                fontSize: 15,
                letterSpacing: '0.02em',
                lineHeight: '21px',
                color: 'white',
                fontWeight: 400,
                fontStyle: 'italic'
            }
        }
    }
}))

const options = [
    { value: 1, label: '$2 000 - $5 000' },
    { value: 2, label: '$5 000 - $10 000' },
    { value: 3, label: '$10 000 - $50 000' },
    { value: 4, label: '$50 000 - $150 000' },
    { value: 5, label: '< than $150 000' },
];

const customStyles = {
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isFocused ? "#F5C244" : null,
        color: "#1A1A1A",
        padding: '19px 0 19px 20px',
        fontSize: 12,
        fontWeight: isSelected ? 600: 400
    }),
    dropdownIndicator: (styles, state) => ({
        ...styles,
        transform: state.selectProps.menuIsOpen && "rotate(180deg)"
    })
};

const Contact = () => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState();

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    }
    return (
        <section id="contact" className={classes.root}>
            <div className="content-container">
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.half_item}>
                        <h3>Do You Strive For Greatness?</h3>
                        <p>Let’s make your business better.</p>
                        <p>Submit the form to get in touch with us.</p>
                    </Grid>  
                    <Grid item xs={12} md={6} className={classes.half_item}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField id="name" label="Name" className={classes.textField} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="surname" label="Surname" className={classes.textField} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField id="email" label="Email" className={classes.textField} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={7}>
                                <TextField id="phone" label="Phone" className={classes.textField} />
                            </Grid>
                            <Grid item xs={12} md={5}>                                
                                <Select
                                    value={selectedOption}
                                    onChange={() => handleChange(selectedOption)}
                                    options={options}
                                    styles={customStyles}
                                    placeholder="Your Budget"
                                    classNamePrefix="custom-select"
                                    className="custom-select"                                    
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Your project description..."></textarea>
                            </Grid>
                        </Grid>                        
                        <button className="default-btn">Submit</button>
                    </Grid>  
                </Grid>                
            </div>            
        </section>
    )
}

export default Contact;