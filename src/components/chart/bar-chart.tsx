import React from "react";
import { Bar } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface BarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
  title?: string;
}

const BarChart: React.FC<BarChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  return <Bar data={data} />;
};

export default BarChart;
