/* eslint-disable @next/next/no-img-element */
import { getProductBySlug } from "@/services/product/productService";
import { ImageResponse } from "next/og";

export const alt = "محصولات ورکفولیو";
export const size = {
  width: 1200,
  height: 788,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = params;
  const { product } = await getProductBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "black",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <img
            alt={product?.title}
            height={394}
            src={product?.imageLink}
            style={{ margin: "0 30px" }}
            width={600}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontStyle: "normal",
            letterSpacing: "-0.025em",
            color: "white",
            marginTop: 30,
            padding: "0 120px",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            direction: "rtl",
          }}
        >
          {product.faSlug.split("-").reverse().join(" ")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
