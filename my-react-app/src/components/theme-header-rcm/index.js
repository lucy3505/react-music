import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import PropTypes from "prop-types";
function ThemeHeaderRCM(props) {
  const { title, keywords } = props;
  return (
    <div>
      <HeaderWrapper className="sprite_02">
        <div className="left">
          <h3 className="title">{title}</h3>
          <div className="keyword">
            {keywords.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <a>{item}</a>
                  <span className="divider">|</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <a>更多</a>
          <i className="icon sprite_02"></i>
        </div>
      </HeaderWrapper>
    </div>
  );
}
ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};
ThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default memo(ThemeHeaderRCM);
