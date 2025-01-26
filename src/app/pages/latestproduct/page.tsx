import LatestProductCard1 from "./latest_product_cards/latest_product_card1";
import LatestProductCard2 from "./latest_product_cards/latest_product_card2";
import LatestProductCard3 from "./latest_product_cards/latest_product_card3";
import LatestProductCard4 from "./latest_product_cards/latest_product_card4";
import LatestProductCard5 from "./latest_product_cards/latest_product_card5";
import LatestProductCard6 from "./latest_product_cards/latest_product_card6";

export default function LatestProduct() {
    return (
        <div className=" bg-white">
            <h1 style={{ width: '338px', height: '42px', top: '1594px',  color: 'rgba(21, 24, 117, 1)', fontSize: '42px', lineHeight: '49.22px' }} className='caption title font-josefin sans ml-auto mr-auto mt-20 font-bold '><i>Latest Product</i></h1>
            <div className="flex justify-center items-center gap-7 ml-auto mr-auto mt-10" style={{width:'527px',height:'22px',top:'1655px',left:'697px',border:'1px'}}>
                <button  style={{width:'93px',height:'22px',color:'rgba(251, 46, 134, 1)',fontWeight:'400',fontSize:'18px',lineHeight:'21.6px'}}>New Arrival</button>
              <button style={{width:'84px',height:'22px',left:'848px',color:'rgba(21, 24, 117, 1)',fontWeight:'400',fontSize:'18px',lineHeight:'21.6px'}}>Best Seller</button>
              <button style={{width:'84px',height:'22px',left:'848px',color:'rgba(21, 24, 117, 1)',fontWeight:'400',fontSize:'18px',lineHeight:'21.6px'}}>Featured</button>
              <button style={{width:'102px',height:'22px',left:'848px',color:'rgba(21, 24, 117, 1)',fontWeight:'400',fontSize:'18px',lineHeight:'21.6px'}}>Special Offer</button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-10 ">
                <LatestProductCard1/>
                <LatestProductCard2/>
                <LatestProductCard3/>
                <LatestProductCard4/>
               <LatestProductCard5/>
               <LatestProductCard6/>
              
            </div>
        </div>
    )
}
