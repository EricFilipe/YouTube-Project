import { 
    Container, 
    MenuItem, 
    ButtonIcon,
    Divider,
    MenuItemClosed,
    MenuDescription,
} from "./menu-style"
import Home from '../../assets/casa.png';
import Shorts from '../../assets/video2.png';
import Sub from '../../assets/se-inscrever.png';
import Library from '../../assets/biblioteca-de-midia.png';
import History from '../../assets/historia.png';
import WacthLater from '../../assets/relogio.png';
import Thumb from '../../assets/gostar.png';
import Musics from '../../assets/notas-musicais.png';
import Esports from '../../assets/trofeu.png';
import Games from '../../assets/controle.png';
import Movies from '../../assets/claquete.png';
import Tranding from '../../assets//fogo.png';
import Shopping from '../../assets/sacola-de-compras-quadrada-com-alca.png';
import Music from '../../assets/colcheia.png';
import Live from '../../assets/transmissao-ao-vivo.png';
import Jogos from '../../assets/controle-de-video-game.png';
import News from '../../assets/noticia.png';
import Trofeu from '../../assets/trofeus.png';
import Learn from '../../assets/lampada.png';
import { useNavigate } from "react-router-dom";
import Categories from "../categories/categoriesCard";
import { UserContext } from "../../contexts/userContext";
import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";


const items = [
'Início','Shorts','Inscrições','Biblioteca','Histórico','Assistir mais tarde','Vídeos marcados c...',
'Música','Esportes','Jogos','Filmes','Em alta','Shopping','Música','Filmes e programas','Ao vivo',
'Jogos','Notícias','Esportes','Aprender'
]



function Menu(){

    const {openMenu} = useContext(MenuContext)
    const navigate = useNavigate()

    return (
        <Container openMenu={openMenu}> 
            <MenuItemClosed openMenu={openMenu} onClick={() => navigate('/')}>
                <ButtonIcon alt="" src={Home} />
                <span>{`${items.find(items => items === 'Início')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} onClick={() => navigate('/shorts')}>
                <ButtonIcon alt="" src={Shorts} />
                <span>{`${items.find(items => items === 'Shorts')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} onClick={() => navigate('/subscription')}>
                <ButtonIcon alt="" src={Sub} />
                <span>{`${items.find(items => items === 'Inscrições')}`}</span>
            </MenuItemClosed>
            <MenuItemClosed openMenu={openMenu} onClick={() => navigate('/library')}> 
                <ButtonIcon alt="" src={Library} />
                <span>{`${items.find(items => items === 'Biblioteca')}`}</span>
            </MenuItemClosed>
            
            <MenuItem openMenu={openMenu} onClick={() => navigate('/')}>
                <ButtonIcon alt="" src={Home} />
                    <span>{`${items.find(item => item === 'Início')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu} onClick={() => navigate('/shorts')}>
                <ButtonIcon alt="" src={Shorts} />
                    <span>{`${items.find(items => items === 'Shorts')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu} onClick={() => navigate('/subscription')}>
                <ButtonIcon alt="" src={Sub} />
                    <span>{`${items.find(items => items === 'Inscrições')}`}</span>
            </MenuItem>

            <Divider openMenu={openMenu}/>

            <MenuItem openMenu={openMenu} onClick={() => navigate('/library')}>
                <ButtonIcon alt="" src={Library} />
                <span>{`${items.find(items => items === 'Biblioteca')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={History} />
                <span>{`${items.find(items => items === 'Histórico')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={WacthLater} />
                <span>{`${items.find(items => items === 'Assistir mais tarde')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Thumb} />
                <span>{`${items.find(items => items === 'Vídeos marcados c...')}`}</span>
            </MenuItem>

            <Divider openMenu={openMenu}/>

            <MenuDescription openMenu={openMenu}>Inscrições</MenuDescription>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Musics} />
                <span>{`${items.find(items => items === 'Música')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Esports} />
                <span>{`${items.find(items => items === 'Esportes')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Games} />
                <span>{`${items.find(items => items === 'Jogos')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Movies} />
                <span>{`${items.find(items => items === 'Filmes')}`}</span>
            </MenuItem>

            <Divider openMenu={openMenu}/>

            <MenuDescription openMenu={openMenu}>Explorar</MenuDescription>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Tranding} />
                <span>{`${items.find(items => items === 'Em alta')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Shopping} />
                <span>{`${items.find(items => items === 'Shopping')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Music} />
                <span>{`${items.find(items => items === 'Música')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Movies} />
                <span>{`${items.find(items => items === 'Filmes e programas')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Live} />
                <span>{`${items.find(items => items === 'Ao vivo')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Jogos} />
                <span>{`${items.find(items => items === 'Jogos')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={News} />
                <span>{`${items.find(items => items === 'Notícias')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Trofeu} />
                <span>{`${items.find(items => items === 'Esportes')}`}</span>
            </MenuItem>
            <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Learn} />
                <span>{`${items.find(items => items === 'Aprender')}`}</span>
            </MenuItem>
        </Container>
    )
}

export default Menu