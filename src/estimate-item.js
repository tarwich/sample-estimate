function createEstimateItem(key, data, parent) {
  const item = new EstimateItem({...data, title: key, parent});
  console.log(key);
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

  constructor(data) {
    Object.assign(this, {
      ...data,
      hours: Number(data.hours) || 0,
    });
  }
}
