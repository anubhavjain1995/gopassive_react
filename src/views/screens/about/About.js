import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Rectangle from '../../../assets/Rectangle.svg'
import Wave from '../../../assets/Wave.svg'
import Icon1 from '../../../assets/Icon1.svg'
import Icon2 from '../../../assets/Icon2.svg'
import Icon3 from '../../../assets/Icon3.svg'
import Icon4 from '../../../assets/Icon4.svg'
import Icon5 from '../../../assets/Icon5.svg'
import Icon6 from '../../../assets/Icon6.svg'
import Icon7 from '../../../assets/Icon7.svg'
import Icon8 from '../../../assets/Icon8.svg'

import Rectangle1 from '../../../assets/Rectangle1.svg'

export default function About() {
    return (
        <> <div className='app-container'>

            <Grid container className='jc-center mt-150 w-100'>
                <Grid item xs={12} className='text-center'>
                    <p className='fs-24 fw-700 lh-36 m-0'>About Us</p>
                </Grid>
                <Grid item xs={12} className='text-center'>

                    <Box component={'img'}

                        src={Rectangle}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={'center'}>
                        <Typography className='mw-450 text-center p-0 m-0'>
                            At Go Passive, one of the exclusive mediums to
                            generate passive income, we believe trading requires
                            expertise, thorough knowledge of markets, and a
                            balanced approach to play safe and bright in this
                            fastest-growing trading world.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Box component={'img'}
                    sx={{
                        width: '1200px',
                        maxWidth: '1200px',
                        maxHeight: '500px',
                        transform: 'matrix(0.98, 0.19, 0.19, -0.98, 0, 0)'

                    }}
                    src={Wave}
                />
            </Grid>


            <Grid container>
                <Grid item>
                    <Grid container>
                        <Box component={'img'}
                            src={Icon1}
                            sx={{
                                backgroundColor: 'blueviolet'
                            }}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <p>The Best Algo-trading System</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <p className='text-muted m-0'>Go Passive is an algo trading system, where we look to serve people with an automated trading system that does not require any manual interventions and is fully examined based on past performances to generate fair returns throughout their lives.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



            <Grid container justifyContent={'flex-end'} className='pr-100'>
                <Grid item xs={4}>
                    <Grid container>
                        <Box component={'img'}
                            src={Icon2}
                            sx={{
                                backgroundColor: 'blueviolet'
                            }}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <p>A Fiduciary Mindset</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography className='text-muted m-0'>the base of our identity. We work collaboratively for the success of all of our clients, our firm, and the communities where we operate sustainably and responsibly.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



            <Grid container>
                <Grid item xs={4}>
                    <Grid container>
                        <Box component={'img'}
                            src={Icon3}
                            sx={{
                                backgroundColor: 'blueviolet'
                            }}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <p>Long-Term Vision</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Typography className='text-muted m-0'>the base of our identity. We work collaboratively for the success of all of our clients, our firm, and the communities where we operate sustainably and responsibly.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Box component={'img'}
                    sx={{
                        width: '1200px',
                        maxWidth: '1200px',
                        maxHeight: '500px',
                        transform: 'matrix(0.98, 0.19, 0.19, -0.98, 0, 0)'

                    }}
                    src={Wave}
                />
            </Grid>

            <Grid container className='jc-center mt-80'>
                <Grid item>
                    <p className='fs-24 fw-700 lh-36 m-0'>Our Values</p>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='jc-center'>
                        <Box component={'img'}

                            src={Rectangle1}
                        />
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon3}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <p>We are GoPassive</p>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={4}>
                                <p className='text-muted m-0'>We believe trading requires expertise, thorough knowledge of markets, and a balanced approach to play safe and bright in this fastest-growing trading world. We are a passive income-generating source. Here we look forward to serving the best outcomes for our clients, and our firm.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'flex-end'}>
                    <Grid item xs={4}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon4}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <p>Our Goal</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>The client’s interest is the priority. Keeping up a fiduciary mindset reflects our commitment to serving people with the best of our services. We provide unbiased advice and help our clients nurture.
                                    Generating good returns for people is what inspires us to work and help them meet their goals.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid container>
                    <Grid item xs={4}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon5}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>

                            <Grid item>
                                <p>Performance Driven</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>We do thorough research before punching orders to achieve the best outcomes. We believe in delivering quality results and staying ahead of our client’s needs. We implement a robust system with the least possible chances of error.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent={'flex-end'}>
                    <Grid item xs={4}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon6}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <p>Transparency</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>We disclose end-to-end reports showing profits, returns, risks, and more. With Go passive, you get to observe how your trading strategies are performing over time, and we are fully transparent about all the actions made.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={4}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon7}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <p>Accessibility</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>We work to ensure that the investors have full access to all the strategies offered according to their risk appetite to help them meet their financial goals. We are a dedicated team of professionals to look after the needs of investors and give them the best chance for profitable returns.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container justifyContent={'flex-end'}>
                    <Grid item xs={4}>
                        <Grid container>
                            <Box component={'img'}
                                src={Icon8}
                                sx={{
                                    backgroundColor: 'blueviolet'
                                }}
                            />
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <p>Committed to a Better Future</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>We believe in a long-term approach and so we are focused on helping people build a better tomorrow. We do care about the success and downfalls of all of our stakeholders – our clients, our employees, and the communities where we operate, to drive them long-term value that helps them achieve financial ease.

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




            <Grid container className='jc-center mt-80'>
                <Grid item>
                    <p className='fs-24 fw-700 lh-36 m-0'>Vision</p>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='jc-center'>
                        <Grid item >
                            <p>Crystal</p>
                        </Grid>
                        <Grid item >
                            <p>Clear Vision</p>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <p>Reliable Results</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4}>
                                <p className='text-muted m-0'>During the term, our key values provide discipline, knowledge, and transparency in all aspects, resulting in such returns that clients can fully rely on us.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid container justifyContent={'flex-end'}>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item>
                                <p>Persistent Effort</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>We make every effort to maintain the confidence we've earned from our investors while also helping more individuals with our unbiased advice and knowledge. We keep a close eye on how well we're servicing our clients' needs.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item>
                                <p>Robust System</p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Typography className='text-muted m-0'>In this era of rising passive income, we (Go Passive) have launched a solid generating system that has undergone extensive study and backtesting that has the least possible chances of any error. We are completely committed to investing for the benefit of our clients and to generating profitable returns.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
        </>
    )
}
