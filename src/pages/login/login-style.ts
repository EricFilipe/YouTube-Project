import styled from "styled-components";

interface InputValid {
  valid: boolean
}

export const Container = styled.div`
 height: 500px;
 width: 440px;
 position: absolute;
 border: 1px solid #d3d3d3;
 border-radius: 10px;
 top: 18%;
 left: 35%;
 display: flex;
 justify-content: center;
 align-items: center;

 @media(max-width: 1024px){
 left: 25%;
 }

 @media(max-width: 768px){
    left: 20%;
  }

 @media(max-width: 620px){
  left: 15%;
 }
`;

export const ContentContainer = styled.div`
 width: 85%;
 height: 80%;
 display: flex;
 flex-direction: column;
`;

export const FontsContainer = styled.div`
 height: 100px;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 

 span{
    font-weight: 450;
    font-size: 24px;
 }
`;

export const Logo = styled.img`
 width: 80px;
 height: auto;
`;

export const EmailInputContainer = styled.div<InputValid>`
 width: 100%;
 height: 60px;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;

export const PasswordInputContainer = styled.div<InputValid>`
 width: 100%;
 height: 60px;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};
 border-radius: 5px;
 display: flex;
 align-items: center;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: 40px;
`;

export const Input = styled.input`
 width: 100%;
 height: 50px;
 border: none;
 outline: none;
`;

export const AuxiliarTextContainer = styled.div`
 width: 100%;
 height: 110px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding-top: 10px;

 span{
 color: #2D8AEB;
 font-size: 15px;
 font-weight: 500;
 cursor: pointer;
 }
`;


export const Text = styled.div`
 font-size: 15px;
 color: #4d4d4d;

 span{
 color: #2D8AEB;
 font-size: 15px;
 font-weight: 500;
 cursor: pointer;
 }
`;

export const ButtonsContainer = styled.div`
 width: 100%;
 height: 50px;
 display: flex;
 justify-content: space-between;
 align-items: end;
 background-color: #fff;
 margin-top: 15px;
`;

export const Button1 = styled.button`
 height: 35px;
 width: 100px;
 border: none;
 color: #2D8AEB;
 cursor: pointer;
 background-color: #fff;
 font-size: 13px;
 font-weight: 550;
 white-space: nowrap;

 :hover{
   color: #265DC9;
 }
`;

export const Button2 = styled.button`
 height: 35px;
 width: 100px;
 background-color: #2E6EF2;
 color: #fff;
 font-size: 14px;
 cursor: pointer;
 border: none;
 border-radius: 4px;
 transition: .2s;

 :hover{
   background-color: #265DC9;
   box-shadow: 0 1px 0 0 #bfbfbf;
 }
`;


export const FooterContainer = styled.div`
 width: 440px;
 height: 35px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: absolute;
 top: 83%;
 left: 35%;
 
 span{
  font-size: 13px;
  color: #4d4d4d;
  cursor: pointer;
 }

 @media(max-width: 1024px){
    left: 25%;
  }

  @media(max-width: 768px){
    left: 20%;
  }

  @media(max-width: 20px){
  left: 15%;
 }
`;

export const IdiomsSelect = styled.select`
 width: 180px;
 height: 35px;
 background-color: #fff;
 border: none;
 cursor: pointer;
`;

export const EmailContainer = styled.div`
 height: 30px;
 width: auto;
 border-radius: 40px;
 border: 1px solid #d3d3d3;
 display: flex;
 align-items: center;
 font-size: 14px;
 padding: 0 10px;
 cursor: pointer;

 :hover{
  background-color: #F4F8FF;
 }
`;

export const CheckBoxContainer = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 column-gap: 5px;
 margin-top: 5px;
`;