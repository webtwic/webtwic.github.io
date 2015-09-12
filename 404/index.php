<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <link rel="icon" href="../assets/img/favicons/favicon-16x16.png" type="image/png" />
   <link rel="shortcut icon" href="../assets/img/favicons/favicon-16x16.png" type="image/png" />
   <title>Page Not Found.</title>
   <style type="text/css">
      @media only screen and (max-width: 940px) {
         body.not_found {
            width: 97%;
         }
         div.error_wrap {
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            transform: scale(1.1);
         }
         p.error_description {
            width: 90% !important;
         }
      }

      ::selection {background: #CEF; text-shadow: none;}
      ::-webkit-selection {background: #CEF; text-shadow: none;}
      ::-moz-selection {background: #CEF; text-shadow: none;}
      ::-ms-selection {background: #CEF; text-shadow: none;}
      ::-o-selection {background: #CEF; text-shadow: none;}
      html,
      body.not_found {
         background: #E6F4FF url("../assets/img/bgcontrast.png");
         margin: 0 auto;
         padding: 0;
      }
      html {
         overflow: hidden;
      }
      body {
         width: 100%;
      }
      *:not(input) {
         font-family: Calibri, "Trebuchet MS", Helvetica, Arial, georgia;
         text-align: center;
      }
      h1, h2, span{
         text-align: center;
      }
      a {
         text-decoration: none;
      }
      .warning_icon {
         width: 112px;
         height: 108px;
         margin-right: auto;
         margin-left: auto;
         display: block;
         margin-top: 35px;
         background: url(../assets/img/warning.jpg);
      }
      h1 {
         margin-top: 0.5em;
      }
      h1 span {
         text-shadow: -2px 3px #FFF, 0px 5px #8BE68B;
         font-size: 5.55rem;
      }
      h1 *:not(:nth-child(2)) {
         color: #8BE68B;
      }
      h1 :nth-child(2) {
         color: #FA8484;
         text-shadow: -2px 3px #FFF, 0px 5px #FA8484;
      }
      h2.error_text {
         color: #4B5E6D;
         margin-top: -10px;
         -webkit-text-shadow: -0.1px 2px #fff, 1px 3px #ccc;
         -moz-text-shadow: -0.1px 2px #fff, 1px 3px #ccc;
         -ms-text-shadow: -0.1px 2px #fff, 1px 3px #ccc;
         -o-text-shadow: -0.1px 2px #fff, 1px 3px #ccc;
         text-shadow: -0.1px 2px #fff, 1px 3px #ccc;
      }
      p.error_description {
         width: 43%;
         display: block;
         font-size: 90%;
         margin-left: auto;
         margin-right: auto;
         color: rgb(110, 110, 110);
      }
      input {
         outline: 0 none;
         -webkit-appearance: none;
         -moz-appearance: none;
      }
      [placeholder],
      ::-moz-placeholder,
      ::-webkit-input-placeholder,
      ::-ms-input-placeholder,
      :-webkit-input-placeholder,
      :-moz-placeholder,
      :-ms-input-placeholder {
         color: #999 !important;
      }
      input[type="search"] {
         font-size: Calibri, "Trebuchet MS", Helvetica, Arial, georgia;
         -webkit-transition: all 0.5s ease 0s;
         -moz-transition: all 0.5s ease 0s;
         -ms-transition: all 0.5s ease 0s;
         -o-transition: all 0.5s ease 0s;
         transition: all 0.5s ease 0s;
         border: 2px solid #E3E3E3;
         -webkit-border-radius: 2px;
         -moz-border-radius: 2px;
         -ms-border-radius: 2px;
         -o-border-radius: 2px;
         border-radius: 2px;
         background: #F9F9F9;
         font-weight: bold;
         padding: 5px 10px;
         width: 50%;
         height: 36px;
         color: #999;
      }
      input[type="search"]:hover {
         border: 2px solid #CCC;
      }
      input[type="search"]:focus {
         -webkit-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
         -moz-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
         -ms-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
         -o-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
         box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
         border: 2px solid #7F7FFF;
      }
      input[type="submit"] {
         background-image: linear-gradient(#FCFCFC, #EEE);
         -webkit-transition: all 0.5s ease;
         -moz-transition: all 0.5s ease;
         -ms-transition: all 0.5s ease;
         -o-transition: all 0.5s ease;
         transition: all 0.5s ease;
         background-repeat: repeat-x;
         -webkit-border-radius: 3px;
         -moz-border-radius: 3px;
         -ms-border-radius: 3px;
         -o-border-radius: 3px;
         border-radius: 3px;
         display: inline-block;
         padding: 7px 13px;
         font-size: 13px;
         line-height: 19px;
         color: #999;
         cursor: pointer;
         background-color: #EEE;
         border-color: #D5D5D5;
         border-style: solid;
         border-width: 1px;
      }
      input[type="submit"]:hover {
         background-color: #DDD;
         background-image: -webkit-linear-gradient(#EEE, #DDD);
         background-image: -moz-linear-gradient(#EEE, #DDD);
         background-image: -o-linear-gradient(#EEE, #DDD);
         background-image: linear-gradient(#EEE, #DDD);
         background-repeat: repeat-x;
         border-color: #CCC;
      }
      input[type="submit"]:focus {
         border-color: #51A7E8;
         box-shadow: 0px 0px 5px rgba(81, 167, 232, 0.5);
      }
      span a {
         border-bottom: 2px solid #329dd4;
         color: #329dd4;
         -webkit-border-radius: 2px;
         -moz-border-radius: 2px;
         -ms-border-radius: 2px;
         -o-border-radius: 2px;
         border-radius: 2px;
         padding: 0px 3px;
         box-sizing: border-box;
         -webkit-transition: all 0.3s ease;
         -moz-transition: all 0.3s ease;
         -ms-transition: all 0.3s ease;
         -o-transition: all 0.3s ease;
         transition: all 0.3s ease;
      }
      span a:hover {
         color: #fff;
         background: #329dd4;
         border-bottom: 0 none;
         font-weight: bold;
      }
      .bottom_logo {
         background: url(../assets/img/logo_transparent.png) no-repeat;
         width: 159px;
         height: 40px;
         display: block;
         margin-left: auto;
         margin-right: auto;
         margin-top: 20px;
      }
   </style>
</head>

<body class="not_found">
   <div class="error_wrap"> <div class="warning_icon"></div>
   <h1><span>4</span> <span>0</span> <span>4</span></h1>
   <h2 class="error_text">Oops.</h2>
   <p class="error_description"> Sorry, the page you requested for was not found, it may have been removed or dosen't exist at all. <span>You can search for something else, or go back to our <a href="../assets/html/home.html" title="Go back to webtwic.">homepage.</a></span> </p>
   <form method="GET">
      <input type="search" name="s">
      <input type="submit" value="Search"> </form>
      <a class="bottom_logo" href="../assets/html/home.html"></a>
   </div>
</body>
</html>
