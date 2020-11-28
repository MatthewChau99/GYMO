import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Container, Row, Card, CardBody} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import BodyfatOverview from "../components/blog/BodyfatOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import BMIOverview from "./../components/blog/BMIOverview";
import WeightOverview from "./../components/blog/WeightOverview";
import store from "../states/store";
import axios from "axios";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class BlogOverview extends Component {
    constructor(props) {
        super(props);
        this.getBodyInfo();
        this.state = {
<<<<<<< HEAD
            smallStats: [
                {
                    label: "Posts",
                    value: "5",
                    percentage: "20%",
                    increase: false,
                    decrease: true,
                    chartLabels: [null, null, null, null, null, null, null],
                    attrs: {md: "4", sm: "6"},
                    datasets: [
                        {
                            label: "Today",
                            fill: "start",
                            borderWidth: 1.5,
                            backgroundColor: "rgb(0,123,255,0.1)",
                            borderColor: "rgb(0,123,255)",
                            data: [3, 2, 3, 2, 4, 5, 4]
                        }
                    ]
                },
                {
                    label: "Height",
                    value: "165 cm",
                    percentage: "0%",
                    increase: true,
                    chartLabels: [null, null, null, null, null, null, null],
                    attrs: {md: "6", sm: "6"},
                    datasets: [
                        {
                            label: "Today",
                            fill: "start",
                            borderWidth: 1.5,
                            backgroundColor: "rgba(0, 184, 216, 0.1)",
                            borderColor: "rgb(0, 184, 216)",
                            data: [164.5,
                                164,
                                164.5,
                                165,
                                164.5,
                                165,
                                165,]
                        }
                    ]
                },
                {
                    label: "Weight",
                    value: "51.5 kg",
                    percentage: "1%",
                    increase: false,
                    decrease: true,
                    chartLabels: [null, null, null, null, null, null, null],
                    attrs: {md: "6", sm: "6"},
                    datasets: [
                        {
                            label: "Today",
                            fill: "start",
                            borderWidth: 1.5,
                            backgroundColor: "rgba(23,198,113,0.1)",
                            borderColor: "rgb(23,198,113)",
                            data: [56.5,
                                55,
                                54.5,
                                53,
                                51,
                                52,
                                51.5,]
                        }
                    ]
                },
                {
                    label: "Body Fat Percent",
                    value: "14%",
                    percentage: "12.5%",
                    increase: false,
                    decrease: true,
                    chartLabels: [null, null, null, null, null, null, null],
                    attrs: {md: "4", sm: "6"},
                    datasets: [
                        {
                            label: "Today",
                            fill: "start",
                            borderWidth: 1.5,
                            backgroundColor: "rgba(255,180,0,0.1)",
                            borderColor: "rgb(255,180,0)",
                            data: [18.5,
                                18,
                                17.5,
                                17,
                                16,
                                16,
                                14,]
                        }
                    ]
                },
                {
                    label: "B.M.I.",
                    value: "18.9",
                    percentage: "1.05%",
                    increase: false,
                    decrease: true,
                    chartLabels: [null, null, null, null, null, null, null],
                    attrs: {md: "4", sm: "6"},
                    datasets: [
                        {
                            label: "Today",
                            fill: "start",
                            borderWidth: 1.5,
                            backgroundColor: "rgba(255,65,105,0.1)",
                            borderColor: "rgb(255,65,105)",
                            data: [20.9,
                                20.4,
                                20.1,
                                19.5,
                                18.8,
                                19.1,
                                18.9,]
                        }
                    ]
                }
            ],

=======
>>>>>>> frontend-ran
            bodyInfo: [],
            bodyfat: [],
            bmi: [],
            weight: [],
            height: [],
            date: []
        };
    }

    getBodyInfo() {
        const self = this;
        if (store.getState().loginStatus) {
            axios.get(`/account/getBodyInfo/${store.getState().user._id}`, {
                params: {
                    userID: store.getState().user._id
                }
            }).then((response) => {
                self.setState({
                    bodyInfo: response.data.data
                });

                // console.log(self.state.bodyInfo);
                self.setState({bodyfat: self.state.bodyInfo.map(o=>o.bodyFatPerc)});
                // console.log(self.state.bodyfat);
                self.setState({bmi: self.state.bodyInfo.map(o=>o.bmi)});
                // console.log(self.state.bmi);
                self.setState({weight: self.state.bodyInfo.map(o=>o.weight)});
                self.setState({height: self.state.bodyInfo.map(o=>o.height)});
                // console.log(self.state.weight);
                self.setState({date: self.state.bodyInfo.map(o=>o.date)});
                // console.log(self.state.date);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    // render() {
    //     return (
    //         <Container fluid className="main-content-container px-4">
    //             {/* Page Header */}
    //             <Row noGutters className="page-header py-4">
    //                 <PageTitle title="User Overview" subtitle="Dashboard" className="text-sm-left mb-3"
    //                            onClick={this.getBodyInfo.bind(this)}/>
    //             </Row>
    //
    //             {/* Small Stats Blocks */}
    //             <Row>
    //                 {this.state.smallStats.map((stats, idx) => (
    //                     <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
    //                         <SmallStats
    //                             id={`small-stats-${idx}`}
    //                             variation="1"
    //                             chartData={stats.datasets}
    //                             chartLabels={stats.chartLabels}
    //                             label={stats.label}
    //                             value={stats.value}
    //                             percentage={stats.percentage}
    //                             increase={stats.increase}
    //                             decrease={stats.decrease}
    //                         />
    //                     </Col>
    //                 ))}
    //             </Row>
    //
    //             <Row>
    //                 {/* Users Overview */}
    //                 <Col lg="8" md="12" sm="12" className="mb-4">
    //
    //                     <BodyfatOverview bodyfat={this.state.bodyfat} date={this.state.date}/>
    //                 </Col>
    //
    //                 {/* Users by Device
    //                 <Col lg="4" md="6" sm="12" className="mb-4">
    //                     <UsersByDevice/>
    //                 </Col> */}
    //
    //                 {/* New Draft */}
    //                 <Col lg="8" md="12" sm="12" className="mb-4">
    //                     <BMIOverview bmi={this.state.bmi} date={this.state.date}/>
    //                 </Col>
    //
    //                 {/* Discussions */}
    //                 <Col lg="8" md="12" sm="12" className="mb-4">
    //                     <WeightOverview weight={this.state.weight} date={this.state.date}/>
    //                 </Col>
    //
    //                 {/* Top Referrals */}
    //                 {/* <Col lg="3" md="12" sm="12" className="mb-4">
    //     <TopReferrals />
    //   </Col> */}
    //             </Row>
    //         </Container>
    //     )
    // };

    render() {
        const smallStats = [
            {
                label: "Height",
                value: this.state.height.length==0? 'N/A' : this.state.height[this.state.height.length-1] + ' cm',
                percentage: this.state.height.length<2 ? '0%' : ((this.state.height[this.state.height.length-1]-this.state.height[this.state.height.length-2])/this.state.height[this.state.height.length-2]*100).toFixed(2) + '%',
                increase: this.state.height.length<2 ? true : (this.state.height[this.state.height.length-1]-this.state.height[this.state.height.length-2]>=0? true: false),
                decrease: this.state.height.length<2 ? false : (this.state.height[this.state.height.length-1]-this.state.height[this.state.height.length-2]>=0? false: true),
                // chartLabels: [null, null, null, null, null, null, null],
                attrs: {md: "6", sm: "6"},
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(0, 184, 216, 0.1)",
                        borderColor: "rgb(0, 184, 216)",
                        data: this.state.height,
                    }
                ]
            },
            {
                label: "Weight",
                value: this.state.weight.length==0? 'N/A' : this.state.weight[this.state.weight.length-1] + ' kg',
                percentage: this.state.weight.length<2 ? '0%' : ((this.state.weight[this.state.weight.length-1]-this.state.weight[this.state.weight.length-2])/this.state.weight[this.state.weight.length-2]*100).toFixed(2) + '%',
                increase: this.state.weight.length<2 ? true : (this.state.weight[this.state.weight.length-1]-this.state.weight[this.state.weight.length-2]>=0? true: false),
                decrease: this.state.weight.length<2 ? false : (this.state.weight[this.state.weight.length-1]-this.state.weight[this.state.weight.length-2]>=0? false: true),
                // chartLabels: [null, null, null, null, null, null, null],
                attrs: {md: "6", sm: "6"},
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(23,198,113,0.1)",
                        borderColor: "rgb(23,198,113)",
                        data: this.state.weight,
                    }
                ]
            },
            {
                label: "Body Fat Percent",
                value: this.state.bodyfat.length==0? 'N/A' : this.state.bodyfat[this.state.bodyfat.length-1] + '%',
                percentage: this.state.bodyfat.length<2 ? '0%' : ((this.state.bodyfat[this.state.bodyfat.length-1]-this.state.bodyfat[this.state.bodyfat.length-2])/this.state.bodyfat[this.state.bodyfat.length-2]*100).toFixed(2) + '%',
                increase: this.state.bodyfat.length<2 ? true : (this.state.bodyfat[this.state.bodyfat.length-1]-this.state.bodyfat[this.state.bodyfat.length-2]>=0? true: false),
                decrease: this.state.bodyfat.length<2 ? false : (this.state.bodyfat[this.state.bodyfat.length-1]-this.state.bodyfat[this.state.bodyfat.length-2]>=0? false: true),
                // chartLabels: [null, null, null, null, null, null, null],
                attrs: {md: "4", sm: "6"},
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(255,180,0,0.1)",
                        borderColor: "rgb(255,180,0)",
                        data: this.state.bodyfat,
                    }
                ]
            },
            {
                label: "B.M.I.",
                value: this.state.bmi.length==0? 'N/A' : this.state.bmi[this.state.bmi.length-1],
                percentage: this.state.bmi.length<2 ? '0%' : ((this.state.bmi[this.state.bmi.length-1]-this.state.bmi[this.state.bmi.length-2])/this.state.bmi[this.state.bmi.length-2]*100).toFixed(2) + '%',
                increase: this.state.bmi.length<2 ? true : (this.state.bmi[this.state.bmi.length-1]-this.state.bmi[this.state.bmi.length-2]>=0? true: false),
                decrease: this.state.bmi.length<2 ? false : (this.state.bmi[this.state.bmi.length-1]-this.state.bmi[this.state.bmi.length-2]>=0? false: true),
                // chartLabels: [null, null, null, null, null, null, null],
                attrs: {md: "4", sm: "6"},
                datasets: [
                    {
                        label: "Today",
                        fill: "start",
                        borderWidth: 1.5,
                        backgroundColor: "rgba(255,65,105,0.1)",
                        borderColor: "rgb(255,65,105)",
                        data: this.state.bmi,
                    }
                ]
            }
        ]
        console.log(this.state.weight.slice(0, this.state.weight.length));
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle title="User Overview" subtitle="Dashboard" className="text-sm-left mb-3"
                               onClick={this.getBodyInfo.bind(this)}/>
                </Row>

                {/* Small Stats Blocks */}
                <Row>
                    {smallStats.map((stats, idx) => (
                        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                            <SmallStats
                                id={`small-stats-${idx}`}
                                variation="1"
                                chartData={stats.datasets}
                                chartLabels={stats.chartLabels}
                                label={stats.label}
                                value={stats.value}
                                percentage={stats.percentage}
                                increase={stats.increase}
                                decrease={stats.decrease}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col lg="12" md="12" sm="12" className="mb-4">
                        <Card>
                            <CardBody>
                                <Tabs defaultActiveKey="home" id="tab">

                                    <Tab eventKey="home" title="Body Fat">
                                        <BodyfatOverview bodyfat={this.state.bodyfat} date={this.state.date}/>
                                    </Tab>
                                    <Tab eventKey="profile" title="Weight">
                                        <WeightOverview weight={this.state.weight} date={this.state.date}/>
                                    </Tab>
                                    <Tab eventKey="contact" title="B.M.I.">
                                        <BMIOverview bmi={this.state.bmi} date={this.state.date}/>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    };

}

BlogOverview.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

BlogOverview.defaultProps = {};

export default BlogOverview;
