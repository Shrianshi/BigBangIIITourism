// PDFDownloadButton.js

import React from 'react';

const MainComponent = () => {
  const handleDownload = () => {
    window.open('/download-pdf', '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default MainComponent;
