import Span from "../../atoms/Span/Span";
import Button from "../../atoms/button/Button";
import H1 from "../../atoms/h1/H1";
import P from "../../atoms/p/P";
function HeroText() {
  return (
    <div className="md:w-[50%] md:h-fit w-[85%] flex md:justify-end  items-center flex-col md:flex-row h-[374.3495788574219px] mt-[80px] md:mt-0">
      <div className="h-full md:h-[60%]  w-[85%] flex flex-col gap-[30px] md:items-start items-center text-center md:text-start">
        <Span classname="text-[#2A7CC7] text-[16px] font-bold ">
          SUMMER 2020
        </Span>
        <H1 classname="md:text-[58px] text-[40px] font-bold ">
          NEW COLLECTION
        </H1>
        <P classname="text-[20px] text-[#737373] font-medium max-w-[350px] ">
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
