import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            className="detail__image"
            src={location.state.large_image}
            alt={location.state.title}
            title={location.state.title}
          />
          <div>
            <h1 className="detail__title">
              {location.state.title}({location.state.year})
            </h1>
            <h4 className="detail__genre">
              장르:{location.state.genres.join("/")}
            </h4>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
