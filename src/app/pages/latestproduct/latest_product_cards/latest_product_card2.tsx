import Image from "next/image";
import Card2Image from "../../../../../public/latestProductCard2.png";
import Link from "next/link";

export default function LatestProductCard2() {
  return (
    <Link href={'/'}>
      
    <div
      className="card2 ml-auto mr-auto"
      style={{
        width: "370px",
        height: "306px",
        top: "1735px",
        left: "775px",
        border: "2px solid rgba(238, 239, 251, 1)",
        borderRadius: "1px",
      }}
      
    >
      <div
        style={{
          width: "80px",
          height: "25px",
          top: "25px",
          left: "18px",
          backgroundColor: "rgba(63, 80, 158, 1)",
        }}
      >
        <h1
          style={{
            width: "28px",
            height: "14px",
            top: "50.71px",
            left: "45px",
            rotate: "18.12 deg",
            color: "rgba(238, 239, 251, 1)",
            border: "1px solid rgba(63, 80, 158, 1)",
          }}
          className="flex ml-auto mr-auto font-serif"
        >
          Sale
        </h1>
      </div>
      <Image
        src={Card2Image}
        alt="image"
        style={{
          width: "245px",
          height: "245px",
          top: "25px",
          left: "68px",
        }}
        className="ml-auto mr-auto"
      />

     <div> 
      </div>
      <div className="flex mt-2">
        <h1
          style={{
            width: "156px",
            height: "16px",
            top: "285.55px",
            fontSize: "16px",
            lineHeight: "18.75px",
            color: "rgba(21, 24, 117, 1)",
          }}
          className="font-sans"
        >
          Comfort Handy Craft
        </h1>
        <h2
          style={{
            width: "43px",
            top: "286.53px",
            height: "14px",
            left: "255.89px",
            fontSize: "14px",
            lineHeight: "16.41px",
            color: "rgba(21, 24, 117, 1)",
          }}
          className="ml-auto mr-1"
        >
          $42.00
        </h2>
        <h3
          style={{
            width: "37px",
            height: "12px",
            top: "288.48px",
            left: "307.46px",
            fontSize: "12px",
            color: "rgba(251, 36, 72, 1)",
            lineHeight: "14.06px",
            textDecoration: "Strikethrough",
          }}
        >
          $65.00
        </h3>
      </div>
    </div>
    </Link>
    
  );
}
