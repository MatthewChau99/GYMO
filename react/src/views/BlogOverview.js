import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import BMIOverview from "./../components/blog/BMIOverview";
import WeightOverview from "./../components/blog/WeightOverview";
import store from "../states/store";
import axios from "axios";

function getBodyInfo() {
    if (store.getState().loginStatus) {
        axios.get(`/account/getBodyInfo/${store.getState().user._id}`, {
            params: {
                userID: store.getState().user._id
            }
        }).then((response) => {
            console.log(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
}

const BlogOverview = ({smallStats}) => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle title="User Overview" subtitle="Dashboard" className="text-sm-left mb-3" onClick={getBodyInfo}/>
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
            {/* Users Overview */}
            <Col lg="8" md="12" sm="12" className="mb-4">
                <UsersOverview/>
            </Col>

            {/* Users by Device */}
            <Col lg="4" md="6" sm="12" className="mb-4">
                <UsersByDevice/>
            </Col>

            {/* New Draft */}
            <Col lg="6" md="6" sm="12" className="mb-4">
                <BMIOverview/>
            </Col>

            {/* Discussions */}
            <Col lg="6" md="12" sm="12" className="mb-4">
                <WeightOverview/>
            </Col>

            {/* Top Referrals */}
            {/* <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col> */}
        </Row>
    </Container>
);

BlogOverview.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
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
            label: "Boody Fat Percent",
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
        },

    ]
};

export default BlogOverview;
