import * as d3 from "d3";

const DrawDonutChart = (element, data) => {
  const colors = ["#D9D9D9", "#A01313"]; // grey and red
  const boxSize = 450; // graph boxsize, in pixels
  const width = 640; // outer width, in pixels
  const height = 400; // outer height, in pixels
  const innerRadius = 100; // inner radius of pie, in pixels (non-zero for donut)
  const outerRadius = Math.min(width, height) / 2; // outer radius of pie, in pixels

  d3.select(element).select("svg").remove(); // Remove the old svg

  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
    .append("g")
    .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

  // Add first line of text in the middle of doughnut
  svg
    .append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("style", "font-family")
    .attr("font-size", "60px")
    .attr("fill", "#000000")
    .attr("dy", "0.5em")
    .text(`${data[1].value}%`);

  const arcGenerator = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append("path")
    .attr("d", arcGenerator)
    .style("fill", (d, i) => colors[i % data.length]);
};

export default DrawDonutChart;
