'use client'

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handlePlayerButton = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: '700',
        height: '600'
    }

    const Player = () => {
        return (
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <button onClick={handlePlayerButton} className="bg-color-primary float-right mb-1 text-color-dark px-4 rounded-md">x</button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.playVideo} opts={option} />
            </div>
        )
    }

    const PlayerButton = () => {
        return (
            <div className="mt-8">
                <button onClick={handlePlayerButton} className="text-color-dark bg-color-accent px-6 py-2 rounded-md">Tonton Trailer</button>
            </div>
        )
    }
    return isOpen ? <Player /> : <PlayerButton />
}

export default VideoPlayer