import {Code, GraduationCap, Microscope, Palette, Waypoints} from "lucide-react";
//from https://lucide.dev/icons/
export const projects = [
    {
        id: 1,
        title: "KeyCAS Docs",
        student: "Bobc, Jeremy, Eric, Robert",
        category: "Documentations",
        icon: Code,
        size: "small",
        description: "Official documentation website for KeyCAS",
        image: "/assests/Keystone Blue Round Black_副本2.png",
        color: "black",
        url: "https://keycas-doc.github.io/"
    },
    {
        id: 2,
        title: "NEST",
        student: "Yolanda Wang, Eva Jiang, Yolanda Huang, Christine Chen, Allan Wang",
        category: "Connections",
        icon: Waypoints,
        size: "large",
        description: "Network for Enriching Service Transformation-NEST connects all student service leaders and foster easy collaboration and resource exchange.",
        image: "/assests/projectCover/NEST_white.png",
        color: "NEST",
        url:"https://nest-home.netlify.app/"

    },
    {
        id: 3,
        title: "Open Source Web builder",
        student: "Bobc",
        category: "Computer Science",
        icon: Code,
        size: "small",
        description: "Platform for students to present their work in and beyond Keystone community",
        image: "/assests/WechatIMG56.jpg",
        url: "https://edit.keycas.cn/"
    }
];