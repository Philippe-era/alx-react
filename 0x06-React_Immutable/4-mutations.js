import { Map } from 'immutable';

export const map_names = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map_join = map_names.withMutations((values) => {
  values.set(2, 'Benjamin').set(4, 'Oliver');
});
