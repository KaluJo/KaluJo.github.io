import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import '@fontsource-variable/outfit';

import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

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
        background: linear-gradient(${props => props.bgColor.rotation}deg, ${props => props.bgColor.color}, ${props => props.bgColor.altColor});
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
        brightness: 1.0,
        rotation: 180
    });

    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const [touchStart, setTouchStart] = useState(0);

    const handleTouchMove = useCallback((e) => {
        const touchMove = e.touches[0].clientY;
        const difference = touchStart - touchMove;

        const factor = 0.001;

        let newPercentage = percentageScrolled + difference * factor;
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        updateColor(newPercentage);
    }, [percentageScrolled, touchStart]);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleScroll = () => {
        let clientHeight = document.getElementById("screen-height").clientHeight - window.innerHeight;
        const coordinates = document.getElementById('top').getBoundingClientRect();

        let newPercentage = Math.min(1.0, -coordinates.top / clientHeight);
        setPercentageScrolled(newPercentage);
        console.log(newPercentage);
    };

    const updateColor = (percentage) => {
        let r = 30 + (10 - 30) * percentage;
        let g = 180 + (23 - 180) * percentage;
        let b = 300 + (52 - 300) * percentage;
        let brightness = 1 - percentage * 0.3;

        let r_alt = Math.min(255, r * 0.7);
        let g_alt = Math.min(255, g * 0.5);
        let b_alt = Math.min(255, b * 0.7);

        let deg = percentage * 180 + 180;

        setBgColor({
            color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
            altColor: `rgb(${Math.round(r_alt)}, ${Math.round(g_alt)}, ${Math.round(b_alt)})`,
            brightness: brightness,
            rotation: deg
        });
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchStart);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, [handleWheel, handleTouchMove, touchStart]);

    useEffect(() => {
        updateColor(percentageScrolled);
    }, [percentageScrolled]);

    return (
        <>
            <GlobalStyle bgColor={bgColor} />
            <Base id='screen-height'>
                <Content bgColor={bgColor.color}>
                    <SpotlightContent>
                        <div id="top" style={{ height: 0 }} />

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
                            <Route path="*" element={<Navigate to="/" replace />} />
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