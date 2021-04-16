import { Box, Grid, Typography } from '@material-ui/core';
import { t } from '../index';
import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

export interface LastRowProps {
    card: t.card;
}

const LastRow: React.FC<LastRowProps> = ({ card }: LastRowProps) => {
    // const getRemainingTime = (date) => {​​​​​​​​
    // if(date) {​​​​​​​​
    // date = newDate(date);
    // letprefix = '';
    // lettimeOffsetInMS = date.getTimezoneOffset() * 60000;
    // date.setTime(date.getTime() - timeOffsetInMS);
    // letremainingTime =  moment.duration(moment().diff(date)).asMinutes();
    // if(remainingTime <= 0) {​​​​​​​​
    // remainingTime = -remainingTime;
    //                         (remainingTime/(24*60)) > 1 ? (remainingTime = Math.round((remainingTime/(24*60))), prefix = 'day'): ((remainingTime/(60)) > 1 ? (remainingTime =  Math.round(remainingTime/60), prefix = 'hour') : (remainingTime =  Math.round(remainingTime), prefix = 'minute'))
    // return (remainingTime == 1 ? (remainingTime+' '+prefix): (remainingTime+' '+prefix+'s')) +' left';
    //                     }​​​​​​​​ else {​​​​​​​​
    // return'';
    //                     }​​​​​​​​
    //                 }​​​​​​​​ else {​​​​​​​​
    // return'';
    //                 }​​​​​​​​
    //             }​​​​​​​​,

    const adjustForTimezone = (date: Date) => {
        // let timeOffsetInMS = date.getTimezoneOffset() * 60000;
        const givenDate = new Date(date);
        const rightNow = new Date();

        const diff = rightNow.getTime() - givenDate.getTime();
        const diff_inHrs = Math.floor(diff / 3600000);

        // date.setHours(rightNow.getHours() - date.getTimezoneOffset() / 60);
        // date.setTime(date.getTime() - timeOffsetInMS);
        return diff_inHrs > 1
            ? `${diff_inHrs} hrs ago`
            : `${diff_inHrs} hr ago`;
    };

    return (
        <Grid container>
            {/* ROW 1 */}
            <Grid item container direction="row" justify="space-between">
                <Grid xs={7} style={{ fontWeight: 'bold' }}>
                    {card.Title}
                </Grid>
                <Grid xs={2} style={{ fontWeight: 'bold' }}>
                    {card.Rating}
                </Grid>
                {/* star icon */}
                <Grid xs={2}>Icon</Grid>
            </Grid>
            {/* ROW 2 */}
            <Grid item xs={12}>
                {card.Subcategory}
            </Grid>
            {/* SPACING */}
            <Grid item style={{ height: '3rem' }} />
            {/* ROW 3 */}
            <Grid item xs={12}>
                USD {card.PriceOld}
            </Grid>
            {/* ROW 4 */}
            <Grid xs={12}>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    {card.DiscountP === 100 && 'Free'}
                </Typography>
            </Grid>
            {/* SPACING */}
            <Grid item style={{ height: '3rem' }} />
            {/* ROW 5 */}
            <Grid item container>
                {/* watch icon */}
                <Grid xs={2}>Icon</Grid>
                <Grid xs={6}>{adjustForTimezone(card.CreatedD)}</Grid>
                {/* chat icons */}
                <Grid xs={2}>Icon</Grid>
                <Grid xs={2}>{card.Reviews}</Grid>
            </Grid>
        </Grid>
    );
};

export default LastRow;
