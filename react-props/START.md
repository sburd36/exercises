# Introduction to React: Components, Properties, and JSX

We will use this folder to create a new React application and learn the basics of how React works. We will create a couple of components that render properties passed into them using React's JSX syntax. Let's break that down a bit:

**Component**: React is a framework for building complex user interfaces (UIs) out of [reusable components](https://reactjs.org/docs/components-and-props.html). Each piece of your UI is modeled as a reusable component that is then implemented as a JavaScript `class`. Those could be very simple UI elements, or more complex UI element structures. For example, a single nicely-styled `Button` might be a component that renders a single HTML `<button>` element, but a `Card` might be another component that renders a more complicated sub-tree of styled HTML elements. By defining the pieces of our UI as reusable components, we can more easily combine them together to create complex yet reliable UIs.

**Properties**: Reusable components typically need a bit of configuration. For example, a `Button` component needs to know what caption to show on the button face. It might also allow user to specify a particular background color, or size. These configuration details are passed into a React component's constructor as a JavaScript object known as the component's [properties](https://reactjs.org/docs/components-and-props.html). The property names are the keys of the object, and the property values are the associated values.

**JSX**: All React components must have a `render()` method, which is responsible for returning a new set of HTML elements that will be added to the page. In the past, we've had to use `document.createElement()` and lots of other DOM properties/methods, but this can get quite tedious when building more complicated components that have to render a lot of elements. So React defined a new syntax that allows us to return what looks like HTML directly from a JavaScript function. This syntax is known as [JavaScript Expressions (JSX)](https://reactjs.org/docs/introducing-jsx.html). The syntax looks like this:

```jsx
class Button {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className="btn btn-primary">{this.props.caption}</button>
		);
	}
}
```

We will dig into this syntax while we build the demo for today.

## Creating a new React Application

In your terminal, ensure that you are inside this `react-props` directory, and then execute the following command to create a new React application. **Note that the command is `npx`, not `npm`**:

```bash
npx create-react-app .
```

The `npx` command will automatically download the `create-react-app` tool, run it, and finally remove it from your system. This ensures that you always run the most recent version of that tool. Since you run this tool only when creating a new React application, you won't need to run it very often, so this `npx` command is a handy way to download and run the most up-to-date version of the tool.

If you really want to install the tool on your machine, you can do so using this command:

```bash
# not recommended
npm install -g create-react-app
```

To uninstall the tool, use this command:

```bash
npm uninstall -g create-react-app
```

