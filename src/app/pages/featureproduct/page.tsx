import Card1 from "./featureproductCards/card1";
import Card2 from "./featureproductCards/card2";
import Card3 from "./featureproductCards/card3";


export default function FeatureProduct(){
    return(
        <div>
            <h1 style={{color:'rgba(26, 11, 91, 1)',height:'42px',top:'1015px',left:'777px',fontSize:'42px',lineHeight:'49.22px'}}
            className="flex justify-center items-center font-extrabold font-serif w-auto mt-20">
            Featured Products
            </h1>
            <div className="flex gap-5 ml-10 mt-20">
                <Card1/>
               <Card2/>
               <Card3/>
                </div> 
       

           </div>

        
    );
}