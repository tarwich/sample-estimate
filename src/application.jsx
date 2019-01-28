import React from "react";
import { render } from "react-dom";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import { parseEstimateData } from "./estimate-item";
import './styles.css';

const estimate = parseEstimateData(require('./estimate'));

const App = observer(class App extends React.Component {
  render() {
    return (
      <div className="Estimate">
        <div className="Estimate__Title">{estimate.title}</div>
        <div className="Estimate__Body">
          {estimate.children.map(child => this.renderEstimateItem(child))}
        </div>
      </div>
    );
  }

  renderEstimateItem(estimateItem) {
    return (
      <div className="EstimateItem" key={estimateItem.title}>
        <div className="EstimateItem__Title">{estimateItem.title}</div>
        <div className="EstimateItem__Checkbox">
          <input type="checkbox" checked={estimateItem.enabled} />
        </div>
        <div className="EstimateItem__Price">{estimateItem.hours}</div>
        <div className="EstimateItem__Description">{estimateItem.text}</div>
        <div className="EstimateItem__Children">
          {estimateItem.children.map(child => this.renderEstimateItem(child))}
        </div>
      </div>
    );
  }
});

decorate(App, {
  text: observable,
});

render(<App />, document.getElementById("root"));
