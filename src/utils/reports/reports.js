export const downloadReportData = (userType, fileName = 'report-data.json') => {
  const data = { date: new Date().toISOString(), user: userType };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
};

export const copyReportDataToClipboard = (userType) => {
  const data = { date: new Date().toISOString(), user: userType };
  navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
    alert('Data copied to clipboard!');
  });
};
