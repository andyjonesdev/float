import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    // CSS reset via Eric Meyer
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        height: 100%;
        @font-face {
            font-family: 'Interstate';
            src: local('Interstate'), url(../fonts/Interstate-regular.ttf) format('truetype');
        }
    }

    body {
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        background-color: rgb(206,162,215);
        background-image: url("https://pbs.twimg.com/media/Dm1Zg7EWwAIT3ro.png");
        height: 100%;
        font-family: 'Overpass', sans-serif;
        background-position-x: 0%;
        animation-delay: 0s;
        animation-duration: 30s;
        animation-name: panoramic;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: both;
        will-change: background-position-x;
    }
    @keyframes panoramic {
        0% {
          background-position-x: 0%;
        }
        50% {
          background-position-x: 100%;
        }
        100% {
          background-position-x: 0%;
        }
      }

    a {
        text-decoration: none;
    }
`
export default GlobalStyle
