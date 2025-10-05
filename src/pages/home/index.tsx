import AboutSection from "@/components/about/about";
import SkillsSection from "@/components/button-border/button-dorder";
;
import ContactSection from "@/components/contant/contact";

import HeroPage from "@/components/hero/heropage";
import MyWork from "@/components/my-work/mywork";

import Projects from "@/components/poject/project";
import ReviewSection from "@/components/reviews/reviews";
import Services from "@/components/servis/servis";
import SkillSection from "@/components/skill/skill";


function HomePage () {
    return (  
        <>  
        
    <HeroPage/>
    {/* <ButtonBorder/> */}
    <SkillsSection/>
    <AboutSection/>
    <SkillSection/>
    <MyWork/>
    <Services/>
    <Projects/>
    <ReviewSection/>
    <ContactSection/>
    {/* <Footer/> */}
        
        </>
    );
}

export default HomePage  ;