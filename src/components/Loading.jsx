import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center spinner-border-lg mt-5">
      <div className="spinner-border text-light mr-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <h3 className="text-white"><b>Loading...</b></h3>
    </div>
  );
}

export default Loading;
