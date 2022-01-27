import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getNewSongs = createAsyncThunk(
    "songs/getNewSongs",
    async(_args, thunkAPI) => {
        const response = await fetch("/api/songs/new");
        const data = await response.json();
        if (response.ok) {
            return data;
        } else if (response.status < 500) {
            throw thunkAPI.rejectWithValue(data.errors);
        } else {
            throw thunkAPI.rejectWithValue(["An error occurred. Please try again."]);
        }
    }
)

export const getASong = createAsyncThunk(
    "songs/getASong",
    async (songId, thunkAPI) => {
        const response = await fetch(`/api/songs/${songId}`)
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

export const editSong = createAsyncThunk(
    "songs/editSong",
    async (songDetails, thunkAPI) => {
        const response = await fetch(`/api/songs/${songDetails.songId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songDetails)
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

export const createSong = createAsyncThunk(
    "songs/createSong",
    async (songDetails, thunkAPI) => {
        const response = await fetch("/api/songs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songDetails),
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

export const deleteSong = createAsyncThunk(
    "songs/deleteSong",
    async (songId, thunkAPI) => {
        const response = await fetch(`/api/songs/${songId}`, {
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

const initialState = { entities: { songs: {}, song: null, new: null } }

const songsSlice = createSlice({
    name: "songs",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createSong.fulfilled, (state, action) => {
            state.entities.songs[action.payload.id] = action.payload;
            state.entities.new.unshift(action.payload)
            if (state.entities.new.length > 12) {
                state.entities.new.splice(state.entities.new.length - 1, 1)
            }
        });
        builder.addCase(editSong.fulfilled, (state, action) => {
            state.entities.song = action.payload
        })
        builder.addCase(deleteSong.fulfilled, (state, action) => {
            delete state.entities.songs[action.payload.songId]
        })
        builder.addCase(getNewSongs.fulfilled, (state, action) => {
            state.entities.new = action.payload["new"]
        })
        builder.addCase(getASong.fulfilled, (state, action) => {
            state.entities.song = action.payload
        })
    },
});

export default songsSlice.reducer
