import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Select from 'react-select';

const useStyles = makeStyles((theme) => ({
    root: {
        '& input': {
            color: 'white !important',
            padding: '5px 0 10px',
            backgroundColor: 'transparent !important'
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
            width: 'calc(100% - 30px)',
            border: '2px solid #FFFFFF',
            outline: 'none',
            padding: '31px 0 0 25px',
            color: 'white',
            fontSize: 15,

            '&::placeholder': {
                fontSize: 15,
                letterSpacing: '0.02em',
                lineHeight: '21px',
                color: 'white',
                fontWeight: 400,
                fontStyle: 'italic'
            }
        }
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        textAlign: 'center',
        outline: 'none'
    },
}))

const options = [
    { value: '2-5K', label: '$2 000 - $5 000' },
    { value: '5-10K', label: '$5 000 - $10 000' },
    { value: '10-50K', label: '$10 000 - $50 000' },
    { value: '50-150K', label: '$50 000 - $150 000' },
    { value: '150K+', label: '< than $150 000' },
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
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Budget: '',
        Description: ''
    });
    const [selectedOption, setSelectedOption] = useState();

    const handleChange = (option) => {
        console.log('selectedOption', option)
        setSelectedOption(option);
        setFormData({ ...formData, Budget: option })
    }

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        const contact_form = document.forms['contact-form'];
        const contact_url = 'https://script.google.com/macros/s/AKfycbxDzYPStsjjm4f0DoXQg2t4Opj0fyh_XXw1FkX_xrYTkrPY8XZn/exec';

        fetch(contact_url, {method: 'POST', mode: 'no-cors', body: new FormData(contact_form)})
        .then(res => setModalOpen(true))
        .catch(error => console.error('Error!', error.message))
    }

    const handleClose = () => {
        setModalOpen(false)
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
                        <form name="contact-form">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField id="name" label="Name" name="Name" className={classes.textField} onChange={(e) => onChange(e)} />
                                </Grid>
                                {/* <Grid item xs={12} md={6}>
                                    <TextField id="surname" label="Surname" className={classes.textField} />
                                </Grid> */}
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField id="email" label="Email" name="Email" className={classes.textField} onChange={(e) => onChange(e)}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                {/* <Grid item xs={12} md={7}>
                                    <TextField id="phone" label="Phone" className={classes.textField} />
                                </Grid> */}
                                <Grid item xs={12}>                                
                                    <Select
                                        value={selectedOption}
                                        onChange={() => handleChange(selectedOption)}
                                        options={options}
                                        styles={customStyles}
                                        placeholder="Your Budget"
                                        classNamePrefix="custom-select"
                                        className="custom-select"
                                        name="Budget"                                 
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <textarea name="Description" cols="30" rows="10" placeholder="Your project description..." onChange={(e) => onChange(e)}></textarea>
                                </Grid>
                            </Grid>
                        </form>                                                
                        <button className="default-btn" onClick={() => handleSubmit()}>Submit</button>
                    </Grid>  
                </Grid>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.paper}>
                        <h2 id="simple-modal-title">Thank You</h2>
                        <p id="simple-modal-description">Thank you! You have submitted your note to the team at Contra Collective!</p>
                        <button className="default-border-btn" onClick={handleClose}>Okay</button>
                    </div>
                </Modal>                
            </div>            
        </section>
    )
}

export default Contact;