import { Vortex } from "react-loader-spinner";

import "../styles/Loader.css";

const Loader = () => {
  const loader = (
    <div className="loader__container">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "red",
          "orange",
          "yellow",
          "green",
          "skyblue",
          "blue",
          "purple",
        ]}
      />
    </div>
  );

  return loader;
};

export default Loader;
