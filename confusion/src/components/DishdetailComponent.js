import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  let options = { year: "numeric", month: "short", day: "numeric" };
  if (comments != null) {
    const comm = comments.map((customer) => {
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
const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
