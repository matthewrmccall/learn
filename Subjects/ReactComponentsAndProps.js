// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h>;
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h>;
}
// App Component
function App() {
  return (
    <div>
      <Welcome name="Ashley" />
      <Welcome name="Dash" />
      <Welcome name="Matt"/>
    </div>
  );
}

ReactDOM.render()
<App />,
document.getElementById('root')
);
