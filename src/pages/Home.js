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

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const touchEnd = e.changedTouches[0].clientY;
        const scrollDirection = touchEnd - touchStart;
        updateScrolling(-scrollDirection);
    };

    const handleWheel = (e) => {
        const scrollDirection = e.deltaY;
        updateScrolling(scrollDirection);
    };

    const updateScrolling = (scrollDirection) => {
        // Modify percentageScrolled based on the scroll direction
        let newPercentage = percentageScrolled;
        if (scrollDirection > 0) {
            newPercentage += 0.01; // Scroll down
        } else if (scrollDirection < 0) {
            newPercentage -= 0.05; // Scroll up
        }
        newPercentage = Math.max(0, Math.min(1, newPercentage));
        setPercentageScrolled(newPercentage);

        let r = 67 + (10 - 67) * newPercentage * 1;
        let g = 174 + (23 - 174) * newPercentage * 1;
        let b = 218 + (52 - 218) * newPercentage * 1;
        let brightness = 1 - newPercentage * 0.1; // Adjust the multiplier for the desired effect

        setBgColor({
            color: `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`,
            brightness: brightness
        });
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
    }, [percentageScrolled]);

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
                                        Bhada
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
                                My latest project is Bap, a food diary & social app designed to unite food enthusiasts, explore diverse culinary cultures, and inspire shared experiences and connections across the globe. It's in its early stages still, but I'm excited by the potential it holds to reshape our engagement with food, technology, and community on a global scale.
                            </MainText>
                            <MainText>
                                This is where you can find my creative dumps. I post art, thoughts, and what not, I hope you find something interesting!
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