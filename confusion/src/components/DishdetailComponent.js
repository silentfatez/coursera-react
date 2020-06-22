import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(selected) {
    let options = { year: "numeric", month: "short", day: "numeric" };

    if (selected != null) {
      const comm = selected.comments.map((customer) => {
        return (
          <ul key={customer.id} className="list-unstyled">
            <li>{customer.comment}</li>
            <li>
              -- {customer.author} ,{" "}
              {new Date(customer.date).toLocaleDateString("en-US", options)}
            </li>
          </ul>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {comm}
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
