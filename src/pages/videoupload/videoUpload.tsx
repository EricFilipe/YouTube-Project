import { useContext, useState, useEffect, useRef } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { AuxiliarText, Bttns, ButtonContainer, ButtonIcon, ChannelCategories, ChannelContentContainer, ChannelOptions, CheckBoxSelection, Checkbox, CheckboxContainer, Container, ContainerMenu, DescriptionInputContainer, Divider, DropDownMenuList, DropMenuContainer, FilterInput, FilterSelection, HeaderButtons, InformationBox, Inputs, InputsContainer, ItemsContainer, LogoContainer, MenuItem, MenuItemClosed, Modal, SearchButton, SearchContainer, SearchInput, SearchInputContainer, ThumbnailInputContainer, TitleInputContainer, TitleandBttns, UploadVideoBttn, UploadVideoSectionContainer, UserIcon, UserIformationContainer, UserInformation, VideoInformationContainer } from "./videoUpload-style";
import HamburgerIcon from '../../assets/hamburger.png';
import Searchicon from '../../assets/search.png';
import DropdownItem from "../../components/dropdownitem/dropDownMenu";
import { UserContext } from "../../contexts/userContext";
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
import X from '../../assets/x.png'
import moment from "moment";
import { InputEmpty, MessageContainer } from "../sign-up/sign-up-style";
import { useNavigate } from "react-router-dom";



const items = ['Painel', 'Conteúdo', 'Análises', 'Comentários', 'Legendas', 'Direitos autorais', 'Monetização', 
'Personalização', 'Biblioteca de áudio', 'Configurações', 'Enviar feedback']

function VideoUpload() {
    const {openMenu, setOpenMenu} = useContext(MenuContext)
    const {user, createVideo, token} = useContext(UserContext)
    const [isActive, setIsActive] = useState(false)
    const [active, setActive] = useState(false)
    
    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [description, setDescription] = useState('')

    const titleRef = useRef<HTMLInputElement>(null)
    const thumbnaileRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)

    const [titleValid, setTitleValid] = useState(true)
    const [thumbnailValid, setThumbnailValid] = useState(true)
    const [descriptionValid, setDescriptionValid] = useState(true)
   
    const [hidemodal, setHideModal] = useState(true)

    const navigate = useNavigate()

    const sendVideo = () => {
        const date: Date = new Date()

        if(thumbnail.trim() !== '') {
            setThumbnailValid(true)
        }
        if(title.trim() !== '') {
            setTitleValid(true)
        }
        if(description.trim() !== '') {
            setDescriptionValid(true)
        }
        if(title.trim() === '' && description.trim() === '' && thumbnail.trim() === '') {
            setTitleValid(false)
            setDescriptionValid(false)
            setThumbnailValid(false)
            if(titleRef.current) {
                titleRef.current.focus()
            }
        }
        else if(title.trim() === '') {
            setTitleValid(false)
            if(titleRef.current) {
                titleRef.current.focus()
            }
        }
        else if(description.trim() === '') {
            setDescriptionValid(false)
            if(descriptionRef.current) {
                descriptionRef.current.focus()
            }
        }
        else if(thumbnail.trim() === '') {
            setThumbnailValid(false)
            if(thumbnaileRef.current) {
                thumbnaileRef.current.focus()
            }
        }
        else {
            createVideo(token, user.id, title, description, thumbnail, date);
            setHideModal(true);
            clearInputs();
        }
    }

    const clearInputs = () => {
        if(titleRef.current) {
            titleRef.current.value = ''
            titleRef.current.focus()
            setTitle('')
        }
        if(descriptionRef.current) {
            descriptionRef.current.value = ''
            descriptionRef.current.focus()
            setDescription('')
        }
        if(thumbnaileRef.current) {
            thumbnaileRef.current.value = ''
            thumbnaileRef.current.focus()
            setThumbnail('')
        }
    }

    const closeModal = () => {
        clearInputs();
        setTitleValid(true);
        setDescriptionValid(true);
        setThumbnailValid(true);
        setHideModal(true)
    }

    const letter = () => {
        if(user.nome == null){
            return null
        } else {
            return user.nome.charAt(0)
        }
    }
    
   return (
    <>
        <Container>
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
        </Container>

        
        <div style={{ width: '100%', display: 'flex' }}>
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
            <div style={{ width: '100%', padding: '50px 0', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '270px' }}>
                <ChannelContentContainer openMenu={openMenu}>
                    <h1>Conteúdo do canal</h1>
                    <ChannelCategories>
                        <span onClick={() => navigate('/yourvideos')}>Videos</span>
                        <span>Ao vivo</span>
                        <span>Playlists</span>
                        <span>Podcasts</span>
                    </ChannelCategories>
                </ChannelContentContainer>
                
                <FilterSelection openMenu={openMenu}>
                    <ButtonIcon alt="" src={HamburgerIcon} style={{cursor: 'pointer'}}/>
                    <FilterInput placeholder="Filtrar"/>
                </FilterSelection>
                
                <CheckBoxSelection openMenu={openMenu}>
                    <CheckboxContainer>
                        <Checkbox type="checkbox" />
                        <span>Vídeo</span>
                    </CheckboxContainer>
                    <ChannelOptions>
                            <span>Visibilidade</span>
                            <span>Restrições</span>
                            <span>Data</span>
                            <span>Visualizações</span>
                            <span>Comentários</span>
                            <span>Gestei x Não gostei</span>
                        </ChannelOptions>
                </CheckBoxSelection>
                
                <UploadVideoBttn onClick={() => setHideModal(false)} style={{margin: '22% 0 0 45%'}} modal={hidemodal}>ENVIAR VÍDEOS</UploadVideoBttn>
                <Modal hideModal={hidemodal}>                
                    <UploadVideoSectionContainer >
                        <TitleandBttns>
                            <h1>Enviar Vídeos</h1>
                            <Bttns>
                                <ButtonIcon alt="" src={feedback} />
                                <ButtonIcon alt="" src={X} style={{cursor: 'pointer'}} onClick={closeModal}/>
                            </Bttns>
                        </TitleandBttns>
                        <Divider />
                        <VideoInformationContainer>
                            <AuxiliarText>
                                <h1>Detalhes</h1>
                                <span>REUTILIZAR DETALHES</span>
                            </AuxiliarText>
                            <InputsContainer>
                                <TitleInputContainer valid={titleValid}>
                                    <Inputs 
                                    placeholder="Título (obrigatório)" 
                                    type="text" value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    ref={titleRef}
                                    />
                                </TitleInputContainer>
                                <MessageContainer>
                                    <InputEmpty valid={titleValid}>
                                        {titleValid? '' : 'Digite o título do vídeo'}
                                    </InputEmpty>
                                </MessageContainer>
                                <DescriptionInputContainer valid={descriptionValid}>
                                    <Inputs 
                                    placeholder="Descrição" 
                                    type="text" value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                    ref={descriptionRef}
                                    />
                                </DescriptionInputContainer>
                                <MessageContainer>
                                    <InputEmpty valid={descriptionValid}>
                                        {descriptionValid? '' : 'Digite a descrição do vídeo'}
                                    </InputEmpty>
                                </MessageContainer>
                                <ThumbnailInputContainer valid={thumbnailValid}>
                                    <Inputs 
                                    placeholder="URL da thumbnail ex: https://republicadg.com.br/wp-content/uploads/2023/03/zs.jpg" 
                                    type="text" 
                                    value={thumbnail} 
                                    onChange={(e) => setThumbnail(e.target.value)} 
                                    ref={thumbnaileRef}
                                    />
                                </ThumbnailInputContainer>
                                <MessageContainer>
                                    <InputEmpty valid={thumbnailValid}>
                                        {thumbnailValid? '' : 'Digite a URL do vídeo'}
                                    </InputEmpty>
                                </MessageContainer>
                            </InputsContainer>
                        </VideoInformationContainer>
                        <Divider />
                        <UploadVideoBttn onClick={sendVideo} style={{marginLeft: '83%'}} modal={hidemodal}>Enviar</UploadVideoBttn>
                    </UploadVideoSectionContainer>
                </Modal>
            </div>
        </div>
    </>
   );
  }
  
  export default VideoUpload;
  