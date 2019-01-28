import { decorate, observable, computed } from 'mobx';

function createEstimateItem(key, data, parent) {
  const item = new EstimateItem({...data, title: key, parent});

  if (data.children) {
    item.children = Object.entries(data.children)
    .map(([key, child]) => createEstimateItem(key, child, item));
  }

  return item;
}

export function parseEstimateData(estimateData) {
  const key = Object.keys(estimateData)[0];
  return createEstimateItem(key, estimateData[key]);
}

export class EstimateItem {
  text = '';
  children = [];
  parent = null;
  enabled = true;
  _hours = 0;

  set hours(value) {
    this._house = Number(value) || 0;
  }

  get hours() {
    const sum = this.children
    .reduce((result, child) => result + child.hours, 0);
    return this.enabled ? sum || this._hours || 0 : 0;
    // return sum || (this.enabled ? this._hours : 0) || 0;
  }

  constructor(data) {
    Object.entries({
      ...data,
      _hours: Number(data.hours) || 0,
    })
    .forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

decorate(EstimateItem, {
  children: observable,
  enabled: observable,
  hours: computed,
});
