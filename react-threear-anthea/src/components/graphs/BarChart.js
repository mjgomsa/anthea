import * as d3 from "d3";

const DrawBarChart = (element, data) => {
  const margin = { top: 50, right: 30, bottom: 60, left: 40 }; // Adjusted bottom margin to accommodate x-axis labels
  const width = 640 - margin.left - margin.right; // Width of the chart area
  const height = 500 - margin.top - margin.bottom; // Height of the chart area

  d3.select(element).select("svg").remove(); // Remove the old svg

  // Create new svg
  const svg = d3
    .select(element)
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr(
      "viewBox",
      `0 0 ${width + margin.left + margin.right} ${
        height + margin.top + margin.bottom
      }`
    )
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.label))
    .range([0, width])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .nice()
    .range([height, 0]);

  svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickSize(0))
    .selectAll("text")
    .attr("font-size", "14px"); // Increase font size of x-axis labels

  svg.select(".y-axis").remove(); // Remove y-axis scale labels
  svg.select(".x-axis").remove(); // Remove y-axis scale labels

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d.label))
    .attr("width", x.bandwidth())
    .attr("y", (d) => y(d.value))
    .attr("height", (d) => height - y(d.value))
    .style("fill", "#A01313");

  // Add category names on top of each bar
  svg
    .selectAll(".bar-label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "bar-label")
    .attr("x", (d) => x(d.label) + x.bandwidth() / 2)
    .attr("y", (d) => y(d.value) - 5) // Adjust the position for better alignment
    .attr("text-anchor", "middle")
    .text((d) => d.label)
    .attr("font-size", "40px")
    .attr("fill", "black");
};

export default DrawBarChart;
