import React, { useEffect, useState, useLayoutEffect } from 'react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/domine';
import '@fontsource/noto-sans';

import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import Coding from './pages/Coding';
import Art from './pages/Art';
import Random from './pages/Random';
import Last from './pages/Last';
import First from './pages/First';

import { createGlobalStyle } from 'styled-components';
import { Base, Content, Copyright, Footer, FooterBackground, MainContent, Navbar, NavbarBackground, NavbarContent } from './styles/BaseStyle';
import { SpotlightContent } from './styles/SpotlightStyle';

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(${props => props.bgColor.color}, ${props => props.bgColor.altColor});
        background-color: ${props => props.bgColor.color || 'rgb(30, 180, 300)'};
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
        color: 'rgb(30, 180, 300)',
        altColor: 'rgb(21, 90, 210)',
        brightness: 1.0
    });

    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const [touchStart, setTouchStart] = useState(0);

    const handleWheel = (e) => {
        const scrollDirection = e.deltaY;

        let newPercentage = percentageScrolled;
        if (scrollDirection > 0) {
            newPercentage += 0.03;
        } else if (scrollDirection < 0) {
            newPercentage -= 0.03;
        }
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        updateColor(newPercentage);
    };

    const updateColor = (percentage) => {
        let r = 30 + (10 - 30) * percentage * 1;
        let g = 180 + (23 - 180) * percentage * 1;
        let b = 300 + (52 - 300) * percentage * 1;
        let brightness = 1 - percentage * 0.3;

        let r_alt = Math.min(255, r * 0.7);
        let g_alt = Math.min(255, g * 0.5);
        let b_alt = Math.min(255, b * 0.7);

        setBgColor({
            color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
            altColor: `rgb(${Math.round(r_alt)}, ${Math.round(g_alt)}, ${Math.round(b_alt)})`,
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
                            <NavbarContent>
                                <Navbar onClick={() => document.getElementById("bottom").scrollIntoView({ behavior: "smooth" })}>
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
                            <Route path="/last" element={<Last />} />
                            <Route path="/first" element={<First />} />
                        </Routes>

                        <Footer onClick={() => document.getElementById("top").scrollIntoView({ behavior: "smooth" })}>
                            <FooterBackground bgColor={bgColor} />
                        </Footer>

                        <Copyright>
                            &copy; ∞ Bhada Yun
                        </Copyright>

                        <div id="bottom" />
                    </SpotlightContent>

                </Content>
            </Base>
        </>
    );
};

export default App;