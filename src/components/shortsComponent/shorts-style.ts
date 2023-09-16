import styled from "styled-components";

export const ShortsContainer = styled.div`
 width: 100%;
`;

export const ShortsImageBanner = styled.img`
 width: 100%;
 height: 380px;
 border-radius: 12px;

 @media(max-width: 768px) {
  height: 780px;
}
`;

export const TitleContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
`;

export const ShortsTitle = styled.div`
 font-weight: 600;
 color: #0f0f0f;
`;

export const TextCard = styled.div`
 color: #8c8c8c;
 font-size: 14px;
`;

