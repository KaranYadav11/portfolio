import Avatar from "@/app/(home)/components/Avatar";
import { Link as ScrollLink } from "react-scroll";
import { bricolage_grotesque, montserrat } from "@/utils/fonts";
import { InteractiveHoverButton } from "./ui/Hoverbtn";
export default function HeroSection() {
  return (
    <div className="w-full cursor-none flex justify-center items-center pb-36 pt-36  dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div>
          <Avatar />
        </div>
        <div className="mt-4 px-32 max-sm:px-4">
          <h1
            className={`!text-[3rem] mt-2 max-sm:!text-[1.9rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
          >
            Hi, I&apos;m Karan Yadav
          </h1>
          <h1
            className={`mt-2  max-sm:mt-6 max-sm:px-3 !text-base max-sm:!text-[15px] text-center !font-normal !tracking-normal  !leading-6 ${montserrat}`}
          >
            Hooked on building clean UIs, cracking backend logic, and fighting
            bugs until they finally give up. Tech, basketball, netflix, and
            late-night YouTube rabbit holes shaped me. Still figuring it all
            out, but getting better every day.
          </h1>
        </div>
        <div className="mt-8 max-sm:mt-14 flex gap-4 ">
          <InteractiveHoverButton
            className={`${bricolage_grotesque} cursor-none`}
          >
            <ScrollLink
              to="contact-section"
              activeClass="active"
              smooth={true}
              offset={-120}
              duration={1100}
            >
              Get in touch
            </ScrollLink>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
