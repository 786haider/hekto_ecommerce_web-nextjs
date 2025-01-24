import Card1 from "./featureproductCards/card1";
import Card2 from "./featureproductCards/card2";
import Card3 from "./featureproductCards/card3";
import Card4 from "./featureproductCards/card4";

export default function FeatureProduct() {
  return (
    <div>
      <h1
        style={{
          color: "rgba(26, 11, 91, 1)",
          height: "42px",
          top: "1015px",
          left: "777px",
          fontSize: "42px",
          lineHeight: "49.22px",
        }}
        className="flex justify-center items-center font-extrabold font-serif w-auto mt-20"
      >
        Featured Products
      </h1>
      <div className="flex gap-5 ml-20 mr-auto mt-20">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div
        className="flex gap-1 mt-5 ml-auto mr-auto"
        style={{
          width: "91px",
          height: "4px",
          top: "1519px",
          left: "915px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "24px",
            backgroundColor: "rgba(251, 46, 134, 1)",
            height: "4px",
            left: "915px",
            borderRadius: "10px",
          }}
        >
          {" "}
        </div>
        <div
          style={{
            width: "16px",
            backgroundColor: "rgba(254, 186, 215, 1)",
            height: "4px",
            left: "915px",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "16px",
            backgroundColor: "rgba(254, 186, 215, 1)",
            height: "4px",
            left: "915px",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "16px",
            backgroundColor: "rgba(254, 186, 215, 1)",
            height: "4px",
            left: "915px",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
