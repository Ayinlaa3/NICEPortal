// src/components/Spinner.jsx

import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center h-60">
    <div className="w-10 h-10 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
