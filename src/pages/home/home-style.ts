import styled from "styled-components";

export const HomeContainer = styled.div`
 width: 100%;
`;

export const MainContainer = styled.div<{openMenu: boolean}>`
 width: 100%;
 max-width: 1600px;
 display: flex;
 flex-direction: column;
 padding: ${({openMenu}) => openMenu? '140px 50px 0 290px' : '140px 10px 0 110px'};
 box-sizing: border-box;
 
 @media(max-width: 1310px) {
  padding: 140px 10px 0 130px;
}

@media(max-width: 768px){
   padding: 140px 50px 0 50px;
}

@media(max-width: 414px){
   padding: 140px 20px 0 20px;
}
`;

export const Container = styled.div<{openMenu: boolean}>`
 width: 100%;
 max-width: 1600px;
 display: grid;
 grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
 column-gap: 20px;
 row-gap: 50px;

 @media(max-width: 1090px) {
  grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 650px){
   grid-template-columns: repeat(1, 1fr);
}
`;

export const Divider = styled.div<{ margin: string }>`
 width: 100%;
 border-top: 4px solid #bfbfbf;
 margin: ${({ margin }) => margin? margin : 0};
`;

export const ShortsContainer = styled.div<{openMenu: boolean}>`
 width: 100%;
 display: flex;
 justify-content: center;
 column-gap: 20px;
 margin-top: 20px;

 @media(max-width: 768px) {
  flex-wrap: wrap;
  width: 80%;
  row-gap: 30px;
  margin-left: 60px;
}
`;

export const ShortsIconContainer = styled.div`
 width: 100%;
 height: 50px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

export const ShortsIcons = styled.div`
 width: 5%;
 display: flex;
 align-items: center;

 span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 19px;
 }
`;

export const ShortsArrowContainer = styled.div`
 width: 100%;
 height: 50px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 margin-top: 20px;

 :hover {
    background-color: #bfbfbf;
 }
`;

export const Arrow = styled.div`
 padding: 5px;
 box-shadow: 1px -1px 0 1px #8c8c8c inset;
 border: solid transparent;
 border-width: 0 0 2px 2px;
 transform: rotate(-45deg);
`;