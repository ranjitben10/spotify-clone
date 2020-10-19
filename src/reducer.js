export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  spotify: null,
  // token: "BQA49MUhtoMwRSRGAVVXpvFKpKy1zkvwBxUFDLCAEVJgtVrQphnLFyh1sYM7uN22LShBBgosL84ZrzTwCOUJyYXExX2tGRY_g57TCxSCnlQdVZSW2meGd4FLKQhDq7AYvr-3l5quVhn4YDtr3Q1dGU2XNf-fKj3gqJEL5d7Irk_k-7EyP0xS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
