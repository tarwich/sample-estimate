import React from "react";
import { render } from "react-dom";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  @observable text = ""; // observable state
  render() {
    return (
      <div>
        Display: {this.text} <br />
        <input type="text" onChange={e => (this.text = e.target.value)} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
