import styled from "styled-components";

export const SearchContainer = styled.div`
 width: 100%;
`;

export const Container = styled.div<{openMenu: boolean}>`
 width: 100%;
 max-width: 1600px;
 row-gap: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: ${({openMenu}) => openMenu? '100px 50px 0 300px' : '100px 10px 0 100px'};
 box-sizing: border-box;
`;