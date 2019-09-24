import React from 'react'
import './Apple.css'
import appleIcon from './appleIconWhite.svg'

export default function Apple() {
    return (
        <div className="apple-music-wrapper">
        <a href="https://music.apple.com/in/playlist/chapter-005-its-out-there/pl.u-XkD04Mpf2NYDXV7" target="_blank" className="apple-link">

        <span className="apple-title"><strong>Apple Music </strong></span>
        <img src={appleIcon} alt="apple-music-icon" className="apple-icon"></img>
        </a>
        </div>
    )
}
