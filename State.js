// State is similar to props,
// but it is private and fully controlled by the component

// Converting a function to a class:
// 1. Create an ES6 class, with the same name, that extends React.Component
// 2. Add a single empty method to it called render()
// 3. Move the body of the function into the render method
// 4. Replace props with this.props in the render() body
// 5. Delete the remaining empty function declaration

// Add a class constructor that assigns the initial this.state
// Class components should always call the base constructor with props
class Clock extends React.Component() {
  Constructor(props) {
    super(props);
      this.state = {date: new Date()};
    }
    // This method runs after the component output has rendered to the DOM
    // Place a timer here
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    // If Clock component is ever removed from the DOM
    // React will call the componentWillUnmount() lifecycle method
    // so that the timer
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    // Add a method called "tick" that the clock component will run every second
    // this.setState will schedule updates to the component local state
    // Now the clock will "tick" every second
    tick() {
      this.setState({
        date: new Date()
      });
    }

render() {
  return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// Do not modify state directly
// WRONG
this.state.comment = "Hello";

// RIGHT (assign this.state in the constructor)
this.setState({comment: 'Hello'});

// How to update the counter
this.setState(())
