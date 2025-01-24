
import Link from "next/link";
import chairImage from "../../../../../public/card4.png";
import Image from "next/image";
export default function Card4() {
  return (
    <div
      style={{ width: "270px", height: "361px", top: "1105px", left: "975px" }}
      className="border rounded-md shadow-lg"
    >
      <Link href={"/"}>
        <div
          style={{
            width: "270px",
            height: "236px",
            backgroundColor: "rgba(246, 247, 251, 1)",
          }}
          className="flex justify-center"
        >
          <Image
            src={chairImage}
            alt="Chair"
            width={216}
            height={151}
            style={{
              top: "41px",
              left: "41px",
              width:'216px',
              height:'151px'
              
            }}
            className="mt-auto mb-auto"
          />
        </div>
        <div
          style={{ width: "270px", backgroundColor: "rgba(255, 255, 255, 1)" }}
        >
          <h1
            style={{
              height: "22px",
              top: "251px",
              left: "71px",
              fontWeight: 700,
              lineHeight: "21px",
              fontSize: "18px",
              color: "rgba(251, 46, 134, 1)",
            }}
            className="flex justify-center items-center w-auto  "
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
                background: "rgba(0, 0, 157, 1)",
              }}
            ></div>
          </div>
          <p
            style={{
              color: "rgba(21, 24, 117, 1)",
              fontSize: "14px",
              left: "92px",
            }}
            className="ml-20 mt-3"
          >
            Code - Y523201
          </p>
          <p
            style={{
              color: "rgba(21, 24, 117, 1)",
              fontSize: "14px",
              lineHeight: "16.8px",
            }}
            className="mt-3 ml-28"
          >
            $42.00
          </p>
        </div>
      </Link>
    </div>
  );
}
