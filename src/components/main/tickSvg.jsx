import Image from "next/image";

const TickSvg = () => {
  const src = "https://cdn.workfolio.ir/images/svg/product/tick-2.svg";
  return <Image src={src} width="25" height="25" alt="tick" />;
};

export default TickSvg;
