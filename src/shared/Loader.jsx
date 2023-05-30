import React from "react";

import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <TailSpin
        height="100"
        width="100"
        color="#1976d2"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{
          width: "100%",
          height: "1000px",
          justifyContent: "center",
          paddingTop: "20px",
        }}
        visible={true}
      />
    </div>
  );
}

export default Loader;
