import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutUs" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Since its inception in 2007, SaiCare Medical Institute has been the leading healthcare provider in Prayagraj (formerly Allahabad). We have built a reputation for excellence through our unwavering commitment to quality medical care. Our institute is home to a team of highly skilled and experienced doctors who bring a wealth of knowledge to their respective specialties, ensuring that every patient receives the best possible treatment. At SaiCare Medical Institute, we pride ourselves on our state-of-the-art facilities, compassionate service, and adherence to the highest standards of healthcare. Over the years, our dedication to patient well-being and exceptional service has earned us the trust and respect of the community, making us a trusted name in healthcare.
          </p>
          <p>We are all in 2024!</p>
          <p>This MERN STACK PROJECT is developed by Saima.</p>
          <p>
            At SaiCare Medical Institute, we believe in providing comprehensive healthcare solutions with cutting-edge technology and compassionate care. Our team of dedicated professionals works tirelessly to ensure that every patient receives personalized attention and the highest quality of medical treatment. We are committed to innovation in healthcare delivery while maintaining the human touch that makes all the difference in patient care.
          </p>
          <p>Excellence in Healthcare!</p>
          <p>Developed with ❤️ by Saima</p>
        </div>
      </div>
    </>
  );
};

export default Biography;