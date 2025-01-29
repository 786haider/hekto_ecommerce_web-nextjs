import Image from "next/image";
import Card1Image from "../../../../../public/miniImage1Card7.png";
import Card3Image from "../../../../../public/miniimagecard3.png";
import Card2Image from "../../../../../public/miniimagecard2.png";
export default function TpCard7() {
  return (
    <div className="gap-1">
      <div
        style={{
          width: "267px",
          height: "74px",
          top: "4267px",
          left: "1268px",
        }}
        className="flex border rounded-sm shadow-md"
      >
        <div
          style={{
            width: "107px",
            height: "74px",
            backgroundColor: "rgba(245, 246, 248, 1)",
          }}
        >
          <Image
            src={Card1Image}
            alt="Card Image"
            style={{
              width: "64px",
              height: "71px",
              top: "2px",
              left: "21px",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              width: "151px",
              height: "16px",
              color: "rgba(21, 24, 117, 1)",
              left: "116px",
              top: "21px",
              fontSize: "16px",
              lineHeight: "18.75px",
              alignItems: "center",
            }}
            className="ml-2 mt-2"
          >
            Executive Seat chair
          </h1>
          <h2
            className="ml-2 mt-2"
            style={{ color: "rgba(21, 24, 117, 1)", fontSize: "12px" }}
          >
            <del>$32.00</del>
          </h2>
        </div>
      </div>

      <br />
      <div
        style={{
          width: "267px",
          height: "74px",
          top: "4267px",
          left: "1268px",
        }}
        className="flex border rounded-sm shadow-md"
      >
        <div
          style={{
            width: "107px",
            height: "74px",
            backgroundColor: "rgba(245, 246, 248, 1)",
          }}
        >
          <Image
            src={Card2Image}
            alt="Card Image"
            style={{
              width: "64px",
              height: "71px",
              top: "2px",
              left: "21px",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              width: "151px",
              height: "16px",
              color: "rgba(21, 24, 117, 1)",
              left: "116px",
              top: "21px",
              fontSize: "16px",
              lineHeight: "18.75px",
              alignItems: "center",
            }}
            className="ml-2 mt-2"
          >
            Executive Seat chair
          </h1>
          <h2
            className="ml-2 mt-2"
            style={{ color: "rgba(21, 24, 117, 1)", fontSize: "12px" }}
          >
            <del>$32.00</del>
          </h2>
        </div>
      </div>

      <br />

      <div
        style={{
          width: "267px",
          height: "74px",
          top: "4267px",
          left: "1268px",
        }}
        className="flex border rounded-sm shadow-md"
      >
        <div
          style={{
            width: "107px",
            height: "74px",
            backgroundColor: "rgba(245, 246, 248, 1)",
          }}
        >
          <Image
            src={Card3Image}
            alt="Card Image"
            style={{
              width: "64px",
              height: "71px",
              top: "2px",
              left: "21px",
            }}
          />
        </div>
        <div>
          <h1
            style={{
              width: "151px",
              height: "16px",
              color: "rgba(21, 24, 117, 1)",
              left: "116px",
              top: "21px",
              fontSize: "16px",
              lineHeight: "18.75px",
              alignItems: "center",
            }}
            className="ml-2 mt-2"
          >
            Executive Seat chair
          </h1>
          <h2
            className="ml-2 mt-2"
            style={{ color: "rgba(21, 24, 117, 1)", fontSize: "12px" }}
          >
            <del>$32.00</del>
          </h2>
        </div>
      </div>
    </div>
  );
}
