/* eslint-disable @next/next/no-img-element */
import { getBlogBySlug } from "@/services/blog/blogService";
import { ImageResponse } from "next/og";

export const alt = "وبلاگ ورکفولیو";
export const size = {
  width: 1200,
  height: 788,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = params;
  const { blog } = await getBlogBySlug(slug);

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
            alt={blog?.title}
            height={394}
            src={blog?.imageLink}
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
          {blog?.faSlug.split("-").reverse().join(" ")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
