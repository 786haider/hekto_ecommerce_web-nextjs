import IMG from "../../../../public/mestonic.png";
import Image from "next/image";
import BackGrounImage from "../../../../public/backgroundImage.jpeg";

export default function LatestUpdate() {
  return (
    <div>
      <div
        className="latest-update flex justify-center items-center mt-20"
        style={{
          width: "1320px",
          height: "362px",
          backgroundImage: `url(${BackGrounImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "574px",
            height: "185px",
            top: "6197",
            left: "673px",
            borderRadius: "2px",
            alignItems: "center",
          }}
          className=" justify-center items-center"
        >
          <h1
            style={{
              fontSize: "35px",
              color: "rgba(21, 24, 117, 1)",
              letterSpacing: "1.5%",
              alignItems: "center",
              lineHeight: "54.25px",
            }}
            className="font-sans font-bold"
          >
            Get Leatest Update By Subscribe <br />
            <span className="ml-40 mt-3"></span>
            0ur Newslater
          </h1>
          <button
            style={{
              width: "173px",
              height: "49px",
              top: "6333px",
              left: "873px",
              borderRadius: "2px",
            }}
            className="bg-pink-600 text-white mt-10 ml-44 mr-auto"
          >
            Shop Now
          </button>
        </div>
      </div>

      <Image
        src={IMG}
        alt="Image"
        style={{
          width: "904px",
          height: "93px",
          top: "6581px",
          left: "508px",
        }}
        className="mt-20 ml-auto mr-auto"
      />
    </div>
  );
}
