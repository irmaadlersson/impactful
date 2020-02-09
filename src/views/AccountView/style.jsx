import styled from 'styled-components';
import colors from 'tokens/colors.mjs';
const style = styled.div`
  font-family: Ubuntu, sans-serif;

  .title {
    color: ${colors.mainGreen};
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
    }
  }
  .text {
    width: 90%;
    position:relative;
    top:20%;
  }
  @media only screen and (max-width: 768px) {
    .text {
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      width: 70%;
      position: relative;
      left: 15%;
      top: 35%;
    }
  }


    * {
  box-sizing: border-box;
}

.wrapper {
  
  width: 100%;
 
}
.tabs {
  position: relative;
  margin: 3rem 0;
  height: 40vh;
}

.wrapper {
    background-color: white;
    /* height: 40vh; */
    position: relative;
    border-radius: 0.4em;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    margin-top: 6%;
  }
.tabs::before,
.tabs::after {
  content: "";
  display: table;
}
.tabs::after {
  clear: both;
}
.tab {
  float: left;
  width: 170px;
      

}

.tab-switch {
  display: none;
}
.tab-label {
  position: relative;
    display: block;
    border-radius: 0 8px;
    line-height: 2.75em;
    height: 3em;
    padding: 0 1.618em;
    background: #f6f6f6;

    
    color: ${colors.mainGreen};
    cursor: pointer;
    top: 0;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
}
@media only screen and (max-width: 768px) {
    .tab-label {
     background: white;
    }
  }
.tab-label:hover {
  top: -0.25rem;
  transition: top 0.25s;
}

.tab-content {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 1;
  left: 0;
  width:100%;
  background: #fff;
  color: #2c3e50;
  border-bottom: 0.25rem solid #bdc3c7;
  opacity: 0;
  transition: all 0.35s;
}
@media only screen and (max-width: 768px) {
    .tab-content {
box-shadow:none;
    }
  }
.tab-switch:checked + .tab-label {
  background: #fff;
    border-bottom: 0;
    border-right: 0.125rem solid #fff;
    transition: all 0.35s;
    z-index: 1;
   
    box-shadow: 0px 4px 29px rgba(0, 0, 0, 0.19);
}
@media only screen and (max-width: 768px) {
    .tab-switch:checked  + .tab-label{
border-bottom: none;
border-right:none;
font-weight: bolder;
box-shadow: none;
    }
  }
.tab-switch:checked + label + .tab-content {
  z-index: 2;
  opacity: 1;
  transition: all 0.35s;
}


  /* .wrapper {
    background-color: white;
    height: 30vh;
    position: relative;
    border-radius: 0.4em;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    top: 25%;
  }

  .cell {
    width: 10%;
    height: 7vh;
    overflow: hidden;
  }
  .favo {
    background-color: white;
    height: 11vh;
    margin: 0;
    position: relative;
    top: 135%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
  .setting {
    background-color: white;
    height: 11vh;
    margin: 0;
    position: relative;
    top: 135%;
    margin-left: -65%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
  a {
    color: ${colors.mainGreen};
    text-decoration: none;
  }
  .text {
    position: relative;
    /* padding-top: 6%; */
    /* font-size: 16px;
    color: #2b858b;
    margin: 0;
    left: 43%;
    padding-top: 10%;
  }
  .icon {
    left: 20%;
    top: 17%;

    position: absolute;
  } */
`;

export default style;
