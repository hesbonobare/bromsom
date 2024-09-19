import { Box, IconButton, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.jpeg'
import MenuIcon from '@mui/icons-material/Menu';



interface StateProps {
    isMenuOpen: boolean;
    active: number | null;
}
const Navbar = () => {

    const [state, setState] = useState<StateProps>({
        isMenuOpen: false,
        active: null
    });

    const { isMenuOpen, active } = state;

    // const handleNavClicked = (index: number) => {
    //     setState({
    //         ...state,
    //         active: index,
    //         isMenuOpen: false
    //     });
    // };

    const isMobile = useMediaQuery('(max-width:700px)');
    const navLinks = [
        { link: "/#home", label: "Home" },
        { link: "/#about", label: 'About' },
        { link: "/#architectural_services", label: 'Architectural Services' },
        { link: "/#civil", label: 'Civil And Structural Engineering' },
        { link: "/#patners", label: 'Our Partners' },
        { link: "/#contact", label: 'Contact' }
    ];
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                background: '#333',
                color: '#fff',
                padding: '10px 0',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 10,
                // marginBottom: 1000
                // height: { md: 70 }
                height: 60
            }}
        >

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 1
            }}>
                <img src={logo} alt='Bromsom'
                    style={{
                        height: 40,
                        width: 40,
                        objectFit: 'contain',
                        borderRadius: '100%'
                    }} />
                <Typography variant='h5' component='div' sx={{ fontWeight: 'bold', color: '#B87333' }} >Bromsom Investment Limited</Typography>
            </Box>

            {isMobile && (
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setState({
                        ...state,
                        isMenuOpen: true,
                    })}
                    sx={{ marginRight: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {(isMobile || isMenuOpen) && (
                <Menu open={isMenuOpen}
                    onClose={() => setState({
                        ...state,
                        isMenuOpen: false
                    })}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {navLinks.map((item, i) => (
                        <MenuItem
                            key={i}
                            selected={active === i}
                            onClick={() => setState({
                                ...state,
                                active: i,
                                isMenuOpen: false
                            })}
                        >
                            <a href={item.link}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                {item.label}
                            </a>
                        </MenuItem>
                    ))}
                </Menu>
            )}

            {!isMobile && (<Box sx={{ display: { xs: 'none', md: 'block' }, marginRight: 3 }}>
                {navLinks.map((item, i) => (
                    <a href={item.link}
                        key={i}
                        onClick={() => setState({ ...state, active: i })}
                        style={{
                            fontSize: '1rem',
                            padding: '5px 10px',
                            borderRadius: '9999px',
                            cursor: 'pointer',
                            margin: '5px 4px',
                            textDecoration: 'none',
                            color: i === active ? '#B87333' : '#fff',
                            borderBottom: i === active ? '2px solid #B87333' : 'none',
                        }}
                    >
                        {item.label}
                    </a>
                ))}
            </Box>)
            }
        </div >
    )
}

export default Navbar
