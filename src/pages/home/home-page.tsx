import Categories from "../../components/categories/categoriesCard";
import { ButtonIcon } from "../../components/menu/menu-style";
import ShortsComponent from "../../components/shortsComponent/shortsCard";
import VideoComponent from "../../components/videoComponent/videoComponent";
import { Arrow, Container, Divider, HomeContainer, MainContainer, ShortsArrowContainer, ShortsContainer, ShortsIconContainer, ShortsIcons } from "./home-style";
import Shorts from '../../assets/video2.png'
import X from '../../assets/x.png'
import { ButtonContainer } from "../../components/header/header-style";
import Header from "../../components/header/headerComponent";
import Menu from "../../components/menu/menuComponent";
import { MenuContext } from "../../contexts/menuContext";
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment";
import { useCategoryContext } from "../../contexts/searchCategories";


const shorts = [
{
  image: 'https://i.ytimg.com/vi/9gn5cAGvfNM/frame0.jpg',
  title: 'Curiosidades sobre a Área 51 #Shorts',
  views: '53 mil',
},
{
  image: 'https://i.ytimg.com/vi/cd8Kt4dvcJs/oar2.jpg?sqp=-oaymwEhCJUDENAFSFryq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLA4L6iBb0L0XAyIlgPSoXvYFYhG6w',
  title: 'Lightsaber Duels now vs Back Then',
  views: '6,6 mi de',
},
{
  image: 'https://i.ytimg.com/vi/_e8ktELr8BQ/frame0.jpg',
  title: "This is why you should play Assassin's Creed",
  views: '600 mil',
},
{
  image: 'https://i.ytimg.com/vi/BW3LaZuWGBo/frame0.jpg',
  title: 'A roleta do bom dia e cia era honesta?',
  views: '14 mi de',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXn9s-rjslVgUG8wBDPLSZup6-E0lJd_K8g&usqp=CAU',
  title: 'O VILÃO MAIS MACABRO DO BATMAN',
  views: '56 mil',
},
]

function Home() {

  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string
        }
      }
      channelTitle: string;
      publishedAt: string;
    }
    statistics: {
      viewCount: string
    }
  }

  const [videos, setVideos] = useState<Videos[]>([])
  const {categoryId} = useCategoryContext()
  const {openMenu} = useContext(MenuContext)

  const API_KEY = 'AIzaSyDg4JZUG7w2LY-_5bQZVgSjQnOYdvkePEc'

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&
  hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`

  async function load() {
    try{
      const resposta = await axios.get(url)
      setVideos(resposta.data.items)
      console.log(resposta.data.items)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    load()
  }, [categoryId])

  function formatViewCount (viewCount: number): string {
    if(viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`
    } else if(viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)} mil de visualizações`
    } else {
      return `${viewCount} visualizações`
    }
  }

  function getPublishedTime(publishedAt : string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, 'days');

    if(diffDays <= 0) {
      return 'hoje';
    } else if(diffDays === 1) {
      return 'há 1 dia'
    } else if(diffDays <= 7) {
      return `há ${diffDays} dias`
    } else if(diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7)
      if(diffWeeks === 1) {
        return 'há 1 semana'
      } else {
        return `há ${diffWeeks} semanas`
      }
    } else if(diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30)
      if(diffMonths === 1) {
        return 'há 1 mês'
      } else {
        return `há ${diffMonths} meses`
      }
    } else {
      const diffYears = Math.floor(diffDays / 365)
      if(diffYears === 1) {
        return 'há 1 ano'
      } else {
        return `há ${diffYears} anos`
      }
    }
  }

  return (
    <HomeContainer>
      <Header />
      <Menu />
      <MainContainer openMenu={openMenu}>
        <Categories />                    
        <Container openMenu={openMenu}>
          {videos.map((video) => (
            <VideoComponent 
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
              channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
              channelName={video.snippet.channelTitle}
              details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.
              publishedAt)}`}
              key={video.id}
            />
          ))}
        </Container>

          <Divider margin='40px 0 20px 0' />

            <ShortsIconContainer>
              <ShortsIcons>
                <ButtonIcon alt="" src={Shorts} />
                <span>Shorts</span>
              </ShortsIcons>
              <ShortsIcons>
                <ButtonContainer>
                  <ButtonIcon alt="" src={X} />
                </ButtonContainer>
              </ShortsIcons>
            </ShortsIconContainer>

            <ShortsContainer openMenu={openMenu}>
              {shorts.map((shorts) => (
                <ShortsComponent openMenu={openMenu} shorts={shorts}/>
              ))}
            </ShortsContainer>

            <ShortsArrowContainer>
              <Arrow />
            </ShortsArrowContainer>

         <Divider margin='0 0 40px 0' />

      </MainContainer>
    </HomeContainer>
  )   
}

export default Home;
