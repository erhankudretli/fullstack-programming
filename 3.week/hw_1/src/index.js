/*
--User interaction--
    - Ödevde verilen dosya yapisi react yardimiyla web sayfasinda olusturulacak.
--Technical Details --
    - Istenilen dosya yapisini verecek html blogu bir fonksiyon icinde react a uygun sekilde yazilir
    - Bu function export edilir ve ana dizin olan index.js de import edilir
    - Artik olusturdugumuz dosya yapisini kullanabiliriz. Nerede kullanmak istersek oraya <isim/> bu sekilde yazilir
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './firstComp';


ReactDOM.render(
  <React.StrictMode>
    
    <FirstComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
