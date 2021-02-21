// State allows React Components to change their output
// over time in response to user actions, network responses,
// and anything else without modifying it's props
// Ticking clock example
function tick() {
  const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(element, document.getElementByID('root'));
}

// Callback function to call the tick function every 1 second
// Every second, the tick function calls ReactDOM.render on the
// HTML in the element variable
setInterval(tick, 1000)

// Encapsulating the clock Component and making it reusable
function Clock(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
