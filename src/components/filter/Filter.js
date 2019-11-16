import React, { Component } from 'react'
import './Filter.css';
import Form from 'react-bootstrap/Form'

export default class Filter extends Component {

  state = {
    filter : '',
    order : 'EARLIEST'
  }
  
  onFilterChange = (e) => {
    this.setState({filter: e.target.value})
    this.props.filterByWorkerName(e.target.value);
  }

  onOrderChange = (e) => {
    let order = e.target.checked ? 'LATEST' : 'EARLIEST'
    this.setState({order})
    this.props.orderByDate(order);
  }
  
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Control 
            type="text" 
            name="filter"
            placeholder="Filter by worker name..." 
            onChange={this.onFilterChange}
            value={this.state.filter}
            id="name-input"
          />
        </Form.Row>
        <Form.Row className="toggle">
          <Form.Label className="toggle_label">Earliest first</Form.Label>
          <Form.Switch
            id="deadline-input"
            onChange={this.onOrderChange}
            label="Latest first"
          />
        </Form.Row>
      </Form>
    )
  }
}
