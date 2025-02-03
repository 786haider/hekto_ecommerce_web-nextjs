import Image from "next/image";
import Blog1Img from "../../../../public/laetestBlog1.jpeg";
import Blog2Img from '../../../../public/leatestBlog2.jpeg'
import Blog3IMg from '../../../../public/laetestBlog3.jpeg'
import Link from "next/link";
export default function LatestBlog() {
  return (
    <div className="latest-blog">
      <h1
        style={{
          color: "rgba(21, 24, 117, 1)",
          width: "255px",
          height: "42px",
          fontSize: "42px",
          lineHeight: "49.22px",
        }}
        className="font-sans ml-auto mr-auto mt-20"
      >
        Leatest Blog
      </h1>


      <div className="grid grid-cols-3 mt-16">
        
        


        <div
          style={{
            width: "370px",
            height: "493px",
          }}
          className="border rounded-lg shadow-lg ml-auto mr-auto"
        >
          <div style={{ width: "37opx", height: "255px", borderRadius: "8px" }}>
            <Image src={Blog1Img} alt="Blog Image" />
          </div>

          <div className="flex">
            <h1
              style={{
                width: "55px",
                height: "14px",
                fontSize: "14px",
                color: "rgba(21, 24, 117, 1)",
              }}
              className="ml-3"
            >
              SaberAli
            </h1>
            <h1
              style={{
                width: "",
                height: "14px",
                color: "rgba(21, 24, 117, 1)",
                fontSize: "14px",
              }}
              className="ml-12"
            >
              21 August,2020
            </h1>
          </div>

          <h1
            style={{
              width: "248px",
              height: "18px",
              fontSize: "18px",
              color: "rgba(21, 24, 117, 1)",
            }}
            className="font-sans font-bold mt-8 ml-3"
          >
            Top esssential Trends in 2021
          </h1>
          <p
            style={{
              width: "297px",
              height: "60px",
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(114, 113, 143, 1)",
            }}
            className="ml-3 mt-6"
          >
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <h1 className="ml-3 mt-6">
            <Link
              href={"/"}
              style={{
                width: "78px",
                height: "30px",
                fontWeight: "400",
                fontSize: "16px",
                fontStyle: "solid",
                color: "rgba(21, 24, 117, 1)",
              }}
            >
              <u>Read More</u>
            </Link>
          </h1>
        </div>







        <div
          style={{
            width: "370px",
            height: "493px",
          }}
          className="border rounded-lg shadow-lg ml-auto mr-auto"
        >
          <div style={{ width: "37opx", height: "255px", borderRadius: "8px" }}>
            <Image src={Blog2Img} alt="Blog Image" />
          </div>

          <div className="flex">
            <h1
              style={{
                width: "55px",
                height: "14px",
                fontSize: "14px",
                color: "rgba(21, 24, 117, 1)",
              }}
              className="ml-3"
            >
              Surfauxion
            </h1>
            <h1
              style={{
                width: "",
                height: "14px",
                color: "rgba(21, 24, 117, 1)",
                fontSize: "14px",
              }}
              className="ml-12"
            >
              21 August,2020
            </h1>
          </div>

          <h1
            style={{
              width: "248px",
              height: "18px",
              fontSize: "18px",
              color: "rgba(251, 46, 134, 1)",
            }}
            className="font-sans font-bold mt-8 ml-3"
          >
            Top esssential Trends in 2021
          </h1>
          <p
            style={{
              width: "297px",
              height: "60px",
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(114, 113, 143, 1)",
            }}
            className="ml-3 mt-6"
          >
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <h1 className="ml-3 mt-6">
            <Link
              href={"/"}
              style={{
                width: "78px",
                height: "30px",
                fontWeight: "400",
                fontSize: "16px",
                fontStyle: "solid",
                color: "rgba(251, 46, 134, 1)",
              }}
            >
              <u>Read More</u>
            </Link>
          </h1>
        </div>





        <div
          style={{
            width: "370px",
            height: "493px",
          }}
          className="border rounded-lg shadow-lg ml-auto mr-auto"
        >
          <div style={{ width: "37opx", height: "255px", borderRadius: "8px" }}>
            <Image src={Blog3IMg} alt="Blog Image" />
          </div>

          <div className="flex">
            <h1
              style={{
                width: "55px",
                height: "14px",
                fontSize: "14px",
                color: "rgba(21, 24, 117, 1)",
              }}
              className="ml-3"
            >
              SaberAli
            </h1>
            <h1
              style={{
                width: "",
                height: "14px",
                color: "rgba(21, 24, 117, 1)",
                fontSize: "14px",
              }}
              className="ml-12"
            >
              21 August,2020
            </h1>
          </div>

          <h1
            style={{
              width: "248px",
              height: "18px",
              fontSize: "18px",
              color: "rgba(21, 24, 117, 1)",
            }}
            className="font-sans font-bold mt-8 ml-3"
          >
            Top esssential Trends in 2021
          </h1>
          <p
            style={{
              width: "297px",
              height: "60px",
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(114, 113, 143, 1)",
            }}
            className="ml-3 mt-6"
          >
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <h1 className="ml-3 mt-6">
            <Link
              href={"/"}
              style={{
                width: "78px",
                height: "30px",
                fontWeight: "400",
                fontSize: "16px",
                fontStyle: "solid",
                color: "rgba(21, 24, 117, 1)",
              }}
            >
              <u>Read More</u>
            </Link>
          </h1>
        </div>







      </div>
    </div>
  );
}
