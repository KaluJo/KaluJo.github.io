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
    DoNotClickThisButton,
    MainLink,
} from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import { SpotlightContent, SpotlightDescription } from '../styles/SpotlightStyle';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

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

    const [favoriteColor, setFavoriteColor] = useState(colors[0]);
    const [hoverColor, setHoverColor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            setFavoriteColor(colors[randomIndex]);
        };

        const intervalId = setInterval(changeColor, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Base style={{ backgroundColor: bgColor.color }}>
            <Content bgColor={bgColor.color}>
                <SpotlightContent>

                    <MainContent>
                        <NavbarContent>
                            <Navbar>
                                <NavbarBackground bgColor={bgColor} />
                            </Navbar>
                        </NavbarContent>

                        <Main>
                            <MainText>
                                Hi, I'm Bhada Yun, welcome to my site.
                            </MainText>
                            <MainText>
                                My favorite phoneme is the voiced postalveolar fricative /ʒ/, favorite color is <span style={{ color: hoverColor ? favoriteColor.id : 'inherit' }} onMouseEnter={() => setHoverColor(true)} onMouseLeave={() => setHoverColor(false)}>{favoriteColor.name}</span>, and my favorite fruit is probably mango (my condolences if you are allergic).
                            </MainText>
                            <MainText>
                                My research interests lie at the intersection of Human-Computer Interaction (HCI), Artificial Intelligence (AI), and andragogy. I firmly believe in the power of communication and am convinced that given context, compassion, and courage, we can come to understand anyone, and any "other".</MainText>
                            <MainText>
                                Currently a Junior at UC Berkeley pursuing a double major in Computer Science & Linguistics.
                            </MainText>
                            <MainText>
                                This is where you can find my creative dumps. I post art, thoughts, and whatnot, I hope you find something interesting!
                            </MainText>
                        </Main>
                    </MainContent>

                    <MainContent>
                        <Main>
                            <MainLink onClick={() => navigate("/art")}>
                                Click to see my art
                            </MainLink>
                            <MainLink onClick={() => navigate("/coding")}>
                                Click to see my coding projects
                            </MainLink>
                            <MainLink onClick={() => navigate("/music")}>
                                Click to see my playlists
                            </MainLink>
                            <MainLink onClick={() => navigate("/random")}>
                                Click to see literally anything else
                            </MainLink>
                        </Main>
                    </MainContent>

                    <Footer>
                        <FooterBackground bgColor={bgColor} />
                    </Footer>

                    <Copyright>
                        &copy; ∞ Bhada Yun
                    </Copyright>

                    {/* <DoNotClickThisButton onClick={() => navigate("/music")}>
                        <p style={{ color: 'rgb(98, 124, 141)' }}>
                            music (do not click)
                        </p>
                    </DoNotClickThisButton> */}
                </SpotlightContent>

            </Content>
        </Base >
    );
};

export default HomePage;

// <MainText>
// Retreev
// </MainText>
// <MainText>
// Conscripts
// </MainText>
// <MainText>
// iparef (coming soon)
// </MainText>
// <MainText>
// Conlangs (coming soon)
// </MainText>
// <MainText>
// + school projects
// </MainText>