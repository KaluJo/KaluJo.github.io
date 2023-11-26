import React, { useState } from 'react';

import { MusicSpotlightContainer, MusicSpotlightContent, MusicSpotlightImage, MusicSpotlightImageOverlay, PlaylistContainer, PlaylistCoverImage, PlaylistData, PlaylistDescription, PlaylistName, SongAlbum, SongContainer, SongData, SongSinger, SongTitle } from '../styles/MusicStyle';
import { FaPlay, FaPause } from 'react-icons/fa';

const TrackDetail = ({ track, onPlay, isPlaying, isMobile }) => {
    const [isTouched, setIsTouched] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const OverlayIcon = isPlaying ? FaPause : FaPlay;

    const handleTouch = () => {
        if (track.song_clip) {
            setIsTouched(!isTouched);
            onPlay(track.song_clip);
        }
    };

    const showOverlay = (track.song_clip && (isMobile ? isTouched : isHovered)) || isPlaying;

    const handleOnPressOrClick = () => {
        if (isMobile) {
            setIsHovered(!isHovered);
        }
        onPlay(track.song_clip);
    };

    return (
        <SongContainer
            style={{ marginBottom: 10 }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={() => handleOnPressOrClick()}
        >
            <MusicSpotlightImage src={track.song_cover_image} alt={`Cover of ${track.song_title}`} />
            {showOverlay && (
                <MusicSpotlightImageOverlay>
                    <OverlayIcon size={14} color="white" />
                </MusicSpotlightImageOverlay>
            )}
            <SongData style={{ paddingLeft: 10, marginLeft: showOverlay ? -50 : 0 }}>
                <SongTitle>{track.song_title}</SongTitle>
                <SongSinger>{track.artist}</SongSinger>
                <SongAlbum>{track.album}</SongAlbum>
                {/* {track.song_clip && isHovered && (
                    <div onClick={() => onPlay(track.song_clip)} style={{ cursor: 'pointer' }}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </div>
                )} */}
            </SongData>
        </SongContainer>
    );
};

const PlaylistSpotlight = ({ playlistData, currentClip, setCurrentClip, isPlaying, setIsPlaying }) => {
    const dynamicMinHeight = Math.max(200, (playlistData.tracks.length / 5) * 25);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    const handlePlay = (clipUrl) => {
        if (currentClip.src === clipUrl && isPlaying) {
            currentClip.pause();
            setIsPlaying(false);
        } else {
            currentClip.pause();
            const newClip = new Audio(clipUrl);
            newClip.volume = 0.3;
            setCurrentClip(newClip);
            newClip.play();
            setIsPlaying(true);
            newClip.onended = () => setIsPlaying(false);
        }
    };

    return (
        <MusicSpotlightContainer style={{ minHeight: dynamicMinHeight + "vw", paddingLeft: "12vw", paddingRight: "12vw" }}>
            <PlaylistContainer>
                {playlistData.cover_image && <PlaylistCoverImage src={playlistData.cover_image} alt={`Cover of ${playlistData.name}`} />}
                <PlaylistData style={{ paddingLeft: 20 }}>
                    <PlaylistName>{playlistData.name}</PlaylistName>
                    <PlaylistDescription>{playlistData.description}</PlaylistDescription>
                </PlaylistData>
            </PlaylistContainer>
            {playlistData.tracks.map((track, index) => (
                <TrackDetail key={index} track={track} onPlay={handlePlay} isPlaying={currentClip.src === track.song_clip && isPlaying} isMobile={isMobile} />
            ))}
        </MusicSpotlightContainer>
    );
};

export default PlaylistSpotlight;