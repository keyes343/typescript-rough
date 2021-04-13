import { Box } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import CouponCard from './CouponCard';

export interface CouponLogicProps {}

const CouponLogic: React.FC<CouponLogicProps> = () => {
    // check conditions that satisfy a cards visibility.
    // for that, check which radios are clicked by user.
    // Then, arrange heirarchy of radio-clicked (keywords clicked), as per the api(s) in tom's site.
    // insert those keywords into a string. GET request on this new string.
    // returned object contains whatever needs to be filtered. See if sorting is required.

    return <Box style={{ border: '1px solid' }}></Box>;
};

export default CouponLogic;
