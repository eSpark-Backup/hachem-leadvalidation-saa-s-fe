/**
 * Copies a 2D array of table data to the clipboard in tab-separated format (TSV).
 *
 * @param {string[][]} data - A two-dimensional array representing table rows and columns.
 * @returns {void} This function does not return a value.
 */
const copyTableDataToClipboard = (data, setSelectedRows, handleOpen) => {
  const tsv = data
    .map((row) =>
      row
        .map((cell) => {
          if (typeof cell === 'string' && cell.trim().startsWith('+')) {
            return `'${cell}`;
          }
          return cell;
        })
        .join('\t')
    )
    .join('\n');

  navigator.clipboard.writeText(tsv).then(() => {
    setSelectedRows([]);
    handleOpen('copy');
  });
};

/**
 * Converts a 2D array of table data to CSV format and triggers a file download in the browser.
 *
 * @param {string[][]} data - A two-dimensional array representing table rows and columns.
 * @param {string} [filename='data.csv'] - Optional name of the downloaded CSV file.
 * @returns {void} This function does not return a value.
 */

const downloadTableDataToCSV = (
  data,
  filename = 'data.csv',
  handleOpen,
  setProgress
) => {
  handleOpen('download');
  setProgress(0);

  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);

        const csv = data.map((row) => row.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        setTimeout(() => handleOpen('copy'), 500);
        return 100;
      }

      return prev + 10;
    });
  }, 100);
};

export { copyTableDataToClipboard, downloadTableDataToCSV };
