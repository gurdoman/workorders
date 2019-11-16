import React, { Component } from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './components/filter/Filter';
import WorkOrders from './components/orders/WorkOrders';


export default class App extends Component {

  constructor(){
    super();

    this.state = {
      filter : '',
      order : 'EARLIEST'
    }
  }

  filterByWorkerName = (filter) =>{
    this.setState({filter})
  }

  orderByDate = (order) => {
    this.setState({order})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Filter 
              filterByWorkerName={this.filterByWorkerName}
              orderByDate={this.orderByDate}
            />
          </Col>
        </Row>
        <Row>
          <WorkOrders 
            filter={this.state.filter}
            order={this.state.order}
          />
        </Row>
      </Container>
    )
  }
}

