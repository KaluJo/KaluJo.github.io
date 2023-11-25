import React, { useState } from 'react';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import PlaylistSpotlight from '../components/PlaylistSpotlight';
import NavSection from '../components/NavSection';

import { musicData } from '../components/MusicData';

const Music = () => {
    const [currentClip, setCurrentClip] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    currentClip.volume = 0.3;

    return (
        <>
            <MainContent>
                <Main>
                    <MainText>
                        welcome to my music section.
                    </MainText>
                    <MainText>
                        i create monthly music playlists based on music i discovered or had on repeat that month.
                    </MainText>
                    <MainText>
                        my go-to genres are synthpop, indie pop, and alternative rock.
                    </MainText>
                    <MainText>
                        to me, the best songs have good outros, so i don't mind long and boring intros.
                    </MainText>
                    <MainText>
                        if you have any recs, let me know! i actually do listen to all recs i get.
                    </MainText>
                    <MainText>
                        for my favorites or most played of each month, i put a star emoji beside the title ⭐
                    </MainText>
                </Main>
            </MainContent>

            {
                musicData.map((playlist, index) => (
                    <PlaylistSpotlight
                        playlistData={playlist}
                        currentClip={currentClip}
                        setCurrentClip={setCurrentClip}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                ))
            }

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        Am I more awake or asleep when I listen to music?
                    </MainText>
                </Main>
            </MainContent>

        </>
    );
};

export default Music;

