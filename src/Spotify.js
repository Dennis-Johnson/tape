import React from 'react'
import './Spotify.css'
import spotifyLogo from './spotifyIcon.png'

export default function Spotify() {
    return (
        <div className="spotify-wrapper">
            <a href="https://open.spotify.com/playlist/0DZd5IeXplyPhGbV7wFA4S" target="_blank" className="spotify-link">
                <span className="spotify-title">
                    <strong>Spotify</strong>
                    <img src={spotifyLogo} className="spotify-icon" alt="spotify-icon"></img>
                </span>
            </a>
        </div>
    )
}