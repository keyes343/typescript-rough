import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';

export interface LastRowProps {}

const LastRow: React.FC<LastRowProps> = () => {
    return (
        <Grid container>
            {/* ROW 1 */}
            <Grid item container direction="row" justify="space-between">
                <Grid xs={7} style={{ fontWeight: 'bold' }}>
                    MBA in Creative Art
                </Grid>
                <Grid xs={2} style={{ fontWeight: 'bold' }}>
                    3.9
                </Grid>
                {/* star icon */}
                <Grid xs={2}>Icon</Grid>
            </Grid>
            {/* ROW 2 */}
            <Grid item xs={12}>
                No code development
            </Grid>
            {/* SPACING */}
            <Grid item style={{ height: '3rem' }} />
            {/* ROW 3 */}
            <Grid item xs={12}>
                USD 99
            </Grid>
            {/* ROW 4 */}
            <Grid xs={12}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Free
                </Typography>
            </Grid>
            {/* SPACING */}
            <Grid item style={{ height: '3rem' }} />
            {/* ROW 5 */}
            <Grid item container>
                {/* watch icon */}
                <Grid xs={2}>Icon</Grid>
                <Grid xs={6}>19 hours ago</Grid>
                {/* chat icons */}
                <Grid xs={2}>Icon</Grid>
                <Grid xs={2}>226</Grid>
            </Grid>
        </Grid>
    );
};

export default LastRow;
