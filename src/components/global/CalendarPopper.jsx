// import { useState } from 'react';
// import { Box, Button, Typography, IconButton, Grid } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// // import { PAYMENT_DATA } from '../../constants/components/payment/Payment';
// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

// const CalendarPopper = ({
//   initialDate = new Date(),
//   onDateChange = () => {},
//   close = () => {},
// }) => {
//   const [selectedDate, setSelectedDate] = useState(initialDate);
//   const [displayedMonth, setDisplayedMonth] = useState(initialDate.getMonth());
//   const [displayedYear, setDisplayedYear] = useState(initialDate.getFullYear());

//   const handleDateClick = (day) => {
//     const newDate = new Date(displayedYear, displayedMonth, day);
//     setSelectedDate(newDate);
//     onDateChange(newDate);
//   };

//   const handleMonthChange = (direction) => {
//     if (direction === 'prev') {
//       if (displayedMonth === 0) {
//         setDisplayedMonth(11);
//         setDisplayedYear((y) => y - 1);
//       } else {
//         setDisplayedMonth((m) => m - 1);
//       }
//     } else {
//       if (displayedMonth === 11) {
//         setDisplayedMonth(0);
//         setDisplayedYear((y) => y + 1);
//       } else {
//         setDisplayedMonth((m) => m + 1);
//       }
//     }
//   };

//   const handleCancel = () => {
//     close();
//   };

//   const handleOk = () => {
//     onDateChange(selectedDate);
//     close();
//   };

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const renderDays = () => {
//     const daysInMonth = getDaysInMonth(displayedMonth, displayedYear);
//     const firstDayOfWeek = new Date(displayedYear, displayedMonth, 1).getDay();
//     const days = [];
//     for (let i = 0; i < firstDayOfWeek; i++) {
//       days.push(<Box key={`empty-${i}`} />);
//     }

//     for (let day = 1; day <= daysInMonth; day++) {
//       const isSelected =
//         selectedDate.getDate() === day &&
//         selectedDate.getMonth() === displayedMonth &&
//         selectedDate.getFullYear() === displayedYear;

//       days.push(
//         <Button
//           key={day}
//           onClick={() => handleDateClick(day)}
//           variant={isSelected ? 'contained' : 'text'}
//           sx={{
//             width: 36,
//             height: 36,
//             minWidth: 0,
//             borderRadius: '50%',
//             bgcolor: isSelected ? 'success.main' : 'transparent',
//             color: isSelected ? 'white' : 'inherit',
//             '&:hover': {
//               bgcolor: isSelected ? 'success.dark' : 'grey.200',
//             },
//           }}
//         >
//           {day}
//         </Button>
//       );
//     }
//     return days;
//   };

//   return (
//     <Box
//       sx={{
//         p: 2,
//         width: 289,
//         border: '1px solid lightgreen',
//         borderRadius: 2,
//         backgroundColor: '#E7F7EF',
//         mx: 'auto',
//         '@media(max-width: 424px)': {
//           width: '78%',
//         },
//       }}
//     >
//       <Box
//         display="flex"
//         flexDirection="row"
//         justifyContent="center"
//         alignItems="center"
//         mb={2}
//       >
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           width="50%"
//         >
//           <IconButton
//             disableRipple
//             size="small"
//             onClick={() => handleMonthChange('prev')}
//           >
//             <ArrowBackIos sx={{ fontSize: '16px' }} />
//           </IconButton>
//           <select
//             value={displayedMonth}
//             onChange={(e) => setDisplayedMonth(Number(e.target.value))}
//             style={{
//               fontWeight: 'bold',
//               background: 'transparent',
//               border: 'none',
//               fontSize: '1rem',
//               textAlign: 'center',
//               outline: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             {months.map((month, index) => (
//               <option key={index} value={index}>
//                 {month}
//               </option>
//             ))}
//           </select>
//           <IconButton
//             disableRipple
//             size="small"
//             onClick={() => handleMonthChange('next')}
//           >
//             <ArrowForwardIos sx={{ fontSize: '16px' }} />
//           </IconButton>
//         </Box>

//         {/* Year Controls */}
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           width="50%"
//         >
//           <IconButton
//             size="small"
//             onClick={() => setDisplayedYear((y) => y - 1)}
//           >
//             <ArrowBackIos sx={{ fontSize: '16px' }} />
//           </IconButton>
//           <select
//             value={displayedYear}
//             onChange={(e) => setDisplayedYear(Number(e.target.value))}
//             style={{
//               fontWeight: 'bold',
//               background: 'transparent',
//               border: 'none',
//               fontSize: '1rem',
//               textAlign: 'center',
//               outline: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             {Array.from({ length: 100 }, (_, i) => {
//               const year = 1970 + i;
//               return (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               );
//             })}
//           </select>
//           <IconButton
//             size="small"
//             onClick={() => setDisplayedYear((y) => y + 1)}
//           >
//             <ArrowForwardIos sx={{ fontSize: '16px' }} />
//           </IconButton>
//         </Box>
//       </Box>

//       <Grid container spacing={0.5} mx={1.2}>
//         {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
//           <Grid item xs={1.71} key={idx}>
//             <Typography variant="caption" color="textSecondary" align="center">
//               {day}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>

//       <Grid container spacing={0.5} mt={1}>
//         {renderDays().map((day, idx) => (
//           <Grid item xs={1.71} key={idx}>
//             {day}
//           </Grid>
//         ))}
//       </Grid>

//       <Box display="flex" justifyContent="flex-end" mt={2} gap={2}>
//         <Button size="small" onClick={handleCancel} color="success">
//           Cancel
//         </Button>
//         <Button
//           size="small"
//           onClick={handleOk}
//           color="success"
//           variant="contained"
//         >
//           OK
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CalendarPopper;
