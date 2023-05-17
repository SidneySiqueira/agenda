import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactState } from "./selectedContactSlice";

interface Api {
  contacts: ContactState[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface Props {
  item: string;
  patchData: ContactState;
}

const initialState: Api = {
  contacts: [],
  status: "idle",
  error: null,
};

const url = "https://agenda-bf681-default-rtdb.firebaseio.com/";

export const fetchApi = createAsyncThunk("api/fetch", async () => {
  const response = await axios.get(`${url}/numbers.json`);
  return response.data;
});

export const AddApi = createAsyncThunk(
  "api/post",
  async (postData: ContactState) => {
    const response = await axios.post(`${url}/numbers.json`, postData);
    return response.data;
  }
);

export const updateApi = createAsyncThunk(
  "api/update",
  async ({ item, patchData }: Props, {}) => {
    const response = await axios.patch(
      `${url}/numbers/${item}.json`,
      patchData
    );
    return response.data;
  }
);

export const deleteApi = createAsyncThunk(
  "api/delete",
  async (itemId: string) => {
    await axios.delete(`${url}/numbers/${itemId}.json`);
    return itemId;
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Algo deu errado.";
      })
      .addCase(AddApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(AddApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Algo deu errado.";
      })
      .addCase(updateApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = Object.values(action.payload);
        const index = state.contacts.findIndex(
          (contact) => (contact as ContactState).id === action.payload.id
        );
        state.contacts[index] = action.payload;
      })
      .addCase(updateApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Algo deu errado.";
      })
      .addCase(deleteApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        const contactsArray = Object.values(action.payload);
        if (Array.isArray(state.contacts)) {
          state.contacts = state.contacts.filter((contact) => {
            return !contactsArray.some(
              (deletedContacts) =>
                (deletedContacts as unknown as ContactState).id === contact.id
            );
          });
        }
      })
      .addCase(deleteApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Algo deu errado.";
      });
  },
});

export default apiSlice.reducer;
