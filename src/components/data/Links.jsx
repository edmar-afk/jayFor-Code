import { faLinkedin, faFacebook, faGithub, faPython, faReact } from "@fortawesome/free-brands-svg-icons";import {
	faHouse,
	faUserAlt,
	faBriefcase,
	faPhone,
	faShop,
	faMailBulk,
	faThumbsUp,
	faEye,
	faStar,
	faCode,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import capstone from "../../assets/img/capstone.png";
import product1 from "../../assets/img/products/product1.png";
import shopee from "../../assets/img/shopee.png";

export const navLink = [
	{ id: 1, icon: faHouse, name: "Home", color: "text-cyan-400", hidden: "", href: "/" },
	{ id: 2, icon: faBriefcase, name: "Works", color: "text-orange-400", hidden: "", href: "/works" },
	{ id: 3, icon: faUserAlt, name: "About", color: "text-blue-400", hidden: "", href: "/about" },
	{ id: 4, icon: faShop, name: "Shop", color: "text-purple-400", hidden: "hidden", href: "/shop" },
];
export const socialLinks = [
	{ id: 1, name: "Facebook", icon: faFacebook, link: "https://www.facebook.com/jayjanezkieO3" },
	{ id: 2, name: "Github", icon: faGithub, link: "https://github.com/edmar-afk" },
	{ id: 3, name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com/in/edmar-jay-heolin-9600b4259/" },
];

export const ads = [
	{ id: 1, icon: faPython, name: "Django" },
	{ id: 2, icon: faReact, name: "React" },
	{ id: 3, icon: faCode, name: "Freelancer" },
	{ id: 4, icon: faShieldAlt, name: "Trusted" },
];

export const works = [
	{
		id: 1,
		imgUrl: capstone,
		title: "Isumbong",
		subTitle:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repudiandae illo magni assumenda saepe soluta nobis cupiditate natus fuga eaque nemo minima libero molestias maiores, animi aliquid dolores architecto nesciunt?",
		stack: "Django, Tailwind, MySQL",
		link: "",
	},

	{
		id: 2,
		imgUrl: product1,
		title: "GPT - Clone",
		subTitle:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repudiandae illo magni assumenda saepe soluta nobis cupiditate natus fuga eaque nemo minima libero molestias maiores, animi aliquid dolores architecto nesciunt?",
		stack: "Django, Tailwind, mysqlite",
		link: "",
	},

	{
		id: 3,
		imgUrl: shopee,
		title: "Shopee Page Clone",
		subTitle:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repudiandae illo magni assumenda saepe soluta nobis cupiditate natus fuga eaque nemo minima libero molestias maiores, animi aliquid dolores architecto nesciunt?",
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
		type: "Phone 2",
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

export const overview = [
	{
		id: 1,
		name: "Likes",
		count: 100,
		icon: faThumbsUp,
		info: "Hit the like icon if you love me.",
	},
	{
		id: 2,
		name: "Views",
		count: 100,
		icon: faEye,
		info: "How do I know you viewed my site?",
	},
	{
		id: 3,
		name: "Rate",
		count: 4.5,
		icon: faStar,
		info: "Rates are based on my clients",
	},
];
