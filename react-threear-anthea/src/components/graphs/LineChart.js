import * as d3 from "d3";

const DrawLineChart = (element, data) => {
  // Define chart dimensions and margins
  const margin = { top: 10, right: 30, bottom: 30, left: 50 };
  const width = 300 - margin.left - margin.right;
  const height = 150 - margin.top - margin.bottom;

  // Remove any existing SVG
  d3.select(element).select("svg").remove();

  // Create new SVG
  const svg = d3
    .select(element)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create scales
  const x = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.date))
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, Math.ceil(d3.max(data, (d) => d.value) / 10) * 10]) // Adjusted domain to round up to the nearest factor of 10
    .nice()
    .range([height, 0]);

  // Define area function
  const area = d3
    .area()
    .x((d) => x(d.date))
    .y0(height)
    .y1((d) => y(d.value));

  // Add area fill
  svg
    .append("path")
    .datum(data)
    .attr("fill", "#A01313")
    .attr("fill-opacity", 0.3)
    .attr("d", area);

  // Add X axis
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5));

  // Add Y axis
  svg
    .append("g")
    .call(d3.axisLeft(y).ticks(Math.ceil(d3.max(data, (d) => d.value) / 10)));

  // Define line function
  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.value));

  // Add line path
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#A01313")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Add circles for data points
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.date))
    .attr("cy", (d) => y(d.value))
    .attr("r", 3)
    .attr("fill", "#A01313");

  return svg.node(); // Return the SVG node
};

export default DrawLineChart;
