import React from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { GiKiwiBird } from "react-icons/gi";

class App extends React.Component {
  state = {
    posts: [
      { chrpText: "post1", uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a") },
      { chrpText: "post2", uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a") },
      { chrpText: "post3", uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a") },
    ],
    text: "",
  };

  handleButtonClick = () => {
    if (!this.state.text) return;

    if (this.state.text.length > 44) {
      return;
    }
    let newPost = { chrpText: this.state.text, uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a") };

    this.setState({ posts: [...this.state.posts, newPost], text: "" });
  };

  render() {
    return (
      <div>
        <h1>Classest Chirpr</h1>
        <>
          <input maxLength={44} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
          <button onClick={this.handleButtonClick}>Make a new Post!</button>
        </>
        <div>
          {this.state.posts.map((post) => (
            <div key={post.uuid}>
              {post.chrpText}
              <div>
                <GiKiwiBird />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
