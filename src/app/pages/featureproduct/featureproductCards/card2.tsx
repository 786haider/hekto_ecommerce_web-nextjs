import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import ChairImg from "../../../../../public/card2Image.png";
import Image from "next/image";
import Link from "next/link";

export default function Card2() {
  return (
    <div
      style={{ width: "270px", height: "361px", top: "1105px", left: "675px" }}
      className="border rounded-lg shadow-xl"
    >
      <Link href={'/'}>
      
      <div
        style={{
          backgroundColor: "rgba(247, 247, 247, 1)",
          width: "270px",
          height: "236px",
        }}
      >
        <div className="flex">
          <FiShoppingCart
            className="bg shade text-blue-900 mt-3"
            style={{ width: "30px", height: "30px", top: "11px", left: "11px" }}
          />
          <FaRegHeart
            className="ml-4 mt-4 text-xl "
            style={{ color: "rgba(19, 137, 255, 1)" }}
          />
          <FaSearchPlus
            className="ml-4 mt-4 text-xl"
            style={{ color: "rgba(19,137,255,1" }}
          />
        </div>
        <Image
          src={ChairImg}
          alt="Image"
          width={130}
          height={150}
          style={{
            top: "48px",
            left: "79px",
          }}
          className="flex justify-center items-center mt-4 ml-auto mr-auto"
        />
      </div>
      <div
        style={{
          width: "270px",
          height: "127px",
          backgroundColor: "rgba(47, 26, 196, 1)",
        }}
      >
        <h1
          style={{
            height: "22px",
            top: "251px",
            left: "71px",
            fontWeight: 700,
            lineHeight: "21px",
            fontSize: "18px",
          }}
          className="flex justify-center items-center w-auto   text-white"
        >
          Cantilever chair
        </h1>
        <div
          className="flex justify-center items-center gap-1 ml-28 mt-3"
          style={{
            width: "52px",
            height: "4px",
            top: "285px",
            left: "110px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "4px",
              top: "285px",
              left: "110px",
              borderRadius: "10px",
              background: "rgba(5, 230, 183, 1)",
            }}
          ></div>
          <div
            style={{
              width: "14px",
              height: "4px",
              top: "285px",
              left: "110px",
              borderRadius: "10px",
              background: "rgba(247, 1, 168, 1)",
            }}
          ></div>
          <div
            style={{
              width: "14px",
              height: "4px",
              top: "285px",
              left: "110px",
              borderRadius: "10px",
              background: "rgba(255, 234, 193, 1)",
            }}
          ></div>
        </div>
        <p
          style={{ fontSize: "14px", left: "92px" }}
          className="ml-20 mt-3 text-white"
        >
          Code - Y523201
        </p>
        <p
          style={{ fontSize: "14px", lineHeight: "16.8px" }}
          className="mt-3 ml-28 text-white"
        >
          $42.00
        </p>
      </div>
      </Link>
    </div>
  );
}
