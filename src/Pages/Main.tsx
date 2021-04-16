import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Radio } from '@material-ui/core';
import { useStyles } from './Helpers/hooks';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { UseState, UseDispatch, vars, t, f } from './index';

// import CouponCard from './Main/CouponCard';
import CouponLogic from './Main/CouponLogic';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

type type_radio =
    | t.discountLevels
    | t.categories
    | t.ratings
    | t.levels
    | t.duration
    | t.subCategories;

export interface MainProps {
    // refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<t.card[] | undefined, unknown>>
}

const Main: React.FC<MainProps> = () => {
    const state = UseState()!;
    const dispatch = UseDispatch()!;
    // const api = f.useCreateApi(state).apiString;

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
            {state.apiString}
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
                        {vars.rootBtns.map((mainOption: t.rootBtn, i) => {
                            return (
                                // mapped item inside left column
                                <Grid
                                    onMouseEnter={(e) => {
                                        e.stopPropagation();
                                        setHoveredUpon(mainOption);
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
                                                mainOption === hoveredUpon
                                                    ? 'secondary'
                                                    : 'primary'
                                            }
                                        >
                                            {mainOption}
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
                                                hoveredUpon === mainOption
                                                    ? '40rem'
                                                    : '0',
                                            overflow:
                                                mainOption === hoveredUpon
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
                                            {/* depending upon the "mainOption" grab the array of subOptions "vars".
                                            Then map over that arry, to display the subOptions when user hovers/clicks on any of the main options */}
                                            {grab_subOptions(mainOption).map(
                                                (subOption, j) => {
                                                    return (
                                                        <Box
                                                            key={`${i}+${j}`}
                                                            style={{
                                                                border:
                                                                    '2px solid blue',
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                            }}
                                                            // clicking this div should tell the state which button has been clicked by user and how to toggle it
                                                            onClick={() => {
                                                                console.log({
                                                                    subOption,
                                                                    mainOption,
                                                                });
                                                                const toggleThisRadio: t.toggleRadios = {
                                                                    btn: mainOption,
                                                                    elem: subOption,
                                                                };
                                                                dispatch({
                                                                    type:
                                                                        'rootBtn',
                                                                    payload: toggleThisRadio,
                                                                });
                                                            }}
                                                        >
                                                            <Box>
                                                                <Radio
                                                                    checked={f.exists_in_state_value(
                                                                        state,
                                                                        mainOption,
                                                                        subOption
                                                                    )}
                                                                />
                                                            </Box>
                                                            <Box
                                                                style={{
                                                                    // border:
                                                                    //     '2px solid blue',
                                                                    alignSelf:
                                                                        'center',
                                                                    cursor:
                                                                        'pointer',
                                                                }}
                                                            >
                                                                {subOption}
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
                        // border: '2px solid blue',
                        backgroundColor: 'rgb(216, 229, 232)',
                        padding: '2rem',
                    }}
                >
                    <CouponLogic />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Main;

// {grab_subOptions(mainOption)?.map(
//     (
//         radio: type_radio,
//         i: number
//     ) => {
//         let { rootBtns } = vars;
//         if (
//             state.hasOwnProperty(
//                 mainOption
//             )
//         ) {
//             return grab_subOptions(
//                 mainOption
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
//                                     //     state[mainOption],
//                                     //     mainOption
//                                     // )}
//                                     value="mainOption"
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
//                                         mainOption
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
