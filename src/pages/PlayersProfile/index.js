import { react } from "fontawesome";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import PlayersHeader from "./playerprofile_header";
import Section2 from "./section2";
import ReactLoading from "react-loading";

function Playerprofile() {

  const [data, setdata] = useState(null);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:5000/getPlayer/Khushdil+Shah"
      );
      const json = await response.json();
      setdata(json);
      setloading(false)    
    };
    fetchData().catch(console.error);
  }, []);
  
  console.log(data);
  
  return (
    <>
      <PlayersHeader />
      {(loading) ?        
      <div className="d-flex algin-items center justify-content-center m-5 p-5"> 
      <ReactLoading
        type="spinningBubbles"
        color="green"
        height={100}
        width={50}
      /> </div>: <Section2 playerdata={data} />
      
    }
 
      

      <Footer />
    </>
  );
}
export default Playerprofile;
