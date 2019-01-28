import React from "react";
import { render } from "react-dom";
import { decorate, observable } from "mobx";
import { observer } from "mobx-react";
import { parseEstimateData } from "./estimate-item";
import { formatMoney } from './formatMoney';
import './styles.css';
import { formatNumber } from "./formatNumber";

const estimate = parseEstimateData(require('./estimate'));

const App = observer(class App extends React.Component {
  showMoney = false;
  childrenNode = null;

  toggleItem = estimateItem => event => {
    estimateItem.enabled = !estimateItem.enabled;
  }

  render() {
    const price = this.showMoney ?
      formatMoney(estimate.hours * estimate.rate) :
      formatNumber(estimate.hours);

    return (
      <div className="Estimate">
        <div className="Estimate__Title">{estimate.title}</div>
        <div className="Estimate__Price" onClick={() => {this.showMoney = !this.showMoney}}>{price}</div>
        <div className="Estimate__Body">
          {estimate.children.map(child => this.renderEstimateItem(child))}
        </div>
      </div>
    );
  }

  renderEstimateItem(estimateItem) {
    const price = this.showMoney ?
      formatMoney(estimateItem.hours * estimate.rate) :
      formatNumber(estimateItem.hours);

    return (
      <div className="EstimateItem" key={estimateItem.title}>
        <div className="EstimateItem__Title" onClick={this.toggleItem(estimateItem)}>{estimateItem.title}</div>
        <div className="EstimateItem__Checkbox" onClick={this.toggleItem(estimateItem)}>
          <input type="checkbox" checked={estimateItem.enabled} />
          <span></span>
        </div>
        <div className="EstimateItem__Price" onClick={() => {this.showMoney = !this.showMoney}}>{price}</div>
        <div className="EstimateItem__Description">{estimateItem.text}</div>
        <div className="EstimateItem__Children" ref={node => this.childrenNode = node}>
          {estimateItem.children.map(child => this.renderEstimateItem(child))}
        </div>
      </div>
    );
  }
});

decorate(App, {
  showMoney: observable,
});

render(<App />, document.getElementById("root"));
