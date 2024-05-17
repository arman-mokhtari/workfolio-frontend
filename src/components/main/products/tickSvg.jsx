import Image from "next/image";

const TickSvg = () => {
  const src = "/assets/svg/product-svg/tick-2.svg";

  return (
    <Image
      placeholder="blur"
      blurDataURL={src}
      priority
      src={src}
      width="25"
      height="25"
      alt="tick"
    />
  );
};

export default TickSvg;
