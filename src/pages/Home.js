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
                                Hi, I'm Bhada Yun, welcome to my site.
                            </MainText>
                            <MainText>
                                My favorite phoneme is the voiced postalveolar fricative /ʒ/, favorite pokemon is Honchcrow, and my favorite fruit is probably mango (my condolences if you are allergic).
                            </MainText>
                            <MainText>
                                My research interests lie at the intersection of Human-Computer Interaction (HCI), Artificial Intelligence (AI), Natural Language Processing (NLP), and pedagogy. I firmly believe in the power of communication and am convinced that with context, compassion, and courage, we can come to understand anyone, and any "other".</MainText>
                            <MainText>
                                Currently a Junior at UC Berkeley majoring in Electrical Engineering & Computer Science and minoring in Linguistics.
                            </MainText>
                            <MainText>
                                My latest project is Bap, a social food diary designed to unite food enthusiasts, explore diverse culinary cultures, and inspire shared experiences and connections across the globe. It's in its early stages still, but I'm excited by the potential it holds to reshape our engagement with food, technology, and community. You can check it out <a href="https://apps.apple.com/us/app/bap-social-food-diary/id6450421562">here</a>.
                            </MainText>
                            <MainText>
                                This is where you can find my creative dumps. I post art, thoughts, and whatnot, I hope you find something interesting!
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

export default HomePage;