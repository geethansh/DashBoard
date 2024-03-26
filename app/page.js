import Image from "next/image";
import Dashlist from "./Components/Dashlist"
import Pageslist from "./Components/Pageslist"
import { Icon } from "@mui/material";
import Search from "./Components/Search"
import Premium from "./Components/Premium"
import Card from "./Components/Card";
import Chart from "./Components/Chart"
import Table from "./Components/Table"

export default function Home() {
  return (
    <div className="flex ">
    
    <div className="text-lg ml-6">
      Clonify
      <Dashlist/>
      <Pageslist/>
    </div>
  
    <div className='w-full'>
    <Search />
    <Premium/>
    <Card/>
    <Chart/>
    <Table/>
    </div>

    
      
    

    
    </div>
    
    
  
  
  

  );
}
