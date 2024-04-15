import React, { useEffect, useRef } from "react";
import DrawDonutChart from "./graphs/DonutChart.js";
import DrawLineChart from "./graphs/LineChart.js";
import DrawBarChart from "./graphs/BarChart.js";

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      DrawDonutChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="container">
      <div className="graph" ref={ref} />
    </div>
  );
};

const LineChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      DrawLineChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <div className="graph" ref={ref} />;
};

const BarChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      DrawBarChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <div className="graph" ref={ref} />;
};

export const MemoizedDonutChart = React.memo(DonutChart);
export const MemoizedLineChart = React.memo(LineChart);
export const MemoizedBarChart = React.memo(BarChart);
