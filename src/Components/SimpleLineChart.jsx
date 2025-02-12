import React from "react";

const SimpleChart = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "100px",
      }}
    >
      <svg
        width="300"
        height="100"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      >
        <path
          d="M0,100 
             C40,20 40,140 85,50
             C110,0 140,140 210,0"
          fill="none"
          stroke="#f472b6" // Kolor linii
          strokeWidth="2" // Grubość linii
          strokeLinecap="round" // Zaokrąglone końce linii
        />
      </svg>
    </div>
  );
};

export default SimpleChart;
