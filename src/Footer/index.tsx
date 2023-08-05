import React from "react";
import "../Footer/style.css";
interface foot {
  text1: string;
}
const Footer: React.FC<foot> = (props) => {
  const { text1 } = props;
  return (
    <>
      <div className="con">
        <p>{text1}</p>
      </div>
    </>
  );
};
export default Footer;
