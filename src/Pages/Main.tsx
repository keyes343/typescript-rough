import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Radio } from '@material-ui/core';
import { useStyles } from './hooks';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import * as t from './types';
import * as f from './functions';
import * as vars from './constants';
import { UseState, UseDispatch } from './state';
import CouponCard from './Main/CouponCard';

type type_radio =
    | t.discountLevels
    | t.categories
    | t.ratings
    | t.levels
    | t.duration
    | t.subCategories;

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
    const state = UseState()!;
    const dispatch = UseDispatch()!;

    const c = useStyles(); // c for class
    const [hoveredUpon, setHoveredUpon] = useState('');

    const grab_subOptions = (buttonName: t.rootBtn): t.radios[] => {
        // 2nd layer of options inside root options
        switch (buttonName) {
            case 'Discount Level':
                return vars.discounts;
            case 'Categories':
                return vars.categories;
            case 'Level':
                return vars.levels;
            case 'Ratings':
                return vars.ratings;
            case 'Sub Categories':
                return vars.subCategories;
        }
    };

    return (
        <Box className={`${c.fillScreen}`} style={{ boxSizing: 'border-box' }}>
            <Grid xs={12} container className={`${c.root} ${c.fillParent}`}>
                {/* Left side */}
                <Grid
                    xs={2}
                    item
                    style={{
                        padding: '3rem 0 0',
                        // border: '3px solid green',
                    }}
                >
                    {/* column wrapper */}
                    <Grid
                        // direction="column"
                        container
                        xs={12}
                        style={{ gap: '0.7rem' }}
                        // spacing={4}
                    >
                        {vars.rootBtns.map((name: t.rootBtn, i) => {
                            return (
                                // mapped item inside left column
                                <Grid
                                    onMouseEnter={(e) => {
                                        e.stopPropagation();
                                        setHoveredUpon(name);
                                    }}
                                    container
                                    item
                                    key={i}
                                    xs={12}
                                    style={{
                                        // border: '2px solid blue',
                                        padding: '0 0 0 1rem',
                                    }}
                                >
                                    <Grid
                                        xs={10}
                                        // style={{ border: '2px solid blue' }}
                                    >
                                        <Typography
                                            variant="h5"
                                            color={
                                                name === hoveredUpon
                                                    ? 'secondary'
                                                    : 'primary'
                                            }
                                        >
                                            {name}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        xs={2}
                                        container
                                        // className={`${c.slowReveal}`}
                                        style={{
                                            // border: '2px solid blue',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <KeyboardArrowDownIcon
                                        // style={{ border: '2px solid' }}
                                        />
                                    </Grid>

                                    {/* expand div */}
                                    <Box
                                        style={{
                                            // border: '2px solid green',
                                            // padding: '0.2rem',
                                            width: '100%',
                                            maxHeight:
                                                hoveredUpon === name
                                                    ? '40rem'
                                                    : '0',
                                            overflow:
                                                name === hoveredUpon
                                                    ? 'auto'
                                                    : 'hidden',
                                            transition: 'all 0.5s',
                                        }}
                                    >
                                        <Box
                                            style={{
                                                // padding: '1rem 0',
                                                overflow: 'auto',
                                                height: 'auto',
                                                width: '100%',
                                                // border: '2px solid blue',
                                            }}
                                        >
                                            {grab_subOptions(name).map(
                                                (sub_option) => {
                                                    return (
                                                        <Box
                                                            style={{
                                                                // border:
                                                                //     '2px solid red',
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                                cursor:
                                                                    'default',
                                                            }}
                                                        >
                                                            <Box
                                                            // style={{
                                                            //     border:
                                                            //         '2px solid blue',
                                                            // }}
                                                            >
                                                                <Radio />
                                                            </Box>
                                                            <Box
                                                                style={{
                                                                    // border:
                                                                    //     '2px solid blue',
                                                                    alignSelf:
                                                                        'center',
                                                                }}
                                                            >
                                                                {sub_option}
                                                            </Box>
                                                        </Box>
                                                    );
                                                }
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                {/* Right Side */}
                <Grid
                    item
                    xs={10}
                    style={{
                        backgroundColor: 'rgb(216, 229, 232)',
                        padding: '2rem',
                    }}
                >
                    <CouponCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Main;

// {grab_subOptions(name)?.map(
//     (
//         radio: type_radio,
//         i: number
//     ) => {
//         let { rootBtns } = vars;
//         if (
//             state.hasOwnProperty(
//                 name
//             )
//         ) {
//             return grab_subOptions(
//                 name
//             ).map(
//                 (subOption, i) => {
//                     return (
//                         <div
//                             key={i}
//                             style={{
//                                 border:
//                                     '2px solid red',
//                             }}
//                         >
//                             <div>
//                                 <Radio
//                                     key={
//                                         i
//                                     }
//                                     // checked={f.exists(
//                                     //     state[name],
//                                     //     name
//                                     // )}
//                                     value="name"
//                                 />
//                             </div>
//                             <div
//                                 style={{
//                                     display:
//                                         'inline-block',
//                                     border:
//                                         '2px solid blue',
//                                 }}
//                             >
//                                 <Typography variant="h6">
//                                     {/* {grab_subOptions(
//                                         name
//                                     )} */}
//                                 </Typography>
//                             </div>
//                         </div>
//                     );
//                 }
//             );
//         } else return null;
//     }
// )}
