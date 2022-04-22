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

  randomColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
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
      <>
        <div>
          <h1 className="d-flex justify-content-center" style={{ color: "#FF69B4" }}>
            Classest Chirpr
          </h1>
          <div className="d-flex justify-content-center">
            <input className="form-control" maxLength={44} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
            <button className="btn" style={{ backgroundColor: this.randomColor(), color: this.randomColor() }} onClick={this.handleButtonClick}>
              Make a new Post!
            </button>
          </div>
          <div className="d-flex flex-row justify-content-center container">
            <div className="container d-flex flex-row flex-wrap m-1 p-1 justify-content-center">
              {this.state.posts.map((post) => (
                <div key={post.uuid} style={{ backgroundColor: this.randomColor(), color: this.randomColor() }} className="card  p-2 flex-row ">
                  {post.chrpText}
                  <div>
                    <GiKiwiBird />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer>
          <marquee style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>👀</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Ervin</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>Howell</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>is</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>watching</span>
            <span style={{ backgroundColor: this.randomColor(), color: this.randomColor() }}>👀</span>
          </marquee>
        </footer>
      </>
    );
  }
}

export default App;
