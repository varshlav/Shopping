// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../environments/environment';
//
// export interface State {
//
// }
//
// export const reducers: ActionReducerMap<State> = {
//
// };
//
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
//
//
//
//
//
//
// import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
// import { ShoppingItem } from '../models/shopping-item.model';
//
// const initialState: Array<ShoppingItem> = [
//   {
//     id: "1775935f-36fd-467e-a667-09f95b917f6d",
//     name: 'Diet Coke',
//   }
// ];
//
// export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
//   switch (action.type) {
//     case ShoppingActionTypes.ADD_ITEM:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }
