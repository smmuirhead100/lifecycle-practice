import React from "react";


class Counter extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    /** allows you to transfer props to states */
    static getDerivedStateFromProps(props, state) {
        if(props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed            
            };
        }
        return null;
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.ignoreProp 
          && this.props.ignoreProp != nextProps.ignoreProp) {
          return false; 
        }
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
      }

      componentDidCatch(error, info) {
        console.log('Component Did Catch');
      }

    render() {

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div 
                    className="counter"> Counter: {this.state.counter}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
    }
}

export default Counter;