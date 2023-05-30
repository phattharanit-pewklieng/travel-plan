import { MdModeOfTravel, MdQuestionAnswer } from 'react-icons/md'
import { SiFacebook } from 'react-icons/si'
import { BsArrowUpSquare } from 'react-icons/bs'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023 Phattharanit. All rights reserved. </p>

      <p className="right-paragraph">
        <BsArrowUpSquare /> <MdModeOfTravel /> <SiFacebook />
      </p>
    </div>
  );
};

export default Footer;
