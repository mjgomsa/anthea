import * as d3 from "d3";

const DrawLineChart = (element, data) => {
  // Define chart dimensions and margins
  const margin = { top: 15, right: 20, bottom: 30, left: 20 };
  const parentWidth = element.clientWidth;
  const width = parentWidth - margin.left - margin.right;
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

  // Find the minimum and maximum date in the data
  const minDate = d3.min(data, (d) => d.date);
  const maxDate = d3.max(data, (d) => d.date);

  // Calculate the start of the month after the maximum date
  const nextMonth = new Date(maxDate.getFullYear(), maxDate.getMonth() + 1, 1);

  // Extend the x domain to include the entire month of May
  const xExtent = [minDate, nextMonth];
  // console.log("X Scale Domain:", xExtent); // Log the domain of the x scale

  // Create scales
  const x = d3.scaleTime().domain(xExtent).range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, Math.ceil(d3.max(data, (d) => d.value) / 100) * 100 + 1]) // Adjusted domain to round up to the nearest factor of 10
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
    .attr("fill", "#4A25E3")
    .attr("fill-opacity", 0.3)
    .attr("d", area);

  // Add X axis with custom tick format
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(
      d3
        .axisBottom(x)
        .ticks(5)
        .tickFormat((date) => {
          const format = d3.timeFormat("%b '%y"); // Format: Apr '24
          return format(date);
        })
        .tickSize(0)
    );

  // Remove Y axis
  svg.select(".domain").remove();

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
    .attr("stroke", "#4A25E3")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Add circles for data points with y value displayed over the circle
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.date))
    .attr("cy", (d) => y(d.value))
    .attr("r", 3)
    .attr("fill", "#4A25E3")
    .each(function (d) {
      svg
        .append("text")
        .attr("x", x(d.date))
        .attr("y", y(d.value) - 10)
        .attr("text-anchor", "middle")
        .text(d.value);
    });

  return svg.node(); // Return the SVG node
};

export default DrawLineChart;
