import { Box, Grid, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import LastRow from './LastRow';

export interface CouponCardProps {}

const CouponCard: React.FC<CouponCardProps> = () => {
    return (
        <Paper style={{ width: '15rem', padding: '0.7rem' }} elevation={8}>
            <Grid container style={{ gap: '0.3rem' }} direction="column">
                {/* ROW */}
                <Grid
                    xs={12}
                    item
                    container
                    style={{ border: '2px solid red' }}
                >
                    <Grid
                        xs={4}
                        item
                        style={{
                            backgroundColor: 'maroon',
                            color: 'white',
                            // padding: '0.3rem',
                        }}
                    >
                        <Typography
                            style={{ fontSize: '1.2rem' }}
                            align="center"
                        >
                            -100%
                        </Typography>
                        {/* <div
                            style={{
                                textAlign: 'center',
                            }}
                        >
                        </div> */}
                    </Grid>
                    <Grid xs={3} />
                    <Grid xs={5}>
                        {/* <div style={{ alignSelf: 'center' }}> */}
                        <Typography
                            style={{
                                fontSize: '1.2rem',
                                // backgroundColor: 'lightblue',
                            }}
                            align="center"
                        >
                            2 days left
                        </Typography>
                        {/* </div> */}
                    </Grid>
                </Grid>
                <Grid xs={12} item style={{ border: '2px solid red' }}>
                    <Box style={{ height: '8rem' }} />
                </Grid>
                <Grid xs={12} item style={{ border: '2px solid red' }}>
                    <LastRow />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CouponCard;
