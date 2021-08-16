import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hi, I am
					<span> Kyohei Dan.</span>
				</h1>
				<p className="h-sub-text">
					私のポートフォリオサイトにきてくださりありがとうございます！
					メニューから私の紹介や開発したものを確認できます！
					<br />
					このポートフォリオサイトは、フロント：React を採用しております！
				</p>
				<div className="icons">
					<a href="https://github.com/kyohei-dan" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</a>
				</div>
			</header>
		</div>
	);
};

export default HomePage;
