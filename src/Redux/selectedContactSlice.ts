import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface ContactState {
  name?: string;
  id?: string;
  selectContact:
    | {
        id: string;
        name: string;
        DDD: string;
        number: string;
        email:string;
        group: string;
      }
    | [];
}

const initialState: ContactState = {
  selectContact: {
    id: uuidv4(),
    name: '',
    DDD: '',
    number: '',
    email: '',
    group: '',
  },
};

const selectContactSlice = createSlice({
  name: "selectContact",
  initialState,
  reducers: {
    setSelectedContact(state, action: PayloadAction<any>) {
      state.selectContact = action.payload;
    },
    removeSelected(state) {
      state.selectContact = [];
    },
  },
});

export const { setSelectedContact, removeSelected } =
  selectContactSlice.actions;

export default selectContactSlice.reducer;
