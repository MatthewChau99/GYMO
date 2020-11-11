import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  NavItem,
  ListGroupItem,
  Dropdown,
  DropdownItem
} from "shards-react";

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleAddPost = this.toggleAddPost.bind(this);
  }

  toggleAddPost() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem
        //tag={Dropdown} caret toggle={this.toggleAddPost}
        // onClick={this.toggleAddPost}
      >

          {/* <Button
            theme="accent"
            tag={Link} to="add-new-post" size="sm"
            className="nav-link-icon center"
          >

          <i className="material-icons">post_add</i> New Post

          </Button> */}

        <DropdownItem
          tag={Link} to="add-new-post"
          className="nav-link-icon center"
        >
            <i className="material-icons">post_add</i> Add New Post
            </DropdownItem>
      </NavItem>
    );
  }
}
