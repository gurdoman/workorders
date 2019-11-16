import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export default class WorkOrder extends Component {
  render() {
    const { companyName, email, image, name } = this.props.worker;
    let description = this.props.order.description,
    orderName = this.props.order.name,
    deadline = new Date(this.props.order.deadline * 1000);
    deadline = deadline.toLocaleString()
    return (
      <Col xs={12} sm={12} md={6} lg={4}>
        <Card className="deadline-card">
          <Card.Header>{orderName}</Card.Header>
          <Card.Body>{description}</Card.Body>
          <Row>
            <Col xs={5} md={5}>
              <Image src={image} roundedCircle className="worker-image"></Image>
            </Col>
            <Col xs={7} md={7}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{companyName}</Card.Text>
              <Card.Text>
                <small>{email}</small>
              </Card.Text>
            </Col>
          </Row>
          <Card.Footer>
            <small className="text-muted">{deadline}</small>
          </Card.Footer>
        </Card>
      </Col>
    )
  }
}
