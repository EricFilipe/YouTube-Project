import { MenuContext } from "../../contexts/menuContext";
import { Button, CategorieSlider, CategoriesItems, Container, NxtBtn, PreBtn } from "./categories-style";
import { useContext, useState } from 'react';
import seta from '../../assets/seta-direita.png'
import { useCategoryContext } from "../../contexts/searchCategories";



function Categories() {

  const categoriesItems = [
    {name: 'Tudo', id: '0'}, 
    {name: 'Jogos', id: '20'},
    {name: 'Música', id: '10'}, 
    {name: 'Ao vivo', id: '25'}, 
    {name: 'Lista de reprodução', id: '15'}, 
    {name: 'Jedi', id: '20'}, 
    {name: 'Podcast', id: '15'}, 
    {name: 'Motivação', id: '22'},
    {name: 'Finais da NBA', id: '17'}, 
    {name: 'Pronúncia', id: '1'}, 
    {name: 'Mangá', id: '23'}, 
    {name: 'Chill out', id: '24'}, 
    {name: 'Desenvolvimento de web', id: '2'},
    {name: 'Computadores', id: '2'}, 
    {name: 'Fisiculturismo', id: '17'}, 
    {name: 'Assistidos', id: '10'}
    ]

  const {openMenu} = useContext(MenuContext)
  const {setCategoryId} = useCategoryContext()
  const [sliderPosition, setSliderPosition] = useState(0)

  function searchCategory(id: string) {
    setCategoryId(id)
  }
 
  const sliderWidth = 200
  const containerWidth = 400

  const slideLeft = () => {
    if(sliderPosition < 0) {
      setSliderPosition((prevPosition) => prevPosition + sliderWidth)
    }
  }

  const slideRight = () => {
    if(sliderPosition > -(sliderWidth * 12) + containerWidth) {
      setSliderPosition((prevPosition) => prevPosition - sliderWidth)
    }
  }

    return (
     <Container id='slider' openMenu={openMenu}>
      <PreBtn onClick={slideLeft} openMenu={openMenu}><img src={seta} alt="" style={{width: '15px', transition: '0.5s'}} /></PreBtn>
      
      <CategorieSlider>
        <CategoriesItems
        style={{
          transform: `translateX(${sliderPosition}px)`,
          transition: '0.5s ease-in-out'
        }}>
        {categoriesItems.map((items, index) => (
          <Button onClick={() => searchCategory(items.id)} key={index}>{items.name}</Button>
        ))}
        </CategoriesItems>
      </CategorieSlider>
      
      <NxtBtn onClick={slideRight}><img src={seta} alt="" style={{width: '15px'}} /></NxtBtn>
     </Container>
    );
  }
  
  export default Categories;
  