import styled from 'styled-components';
import footerImage2 from '../images/babyblu.png';
import footerImage from '../images/babybluflipped.png';

export const MusicSpotlightContainer = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (min-width: 769px) {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    }
`;

export const PlaylistContainer = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PlaylistData = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PlaylistName = styled.p`
    font-size: max(1.75vw, 1.3rem);
    font-weight: 700;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;
    margin: 0;
`;

export const PlaylistDescription = styled.p`
    font-size: 1.2rem;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;
    margin-top: 0.5rem;
`;

export const SongContainer = styled.div`
    align-self: flex-start;
    display: flex;
    width: 100%;
    flex-direction: row;
`;

export const SongData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
`;

export const SongTitle = styled.a`
    font-size: 13px;
    font-weight: 500;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;
    margin-top: -1.5px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SongSinger = styled.a`
    font-size: 12px;
    font-weight: 400;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SongAlbum = styled.a`
    font-size: 12px;
    font-weight: 400;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PlaylistCoverImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 2px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 1.2rem;
`;

export const MusicSpotlightImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 1px;
`;

export const MusicSpotlightImageOverlay = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 1px;

    position: relative;
    right: 50px;

    z-index: 10;

    background-color: rgba(0, 0, 0, 0.25); 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SpotlightDescription = styled.p`
    margin: 0px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    vertical-align: middle;
    font-weight: 400;
    text-shadow: 0 0 4px rgb(100, 100, 100);
    a {
        color: white
    }
    width: 80%;
`;

export const SpotlightStack = styled.p`
    margin: 0px;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    vertical-align: middle;
    font-weight: 400;
    text-shadow: 0 0 4px rgb(100, 100, 100);
    a {
        color: white
    }
    width: 80%;
`;
