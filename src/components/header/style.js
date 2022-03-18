import styled from "styled-components";
import imgbg from "../../assets/vingadores-ultimato-1210x540.png";
import logo from "../../assets/Marvel_Logo.svg.png"
export const Head = styled.div`
  background-image: url(${logo});
  height: 10vh;
  background-size: 250px 50px;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #EE2C1F;
`
export const HeaderMarvel = styled.div`
  background-image: url(${imgbg});
  background-size: 100% 300px;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vh;
  
`;
