import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  let [loading, setLoading] = useState(true);
  return (
    <div className="absolute top-[50%] right-[50%]">
      <PropagateLoader
        color={"#0573FF"}
        loading={loading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  );
}

export default Loading;