import { PiHandshakeFill } from "react-icons/pi";
export default function SoCard4() {
  return (
    <div
      style={{
        width: "270px",
        height: "320px",
        top: "2631px",
        left: "375px",
        color: "rgba(255, 255, 255, 1)",
      }}
      className="flex flex-col justify-center items-center shadow-xl border rounded-xl ml-auto mr-auto mt-10"
    >
      <div
        style={{ width: "65px", height: "65px", top: "2687px", left: "478px" }}
        className="items-center "
      >
        <PiHandshakeFill className="text-black text-4xl" />
      </div>
      <h1
        style={{
          width: "132px",
          height: "22px",
          top: "248px",
          left: "29px",
          color: "rgba(21, 24, 117, 1)",
          fontSize: "22px",
          lineHeight: "25.78px",
        }}
        className="font-sans mb-5 "
      >
        24/7 Support
      </h1>
      <p
        style={{
          width: "217px",
          height: "85px",
          top: "190px",
          left: "27px",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "25.6px",
          alignItems: "center",
          color: "rgba(26, 11, 91, 0.3)",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
        gravida.
      </p>
    </div>
  );
}
