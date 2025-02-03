import TcCard1 from "./top_categories_cards/tcCard1";
import TcCard2 from "./top_categories_cards/tcCard2";
import TcCard3 from "./top_categories_cards/tcCard3";
import TcCard4 from "./top_categories_cards/tsCard4";

export default function TopCatagories() {
  return (
    <div className="top-catagories">
      <h1
        style={{
          width: "301px",
          height: "42px",
          top: "5402px",
          left: "810px",
          color: "rgba(21, 24, 117, 1)",
          fontSize: "42px",
          lineHeight: "49.22px",
        }}
        className="
        font-sans ml-auto mr-auto mt-20"
      >
        <b>Top Categories</b>
      </h1>
      <div className="grid grid-cols-4 mt-4 ">
        <TcCard1 />
        <TcCard2 />
        <TcCard3 />
        <TcCard4 />
      </div>

<div className="flex justify-center items-center mt-5 gap-4  ">
    <div style={{backgroundColor:'rgba(251, 46, 134, 1)',width:'11.6px',height:'11.6px',border:'1px',borderRadius:'50px'}} className="border rounded-full"></div>
    <div style={{backgroundColor:'rgba(251, 46, 134, 1)',width:'11.6px',height:'11.6px',border:'1px',borderRadius:'50px'}} className="border rounded-full border-pink-500"></div>
    <div style={{backgroundColor:'rgba(251, 46, 134, 1)',width:'11.6px',height:'11.6px',border:'1px',borderRadius:'50px'}} className="border rounded-full"></div>
   </div> 

    </div>
  );
}
