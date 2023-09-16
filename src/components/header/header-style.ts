import styled from 'styled-components';

export const Container = styled.header`
 width: 100%;
 height: 55px;
 background-color: #fff;
 padding: 0 16px;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: fixed;
 top: 0;
 z-index: 1;
`;

export const LogoContainer = styled.div`
 display: flex;
 align-items: center;
`;

export const ButtonContainer = styled.div <{ margin?: string }>`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 margin: ${({ margin }) => margin? margin : 0};
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

 :hover{
    background-color: #f2f2f2;
 }
`;

export const ButtonIcon = styled.img`
 width: 20px;
`;

export const SearchContainer = styled.div`
 display: flex;
`;

export const SearchInputContainer = styled.div`
 width: 450px;
 height: 35px;
 border: 1px solid #d3d3d3;
 border-radius: 40px 0 0 40px;
 display: flex;
 align-items: center;
 padding: 0 16px;

 @media(max-width: 1124px) {
  width: 130px;
  margin-left: 100px;
}

@media(max-width: 730px){
  margin-left: 40px;
}

@media(max-width: 650px){
  display: none;
}
`;

export const SearchInput = styled.input`
 width: 100%;
 height: 25px;
 outline: none;
 border: none;

 @media(max-width: 650px){
  display: none;
}
`;

export const SearchButton = styled.div`
 border-radius: 0 40px 40px 0;
 height: 35px;
 width: 70px;
 background-color: #f8f8f8;
 border: 1px solid #d3d3d3;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

 @media(max-width: 650px){
  border: none;
  margin-left: 175px;
}
`;

export const HeaderButtons = styled.div`
 width: 250px;
 display: flex;
 justify-content: end;
`;

export const LoginButton = styled.button`
 width: 130px;
 height: 35px;
 border-radius: 40px;
 border: 1px solid #d3d3d3;
 background-color: #f8f8f8;
 cursor: pointer;
 font-weight: 550;
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 justify-content: space-around;

 :hover{
   background-color: #bfbfbf;
 }
`;

export const DropMenuContainer = styled.nav<{isActive: boolean}>`
 width: 300px;
 top: 10px;
 right: 80px;
 background-color: #fff;
 opacity: ${({isActive}) => isActive? '1' : '0'};
 visibility: ${({isActive}) => isActive? 'visible' : 'hidden'};
 position: absolute;
 border-radius: 8px;
 box-shadow: .5px .5px 2px 1px #bfbfbf;
`;

export const DropDownMenuList = styled.ul`
 width: 100%;
 display: flex;
 flex-direction: column;
 list-style: none;
 padding: 10px 0;
`;

export const UserIformationContainer = styled.div`
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: space-evenly;
`;

export const UserInformation = styled.div`
 color: #000;
 display: flex;
 flex-direction: column;

 p{
  color: #2D8AEB;
  cursor: pointer;
 }
`;

export const Divider = styled.div`
 width: 100%;
 border-top: .5px solid #bfbfbf;
 margin: 10px 0;
`;

