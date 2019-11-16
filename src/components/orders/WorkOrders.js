import React, { Component } from 'react'
import './WorkOrders.css';
import Api from '../Api/Api'
import WorkOrder from './WorkOrder';
import Alert from 'react-bootstrap/Alert'

export default class WorkOrders extends Component {

  constructor(props){
    super(props);

    this.state = {
      orders : [],
      filter : '',
      workers : []
    }
  }

  componentDidMount(){
    Api.get('work_orders')
      .then(res =>{
        console.log(res)
        let orders = res.data,
        workers = this.state.workers,
        workerIds = {}, 
        promises = [];
        orders.forEach(element => {
          if(workers[element.workerId] === undefined && workerIds[element.workerId] === undefined){
            promises.push(Api.get(`workers/${element.workerId}`))
            workerIds[element.workerId] = element.workerId;
          }
        });
        Promise.all(promises)
        .then(res =>{
          let workers = []
          res.forEach(worker =>{
            workers[worker.data.id] = worker.data;
          })
          this.setState({
            orders,
            workers
          })
        })
        .catch(err => {
          console.log(`There was a problem fetching the workers: ${err}`);
        })
      })
      .catch(err => {
        console.log(`There was a problem fetching the orders: ${err}`);
      })
  }


  render() {
    let orders = this.state.orders.sort((a,b) => { 
      if(this.props.order === 'EARLIEST') return a.deadline - b.deadline
      else return b.deadline - a.deadline
    })
    .filter(order => 
      this.state.workers[order.workerId].name.toUpperCase().includes(this.props.filter.toUpperCase())
    );

    return (
        orders.length > 0 ? 
          orders.map( order => 
          <WorkOrder 
            order={order}
            worker={this.state.workers[order.workerId]}
            key={order.id}
          />  )
        :
          <Alert variant="danger">
            No work order matches your search criteria, please try with another name
          </Alert>
    )
  }
}
