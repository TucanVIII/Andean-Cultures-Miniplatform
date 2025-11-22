import { Vortex } from "react-loader-spinner";

const Loader = () => {
  const loader = (
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["red", "orange", "yellow", "green", "skyblue", "blue", "purple"]}
    />
  );

  return loader;
};

export default Loader;
