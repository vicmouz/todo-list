import { createGlobalStyle } from 'styled-components';
import { colors } from './themes';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
    background: ${colors.primary};
    .fixed-footer {
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
    }
    /* font-family: BMW Helvetica; */
}

body{
    /* background: ${colors.primary}; */
    /*-webkit-font-smoothing: antialiased !important;*/
}

body, input, button {
    color: ${colors.darkFont};
    /* font-size: 16px; */
}

button{
    cursor: pointer;
}

.Toastify__toast--success {
    background: ${colors.success} !important;
 }

.Toastify__toast--error {
    background: ${colors.secondary} !important;
 }
`;