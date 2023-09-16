import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
 width: ${({ openMenu }) => openMenu? '260px' : '110px'};
 height: calc(100vh - 55px);
 box-sizing: border-box;
 padding: 10px 10px 10px 10px;
 display: flex;
 align-items: center;
 flex-direction: column;
 position: fixed;
 top: 55px;

 :hover{
  overflow-y: auto;
 }

@media(max-width: 775px) {
  display: none;
}

@media(max-width: 1310px) {
  width: 120px;
}
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

 @media(max-width: 1310px) {
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

 span{
   font-weight: 600;
   margin-left: 20px;
   font-size: 15px;
   white-space: nowrap;
 }

 :hover{
    background-color: #f2f2f2;
 }

 @media(max-width: 1310px) {
  display: none;
 
}
`;

export const ButtonIcon = styled.img`
 width: 20px;
`;

export const Divider = styled.div<{ openMenu: boolean }>`
 width: 100%;
 border-top: ${({ openMenu }) => openMenu? '.5px solid #bfbfbf' : 'none'};
 margin: 10px 0;

 @media(max-width: 1310px) {
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

 @media(max-width: 1310px) {
  display: none;
}
`;