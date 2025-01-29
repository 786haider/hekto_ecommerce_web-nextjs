
import Image from "next/image";
import Link from "next/link";
import CardImage from "../../../../../public/tpCard6.png";

export default function TpCard6() {
  return (
    <div
      style={{
        width: "420px",
        height: "270px",
        top: "4262px",
        left: "375px",
        backgroundColor: "rgba(238, 239, 251, 1)",
      }}
      className="ml-auto mr-auto border shadow-md"
    >
      <div
        style={{ width: "269px", height: "56px", top: "4296px", left: "400px" }}
      >
        <h1
          style={{
            width: "269px",
            height: "26px",
            fontWeight: "400",
            fontSize: "26px",
            lineHeight: "26px",
            alignItems: "center",
            color: "rgba(21, 24, 117, 1)",
          }}
          className="ml-3 mt-5 font-bold"
        >
          23% off in all products
        </h1>
        <Link
          href={"/"}
          style={{
            width: "74px",
            height: "19px",
            fontSize: "16px",
            lineHeight: "19.2px",
            alignItems: "center",
            color: "rgba(251, 46, 134, 1)",
          }}
          className="ml-3 mt-2 hover:text-red-700"
        >
          <u>View Collection</u>
        </Link>
      </div>
      <Image
        src={CardImage}
        alt="Card Image"
        style={{
          width: "312px",
          height: "173px",
          top: "4357px",
          left: "926px",
        }}
        className="flex justify-end ml-auto"
      />
    </div>
  );
}
