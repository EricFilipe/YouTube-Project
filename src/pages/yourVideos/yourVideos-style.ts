import styled from "styled-components";

export const YourVideosContainer = styled.div`
 width: 100%;
`;

export const FirstContainer = styled.header`
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
`;

export const SecondContainer = styled.div<{openMenu: boolean}>`
 width: 100%;
 max-width: 1600px;
 display: grid;
 grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3,1fr)' : 'repeat(4,1fr)'};
 column-gap: 25px;
 row-gap: 20px;
 padding: ${({openMenu}) => openMenu? '70px 50px 0 330px' : '70px 10px 0 140px'};
 box-sizing: border-box;
 
 @media(max-width: 1310px) {
    padding: 70px 0 0 150px;
    grid-template-columns: repeat(2, 1fr);
 }
`;