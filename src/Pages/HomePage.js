import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faFacebook} className="icon fb" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
					<Link to="test" className="icon-holder">
						<FontAwesomeIcon icon={faYoutube} className="icon yt" />
					</Link>
				</div>
			</header>
		</div>
	);
};

export default HomePage;
