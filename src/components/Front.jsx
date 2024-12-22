import Section from "./Section";
import Button from "./Button";
import { heroBackground, robot } from "../assets";

const Front = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="front"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Code Hard, Compete Smart, Win Big - KodeWreck Awaits!
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Push your coding limits, tackle tough challenges, and sharpen your
            skills with KodeWreck - where passion for programming meets fierce
            competition.
          </p>
          <Button href="/lets go" white>
            Let's Go
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-4">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.7rem]" />
              <div>
                <img
                  src={robot}
                  className="w-full scale-[1] translate-y-[-3%] md:scale-[1] md:-translate-y-[1%] lg:-translate-y-[1%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Front;
