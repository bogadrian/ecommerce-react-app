import { createSelector } from 'reselect';

const selectData = state => state.shopData;

export const selectorShopData = createSelector(
  [selectData],
  shopData => shopData.collection
);

export const selectorArrayForPreviewMap = createSelector(
  [selectorShopData],
  collection =>
    collection ? Object.keys(collection).map(key => collection[key]) : []
);

export const selectorCollection = collectionParmUrl =>
  createSelector([selectorShopData], collection =>
    collection ? collection[collectionParmUrl] : null
  );

export const selectorIsFetching = createSelector(
  [selectData],
  shopData => shopData.isFetching
);

export const selectorIsFetchingTrue = createSelector(
  [selectData],
  shopData => !!shopData.collection
);
