import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
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
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
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

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.props.chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
              >
                View Full Report &rarr;
              </Button>
            </Col>
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

UsersOverview.propTypes = {
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
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "Body Fat Overview",
  chartData: {
    labels: Array.from(new Array(20), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      // {
      //   label: "Height",
      //   fill: "start",
      //   data: [
      //     165,
      //     164,
      //     160,
      //     162.5,
      //     160,
      //     157,
      //     156,
      //     158,
      //     160,
      //     159,
      //     161,
      //     161.5,
      //     162,
      //     161.5,
      //     160,
      //     159.5,
      //     158,
      //     156,
      //     157,
      //     157.5,
      //   ],
      //   backgroundColor: "rgba(0,123,255,0.1)",
      //   borderColor: "rgba(0,123,255,1)",
      //   pointBackgroundColor: "#ffffff",
      //   pointHoverBackgroundColor: "rgb(0,123,255)",
      //   borderWidth: 1.5,
      //   pointRadius: 0,
      //   pointHoverRadius: 3
      // },
      // {
      //   label: "Weight",
      //   fill: "start",
      //   data: [
      //     65,
      //     63.5,
      //     60,
      //     62.5,
      //     60,
      //     57,
      //     56,
      //     58,
      //     60,
      //     59,
      //     61,
      //     61.5,
      //     62,
      //     61.5,
      //     60,
      //     59.5,
      //     58,
      //     56,
      //     57,
      //     57.5,
      //   ],
      //   backgroundColor: "rgba(255,65,105,0.1)",
      //   borderColor: "rgba(255,65,105,1)",
      //   pointBackgroundColor: "#ffffff",
      //   pointHoverBackgroundColor: "rgba(255,65,105,1)",
      //   borderDash: [3, 3],
      //   borderWidth: 1,
      //   pointRadius: 0,
      //   pointHoverRadius: 2,
      //   pointBorderColor: "rgba(255,65,105,1)"
      // },
      {
        label: "Body Fat Percent",
        fill: "start",
        data: [
          20,
          19,
          21.5,
          23,
          22,
          21,
          20,
          19,
          20,
          21,
          20,
          19.5,
          19,
          18.5,
          18,
          17.5,
          17,
          16,
          16,
          14,          
        ],
        backgroundColor: "rgba(255,255,0,0.3)",
        borderColor: "rgba(255,130,0,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,255,0,1)",
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2

      }
    ]
  }
};

export default UsersOverview;
