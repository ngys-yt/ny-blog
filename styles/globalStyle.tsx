import React from 'react';

import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        padding: 0;
        margin: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        border: 0;
        outline: 0;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      ul,
      li {
        list-style: none;
      }

      a {
        color: inherit;
        text-decoration: none;
        outline: none;
      }

      a:visited {
        border: none;
      }

      a:hover {
        cursor: pointer;
      }

      /* Form Style Reset */
      input,
      button,
      select,
      textarea {
        font: inherit;
        background: transparent;
        border: none;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      textarea {
        resize: none;
      }

      input[type='checkbox'],
      input[type='radio'] {
        display: none;
      }

      input[type='submit'],
      input[type='button'],
      label,
      button,
      select {
        cursor: pointer;
      }

      select::-ms-expand {
        display: none;
      }

      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #fff inset;
      }

      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}
  />
);
export default GlobalStyle;
