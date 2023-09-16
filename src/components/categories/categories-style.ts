import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
 width: ${({ openMenu }) => openMenu? '77%' : '85%'};
 height: 45px;
 margin-top: 5px;
 display: flex;
 align-items: center;
 position: fixed;
 top: 50px;
 background-color: #fff;

@media(max-width: 1310px) {
 width: 85%;
}
`;

export const Button = styled.button`
 min-height: 90%;
 max-height: 90%;
 display: inline-block;
 white-space: nowrap;
 align-items: center;
 padding: 5px;
 box-sizing: border-box;
 border-radius: 8px;
 border: none;
 outline: none;
 font-size: 14px;
 font-weight: 400;
 color: #000;
 background-color: #f2f2f2;
 cursor: pointer;

 :hover{
  background-color: #bfbfbf;
 }

 :focus{
  outline: none;
  background-color: #000;
  color: #fff;
 }
`;

export const CategorieSlider = styled.div`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 justify-content: flex-start;
 column-gap: 20px;
 height: 70%;
 overflow-x: hidden;
`;

export const CategoriesItems = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-start;
 column-gap: 20px;
 height: 100%;
`;

export const PreBtn = styled.button<{openMenu: boolean}>`
 transform: rotate(180deg);
 height: 40px;
 width: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 border: none;
 position: fixed;
 cursor: pointer;
 background-color: #fff;
 left: 0;
 margin-left: ${({ openMenu }) => openMenu? '240px' : '100px'};

 :hover{
   background-color: #F0EFED;
 }

 @media(max-width: 1310px) {
  margin-left: 90px;
}

 @media(max-width: 775px) {
  margin-left: 10px;
}
`;

export const NxtBtn = styled.button`
 right: 0;
 height: 40px;
 width: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 border: none;
 position: fixed;
 cursor: pointer;
 background-color: #fff;
 margin-right: 15px;

 :hover{
   background-color: #F0EFED;
 }

 @media(max-width: 1024px) {
  margin-right: 10px;
}
`;