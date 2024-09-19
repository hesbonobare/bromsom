import { Box, Typography, Grid, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

import { LoadingButton } from '@mui/lab';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

export interface InputProps {
    value: string | boolean
    label: string
    error?: string | null
    field: string
    required?: boolean,
    type?: string
    options?: { label: string, value: string }[]
}

interface StateProps {
    inputs: InputProps[];
    sending: boolean;
}

const Contact = () => {

    const formref = useRef(null)

    const initialInputs: InputProps[] = [
        { label: 'Name', value: '', field: 'name' },
        { label: 'Email Address', value: '', type: 'email', field: 'Email Address' },
        { label: 'Subject', value: '', field: 'Subject' },
        { label: 'Message', value: '', field: 'Write your message' }
    ];

    const [state, setState] = useState<StateProps>({
        inputs: initialInputs,
        sending: false
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };


    const phone = '0704251068'
    const handleCall = (phone: any) => {
        window.open(`tel:${phone}`, '_self');
    }

    const email = 'info@spotpool.com'
    const handleEmail = (email: any) => {
        window.open(`mailto:${email}`, '_self');
    }


    const { inputs, sending } = state

    return (
        <Box id='contact'>
            <Box data-aos="zoom-in" sx={{ marginTop: 20 }}>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 10,
                        flexDirection: { xs: 'column', md: 'row' },
                        marginX: { xs: 2, sm: 4, md: 10 },
                        marginY: 20,
                        backgroundColor: '#fff',
                        paddingLeft: { xs: 2, sm: 4, lg: 8 },
                        paddingRight: { xs: 2, sm: 4, lg: 8 },
                        paddingTop: { xs: 3, md: 10 },
                        paddingBottom: 5,
                        borderTopLeftRadius: { xs: 60, md: 130 },
                        borderBottomRightRadius: { xs: 60, md: 130 }
                    }}
                >
                    <Box sx={{ width: { md: '65%' } }}>
                        <Typography data-aos="fade-down" sx={{ fontSize: { xs: 23, sm: 30, md: 34 }, textAlign: 'center', mb: 2, fontWeight: 600, color: 'black' }}>Send Us A Message</Typography>
                        <Typography data-aos="fade-down" sx={{ marginBottom: 6 }}>Our dedicated team is ready to assist you every step of the way. Connect With Us Today!</Typography>

                        <Box component="form" ref={formref} onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container spacing={3}>
                                {
                                    inputs.map(({ label, type, value, field, error }, i) => (
                                        <Grid
                                            key={i}
                                            item
                                            xs={12}
                                            sm={label === 'Message' || label === 'Subject' ? 12 : 6}
                                            sx={{ width: '100%' }}
                                        >
                                            <TextField
                                                data-aos="fade-up"
                                                required={label !== 'Subject'}
                                                fullWidth
                                                label={label}
                                                // autoFocus={i === 0}
                                                error={Boolean(error)}
                                                maxRows={label === 'Message' ? 10 : undefined}
                                                minRows={label === 'Message' ? 5 : undefined}
                                                multiline={label === 'Message'}
                                            />
                                        </Grid>

                                    ))

                                }
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 5 }}>
                                <Grid item xs={3}>
                                    {/* <LoadingButton
                                        data-aos="fade-up"
                                        disabled={sending}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ textTransform: 'none' }}
                                        loading={sending}
                                    >
                                        SEND
                                    </LoadingButton> */}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Box>
                        <Typography data-aos="fade-down" sx={{ fontSize: { xs: 25, sm: 30, md: 34 }, textAlign: 'start', mb: 2, fontWeight: 'bold', marginBottom: { sm: 6 }, color: 'black' }}>Get In Touch</Typography>

                        <Box sx={{ marginBottom: { xs: 3, sm: 6 } }} data-aos="fade-down">
                            <Typography variant='h5' sx={{ display: 'flex', textAlign: 'start', marginBottom: 1, color: '#333333', fontSize: { xs: 19 } }}>Number</Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                }}
                                onClick={() => handleCall(phone)}
                            >
                                <LocalPhoneIcon sx={{ color: 'primary.main' }} />
                                <Typography variant='body1' sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        cursor: 'pointer',
                                    },
                                }}>0704251068</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ marginBottom: { xs: 3, sm: 6 } }}
                            onClick={() => handleEmail(email)}
                            data-aos="fade-up"
                        >
                            <Typography variant='h5' sx={{ display: 'flex', textAlign: 'start', marginBottom: 1, cursor: 'pointer', color: '#333333', fontSize: { xs: 19 } }}>Email</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <MailIcon sx={{ color: 'primary.main' }} />
                                <Typography
                                    variant='body1'
                                    sx={{
                                        '&:hover': {
                                            color: 'primary.main',
                                            cursor: 'pointer',
                                        }
                                    }
                                    }>info@spotpool.co</Typography>
                            </Box>
                        </Box>

                        <Box data-aos="fade-down">
                            <Typography variant='h5' sx={{ display: 'flex', textAlign: 'start', marginBottom: 1, cursor: 'pointer', color: '#333333', fontSize: { xs: 19 } }}>Business Hours</Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start' }}>Monday — Friday 8am – 5pm</Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start' }}>Saturday — 10am – 3pm</Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start' }}>Sunday — 10am – 3pm</Typography>
                        </Box>


                    </Box>
                </Box>


            </Box>
        </Box>
    )
}

export default Contact;
