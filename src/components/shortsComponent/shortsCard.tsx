import { ShortsContainer, ShortsImageBanner, ShortsTitle, TextCard, TitleContainer } from "./shorts-style";

interface IProps{
  openMenu: boolean,
  shorts: any
}

function ShortsComponent({ openMenu, shorts}: IProps) {

  return (
        <ShortsContainer>
          <ShortsImageBanner src={shorts.image}/>
            <TitleContainer>
              <ShortsTitle>{shorts.title}</ShortsTitle>
              <TextCard>{shorts.views} visualizações</TextCard>
            </TitleContainer>
        </ShortsContainer>
  )   
}

export default ShortsComponent;
