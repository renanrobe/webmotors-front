import { Request } from '../services';

export const getMake = () => {
  return Request('/Make')
  .then(result => {
    return result
  })
  .catch(error => console.log(error));
};

export const getModel = (MakeID) => {
  return Request('/Model', { MakeID: MakeID })
  .then(result => {
    return result
  })
  .catch(error => console.log(error));
};

export const getVersion = (ModelID) => {
  return Request('/Version', { ModelID: ModelID })
  .then(result => {
    return result
  })
  .catch(error => console.log(error));
};