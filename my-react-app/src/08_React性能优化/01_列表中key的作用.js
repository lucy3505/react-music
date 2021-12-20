import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["大话西游", "倚天屠龙"],
    };
  }
  render() {
    return (
      <div>
        <h2>电影列表：</h2>
        <ul id="m">
          {this.state.movies.map((movie) => {
            return <li>{movie}</li>;
          })}
        </ul>
        <button onClick={(e) => this.insertMovie()}>添加电影</button>
      </div>
    );
  }

  insertMovie() {
    this.setState({ movies: ["new movie", ...this.state.movies] });
  }
}
