import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
    Base,
    Content,
    Navbar,
    NavbarHome,
    ToggleButton,
    NavbarLinks,
    Main,
    MainContent,
    MainText,
    Footer,
    Copyright,
    NavbarBackground,
    NavbarButtons,
    FooterBackground,
    NavbarContent,
} from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import { SpotlightContent, SpotlightDescription } from '../styles/SpotlightStyle';
import { musicData } from '../components/MusicData';
import PlaylistSpotlight from '../components/PlaylistSpotlight';
import { MusicSpotlightContent } from '../styles/MusicStyle';

const colors = [
    { name: "cerulean", id: "#00b3f4" },
    { name: "vermillion", id: "#E34234" },
    { name: "chartreuse", id: "#7FFF00" },
    { name: "forest green", id: "#228B22" },
    { name: "magenta", id: "#FF00FF" },
    { name: "periwinkle", id: "#CCCCFF" }
];

const HomePage = () => {
    const [bgColor, setBgColor] = useState({
        color: 'rgb(67, 174, 218)',
        brightness: 1
    });

    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const [touchStart, setTouchStart] = useState(0);

    const handleWheel = (e) => {
        const scrollDirection = e.deltaY;

        let newPercentage = percentageScrolled;
        if (scrollDirection > 0) {
            newPercentage += 0.05; // Scroll down
        } else if (scrollDirection < 0) {
            newPercentage -= 0.05; // Scroll up
        }
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        updateColor(newPercentage);
    };

    const updateColor = (percentage) => {
        let r = 67 + (10 - 67) * percentage * 1;
        let g = 174 + (23 - 174) * percentage * 1;
        let b = 218 + (52 - 218) * percentage * 1;
        let brightness = 1 - percentage * 0.25;

        setBgColor({
            color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
            brightness: brightness
        });
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const touchMove = e.touches[0].clientY;
        const difference = touchStart - touchMove;

        const factor = 0.001;

        let newPercentage = percentageScrolled + difference * factor;
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        updateColor(newPercentage);
    };

    useEffect(() => {
        // For desktop
        window.addEventListener('wheel', handleWheel);

        // For mobile devices
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleWheel);

            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [percentageScrolled, touchStart]);

    const [currentClip, setCurrentClip] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Base style={{ backgroundColor: bgColor.color }}>
            <Content bgColor={bgColor.color}>
                <MusicSpotlightContent>

                    <MainContent>
                        <NavbarContent>
                            <Navbar>
                                <NavbarBackground bgColor={bgColor} />
                            </Navbar>
                        </NavbarContent>

                        <Main>
                            <MainText>
                                Oh, welcome to my *secret* music section!
                            </MainText>
                            <MainText>
                                I create monthly music playlists based on music I discovered or had on repeat that month. I add them here at the end of each month. It's mostly for my own reference, but I hope you find something you like too!
                            </MainText>
                            <MainText>
                                I always try to sample and learn new music styles and perspectives, but my go-to genres are synthpop, indie pop, and alternative rock. I'm a headphone listener, so a lot of these songs quite literally only sound good with noise cancelling headphones and bass boost on. For me, the best songs have good outros, and I'm a patient listener so I don't mind long and boring intros.
                            </MainText>
                            <MainText>
                                If you have any recs, let me know! I actually DO listen to all recs I get.
                            </MainText>
                            <MainText>
                                The order in which songs for each playlist is listed is simply the order in which I added / discovered them. If it's listed in any of my playlists below, I liked it enough to memorialize it forever. Some of the songs have 30-second samples, grace à Spotify, so feel free to sample them!
                            </MainText>
                            <MainText>
                                For my favorites / most played of each month, I put a star emoji beside the title.
                            </MainText>
                        </Main>
                    </MainContent>

                    { musicData.map((playlist, index) => (
                    <PlaylistSpotlight
                        playlistData={playlist}
                        currentClip={currentClip}
                        setCurrentClip={setCurrentClip}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                    ))}

                    <Footer>
                        <FooterBackground bgColor={bgColor} />
                    </Footer>

                    <Copyright>
                        &copy; ∞ Bhada Yun
                    </Copyright>
                </MusicSpotlightContent>

            </Content>
        </Base >
    );
};

export default HomePage;

