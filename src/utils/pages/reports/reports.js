/**
 * Downloads a JSON file containing report data with the specified user type and file name.
 *
 * @param {string} userType - The type of user for which the report is generated.
 * @param {string} [fileName='report-data.json'] - The name of the file to be downloaded. Defaults to 'report-data.json'.
 */
const downloadReportData = (data, fileName = 'report-data.json') => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
};

/**
 * Copies report data, including the current date and user type, to the clipboard in JSON format.
 *
 * @param {string} userType - The type of the user (e.g., admin, guest, etc.).
 * @returns {void} This function does not return a value.
 */
const copyReportDataToClipboard = (data) => {
  navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
    alert('Data copied to clipboard!');
  });
};

export { downloadReportData, copyReportDataToClipboard };
