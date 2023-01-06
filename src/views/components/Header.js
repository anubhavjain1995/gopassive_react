import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Logo from '../../assets/Logo.svg'

export default function Header() {
    return (
        <Paper className="fixed-navbar mh-90 h-100 mb-10">
        <Grid container className='ai-center pr-75 pl-75 ai-center h-100'>
            <Grid item xs={3}>
                <Box component={'img'} 
                src={Logo}
                />
            </Grid>
            <Grid item xs={6}>
                <Grid container className='jc-center'>
                    <Grid item className='mr-45 fs-16 fw-500 lh-24'>Home</Grid>
                    <Grid item className='mr-45 fs-16 fw-500 lh-24'>About Us</Grid>
                    <Grid item className='mr-45 fs-16 fw-500 lh-24'>Services</Grid>
                    <Grid item className='mr-45 fs-16 fw-500 lh-24'>Blogs</Grid>
                    <Grid  className='fs-16 fw-500 lh-24'>Contact Us</Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container className='jc-center'>
                <Grid item className='mr-45 fs-16 fw-500 lh-24'>Downlod</Grid>
                <Grid item className='fs-16 fw-500 lh-24'>Login</Grid>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    )
}
