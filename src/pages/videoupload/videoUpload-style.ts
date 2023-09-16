import styled from "styled-components";

export const Container = styled.header`
 width: 100%;
 height: 65px;
 background-color: #fff;
 padding: 0 16px;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: fixed;
 top: 0;
 border: 1px solid #bfbfbf;
 box-shadow: 0 1px 0 0 #EBEBEB;
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
 display: flex;
 align-items: center;
 padding: 0 5px;

 @media(max-width: 1024px){
 margin-left: 60px;
 }

 @media(max-width: 768px){
  border: none;
  width: 40px;
  margin-left: 400px;
 }
`;

export const SearchInput = styled.input`
 width: 100%;
 height: 25px;
 outline: none;
 border: none;

 @media(max-width: 768px){
  display: none;
 }
`;

export const SearchButton = styled.div`
 height: 35px;
 width: 70px;
 display: flex;
 justify-content: center;
 align-items: center;
 opacity: .5;

 @media(max-width: 768px){
  display: flex;
  opacity: 1;
  cursor: pointer;
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
 display: ${({ isActive }) => isActive? 'flex' : 'none'};
 top: 55px;
 right: 30px;
 background-color: #fff;
 border-radius: var(--border-radius);
 opacity: ${({isActive}) => isActive? '1' : '0'};
 visibility: ${({isActive}) => isActive? 'visible' : ''};
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

export const ContainerMenu = styled.div<{ openMenu: boolean }>`
 width: ${({ openMenu }) => openMenu? '270px' : '110px'};
 height: 100vh;
 box-sizing: border-box;
 padding: 10px 10px 10px 10px;
 display: flex;
 align-items: center;
 flex-direction: column;
 position: fixed;
 top: 65px;
 border-right:  1px solid #bfbfbf;

 @media(max-width: 1310px){
  width: 110px;
 }
`;

export const ItemsContainer = styled.div`
 width: 270px;
 height: 360px;
 padding: 2px 15px;
 box-sizing: border-box;
 overflow-y: auto;
`;

export const MenuItemClosed = styled.div<{openMenu: boolean}>`
 width: 90%;
 min-height: 70px;
 border-radius: 10px;
 cursor: pointer;
 padding: 2px 15px;
 box-sizing: border-box;
 display: ${({ openMenu }) => openMenu? 'none' : 'flex'};
 flex-direction: column;
 align-items: center;
 justify-content: center;

 span{
   font-weight: 400;
   font-size: 12px;
 }

 :hover{
    background-color: #f2f2f2;
 }

 @media(max-width: 1310px){
  display: flex;
 }
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
 width: 98%;
 min-height: 45px;
 border-radius: 10px;
 cursor: pointer;
 padding: 2px 15px;
 box-sizing: border-box;
 display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
 align-items: center;
 opacity: .7;

 span{
   font-weight: 600;
   margin-left: 20px;
   font-size: 15px;
   white-space: nowrap;
 }

 :hover{
    background-color: #f2f2f2;
 }

 @media(max-width: 1310px){
  display: none;
 }
`;

export const MenuDescription = styled.div<{ openMenu: boolean }>`
 height: 30px;
 width: 90%;
 font-weight: 600;
 font-size: 16px;
 padding: 3px 17px;
 box-sizing : border-box;
 display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const InformationBox = styled.div`
 height: 210px;
 width: 210px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const UserIcon = styled.div<{openMenu: boolean}>`
 height: ${({openMenu}) => openMenu? '120px' : '60px'} ;
 width: ${({openMenu}) => openMenu? '120px' : '60px'}  ;
 border-radius: 50% ;
 background-color: green;
 font-size: ${({openMenu}) => openMenu? '80px' : '40px'} ;
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;

 @media(max-width: 1310px){
  height: 60px;
  width: 60px;
  font-size: 40px;
 }
`;

export const ChannelContentContainer = styled.div<{openMenu: boolean}>`
 width: 30%;
 height: 110px;
 display: flex;
 flex-direction: column;
 margin: ${({openMenu}) => openMenu? '15px 0 0 30px' : '15px 0 0 -140px'};
 position: fixed;
 top: 50px;

 h1{
  font-weight: 600;
  font-size: 24px;
 }

 @media(max-width: 1310px){
  margin: 15px 0 0 -140px;
 }

 @media(max-width: 1024px){
  width: 35%;
 }
`;

export const ChannelCategories = styled.div`
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: space-between;
 margin-top: 10px;
 

 span{
  font-size: 15px;
  cursor: pointer;
 }
`;

export const FilterSelection = styled.div<{openMenu: boolean}>`
 width: ${({openMenu}) => openMenu? '99.8%' : '113%'};
 height: 50px;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 border: 1px solid #bfbfbf;
 margin-left: ${({openMenu}) => openMenu? '0' : '-160px'};
 position: fixed;
 top: 180px;

 @media(max-width: 1310px){
  margin-left: -160px;
 }
`;

export const FilterInput = styled.input`
 width: 90%;
 height: 25px;
 outline: none;
 border: none;
`;

export const CheckBoxSelection = styled.div<{openMenu: boolean}>`
 width: ${({openMenu}) => openMenu? '83%' : '93%'};
 height: 50px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border: 1px solid #bfbfbf;
 margin-left: ${({openMenu}) => openMenu? '0' : '-160px'};
 position: fixed;
 top: 230px;

 @media(max-width: 1310px){
  margin-left: -160px;
  width: 120%;
 }

 @media(max-width: 1024px){
  width: 140%;
 }

 @media(max-width: 768px){
  width: 250%;
 }
`;

export const ChannelOptions = styled.div`
 width: 50%;
 height: 30px;
 display: flex;
 justify-content: space-around;
 margin-top: 10px;
 

 span{
  font-size: 14px;
  cursor: pointer;
 }
`;

export const CheckboxContainer = styled.div`
 width: 120px;
 display: flex;
 justify-content: space-between;
 align-items: center;

 span{
  font-size: 14px;
  color: #595959;
 }
`;

export const Checkbox = styled.input`
 width: 18px;
 height: 18px;
 margin-left: 35px;
`;

export const UploadVideoBttn = styled.button<{modal: boolean}>`
 width: 130px;
 height: 40px;
 background-color: #0289CC;
 border: none;
 outline: none;
 border-radius: 2px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 color: #000;
 font-size: 13px;
 font-weight: bold;
 position: relative;
 

 @media(max-width: 1310px){
  position: relative;
  top: ${({modal}) => modal? '200px' : '0'};
  right: 60px;
 }
`;

export const Modal = styled.div<{hideModal: boolean}>`
 visibility: ${({hideModal}) => hideModal? 'hidden' : 'visible'};
 width: 100vw;
 height: 100vh;
 background-color: rgba(0,0,0,0.5);
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const UploadVideoSectionContainer = styled.div`
 position: absolute;
 width: 60%;
 height: 700px;
 left: 20%;
 top: 6%;
 display: flex;
 flex-direction: column;
 box-shadow: .5px 1px .5px .5px #bfbfbf;
 background-color: #fff;
 border-radius: 8px;
`;

export const TitleandBttns = styled.div`
 width: 100%;
 height: 55px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
 box-sizing: border-box;

 h1{
  font-size: 20px;
 }
`;

export const Bttns = styled.div`
 width: 60px;
 display: flex;
 justify-content: space-between;
`;

export const VideoInformationContainer = styled.div`
 width: 100%;
 height: 550px;
 padding: 15px;
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 align-items: center;
`; 

export const AuxiliarText = styled.div`
 width: 90%;
 height: 55px;
 display: flex;
 justify-content: space-between;
 align-items: center;

 h1{
  font-size: 22px;
 }

 span{
  font-size: 16px;
  color:  #2D8AEB;
  cursor: pointer;
 }
`;

export const InputsContainer = styled.div`
 width: 90%;
 height: 450px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;

export const Inputs = styled.input`
 width: 100%;
 height: 90%;
 border: none;
 outline: none;
`;

export const TitleInputContainer = styled.div<{valid: boolean}>`
 width: 100%;
 height: 100px;
 padding: 0 10px;
 box-sizing: border-box;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};

 :hover{
  opacity: 1;
 }
`;

export const DescriptionInputContainer = styled.div<{valid: boolean}>`
 width: 100%;
 height: 200px;
 padding: 0 10px;
 box-sizing: border-box;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};

 :hover{
  opacity: 1;
 }
`;

export const ThumbnailInputContainer = styled.div<{valid: boolean}>`
 width: 100%;
 height: 100px;
 padding: 0 10px;
 box-sizing: border-box;
 border: ${({valid}) => valid? '1px solid #d3d3d3' : '1px solid red'};

 :hover{
  opacity: 1;
 }
`;
