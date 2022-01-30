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

export const editComment = createAsyncThunk(
    "comments/editComment",
    async (args, thunkAPI) => {
        const response = await fetch(`/api/comments/${args.commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: args.content })
        })
        const data = await response.json();
        if (response.ok && !data.errors) {
            return data;
        } else if (response.status < 500) {
            throw thunkAPI.rejectWithValue(data.errors);
        } else {
            throw thunkAPI.rejectWithValue(["An error occurred. Please try again."]);
        }
    }
)

export const deleteComment = createAsyncThunk(
    "comments/deleteComment",
    async (commentId, thunkAPI) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE"
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
)

export const getSongComments = createAsyncThunk(
    "comments/getSongComments",
    async (songId, thunkAPI) => {
        const response = await fetch(`/api/songs/${songId}/comments`);
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

const initialState = { entities: { songComments: null } }

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.entities.songComments[action.payload.id] = action.payload;
        });
        builder.addCase(getSongComments.fulfilled, (state, action) => {
            state.entities.songComments = action.payload
        });
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            delete state.entities.songComments[action.payload.commentId]
        });
        builder.addCase(editComment.fulfilled, (state, action) => {
            state.entities.songComments[action.payload.id] = action.payload
        });
    },
});

export default commentsSlice.reducer
