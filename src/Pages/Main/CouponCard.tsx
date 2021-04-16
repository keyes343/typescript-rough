import { Box, Grid, Paper, Typography } from '@material-ui/core';
import * as React from 'react';
import { t } from '../index';
import { useState, useEffect } from 'react';
import LastRow from './LastRow';
import { QueryObserverResult, RefetchOptions } from 'react-query';

export interface CouponCardProps {
    card: t.card;
}

const CouponCard: React.FC<CouponCardProps> = ({ card }: CouponCardProps) => {
    const daysLeft = React.useCallback(() => {
        const today = new Date().getTime();
        const endDate = new Date(card.EndTime).getTime();
        const daysRemaining = Math.ceil((endDate - today) / 86400000);
        return daysRemaining;
    }, [card.EndTime]);

    return (
        <Paper style={{ width: '15rem', padding: '0.7rem' }} elevation={8}>
            <Grid
                container
                justify="space-between"
                style={{ gap: '0.3rem' }}
                direction="column"
            >
                {/* 1 of 3 ROWS */}
                <Grid
                    xs={12}
                    item
                    container
                    // style={{ border: '2px solid red' }}
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
                            {card.DiscountP}
                        </Typography>
                        {/* <div
                            style={{
                                textAlign: 'center',
                            }}
                        >
                        </div> */}
                    </Grid>
                    <Grid xs={8}>
                        {/* <div style={{ alignSelf: 'center' }}> */}
                        <Typography
                            style={{
                                fontSize: '1.2rem',
                                // backgroundColor: 'lightblue',
                                // border: '2px solid blue',
                            }}
                            align="right"
                            onClick={() => {
                                console.log({ daysLeft: daysLeft() });
                            }}
                        >
                            {daysLeft()} day{daysLeft() > 1 && 's'} left
                        </Typography>
                        {/* </div> */}
                    </Grid>
                </Grid>
                {/* 2 of 3 ROWS */}
                <Grid xs={12} item>
                    <Box style={{ height: '8rem' }} />
                </Grid>
                {/* 3 of 3 ROWS */}
                <Grid xs={12} item>
                    <LastRow card={card} />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CouponCard;
