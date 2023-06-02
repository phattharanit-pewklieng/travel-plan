import { MdModeOfTravel, MdQuestionAnswer } from 'react-icons/md'
import { SiFacebook } from 'react-icons/si'


const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023 Phattharanit. All rights reserved. </p>

      <p className="right-paragraph">
         <MdModeOfTravel /> <SiFacebook />
      </p>
    </div>
  );
};

export default Footer;
