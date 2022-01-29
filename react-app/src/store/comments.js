import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createComment = createAsyncThunk(
    "comments/createComment",
    async (commentDetails, thunkAPI) => {
        const response = await fetch("/api/comments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentDetails),
        });
        const data = await response.json();
        if (response.ok && !data.errors) {
            return data;
        } else if (response.status < 500) {
            throw thunkAPI.rejectWithValue(data.errors);
        } else {
            throw thunkAPI.rejectWithValue(["An error occurred. Please try again."]);
        }
    }
);

const initialState = { entities: { songComments: {} } }

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.entities.songComments[action.payload.id] = action.payload;
        });
    },
});

export default commentsSlice.reducer
