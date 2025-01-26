
import Image from "next/image";
import Card1Image from "../../../../../public/latest_product_card5.png";
import Link from "next/link";
export default function LatestProductCard5() {
  return (
    <div
      style={{
        width: "360px",
        height: "306px",
        top: "1739px",
        left: "378px",
        border: "1px solid rgba(238, 239, 251, 1)",
        borderRadius: "1px",
      }}
      className="ml-auto mr-auto "
    >
      <Link href={"/"}>
        <div
          style={{
            width: "360px",
            height: "269.96px",
            backgroundColor: "rgba(247, 247, 247, 1)",
            border: "1px solid rgba(238, 239, 251, 1)",
          }}
        >
          <Image
            src={Card1Image}
            alt="Card1Image"
            style={{
              width: "223px",
              height: "229px",
            }}
            className="ml-auto mr-auto"
          />
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
      </Link>
    </div>
  );
}
