import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/domine';
import '@fontsource/noto-sans';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import Coding from './pages/Coding';
import Art from './pages/Art';
import Random from './pages/Random';
import { createGlobalStyle } from 'styled-components';
import { Base, Content, Copyright, Footer, FooterBackground, MainContent, MainLink, Navbar, NavbarBackground, NavbarContent } from './styles/BaseStyle';
import { SpotlightContent } from './styles/SpotlightStyle';

import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(${props => props.bgColor.color}, ${props => props.bgColor.altColor});
        background-color: ${props => props.bgColor.color || 'rgb(30, 150, 235)'};
        height: 100%;
        overflow: auto;
    }
    html { 
        height: 100%;
        overflow: auto; 
    }
`;

const App = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        document.getElementById("top").scrollIntoView()
    }, [location]);

    const [bgColor, setBgColor] = useState({
        color: 'rgb(30, 150, 235)',
        altColor: 'rgb(24, 120, 235)',
        brightness: 1.0
    });

    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const [touchStart, setTouchStart] = useState(0);

    const navigate = useNavigate();

    const handleWheel = (e) => {
        const scrollDirection = e.deltaY;

        let newPercentage = percentageScrolled;
        if (scrollDirection > 0) {
            newPercentage += 0.05;
        } else if (scrollDirection < 0) {
            newPercentage -= 0.05;
        }
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        updateColor(newPercentage);
    };

    const updateColor = (percentage) => {
        let r = 30 + (10 - 30) * percentage * 1;
        let g = 150 + (23 - 150) * percentage * 1;
        let b = 235 + (52 - 235) * percentage * 1;
        let brightness = 1 - percentage * 0.25;

        let r_alt = Math.min(255, r * 0.8);
        let g_alt = Math.min(255, g * 0.8);
        let b_alt = Math.min(255, b * 1.0);

        setBgColor({
            color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
            altColor:  `rgb(${Math.round(r_alt)}, ${Math.round(g_alt)}, ${Math.round(b_alt)})`,
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
        window.addEventListener('wheel', handleWheel);

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleWheel);

            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [percentageScrolled, touchStart]);

    return (
        <>
            <GlobalStyle bgColor={bgColor} />
            <Base>
                <Content bgColor={bgColor.color}>
                    <SpotlightContent>
                        <div id="top" />

                        <MainContent>
                            <NavbarContent >
                                <Navbar>
                                    <NavbarBackground bgColor={bgColor} />
                                </Navbar>
                            </NavbarContent>
                        </MainContent>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/art" element={<Art />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/coding" element={<Coding />} />
                            <Route path="/random" element={<Random />} />
                        </Routes>

                        <Footer onClick={() => document.getElementById("top").scrollIntoView({ behavior: "smooth" })}>
                            <FooterBackground bgColor={bgColor} />
                        </Footer>

                        <Copyright>
                            &copy; ∞ Bhada Yun
                        </Copyright>

                    </SpotlightContent>

                </Content>
            </Base>
        </>
    );
};

export default App;