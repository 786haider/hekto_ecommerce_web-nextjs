import Image from "next/image";
import SofaImag from "../../../../public/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
export default function UniqueFeature() {
  return (
    <div
      style={{
        height: "579px",
        top: "3081px",
        left: "-1px",
        backgroundColor: "rgba(241, 240, 255, 1)",
      }}
      className="mt-20 w-auto"
    >
      <div
        style={{
          width: "1050px",
          height: "550px",
          top: "3096px",
          left: "434px",
        }}
        className="flex ml-auto mr-auto "
      >
        <Image
          src={SofaImag}
          alt="Sofa Image"
          style={{
            width: "509px",
            height: "550px",
            left: "40px",
          }}
        />
        <div className="">
          <h1
            style={{
              fontSize: "35px",
              color: "rgba(21, 24, 117, 1)",
              top: "82pxpx",
              left: "543px",
              width: "507px",
              height: "92px",
              lineHeight: "46.2px",
              letterSpacing: "1.5%",
              font: "josefin Sans",
            }}
            className="font-bold mt-10"
          >
            Unique Features Of leatest & Trending Poducts
          </h1>
          <div className="flex flex-row mt-8">
            <div
              style={{
                width: "11px",
                height: "11px",
                top: "209px",
                left: "543px",
                backgroundColor: "rgba(245, 43, 112, 1)",
              }}
              className="mt-2 border rounded-3xl"
            ></div>
            <h1
              style={{
                width: "427px",
                height: "21px",
                top: "209px",
                left: "566px",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "21.12px",
                letterSpacing: "1.5%",
                color: "rgba(172, 171, 195, 1)",
              }}
              className="ml-3"
            >
              All frames constructed with hardwood solids and laminates
            </h1>
          </div>

          <div className="flex flex-row mt-8">
            <div
              style={{
                width: "11px",
                height: "11px",
                top: "209px",
                left: "543px",
                backgroundColor: "rgba(43, 43, 245, 1)",
              }}
              className="mt-2 border rounded-full"
            ></div>
            <h1
              style={{
                width: "427px",
                height: "21px",
                top: "209px",
                left: "566px",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "21.12px",
                letterSpacing: "1.5%",
                color: "rgba(172, 171, 195, 1)",
              }}
              className="ml-3"
            >
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </h1>
          </div>

          <div className="flex flex-row mt-8">
            <div
              style={{
                width: "11px",
                height: "11px",
                top: "209px",
                left: "543px",
                backgroundColor: "rgba(43, 245, 204, 1)",
              }}
              className="mt-2 border rounded-full"
            ></div>
            <h1
              style={{
                width: "427px",
                height: "21px",
                top: "209px",
                left: "566px",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "21.12px",
                letterSpacing: "1.5%",
                color: "rgba(172, 171, 195, 1)",
              }}
              className="ml-3"
            >
              Arms, backs and seats are structurally reinforced
            </h1>
          </div>
          <div className="flex">
            <button
              style={{
                width: "157px",
                height: "45px",
                top: "365px",
                left: "543px",
                borderRadius: "2px",
              }}
              className="bg-pink-500 text-white mt-8 border shadow-md hover:shadow-2xl hover:bg-pink-400 hover:text-blue-500 "
            >
              Add To Cart
            </button>
            <div className="mt-8 ml-6">
              <h1
                style={{
                  width: "113px",
                  height: "14px",
                  fontSize: "14px",
                  lineHeight: "16.41px",
                  letterSpacing: "2%",
                  color: "rgba(21, 24, 117, 1)",
                }}
                className="font-sans text-6xl font-bold"
              >
                B&B Italian Sofa
              </h1>
              <h2 style={{ color: "rgba(21, 24, 117, 1)" }} className="mt-1">
                $32.00
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
