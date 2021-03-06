import React from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import Rating from "react-rating";
import { loadRating, rate } from "../../../../actions/game";

class Ratings extends React.Component {
  componentWillMount() {
    const { game } = this.props;
    this.props.loadRating(game);
  }

  onStarClick = nextValue => {
    const { game } = this.props;
    this.props.rate(game, nextValue);
  };

  render() {
    const { rating, loadingRating } = this.props;
    if (!loadingRating) {
      return (
        <Rating
          className="stars"
          emptySymbol={<Icon className="half-star" name="star" />}
          fullSymbol={[<Icon color="yellow" name="star" />]}
          onChange={this.onStarClick}
          initialRating={rating}
          stop={10}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  rating: state.game.rating,
  loadRating: state.game.loadingRating
});

export default connect(
  mapStateToProps,
  { loadRating, rate }
)(Ratings);
