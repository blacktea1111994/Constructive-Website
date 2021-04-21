import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";

const PrismCode = ({ code, language, plugins }) => {
  const codeRef = useRef();

  useEffect(() => {
    (() =>
      codeRef && codeRef.current && Prism.highlightElement(codeRef.current))();
  }, [codeRef]);

  return (
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  );
};

PrismCode.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  plugins: PropTypes.array,
};

export default PrismCode;
