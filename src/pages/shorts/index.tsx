import Header from "../../components/header/headerComponent";
import Menu from "../../components/menu/menuComponent";

function Shorts() {
   

   return (
      <>
         <Header />
         <div style={{ width: '100%', display: 'flex' }}>

            <Menu />
            <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
               Shorts
            </div>
         </div>
     </>
   );
  }
  
  export default Shorts;
  