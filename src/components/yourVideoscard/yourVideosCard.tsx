import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./yourVideosCard-style";

interface Props{
    title: string,
    thumbnail: string,
    channelImage: string,
    details: string
    publicationDate: string
  }
  
  function YourVideosCard(props: Props) {
  
    return (
      <Container>
        <ImageBanner alt="thumbnail" src={props.thumbnail} />
        <TitleContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextContainer>
            <Title>{props.title}</Title>
            <TextCard>{props.details}</TextCard>
            <TextCard>{props.publicationDate}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    );
  }
  
  export default YourVideosCard;
  