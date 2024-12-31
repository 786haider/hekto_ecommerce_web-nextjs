import Image from "next/image";
import chairImage from "../../../../../public/chairfeature.png";
export default function Card1() {
  return (
    <div className="flex-col border rounded-md shadow-xl">
      <div
        style={{
          width: "270px",
          height: "361px",
          top: "1105px",
          left: "376px",
        }}
      >
        <div
          style={{
            width: "270px",
            height: "236px",
            backgroundColor: "rgba(246, 247, 251, 1)",
          }}
        >
          <Image
            src={chairImage}
            alt="chairimage"
            style={{
              width: "178px",
              height: "178px",
              top: "46px",
              left: "40px",
            }}
            className="flex justify-center items-center ml-auto mr-auto "
          />
        </div>
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 1)", width: "270px" }}
        >
          <h1
            style={{
              height: "22px",
              top: "251px",
              left: "71px",
              color: "rgba(251, 46, 134, 1)",
              fontWeight: 700,
              lineHeight: "21px",
              fontSize: "18px",
            }}
            className="flex justify-center items-center w-auto mt-3"
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
      </div>
    </div>
  );
}
