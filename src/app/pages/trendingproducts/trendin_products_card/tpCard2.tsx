
import Image from "next/image";
import Card1 from "../../../../../public/tpcard2.png";
export default function TpCard2() {
  return (
    <div
      style={{ width: "270px", height: "350px", top: "3873px", left: "377px" }}
      className="flex flex-col flex-grow-4 justify-center items-center border ml-auto mr-auto rounded-md shadow-md mt-10"
    >
      <div
        style={{
          backgroundColor: "rgba(245, 246, 248, 1)",
          width: "247px",
          height: "244px",
          top: "11px",
          left: "11px",
        }}
        className="flex justify-end items-center"
      >
        <Image
          src={Card1}
          alt="Card1"
          style={{
            width: "171px",
            height: "171px",
            top: "41px",
            left: "41px",
          }}
          className="ml-auto mr-auto"
        />
      </div>
      <h1
        style={{
          height: "26px",
          top: "270px",
          left: "79px",
          color: "rgba(21, 24, 117, 1)",
          fontSize: "16px",
          alignItems: "center",
          fontWeight: "700",
        }}
        className="flex justify-center mt-3"
      >
        Cantilever chair
      </h1>
      <div className="flex justify-center ">
        <h2 style={{ color: "rgba(21, 24, 117, 1)", fontSize: "14px" }}>
          $26.00
        </h2>
        <h3
          style={{
            color: "rgba(21, 24, 117, 0.3)",
            fontSize: "12px",
            textDecoration: "strikethorugh",
          }}
          className="ml-2"
        >
          $42.00
        </h3>
      </div>
    </div>
  );
}
