import { Box } from '@mui/system';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header';

export default function PrivateLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Box>
                    {children}
                </Box>
            </main>
        </>
    )
}
