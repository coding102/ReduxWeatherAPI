import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
     switch (action.type) {
          case FETCH_WEATHER:
               // concat creates a new array while still containing old material
               // we don't want to mutate state aka push method
               // return state.concat([action.payload.data]); =
               return [ action.payload.data, ...state ];
     }
     return state;
}