import React,{useState} from "react"
import countryNames from "../dataset/CountryData"
import {FaSearch} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.css'
import {Dropdown,DropdownItem, InputGroup, InputGroupAddon,InputGroupText} from "reactstrap"
const Inp = () =>{
    // stores the input value from text feild
    const [inpvalue,setInpvalue] = useState("");
    //returns an array based on searched value 
    const [clist,setClist] = useState([]);
    
     //change the autocomplete based on input (function)
    const valChang =(e)=>{
     setInpvalue(e.target.value)
     var String = e.target.value
     if(String=="")
     {
         setClist([])
         return;
     }
     else{
        var list = countryNames.filter(n=>n.name.startsWith( String[0].toUpperCase()+ String.slice(1).toLowerCase()))
        setClist(list);
     }
     
     //console.log(list)

   }
   
  return(
     
      <div className="cen">
         {/* taking input from user  */}
         <InputGroup>
             <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaSearch/></InputGroupText>
             </InputGroupAddon>
                    <input type="text" value={inpvalue} onChange={valChang} className="type" />
         </InputGroup>
        {/* print searched value for autocomplete */}
         <Dropdown className="drp">
         {/* change the list name to your data coun.{name} so that it works(if you want to change the data set)  */}
         {clist.map((coun,index)=>(
                 <DropdownItem onClick={()=>setInpvalue(coun.name)}  key={index} >{coun.name}</DropdownItem>
             ))}

        
         </Dropdown>
      </div>
  )
}
export default Inp