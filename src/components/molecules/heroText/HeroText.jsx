import Span from "../../atoms/Span/Span";
import Button from "../../atoms/button/Button";
import H1 from "../../atoms/h1/H1";
import P from "../../atoms/p/P";
function HeroText() {
  return (
    <div className="w-[50%] flex justify-end items-center">
      <div className="h-[60%]  w-[85%] flex flex-col justify-between">
        <Span classname="text-[#2A7CC7] text-[16px] font-bold">
          SUMMER 2020
        </Span>
        <H1 classname="text-[58px] font-bold ">NEW COLLECTION</H1>
        <P classname="text-[20px] text-[#737373] font-medium max-w-[350px]">
          We know how large objects will act, but things on a small scale.
        </P>
        <Button classname="text-[24px] font-bold text-white bg-[#23A6F0] px-[40px] py-[15px] w-fit h-fit  rounded-[5px]">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroText;
