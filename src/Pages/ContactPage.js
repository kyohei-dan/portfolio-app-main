import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

const ContactPage = () => {
	return (
		<div>
			<div className="title">
				<Tittle title={"About Me"} span={"About Me"} />
			</div>
			<div className="ContactPage">
				<div className="map-sect">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.254128875788!2d135.49034121523283!3d34.723988180428556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e42e0891588f%3A0xf72052c4d41a4292!2z44CSNTMyLTAwMTIg5aSn6Ziq5bqc5aSn6Ziq5biC5reA5bed5Yy65pyo5bed5p2x77yS5LiB55uu77yR77yR4oiS77yT77yQ!5e0!3m2!1sja!2sjp!4v1623574997602!5m2!1sja!2sjp"
						width="600"
						height="450"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
						title="This is a unique title"
					></iframe>
				</div>
				<div className="contact-sect">
					<ContactItem icon={phone} text1={"080-3793-3277"} title={"Phone"} />
					<ContactItem
						icon={email}
						text1={"kyohey.dan@gmail.com"}
						title={"Email"}
					/>
					<ContactItem
						icon={location}
						text1={"大阪市淀川区木川東2-11-30"}
						title={"Address"}
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
