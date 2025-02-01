import Image from "next/image";
import PageImg from "../../../../public/discountpage.png";

export default function DiscountPage() {
  return (
    <div>
      <h1
        style={{
          color: "rgba(21, 24, 117, 1)",
          width: "277px",
          height: "42px",
          fontSize: "42px",
        }}
        className="flex justify-center ml-auto mr-auto font-bold mt-20"
      >
        Discount Item
      </h1>
      <div className="flex justify-center items-center gap-7 mt-8">
        <h1 style={{ color: "rgba(251, 46, 134, 1)", fontSize: "18px" }}>
          <u>Wood Chair</u>
        </h1>
        <h1 style={{ color: "rgba(21, 24, 117, 1)", fontSize: "18px" }}>
          Plastic Chair
        </h1>
        <h1 style={{ color: "rgba(21, 24, 117, 1)", fontSize: "18px" }}>
          Sofa Colletion
        </h1>
      </div>

      <div className="flex">
        <div>
          <div className="ml-20 mt-20">
            <h1
              style={{
                width: "509px",
                height: "46px",
                top: "140px",
                left: "1px",
                fontSize: "35px",
                color: "rgba(21, 24, 117, 1)",
                lineHeight: "46.2px",
                letterSpacing: "1.5%",
              }}
              className="font-sans"
            >
              20% Discount Of All Products
            </h1>
            <h2
              style={{
                color: "rgba(251, 46, 134, 1)",
                width: "199px",
                height: "28px",
                fontSize: "21px",
                lineHeight: "27.72px",
                letterSpacing: "1.5%",
              }}
              className="mt-6"
            >
              Eams Sofa Compact
            </h2>
            <p
              style={{
                color: "rgba(183, 186, 203, 1)",
                width: "523px",
                height: "49px",
                fontSize: "17px",
                fontWeight: "400",
                lineHeight: "30px",
                letterSpacing: "2%",
              }}
              className="mt-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="grid grid-cols-2 gap-0 w-1/2 mt-5 ">
              <p style={{ color: "rgba(184, 184, 220, 1)" }}>
                Material expose like metals
              </p>
              <p style={{ color: "rgba(184, 184, 220, 1)" }}>
                Clear lines and geomatric figures
              </p>
              <p style={{ color: "rgba(184, 184, 220, 1)" }}>
                Simple neutral colours.
              </p>
              <p style={{ color: "rgba(184, 184, 220, 1)" }}>
                Material expose like metals
              </p>
            </div>

            <button
              style={{ width: "200px", height: "57px", borderRadius: "2px" }}
              className="bg-pink-500 text-white text-2xl mt-8"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div style={{ width: "699px", height: "597px", left: "515px" }}>
          <Image
            src={PageImg}
            alt="PageImg"
            style={{
              width: "599px",
              height: "547px",
            }}
            className="bg-pink-200  border rounded-full mt-5   "
          />
        </div>
      </div>
    </div>
  );
}
