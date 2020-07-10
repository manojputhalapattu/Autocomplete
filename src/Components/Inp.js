import React,{useState} from "react"
import countryNames from "../dataset/CountryData"
import {FaSearch} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.css'
import {Dropdown,DropdownItem, InputGroup,Input, InputGroupAddon,InputGroupText} from "reactstrap"
const Inp = () =>{
    const [inpvalue,setInpvalue] = useState("");
    const [clist,setClist] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
   const [colr,SetColr] = useState("white");
     
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
   const checkKey = (e)=>{
       e = e || window.event;
       if (e.keyCode == '38'){
           console.log('Up')

         
       }
       else if(e.keyCode =='40')
       {
           console.log('DOWN')
           SetColr("red")
       }
   }
  return(
     
      <div className="cen">
         
         <InputGroup>
         <InputGroupAddon addonType="prepend">
          <InputGroupText><FaSearch/></InputGroupText>
        </InputGroupAddon>
         <input type="text" value={inpvalue} onChange={valChang} className="type" />
         
         </InputGroup>
        {/* <ListGroup>
             {clist.map((coun,index)=>(
               <ListGroupItem onClick={()=>setInpvalue(coun.name)} className="lis">{coun.name}</ListGroupItem>
             ))}
         </ListGroup> */}
         <Dropdown className="drp">
         
         {clist.map((coun,index)=>(
                 <DropdownItem onClick={()=>setInpvalue(coun.name)}  key={index} >{coun.name}</DropdownItem>
             ))}

        
         </Dropdown>
      </div>
  )
}
export default Inp