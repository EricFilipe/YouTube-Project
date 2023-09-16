import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/userContext';
import { FirstContainer, SecondContainer, YourVideosContainer } from './yourVideos-style';
import { ButtonContainer, ButtonIcon, ContainerMenu, Divider, DropDownMenuList, DropMenuContainer, HeaderButtons, InformationBox, ItemsContainer, LogoContainer, MenuItem, MenuItemClosed, SearchButton, SearchContainer, SearchInput, SearchInputContainer, UserIcon, UserIformationContainer, UserInformation } from '../videoupload/videoUpload-style';
import DropdownItem from '../../components/dropdownitem/dropDownMenu';
import { MenuContext } from '../../contexts/menuContext';
import User from '../../assets/do-utilizador.png'
import youtube from '../../assets/youtube.png'
import change from '../../assets/pessoas.png'
import logout from '../../assets/sair.png'
import shop from '../../assets/money-management.png'
import userdata from '../../assets/userdados.png'
import youtubestudiologo from '../../assets/studio.png'
import interrogaçao from '../../assets/ponto-de-interrogacao.png'
import painel from '../../assets/painel-de-controle.png'
import video from '../../assets/youtube2.png'
import analise from '../../assets/analise-da-web.png'
import comentario from '../../assets/comentarios.png'
import legenda from '../../assets/legenda.png'
import direitoaultoral from '../../assets/direito-autoral.png'
import monetizacao from '../../assets/monetizacao.png'
import personalizacao from '../../assets/personalizacao.png'
import audiolib from '../../assets/livro-de-musica.png'
import config from '../../assets/configuracao.png'
import feedback from '../../assets/ponto-de-exclamacao.png'
import HamburgerIcon from '../../assets/hamburger.png';
import Searchicon from '../../assets/search.png';
import YourVideosCard from '../../components/yourVideoscard/yourVideosCard';

function YourVideos() {

    const items = ['Painel', 'Conteúdo', 'Análises', 'Comentários', 'Legendas', 'Direitos autorais', 'Monetização', 
    'Personalização', 'Biblioteca de áudio', 'Configurações', 'Enviar feedback']

    interface Videos {
     title: string;
     video_id: string;
     thumbnail: string;
     description: string;
     publicationDate: string;
    }
  
    const [isActive, setIsActive] = useState(false)
    const {user, userVideos} = useContext(UserContext)
    const {openMenu, setOpenMenu} = useContext(MenuContext)

    const letter = () => {
        if(user.nome == null){
            return null
        } else {
            return user.nome.charAt(0)
        }
    }

    function getTimeDifference(publicationDate: string): string {
        const diff = Date.now() - Date.parse(publicationDate)
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 12 * month;

        if(diff < minute * 5) {
            return "Agora"
        } else if (diff < hour) {
            const minutes = Math.floor(diff / minute)
            return `Há ${minutes} ${minutes < 2 ? 'minuto' : 'minutos'}`
        } else if (diff < day) {
            const hours = Math.floor(diff / hour)
            return `Há ${hours} ${hours < 2 ? 'hora' : 'horas'}`
        } else if (diff < week) {
            const days = Math.floor(diff / day)
            return `Há ${days} ${days < 2 ? 'dai' : 'dias'}`
        } else if (diff < month) {
            const weeks = Math.floor(diff / week)
            return `Há ${weeks} ${weeks < 2 ? 'semana' : 'semanas'}`
        } else if (diff < year) {
            const months = Math.floor(diff / month)
            return `Há ${months} ${months < 2 ? 'mês' : 'meses'}`
        } else {
            const years = Math.floor(diff / year)
            return `Há ${years} ${years < 2 ? 'ano' : 'anos'}`
        }
    }
  
    return (
        <>
      <YourVideosContainer>
        <FirstContainer>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt=""  src={HamburgerIcon} />
                </ButtonContainer>
                <img  
                    style={{ cursor: 'pointer', width: '100px', height: '60px' }}
                    alt=""
                    src={youtubestudiologo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src={Searchicon} />
                    </SearchButton>
                    <SearchInput placeholder="Pesquise no seu canal" />
                </SearchInputContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={interrogaçao} />
                </ButtonContainer>
                <ButtonContainer margin='0 10px 0 0' onClick={() => setIsActive(!isActive)} >
                    {letter()}
                </ButtonContainer>
                <DropMenuContainer isActive={isActive}>
                    <DropDownMenuList>
                        <UserIformationContainer>
                            <ButtonContainer style={{backgroundColor: 'green'}}>{letter()}</ButtonContainer>
                            <UserInformation>
                                <span>{user.nome}</span>
                                <span>{user.email}</span>
                                <p>Gerenciar sua Conta do Google</p>
                            </UserInformation>
                        </UserIformationContainer>

                        <Divider />

                        <DropdownItem img={User} text={'Seu canal'}/>
                        <DropdownItem img={youtube} text={'YouTube Studio'}/>
                        <DropdownItem img={change} text={'Alternar Conta'}/>
                        <span><DropdownItem img={logout} text={'Sair'}/></span>
                            <Divider />
                        <DropdownItem img={shop} text={'Compras e assinaturas'}/>
                        <DropdownItem img={userdata} text={'Seus dados no YouTube'}/>
                    </DropDownMenuList>
                </DropMenuContainer>
            </HeaderButtons>
        </FirstContainer>

        <ContainerMenu openMenu={openMenu}> 
            <InformationBox>
                <UserIcon openMenu={openMenu}>{letter()}</UserIcon>
                <span style={{fontWeight: '500', marginTop: '10px'}}>Seu canal</span>
                <span>{user.nome}</span>
            </InformationBox>
            <MenuItemClosed openMenu={openMenu} >
                <ButtonIcon alt="" src={painel} />
                <span>{`${items.find(items => items === 'Painel')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} >
                <ButtonIcon alt="" src={video} />
                <span>{`${items.find(items => items === 'Conteúdo')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} >
                <ButtonIcon alt="" src={analise} />
                <span>{`${items.find(items => items === 'Análises')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} > 
                <ButtonIcon alt="" src={comentario} />
                <span>{`${items.find(items => items === 'Comentários')}`}</span>
            </MenuItemClosed>
            
            <ItemsContainer>
                <MenuItem openMenu={openMenu} >
                    <ButtonIcon alt="" src={painel} />
                        <span>{`${items.find(item => item === 'Painel')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu} >
                    <ButtonIcon alt="" src={video} />
                        <span>{`${items.find(items => items === 'Conteúdo')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu} >
                    <ButtonIcon alt="" src={analise} />
                        <span>{`${items.find(items => items === 'Análises')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu} >
                    <ButtonIcon alt="" src={comentario} />
                    <span>{`${items.find(items => items === 'Comentários')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={legenda} />
                    <span>{`${items.find(items => items === 'Legendas')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={direitoaultoral} />
                    <span>{`${items.find(items => items === 'Direitos autorais')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={monetizacao} />
                    <span>{`${items.find(items => items === 'Monetização')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={personalizacao} />
                    <span>{`${items.find(items => items === 'Personalização')}`}</span>
                </MenuItem>
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={audiolib} />
                    <span>{`${items.find(items => items === 'Biblioteca de áudio')}`}</span>
                </MenuItem>
            </ItemsContainer>

            <Divider />

            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={config} />
                <span>{`${items.find(items => items === 'Configurações')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={feedback} />
                <span>{`${items.find(items => items === 'Enviar feedback')}`}</span>
            </MenuItem>
        </ContainerMenu>  

        <SecondContainer openMenu={openMenu}>
            <h1>{user && user.nome ? user.nome : ''}</h1>
            {Array.isArray(userVideos) ? (
                userVideos.map((video: Videos) => 
                <YourVideosCard
                    title={video.title}
                    thumbnail={video.thumbnail}
                    channelImage={user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                    details={video.description}
                    publicationDate={getTimeDifference(video.publicationDate)}
                    key={video.video_id}
                />)
            )
            :
            (
                <h1>Esse canal não possui videos</h1>
            )}
        </SecondContainer>
        
  
      </YourVideosContainer>
      </>
    )   
  }
  
  export default YourVideos;