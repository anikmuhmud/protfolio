



import AboutSection from "@/components/about/about";
import FontLayout from "@/components/layout/FontLayout";

import Projects from "@/components/poject/project";
import ReviewSection from "@/components/reviews/reviews";
import Services from "@/components/servis/servis";
import SkillSection from "@/components/skill/skill";
import HomePage from "@/pages/home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component : FontLayout,
        children:[
            {
                index:true,
                Component: HomePage
            },
            {
                path:"/about",
                Component: AboutSection,
            },
            {
                path:"/skills",
                Component: SkillSection,
            },
             {
                path:"/project",
                Component: Projects,
            },
             {
                path:"/serves",
                Component:Services ,
            },
             {
                path:"/review",
                Component:ReviewSection,
            }
        ]
    }
])
export default router