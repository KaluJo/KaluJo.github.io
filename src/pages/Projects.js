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
    
    const handleWheel = (e) => {
        const scrollDirection = e.deltaY;
    
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
    
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [percentageScrolled]); // Depend on percentageScrolled to access its current value

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
                                        Bhada Yun
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