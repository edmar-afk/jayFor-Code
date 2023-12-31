import { faHouse } from "@fortawesome/free-solid-svg-icons";import { faBriefcase } from "@fortawesome/free-solid-svg-icons";import { faUserAlt } from "@fortawesome/free-solid-svg-icons";import { faLinkedin } from "@fortawesome/free-brands-svg-icons";import { faFacebook } from "@fortawesome/free-brands-svg-icons";import { faGithub } from "@fortawesome/free-brands-svg-icons";import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinStars } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrimace } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import djangoIcon from "../../assets/img/django-icon.png";
import reactIcon from "../../assets/img/react-icon.png";
import tailwindIcon from "../../assets/img/tailwind-icon.png";
import mysqlIcon from "../../assets/img/mysql-icon.png";
import capstone from "../../assets/img/capstone.png";
import product1 from "../../assets/img/products/product1.png";
import shopee from "../../assets/img/shopee.png";
import me from "../../assets/img/favicon.png";
export const navLink = [
	{ id: 1, icon: faHouse, name: "Home", color: "text-cyan-400", href: "/" },
	{ id: 2, icon: faBriefcase, name: "Works", color: "text-orange-400", href: "/works" },
	{ id: 3, icon: faUserAlt, name: "About", color: "text-blue-400", href: "/about" },
];
export const socialLinks = [
	{ id: 1, name: "Facebook", icon: faFacebook, link: "https://www.facebook.com/jayjanezkieO3" },
	{ id: 2, name: "Github", icon: faGithub, link: "https://github.com/edmar-afk" },
	{ id: 3, name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com/in/edmar-jay-heolin-9600b4259/" },
];

export const skillsLogo = [
	{ id: 1, imgUrl: djangoIcon, tooltip: "django-tooltip", title: "Django" },
	{ id: 2, imgUrl: reactIcon, tooltip: "react-tooltip", title: "React" },
	{ id: 3, imgUrl: tailwindIcon, tooltip: "tailwind-tooltip", title: "Tailwind" },
	{ id: 4, imgUrl: mysqlIcon, tooltip: "mysql-tooltip", title: "MySQL" },
];

export const works = [
	{
		id: 1,
		imgUrl: capstone,
		title: "Isumbong",
		subTitle: "My solo Capstone Project",
		stack: "Django, Tailwind, MySQL",
		link: "",
	},

	{
		id: 2,
		imgUrl: product1,
		title: "GPT - Clone",
		subTitle: "Merely a Replica of chatGPT",
		stack: "Django, Tailwind, mysqlite",
		link: "",
	},

	{
		id: 3,
		imgUrl: shopee,
		title: "Shopee Page Clone",
		subTitle: "I replicated a website to alleviate my ennui",
		stack: "Django, Tailwind, MySQL",
		link: "",
	},
];

export const contactInformation = [
	{
		id: 1,
		type: "Phone 1",
		contact: "09665616586",
		href: "tel:+639665616586",
		icon: faPhone,
	},
	{
		id: 2,
		type: "Phone 1",
		contact: "09510784760",
		href: "tel: +09510784760",
		icon: faPhone,
	},
	{
		id: 3,
		type: "Email",
		contact: "jaywrsnp6@gmail.com",
		href: "mailto: jaywrsnp6@gmail.com",
		icon: faMailBulk,
	},
];

export const experience = [
	{
		id: 1,
		date: "November 2020 – Present",
		skills: "Front-end Developer",
		stack: "HTML, CSS, JS",
	},
	{
		id: 2,
		date: "January 2022 – Present",
		skills: "Fullstack Developer",
		stack: "PHP",
	},
	{
		id: 3,
		date: "August 2022 – Present",
		skills: "Fullstack Developer",
		stack: "Django(Python)",
	},
	{
		id: 4,
		date: "Present",
		skills: "Fullstack Freelancer",
		stack: "React, Django, MySQL",
	},
];

export const references = [
	{
		id: 1,
		name: "Amor Dianne Carillo",
		contact: "0912-530-2030",
		href: "tel: +639125302030",
		icon: faPhone,
	},
];

export const comments = [
	{
		id: 1,
		imgUrl: me,
		name: "Edmar Jay O. Heolin",
		feedback:
			"I'm genuinely pleased with the outcome. Your team's efforts have made a positive impact, and I'm happy with the results. Thank you!",
		rate: 5,
		satisfaction: "Happy Client",
		date: "Dec. 31, 2023",
		icon: faFaceGrinStars,
	},
	{
		id: 2,
		imgUrl: me,
		name: "Edmar Jay O. Heolin",
		feedback:
			"I feel quite satisfied with the service provided. Everything went smoothly, and I appreciate the attention to detail. Good work!",
		rate: 4,
		satisfaction: "Satisfied Client",
		date: "Dec. 31, 2023",
		icon: faSmile,
	},
	{
		id: 3,
		imgUrl: me,
		name: "Edmar Jay O. Heolin",
		feedback:
			"The service was okay; it met my expectations. Nothing exceptional, but I don't have any major complaints either.",
		rate: 3,
		satisfaction: "Neutral Client",
		date: "Dec. 31, 2023",
		icon: faFrown,
	},
	{
		id: 4,
		imgUrl: me,
		name: "Edmar Jay O. Heolin",
		feedback:
			"I must express my frustration with the service. There were issues that need attention, and I expected a smoother experience. Let's address these concerns.",
		rate: 1,
		satisfaction: "Frustrated Client",
		date: "Dec. 31, 2023",
		icon: faFaceGrimace,
	},
	{
		id: 5,
		imgUrl: me,
		name: "Edmar Jay O. Heolin",
		feedback:
			"I'm genuinely upset with the service provided. Numerous issues have left me dissatisfied, and I expect urgent resolution to rectify these problems.",
		rate: 1,
		satisfaction: "Angry Client",
		date: "Dec. 31, 2023",
		icon: faAngry,
	},
];
