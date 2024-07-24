import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();

    // creating a state
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="my-10 text-center text-3xl font-bold">{name}</h1>
        <h3 className="text-3xl">{this.state.message}</h3>
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={() =>
              this.setState({
                counter: this.state.counter - 1,
                //component: (this.state.component = "Class component"),
              })
            }
            className="bold rounded-md bg-slate-200 px-5 pb-1 text-3xl"
          >
            -
          </button>
          <h2 className="bold text-3xl">{this.state.counter}</h2>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            className="bold rounded-md bg-slate-200 px-5 pb-1 text-3xl"
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default ClassComponent;
