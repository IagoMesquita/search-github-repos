import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReposProvider from './context/ReposProvider';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <ReposProvider>
//       <App />
//     </ReposProvider>
//    </BrowserRouter>,
// );

ReactDOM.render(
  <BrowserRouter>
    <ReposProvider>
      <App />
    </ReposProvider>
  </BrowserRouter>,
  
  document.getElementById('root')
);

