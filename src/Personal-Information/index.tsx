import React from "react";
import "../Personal-Information/style.css";

interface information {
  header: string;
  title: string;
  children: React.ReactNode;
  title1?: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  text_profile?: string;
  text_profile_button?: string;
  text_tem_1?: string;
  text_tem_2?: string;
  text_tem_3?: string;
  text_tem_4?: string;
  text_tem_5?: string;
  text_tem_6?: string;
  text_tem_7?: string;
  text_tem_8?: string;
}
const Personal: React.FC<information> = (props) => {
  const {
    header,
    title,
    children,
    title1,
    image,
    image1,
    image2,
    image3,
    image4,
    text_profile,
    text_profile_button,
    text_tem_1,
    text_tem_2,
    text_tem_3,
    text_tem_4,
    text_tem_5,
    text_tem_6,
    text_tem_7,
    text_tem_8,
  } = props;
  return (
    <>
      <div className="container">
        <div className="header-context">
          <div>
            <h3>{header}</h3>
          </div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <p>{children}</p>
          </div>
          <div>
            <p>{title1}</p>
          </div>
        </div>

        <div className="context">
          <div className="content-1">
            <div className="context-profile">
              <img src={image} alt="" />
              <h3>{text_profile}</h3>
              <h4>{text_profile_button} </h4>
            </div>
          </div>

          <div className="template">
            <div className="tem-group1">
              <div className="template1">
                <img src={image1} alt="" />
                <h3>{text_tem_1}</h3>
                <h4>{text_tem_2}</h4>
              </div>

              <div className="template2">
                <img src={image2} alt="" />
                <h3>{text_tem_3}</h3>
                <h4>{text_tem_4}</h4>
              </div>
            </div>
            <div className="tem-group2">
              <div className="template1">
                <img src={image3} alt="" />
                <h3>{text_tem_5}</h3>
                <h4>{text_tem_6}</h4>
              </div>

              <div className="template2">
                <img src={image4} alt="" />
                <h3>{text_tem_7}</h3>
                <h4>{text_tem_8}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Personal;
