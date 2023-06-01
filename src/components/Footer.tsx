import { MdModeOfTravel, MdQuestionAnswer } from 'react-icons/md'
import { SiFacebook } from 'react-icons/si'
import { BsArrowUpSquare } from 'react-icons/bs'

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
