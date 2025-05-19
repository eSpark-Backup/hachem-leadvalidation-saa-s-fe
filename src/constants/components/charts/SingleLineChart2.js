const SINGLE_LINE_CHART2 = [
  { key: 1, value: 60 },
  { key: 2, value: 70 },
  { key: 3, value: 19 },
  { key: 4, value: 442 },
  { key: 5, value: 45 },
  { key: 6, value: 65 },
  { key: 7, value: 78 },
  { key: 8, value: 67 },
  { key: 9, value: 45 },
  { key: 10, value: 70 },
  { key: 1, value: 60 },
  { key: 2, value: 70 },
  { key: 3, value: 19 },
  { key: 4, value: 442 },
  { key: 5, value: 45 },
  { key: 6, value: 65 },
  { key: 7, value: 78 },
  { key: 8, value: 67 },
  { key: 9, value: 45 },
  { key: 10, value: 70 },
  { key: 1, value: 60 },
  { key: 2, value: 70 },
  { key: 3, value: 19 },
  { key: 4, value: 442 },
  { key: 5, value: 45 },
  { key: 6, value: 65 },
  { key: 7, value: 78 },
  { key: 8, value: 67 },
  { key: 9, value: 45 },
  { key: 10, value: 70 },
];

const LEADS_OVERVIEW_CHART2 = [
  { key: 'JAN', value: 20 },
  { key: 'FEB', value: 50 },
  { key: 'MAR', value: 40 },
  { key: 'APR', value: 150 },
  { key: 'MAY', value: 98 },
  { key: 'JUN', value: 103 },
  { key: 'JUL', value: 99 },
  { key: 'AUG', value: 101 },
  { key: 'SEP', value: 96 },
  { key: 'OCT', value: 107 },
  { key: 'NOV', value: 100 },
  { key: 'DEC', value: 104 },
];

const CREDIT_USAGE_DATA = [
  { key: '2025-03-30', value: 784 },
  { key: '2025-03-31', value: 921 },
  { key: '2025-04-01', value: 567 },
  { key: '2025-04-02', value: 812 },
  { key: '2025-04-03', value: 442 },
  { key: '2025-04-04', value: 953 },
  { key: '2025-04-05', value: 600 },
  { key: '2025-04-06', value: 702 },
  { key: '2025-04-07', value: 835 },
  { key: '2025-04-08', value: 776 },
  { key: '2025-04-09', value: 298 },
  { key: '2025-04-10', value: 964 },
  { key: '2025-04-11', value: 546 },
  { key: '2025-04-12', value: 831 },
  { key: '2025-04-13', value: 719 },
  { key: '2025-04-14', value: 900 },
  { key: '2025-04-15', value: 483 },
  { key: '2025-04-16', value: 770 },
  { key: '2025-04-17', value: 645 },
  { key: '2025-04-18', value: 998 },
  { key: '2025-04-19', value: 317 },
  { key: '2025-04-20', value: 887 },
  { key: '2025-04-21', value: 776 },
  { key: '2025-04-22', value: 932 },
  { key: '2025-04-23', value: 214 },
  { key: '2025-04-24', value: 665 },
  { key: '2025-04-25', value: 842 },
  { key: '2025-04-26', value: 578 },
  { key: '2025-04-27', value: 788 },
  { key: '2025-04-28', value: 925 },
];

const generateRandomMonthData = () => {
  const data = [];
  const startDate = new Date(); // today
  startDate.setDate(startDate.getDate() - 29); // go back 29 days

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const dateKey = date.toISOString().split('T')[0]; // format: YYYY-MM-DD
    const value = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

    data.push({ key: dateKey, value });
  }

  return data;
};

// Example usage:
const randomData = generateRandomMonthData();

console.log(randomData);

export {
  generateRandomMonthData,
  SINGLE_LINE_CHART2,
  CREDIT_USAGE_DATA,
  LEADS_OVERVIEW_CHART2,
};
