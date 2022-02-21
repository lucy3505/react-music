import styled from "styled-components";

export const LetterWrapper = styled.div`
 .disini-bg{
    .disini-img{
      height:100vh;
      width:100%;
      opacity: .8;
    }
  }
  .envelope {
    position: relative;
    width: 2.8rem;
    height: 1.8rem;
    border-bottom-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
    margin-left: auto;
    margin-right: auto;
    top: 1.2rem;
    background-color: #00334c;
    box-shadow: 0.02rem 0.01rem rgba(0, 0, 0, 0.2);
    /* overflow: hidden; */
    /* &.open {
      /* overflow: unset; */
      opacity: 1;
    }
    &.close {
      .letter {
        opacity: 0;
        /* display: none; */
        transition: transform 0.4s ease, z-index 0.6s;
      }
    } */
  }

  .front {
    cursor: pointer;
    position: absolute;
    width: 0;
    height: 0;
    z-index: 3;
  }

  .flap {
    border-left: 1.4rem solid transparent;
    border-right: 1.4rem solid transparent;
    border-bottom: 0.82rem solid transparent;
    /* a little smaller */
    border-top: 0.98rem solid rgb(12, 100, 12);
    /* a little larger */
    -webkit-transform-origin: top;
    transform-origin: top;
  }

  .pocket {
    border-left: 1.4rem solid rgb(13, 158, 13);
    border-right: 1.4rem solid rgb(13, 158, 13);
    border-bottom: 0.9rem solid rgb(18, 133, 18);
    border-top: 0.9rem solid transparent;
    border-bottom-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
  }

  .letter {
    position: relative;
    background-color: #fff;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 90%;
    top: 5%;
    border-radius: .06rem;
    /* background: url(${require("@/assets/img/letter.jpg")}) -500px -400px; */
    /* box-shadow: 0.01rem 0.13rem rgba(0, 0, 0, 0.12); */
    /* background-size:30; */
    /* opacity: .5; */
    z-index:3;
    .letter-bg{
      font-family:"黑体 宋体"
      /* opacity: .5; */
      height:100%;
      width:100%;
      /* background: url(${require("@/assets/img/letter.jpg")}) -500px -400px; */
      /* background-size:80%; */
      padding:10px;
      ::after {

        content: "";

        background: url(${require("@/assets/img/letter.jpg")}) -500px -400px;

        opacity: 0.5;

        top: 0;

        left: 0;

        bottom: 0;

        right: 0;

        position: absolute;

        z-index: -1;

        }
      h1{
        /* opacity: 1; */
        font-family:Arial;
        font-weight:bold;
        font-size:2em;
        color:rgb(18, 133, 18)
      }
      .text{
        text-indent:2em;
        font-weight:bold;
        font-size:1.5em;
        color:rgb(46, 1, 170)
      }
    }
    
  }

  .letter:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background:#fff */
    /* background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(25%, rgba(255, 255, 255, 0)),
      color-stop(55%, rgba(215, 227, 239, 0.7)),
      to(#d7e3ef)
    );
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 25%,
      rgba(215, 227, 239, 0.7) 55%,
      #d7e3ef 100%
    ); */
  }

  .words {
    position: absolute;
    left: 10%;
    width: 80%;
    height: 14%;
    background-color: #eeeff0;
  }

  .words.line1 {
    top: 15%;
    width: 20%;
    height: 7%;
  }

  .words.line2 {
    top: 30%;
  }

  .words.line3 {
    top: 50%;
  }

  .words.line4 {
    top: 70%;
  }

  .open .flap {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
    -webkit-transition: z-index 0.6s, -webkit-transform 0.4s ease;
    transition: z-index 0.6s, -webkit-transform 0.4s ease;
    transition: transform 0.4s ease, z-index 0.6s;
    transition: transform 0.4s ease, z-index 0.6s, -webkit-transform 0.4s ease;
    z-index: 1;
  }

  .close .flap {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transition: z-index 1s, -webkit-transform 0.4s 0.6s ease;
    transition: z-index 1s, -webkit-transform 0.4s 0.6s ease;
    transition: transform 0.4s 0.6s ease, z-index 1s;
    transition: transform 0.4s 0.6s ease, z-index 1s,
      -webkit-transform 0.4s 0.6s ease;
    z-index: 5;
  }

  .close .letter {
    -webkit-transform: translateY.(0rem);
    transform: translateY.(0rem);
    -webkit-transition: z-index 1s, -webkit-transform 0.4s ease;
    transition: z-index 1s, -webkit-transform 0.4s ease;
    transition: transform 0.4s ease, z-index 1s;
    transition: transform 0.4s ease, z-index 1s, -webkit-transform 0.4s ease;
    z-index: 1;
  }

  .open .letter {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
    -webkit-transition: z-index 0.6s, -webkit-transform 0.4s 0.6s ease;
    transition: z-index 0.6s, -webkit-transform 0.4s 0.6s ease;
    transition: transform 0.4s 0.6s ease, z-index 0.6s;
    transition: transform 0.4s 0.6s ease, z-index 0.6s,
      -webkit-transform 0.4s 0.6s ease;
    z-index: 2;
  }

  .hearts {
    position: absolute;
    top: 0.9rem;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .heart {
    position: absolute;
    bottom: 0;
    right: 10%;
  }

  .heart:before,
  .heart:after {
    position: absolute;
    content: "";
    left: 0.5rem;
    top: 0;
    width: 0.5rem;
    height: 0.8rem;
    background: #d00000;
    border-radius: 0.5rem 0.5rem 0 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }

  .heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .close .heart {
    opacity: 0;
    -webkit-animation: none;
    animation: none;
  }

  .a1 {
    left: 20%;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    -webkit-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
    -moz-animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  .a2 {
    left: 55%;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
    -moz-animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }

  .a3 {
    left: 10%;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 1;
    -webkit-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
    -moz-animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
 

  @-webkit-keyframes slideUp {
    0% {
      top: 0;
    }

    100% {
      top: -6rem;
    }
  }

  @keyframes slideUp {
    0% {
      top: 0;
    }

    100% {
      top: -6rem;
    }
  }

  @-webkit-keyframes sideSway {
    0% {
      margin-left: . 0rem;
    }

    100% {
      margin-left: 0.5rem;
    }
  }

  @keyframes sideSway {
    0% {
      margin-left: 0rem;
    }

    100% {
      margin-left: 0.5rem;
    }
  }

  body {
    background-color: #a8e2ff;
  }

  .envlope-wrapper {
    height: 3.8rem;
    position:fixed;
    z-index:99;
    top:0;
    bottom: 10;
    /* left:0; */
    /* right:0 */
  }

  .reset {
    text-align: center;
  }

  .reset button {
    font-weight: 800;
    font-style: normal;
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
    -webkit-appearance: none;
    background-color: transparent;
    border: solid 0.02rem #0077b2;
    border-radius: 0.04rem;
    color: #0077b2;
    display: inline-block;
    font-size: 0.14rem;
    text-transform: uppercase;
    margin: 0.05rem;
    padding: 0.1rem;
    line-height: 1em;
    text-decoration: none;
    min-width: 1.2rem;
  }

  .reset button:hover {
    background-color: #0077b2;
    color: #fff;
  }
`;
