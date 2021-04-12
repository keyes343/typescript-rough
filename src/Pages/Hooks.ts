import { Box, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import * as t from './types';

export const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: '2px solid',
    },
    fillScreen: { height: '100vh' },
    fillParent: { height: '100%', width: '100%' },
    red: { border: '3px solid red' },
    blue: { border: '3px solid blue' },
    orange: { border: '3px solid orange' },
    green: { border: '3px solid green' },

    gridColumn: {
        display: 'grid',
        gridTemplateColumns: '1fr 8fr',
        // border:'2px solid red'
    },
    left_innerWraper: {
        display: 'grid',
        gap: '0.5rem',
        gridTemplateColumns: '1fr',
        justifyContent: 'flex-start',
    },
    slowReveal: {
        transition: 'all 0.5s ease-in-out',
    },
});

// const Main: React.FC<MainProps> = () => {
//     const c = useStyles(); // c for class
//     return (
//         <Box className={`${c.fillScreen}`} style={{ boxSizing: 'border-box' }}>
//             <div
//                 className={`${c.root}
//             ${c.fillParent}
//             ${c.gridColumn}`}
//             >
//                 {/* Left side */}
//                 <div style={{ border: '3px solid' }}>
//                     {/* inner wraper */}
//                     <div
//                         style={{ border: '2px solid blue' }}
//                         className={`${c.left_innerWraper}`}
//                     >
//                         {filterNames.map((name, i) => {
//                             return (
//                                 <Box
//                                     key={i}
//                                     style={{
//                                         border: '2px solid red',
//                                         padding: '1rem',
//                                     }}
//                                 >
//                                     <Typography
//                                         variant="h6"
//                                         // style={{ color: '#06589c' }}
//                                     >
//                                         {name}
//                                     </Typography>
//                                 </Box>
//                             );
//                         })}
//                     </div>
//                 </div>
//                 {/* Right Side */}
//                 <div style={{ backgroundColor: 'rgb(216, 229, 232)' }}>
//                     Right Panel
//                 </div>
//             </div>
//         </Box>
//     );
// };

// const enums_filterName: { [key in t.leftButtons]: t.filterNames } = {
//     ratings: 'Ratings',
//     discount: 'Discount Level',
//     categories: 'Categories',
//     subCategories: 'Sub Categories',
//     topics: 'Topics',
//     level: 'Level',
//     language: 'Language',
// };
