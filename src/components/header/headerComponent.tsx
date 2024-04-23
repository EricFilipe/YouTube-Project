import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    Divider, 
    DropDownMenuList, 
    DropMenuContainer, 
    HeaderButtons, 
    LoginButton, 
    LogoContainer,
    SearchButton,
    SearchContainer,
    SearchInput,
    SearchInputContainer,
    UserIformationContainer,
    UserInformation, 
} from "./header-style";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import Searchicon from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import User from '../../assets/do-utilizador.png'
import youtube from '../../assets/youtube.png'
import change from '../../assets/pessoas.png'
import logout from '../../assets/sair.png'
import shop from '../../assets/money-management.png'
import userdata from '../../assets/userdados.png'
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/userContext";
import DropdownItem from "../dropdownitem/dropDownMenu";
import menu from '../../assets/cardapio.png'
import { MenuContext } from "../../contexts/menuContext";
import { useSearchContext } from "../../contexts/searchContext";
import { Link } from "react-router-dom";



function Header() {

    const {openMenu, setOpenMenu} = useContext(MenuContext)
    const { login, logOut } = useContext(UserContext)
    const { user } = useContext(UserContext)
    const { setSearch } = useSearchContext()
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate()
    const [inputValue, seInputValue] = useState('')

    const letter = () => {
        if(user.nome){
            return user.nome.charAt(0) 
        }
    }


    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt=""  src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>

                <SearchInputContainer>
                    <SearchInput 
                    placeholder="Pesquisar" 
                    value={inputValue} 
                    onChange={(e) => seInputValue(e.target.value)} 
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                        }
                    }}
                    />
                </SearchInputContainer>

                <SearchButton onClick={() => {
                    if(inputValue === '') {
                        return alert('Digite alguma palavra antes de pesquisar')
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}>
                    <ButtonIcon alt="" src={Searchicon} />
                </SearchButton> 

                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>

            </SearchContainer> 

            <HeaderButtons>
                {login?
                    <>
                        <ButtonContainer margin='0 10px 0 0' onClick={() => navigate('/video-upload')} >
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 10px 0 0'>
                            <ButtonIcon alt="" src={NotificationIcon} />
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
                                        <span onClick={() => logOut()}><DropdownItem img={logout} text={'Sair'}/></span>
                                            <Divider />
                                        <DropdownItem img={shop} text={'Compras e assinaturas'}/>
                                        <DropdownItem img={userdata} text={'Seus dados no YouTube'}/>
                                            <Divider />
                                        <DropdownItem img={userdata} text={'Aparência'}/>
                                        <DropdownItem img={userdata} text={'Idioma'}/>
                                        <DropdownItem img={userdata} text={'Modo restrito'}/>
                                        <DropdownItem img={userdata} text={'Local'}/>
                                        <DropdownItem img={userdata} text={'Atalhos do teclado'}/>
                                            <Divider />
                                        <DropdownItem img={userdata} text={'Configurações'}/>
                                            <Divider />
                                        <DropdownItem img={userdata} text={'Ajuda'}/>
                                        <DropdownItem img={userdata} text={'Enviar feedback'}/>
                                </DropDownMenuList>
                            </DropMenuContainer>
                    </>
                    :
                        <>
                            <ButtonContainer margin='0 10px 0 0'>
                                <ButtonIcon alt="" src={menu}/>
                            </ButtonContainer>
                            <LoginButton  onClick={() => navigate('/login')}>
                                <ButtonIcon alt="" src={User} />
                                Fazer login
                            </LoginButton >
                        </>
                }
            </HeaderButtons>
            
        </Container>
    )
}

export default Header