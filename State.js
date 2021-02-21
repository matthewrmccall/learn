// State is similar to props,
// but it is private and fully controlled by the component

// Converting a function to a class:
// 1. Create an ES6 class, with the same name, that extends React.Component
// 2. Add a single empty method to it called render()
// 3. Move the body of the function into the render method
// 4. Replace props with this.props in the render() body
// 5. Delete the remaining empty function declaration
