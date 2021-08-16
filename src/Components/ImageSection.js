import React from "react";
import about from "../img/top_icon.PNG";

const ImageSection = () => {
	return (
		<div className="ImageSection">
			<div className="img">
				<img src={about} alt="" />
			</div>
			<div className="about-info">
				<h4>
					I am<span> Kyohei Dan</span>
				</h4>
				<p className="about-text">
					こんにちは！大阪でWeb関係のお仕事をしております！
					Appleのサイトを見て「私もこんなサイトを作りたい！」と思ったことがきっかけで、この業界に挑戦しました。
					現在は、最新技術をキャッチアップしながら開発に取り組んでおります。
				</p>
				<div className="about-details">
					<div className="left-section">
						<p>Full Name</p>
						<p>Age</p>
						<p>Email</p>
						<p>Tel</p>
						<p>Interests</p>
					</div>
					<div className="right-section">
						<p>: 団 恭平</p>
						<p>: 27</p>
						<p>: kyohey.dan@gmail.com</p>
						<p>: 080-3793-3277</p>
						<p>: イケてるSaaSサイトを見ること</p>
					</div>
				</div>
				{/* <button className="btn">Download Cv</button> */}
			</div>
		</div>
	);
};

export default ImageSection;
