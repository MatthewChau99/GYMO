import React from "react";
import {Container, Row, Col} from "shards-react";
import {Link} from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import TextBody from "../components/blog-posts/TextBody";
import Author from "../components/blog-posts/Author";
import Details from "../components/blog-posts/Details";
import Comments from "../components/blog-posts/Comments";

const BlogDetails = () => (
    <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle
                sm="4" title="Blog Detail"
                subtitle="Blog Posts"
                className="text-sm-left"
                tag={Link} to="blog-posts"
            />
        </Row>

        <Row>

            <Col lg="9" md="12">
                <TextBody
                    backgroundImage="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                    badge="sharing"
                    title="Nice Wrok Out Experience"
                    text="'Begin with the end in mind,' famously wrote Stephen Covey. So what does this tidbit of leadership wisdom have to do with training clients? It has everything to do with it. As fitness professionals we’ve got to ask ourselves, “Am I beginning each session with the end in mind?”
            The end point, or my goal, for each and every group class is to leave my clients on a workout high, feeling exhausted and exhilarated, challenged yet successful, and glad it’s over but can’t wait for the next class. So if I begin this class by telling them to “hop on a rower for four minutes to warm up,” then I am doing a disservice to them and myself. According to ACSM, the standard for fitness professionals is now higher than ever. The warm up is your first opportunity to showcase your value as a trainer and ensure you’ll take your clients to your desired endpoint.
            The beginning begins before the class. It begins when you are programming your workouts, taking into consideration range of motion (ROM), the muscles being utilized and any anticipated physical limiting factors. So let’s say for example you’ve programmed Fran. Ignoring the pull ups, let’s just look at the thrusters. You’re coupling a front squat together with a push press. The ideal range of motion would be hips below parallel in the squat and full extension overhead with straight arms at the top of the press. The muscles being utilized are, well, everything. You’ve got the rectus abdominals, glutes, adductors, abductors, calves, hamstrings, shoulders and so on. Two common anticipated physical limiting factors could be ankle weakness and/or immobility and tight adductors. So not only do you program Fran, you program a warm-up full of everything they need to move well in the workout. In each warm-up you include:
            Mobility and ROM work that is based on the exercises in that particular workout.
            Activate the core and especially the posterior chain.
            Increase blood flow to the primary movers.
            So often we jump to No. 3 and leave out the first two. Providing the reasoning behind each part of the warm-up will reinforce why you, as a trainer, want them to work through the full warm-up.
            By planning out warm-ups that leave them feeling physically prepared and wowing them with the why, you’ll deliver that valuable workout experience from minute one to 59 of each and every one hour class. Or in Covey’s words, “Begin with the end in mind."
                    badge="sharing"
                    days="16 Days Ago"
                    lnum="2"
                    cnum="2"
                />

            </Col>

            {/* Sidebar Widgets */}
            <Col lg="3" md="12">
                <Author
                    author="Anna Kunis"
                    page="user-profile-lite"
                    datestarted="Sep 2020"
                    tpost="2"
                />
                <Details
                    postdate="21 Sep 2020"
                    tags="Sharing"
                />
                <Comments

                />
            </Col>
        </Row>
    </Container>
);

export default BlogDetails;
