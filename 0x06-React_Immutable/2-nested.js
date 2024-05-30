import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const objmap = fromJS(object);

  return objmap.getIn(array, undefined);
}
