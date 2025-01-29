import TpCard1 from "./trendin_products_card/tpCard1";
import TpCard2 from "./trendin_products_card/tpCard2";
import TpCard3 from "./trendin_products_card/tpCard3";
import TpCard4 from "./trendin_products_card/tpCard4";
import TpCard5 from "./trendin_products_card/tpCard5";
import TpCard6 from "./trendin_products_card/tpCard6";
import TpCard7 from "./trendin_products_card/tpCard7";

export default function TrendingProducts() {
  return (
    <div>
      <h1
        style={{
          width: "450px",
          height: "42px",
          top: "3792px",
          left: "778px",
          color: "rgba(21, 24, 117, 1)",
          fontSize: "42px",
          lineHeight: "49.22px",
          font: "josifen sans",
        }}
        className="font-bold mt-10 ml-auto mr-auto  text-5xl"
      >
        Trending Products
      </h1>
      <div className="grid grid-cols-4">
        <TpCard1 />
        <TpCard2 />
        <TpCard3 />
        <TpCard4 />
      </div>
      <div className="grid grid-cols-3 ml-10 mt-10 gap-40">
        <TpCard5 />
        <TpCard6 />
        <TpCard7 />
      </div>
    </div>
  );
}
