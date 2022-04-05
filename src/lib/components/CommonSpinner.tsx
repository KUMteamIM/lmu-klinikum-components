import React from "react";
import { BeatLoader } from "react-spinners";

interface PropDefs {
  loading: boolean,
  children?: object[],
}

export const CommonSpinner = ({ children, loading }:PropDefs) => (
  <div className="sweet-loading" style={{ textAlign: "center" }}>
    {children}
    <BeatLoader size={8} loading={loading} />
  </div>
);

CommonSpinner.defaultProps = {
  loading: true,
};

export default CommonSpinner
