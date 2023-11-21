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

const Random = () => {
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
                                Welcome to literally anything else.
                            </MainText>
                            <MainText>
                                Below you will find literally anything else.
                            </MainText>
                        </Main>
                    </MainContent>

                    <ProjectSpotlight
                        name={"My Language Learning Journey"}
                        description={"I've always been fascinated by languages. Learning a language is like discovering a new world, and I like exploring new worlds."}
                        languages={
                            ["English (Native): Primary working & social language. I'd like to learn an Aussie accent one day.",
                                "한국어 (Native): Primary family language. Consuming Korean media keeps me fluent. Let me know if you want to have a full conversation in Konglish.",
                                "Français (Intermediate): A lot of my current media consumption is French so it's gradually improving. I can read basic novels but will have trouble if you try to start a conversation but I'll appreciate any practice.",
                                "中文/普通话 (Unsure): I was pretty good in high school, but haven't used it much since. Given little speaking practice, I have trouble remembering tones for proper speaking, but can read and understand various contexts. I definitely will be picking this back up in the future.",
                                "日本語 (Beginntermediate): Actively learning it right now. I treat learning Kanji like catching Pokémon. Gotta catch 'em all!",
                                "Deutsch (Beginner): I'm trying out a new learning tactic with this one. We'll see how it goes! Viel Glück.",
                                "What should I add next?"
                            ]}
                    />

                    <ProjectSpotlight
                        name={"Keeping track of the times I've annoyed my Tamil friend"}
                        description={"I love South Indian food so much, I swear I'm just trying to innovate"}
                        languages={
                            ["Telling him that I used to eat paratha for breakfast like pancakes with maple syrup",
                                "Mentioning that *insert local South Indian restaurant* should sell chocolate dosa",
                                'Suggesting sweet Medu Vada made with the ingredients in gulab jamun',
                                'Referring to Gulab Jamun as "Indian Donut Holes"',
                                'Suggesting Gulab Jamun donuts: Jamunuts',
                                'Referring to Medu Vada as "Indian Donuts"',
                                'Referring to Medu Vada as "Indian Bagels"',
                                'Referring to Medu Vada as "Medu Bhada"',
                                'Saying, quote, "Idli is great"',
                                '"It\'s not even that spicy"',
                                '"Holy sh*t it burns"',
                                '#sambar4life',
                                '"Vanakkam!"'
                            ]}
                    />

                    <ProjectSpotlight
                        name={"1-Sentence Summary Of Every Class I Took"}
                        description={"All my respect goes to the professors and TAs who try to run these classes despite the insane class sizes"}
                        languages={
                            ["CHEM 1A (General Chemistry): \“Everything is chaos, especially this class\”",
                                "COMLIT R1A (On Literature and Environmental Change): \“Everything is temporary except for the things we choose to pass on\”",
                                "CS 61A (Structure and Interpretation of Computer Programs): \“Learn everything the hard way so everything else is easy\”",
                                "INDENG 198 (Blockchain Decal): \“📉(📈❓)\”",
                                "MATH 53 (Multivariable Calculus): \“Math, but with abstract interpretations of bowls\”",
                                "CIVENG 93 (Engineering Data Analysis): \“Refer to the formula sheet\”",
                                "CS 61B (Data Structures): \“When in doubt, choose whatever has the word 'hash' in it\”",
                                "MATH 54 (Linear Algebra & Differential Equations): \“We live in a matrix, literally [⊗><]\”",
                                "CS 61C (Machine Structures): \“Think in Irish\”",
                                "CS 70 (Discrete Mathematics and Probability Theory): \“Everything is so obvious\”",
                                "EECS 16A (Designing Information Devices and Systems I): \“Ohm-ygod\”",
                                "FRENCH 1 (Elementary French): \“Bof, chais pas\”",
                                "LING 100 (Introduction to Linguistic Science): \“You have something to learn from every language\”",
                                "CS 160 (User Interface Design and Development): \“If you don\'t care about this class as a developer, I truly worry for your customers\”",
                                "CS 189 (Introduction to Machine Learning): \“Pt 1: Is it left or is it right? Pt 2. Everything is probabilities\”",
                                "JAPAN 1A (Elementary Japanese): \“こちらこそどうぞよろしくお願いします。\”",
                                "NWMEDIA 151AC (Transforming Tech: Issues and Interventions in STEM and Silicon Valley): \“values != intentions != actions\”",
                                "CS 188 (Introduction to Artificial Intelligence): \“What can I do with these probabilities?\”",
                                "CS 194-196 (Responsible GenAI and Decentralized Intelligence): \“Let\'s make probabilities relatable\”",
                                "LING C142 (Language & Thought): \“What came first, the language or the thought?\”"
                            ]}
                        size={200}
                    />

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

                    <Footer onClick={() => navigate("/")}>
                        <FooterBackground bgColor={bgColor} />
                    </Footer>

                    <Copyright>
                        &copy; ∞ Bhada Yun
                    </Copyright>

                </SpotlightContent>

            </Content>
        </Base>
    );
};

export default Random;
