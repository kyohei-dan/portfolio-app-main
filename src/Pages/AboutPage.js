import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const AboutPage = () => {
	return (
		<div className="AboutPage">
			<Tittle title={"About Me"} span={"About Me"} />
			<ImageSection />
			<Tittle title={"My Skills"} span={"My Skills"} />
			<div className="skillsContainer">
				<SkillsSection skill={"HTML"} progress={"70%"} width={"70%"} />
				<SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
				<SkillsSection skill={"Java Script"} progress={"60%"} width={"60%"} />
				<SkillsSection skill={"React Js"} progress={"50%"} width={"50%"} />
				<SkillsSection skill={"PHP"} progress={"60%"} width={"60%"} />
				<SkillsSection skill={"WordPress"} progress={"50%"} width={"50%"} />
				<SkillsSection skill={"Laravel"} progress={"50%"} width={"50%"} />
				<SkillsSection skill={"Git"} progress={"60%"} width={"60%"} />
				<SkillsSection skill={"Web Design"} progress={"50%"} width={"50%"} />
				<SkillsSection skill={"Analytics"} progress={"60%"} width={"60%"} />
			</div>

			<Tittle title={"Services"} span={"Services"} />
			<div className="servives-container">
				<ServicesSection
					image={design}
					title={"Web design"}
					text={"PhotoshopやAdobe XDを使用したWebデザイン"}
				/>
				<ServicesSection
					image={gamedev}
					title={"Web development"}
					text={"Webサイトの制作やフレームワークを使用したモダンなWeb開発"}
				/>
				<ServicesSection
					image={intelligence}
					title={"Web analytics"}
					text={"Analytics＋Search Console＋DataPortalを使用した解析"}
				/>
			</div>
		</div>
	);
};

export default AboutPage;
