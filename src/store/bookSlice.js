import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("http://localhost:3009/books");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (bookData, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;

    try {
      bookData.auther = getState().auth.name;
      const res = await fetch("http://localhost:3009/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      await fetch(`http://localhost:3009/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    // get books
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert book
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete book
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((item) => (item.id !== action.payload.id));
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
