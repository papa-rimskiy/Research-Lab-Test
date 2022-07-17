import { CREATE_ENTRY } from "./types"

const initialState = {
  isAuth: false
}

export const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return {...state, isAuth: action.payload}
  }
  return state  
}