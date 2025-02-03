import Image from "next/image";
import CardImg from "../../../../../public/tcCard1.png";
import Link from "next/link";

export default function TcCard1() {
  return (
    <Link href={"/"}>
      <div
        style={{
          width: "269px",
          height: "345px",
          top: "5500px",
          left: "364px",
        }}
        className="mt-10 ml-auto mr-auto"
      >
        <div
          style={{
            width: "269px",
            height: "269px",
            backgroundColor: "rgba(246, 247, 251, 1)",
          }}
          className="border rounded-full border-blue-900 shadow-lg"
        >
          <Image
            src={CardImg}
            alt="Card IMage"
            style={{
              width: "178px",
              height: "178px",
            }}
            className=" ml-auto mr-auto mt-6 mb-auto"
          />
          <button
            style={{
              width: "94px",
              height: "29px",
              top: "219px",
              left: "88px",
              borderRadius: "2px",
              backgroundColor: "rgba(8, 209, 95, 1)",
            }}
            className="text-white ml-auto mr-auto border shadow"
          >
            View Shop
          </button>
        </div>

        <div
          style={{ width: "150px", height: "49px" }}
          className="items-center ml-auto mr-auto mt-2"
        >
          <h1
            style={{
              color: "rgba(21, 24, 117, 1)",
              fontSize: "20px",
            }}
          >
            Mini LCW Chair
          </h1>
          <h2
            style={{
              fontSize: "16px",
              color: "rgba(21, 24, 117, 1)",
            }}
            className="ml-auto mr-auto"
          >
            $56.00
          </h2>
        </div>
      </div>
    </Link>
  );
}
