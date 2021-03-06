import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";
let WeightChart;

class WeightOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }
  buildChart = () => {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                padding: 10,
                autoSkip: true,
                // callback(tick, index) {
                //   // Jump every 7 values on the X axis labels to avoid clutter.
                //   return index % 7 !== 0 ? "" : tick;
                // }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 80,
                suggestedMax: 120,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      },
      ...this.props.chartOptions
    };
    const {weight, date} = this.props;
    if (typeof WeightChart !== "undefined") WeightChart.destroy();
    WeightChart = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: {
        labels: date,
        datasets: [{
          label: 'Weight',
          fill: 'start',
          data: weight,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgba(255,65,105,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgba(255,65,105,1)",
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2
        }]
      },
      options: chartOptions
    });
  }

  render() {
    const title = 'Weight Overview';
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            {/* <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
            </Col> */}
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}

WeightOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  weight: PropTypes.array,
  date: PropTypes.array
};

// BMIOverview.defaultProps = {
//   title: "BMI Overview",
//   chartData: {
//     labels: [0],
//     datasets: [
//       {
//         label: "BMI",
//         fill: "start",
//         data: [0],
//         backgroundColor: "rgba(0,123,255,0.1)",
//         borderColor: "rgba(0,123,255,1)",
//         pointBackgroundColor: "#ffffff",
//         pointHoverBackgroundColor: "rgb(0,123,255)",
//         borderWidth: 1.5,
//         pointRadius: 0,
//         pointHoverRadius: 3
//       },
     
//     ]
//   }
// };

export default WeightOverview;
