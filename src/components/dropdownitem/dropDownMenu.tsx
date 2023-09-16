import { DropDownItem, Image } from "./dropDown-style";



function DropdownItem(props: any) {
   

   return (
      <DropDownItem>
        <Image src={props.img} alt="" />
        <span>{props.text}</span>
      </DropDownItem>
   );
  }
  
  export default DropdownItem;
  