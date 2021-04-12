import { Box, Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import LastRow from './LastRow';

export interface CouponCardProps {}

const CouponCard: React.FC<CouponCardProps> = () => {
    return (
        <Paper style={{ width: '15rem' }} elevation={8}>
            <Grid container style={{ gap: '0.3rem' }} direction="column">
                {/* ROW */}
                <Grid
                    xs={12}
                    item
                    container
                    style={{ border: '2px solid red', padding: '0.5rem' }}
                >
                    <Grid xs={3}>-100%</Grid>
                    <Grid xs={5} />
                    <Grid xs={4}>2 days left</Grid>
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
