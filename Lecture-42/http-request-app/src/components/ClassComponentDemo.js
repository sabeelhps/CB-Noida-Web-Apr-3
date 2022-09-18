import React, { Component } from 'react'

class ClassComponentDemo extends Component {

    constructor() {
        super();
        console.log('inside constructor');
        this.state = {
            count:0
        }
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    incrementCountHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }
  
    render() {
        console.log('Inside Render.....')
        return (
            <div>
                ClassComponentDemo
                <button onClick={this.incrementCountHandler}>Increment { this.state.count }</button>
            </div>
        )
  }
}

export default ClassComponentDemo;
