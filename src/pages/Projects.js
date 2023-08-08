import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '../styles/BaseStyle';

const Projects = () => {

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

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;

        // Calculate the percentage scrolled
        const newPercentage = scrollTop / scrollHeight;

        updateColor(newPercentage);
    };

    const updateColor = (percentage) => {
        let r = 67 + (10 - 67) * percentage * 1;
        let g = 174 + (23 - 174) * percentage * 1;
        let b = 218 + (52 - 218) * percentage * 1;
        let brightness = 1 - percentage * 0.25; // Adjust the multiplier for the desired effect

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

        // You can adjust this factor for sensitivity
        const factor = 0.001;

        // Update percentageScrolled based on the swipe direction
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

    return (
        <div>
            <Base style={{ backgroundColor: bgColor.color }}>
                <Content bgColor={bgColor.color}>
                    <MainContent>
                        <Navbar>
                            <NavbarBackground bgColor={bgColor} />
                            <NavbarButtons>
                                <NavbarHome>
                                    <Link to="/" title="Link to the homepage">
                                        Home
                                    </Link>
                                </NavbarHome>
                                <NavbarLinks>
                                    <ul>
                                        <li>
                                            <Link to="/projects" title="Showcase of some of my projects">
                                                Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" title="Information to contact me">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </NavbarLinks>
                            </NavbarButtons>
                        </Navbar>
                        <Main>
                            <MainText>
                                Bap: Food Diary & Social App
                            </MainText>
                            <MainText>
                                Timeless Treasures
                            </MainText>
                            <MainText>
                                Conscripts
                            </MainText>
                            <MainText>
                                iparef (coming soon)
                            </MainText>
                            <MainText>
                                Conlangs (coming soon)
                            </MainText>
                        </Main>
                    </MainContent>
                    <Footer>
                        <FooterBackground bgColor={bgColor} />
                        <Copyright>
                            &copy; Bhada Yun
                        </Copyright>
                    </Footer>
                </Content>
            </Base>
        </div>
    );
};

export default Projects;