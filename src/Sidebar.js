import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";

// import SidebarOption from "./SidebarOption";

function Sidebar(){
    const [{playlists}, dispatch] = useDataLayerValue();
    console.log(playlists);
    return (
        <div className = "sidebar">
            {/* <h1>I am the Sidebar</h1>  */}
            <img className = "sidebar_logo" src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "logo" />
            <SidebarOption Icon = {HomeIcon} title = "Home" />
            <SidebarOption Icon = {SearchIcon} title = "Search" />
            <SidebarOption Icon = {LibraryMusicIcon} title = "Your Library" />
            <br />
            <strong className = "sidebar_title">Playlists</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title = { playlist.name } />
            ))}
            <SidebarOption title = 'Hip hop' />
            <SidebarOption title = 'Rock' />
            <SidebarOption title = 'RnB' />

        </div>
    )
}

export default Sidebar;