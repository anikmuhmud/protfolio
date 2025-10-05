import TypingIntro from "@/components/typescrip/type";
import { Badge } from "@/components/ui/badge";

const HeroPage = () => {
  return (
    <div id="hero" className=" flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-12">
        
        
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-full relative flex justify-center items-center overflow-hidden border-4 border-white shadow-[0_0px_40px_rgba(59,130,246,0.7)]">
            <img
              className="absolute w-full h-full object-cover"
              src="public/ak.3.jpg"
              alt="img"
            />
          </div>
        </div>

        
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="text-2xl sm:text-3xl p-3 text-white">
            <h3>Hello, this is </h3>
          </div>

          <Badge variant="default" className="  border-border" asChild>
            <div className="">
              <h1 className="font-bold text-amber-400 p-3 text-3xl sm:text-3xl ">
                Mamudul Hasan Anik
              </h1>
            </div>
          </Badge>

          <div className="mt-6  leading-[1.2]">
            <h2 className=" sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[2.25rem] text-white">
              <span className="inline-block">And I am a-  </span>
              <TypingIntro
                phrases={[
                  "Web Developer",
                  "Frontend Developer",
                  "React Learner",
                  "MERN Stack Developer",
                  "JavaScript Developer",
                  "Next.js Developer",
                  "Backend Developer",
                ]}
                typingSpeed={150}
                deletingSpeed={130}
              />
            </h2>
          </div>

          <p className="mt-6 max-w-[60ch] sm:text-lg text-white">
            Passionate Web Developer & Designer who loves turning ideas into
            interactive, user-friendly websites. With a strong focus on clean
            code, responsive design, and smooth user experience, I build
            projects that don’t just look good—but also perform flawlessly.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <a className="w-[45px] h-[45px] flex justify-center items-center text-white text-2xl rounded-full border-2 border-cyan-400 hover:scale-110 transition" href="#"><i className="bx bxl-facebook"></i></a>
            <a className="w-[45px] h-[45px] flex justify-center items-center text-white text-2xl rounded-full border-2 border-cyan-400 hover:scale-110 transition" href="#"><i className="bx bxl-instagram"></i></a>
            <a className="w-[45px] h-[45px] flex justify-center items-center text-white text-2xl rounded-full border-2 border-cyan-400 hover:scale-110 transition" href="#"><i className="bx bxl-github"></i></a>
            <a className="w-[45px] h-[45px] flex justify-center items-center text-white text-2xl rounded-full border-2 border-cyan-400 hover:scale-110 transition" href="#"><i className="bx bxl-youtube"></i></a>
            <a className="w-[45px] h-[45px] flex justify-center items-center text-white text-2xl rounded-full border-2 border-cyan-400 hover:scale-110 transition" href="#"><i className="bx bxl-microsoft-teams"></i></a>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a className="inline-block text-[16px] sm:text-[18px] text-white px-5 py-2 rounded-full border-2 border-cyan-400 hover:bg-cyan-400/20 transition">
              More About Me...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
