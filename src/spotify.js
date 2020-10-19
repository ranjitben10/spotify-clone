export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientID = "d30b20f4628d4c6dbc7dcc40037ee5f9";
// const clientID = "d30b20f4628d4c6dbc7dcc40037ee5f9";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenUrl = ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;