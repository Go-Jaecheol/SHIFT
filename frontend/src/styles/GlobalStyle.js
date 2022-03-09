import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    body {
        height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root, .App {
        width: 100%;
        height: 100%;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    * {
        box-sizing: border-box;
        word-break: keep-all;
    }
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,button,p,blockquote,th,td {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        line-height: 100%;
    }
    ul,ol,li {
        list-style: none;
    }
`;

export default GlobalStyle;