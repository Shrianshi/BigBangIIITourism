import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import PDFDocument from './Components/PDFDocument';
import { BillProvider } from './billContext/billProvider';


// const express = require('express');
// const generatePdf = require('./Components/PDFDocument');

// const app = express();
// const port = 3000;

// app.get('/download-pdf', (req, res) => {
//   const MyDocument = generatePdf();
//   const pdfStream = MyDocument.render();

//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');

//   pdfStream.pipe(res);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <BillProvider>
      <App />
    </BillProvider>
  </BrowserRouter>,
  // document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

reportWebVitals();
