import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

interface DoughnutChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
  title?: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
