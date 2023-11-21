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

const Coding = () => {
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
                                Welcome to my coding project spotlight!
                            </MainText>
                            <MainText>
                                I first started coding using Scratch in 3rd grade, and ever since, I was hooked. I made my first Minecraft plugin using Java in 5th grade, my first mod in 6th grade, and have been embarking on bigger, more creatively challenging projects ever since.
                            </MainText>
                            <MainText>
                                I like making things for people. I like making things that make people think. I like making things that make people laugh. I like making things that make people feel. I like making things that make people feel like they're not alone.
                            </MainText>
                            <MainText>
                                I am currently working on a language learning project called Retreev. Based around new research about language acquisition and creative uses of LLMs, I want to challenge myself into creating something that can help people learn languages more efficiently and effectively.
                            </MainText>
                            <MainText>
                                I'm always looking for new projects! Let me know if you're interested in working on something with me, I'm always looking to meet new people and learn new things.
                            </MainText>
                        </Main>
                    </MainContent>

                    <ProjectSpotlight
                        name={"Ivee.ai"}
                        link={"https://devpost.com/software/ivee"}
                        description={"Won my first hackathon at CalHacks 10.0 with Ivee.ai. A full-stack team effort with Sania, Lema, and Tianyun, we tackled the challenge of making AI approachable & accessible by creating a voice assistant that helps any person, regardless of technical background, to speak their life stories into a lasting leaves of memories on a tree."}
                        techStack={"React Native, Figma, Firebase, Styled Components, OpenAI API, Intel Developer Cloud, Hume.ai, Milvus Vector Database, Flask, Deepgram, ElevenLabs, Expo, Dall-E, Hugging Face"}
                        image1={"iveeimage"}
                    />

                    <ProjectSpotlight
                        name={"Bap: Food & Restaurant Journal"}
                        link={"https://apps.apple.com/us/app/bap-food-restaurant-journal/id6450421562"}
                        description={"A full-stack solo project, I created a modern food journaling app. It's designed to unite foodies, explore diverse culinary cultures, and inspire shared experiences and connections across the globe. Oh, and to remember what you had for dinner last night."}
                        techStack={"React Native, Figma, Firebase, Styled Components, OpenAI API, Google Places API, Google Cloud Functions, RevenueCat"}
                        image1={"bapimage"}
                    />

                    <ProjectSpotlight
                        name={"Timeless Treasures"}
                        link={"https://timelesstreasures.app/"}
                        description={"As part of UC Berkeley's User Interface Design & Development class, my team and I designed a web app. It's prioritized for senior citizens who wish to share their life stories with their loved ones. A lot of effort went into designing an accessible and approachable user interface with chatbot integration and streamlined design."}
                        techStack={"React, Figma, Firebase, Styled Components, Chakra UI, Kommunicate, Contextual Inquiry"}
                        videoLink={"https://www.youtube.com/watch?v=qG-d7VOkXz8"}
                    />


                    <ProjectSpotlight
                        name={"하ハ哈ha"}
                        link={"https://github.com/KaluJo/gagagaga"}
                        description={"Combining my knowledge of Korean & English, and some Mandarin, I created 하ハ哈ha. It's designed for efficient Japanese grammar learning through Korean, meaning comprehension via English, and Kanji recognition using Chinese."}
                        techStack={"React (TypeScript), Node.js, Netlify, MongoDB, DeepL API, GPT-4 API & Whisper API, Chakra"}
                        videoLink={"https://youtu.be/rWaQ0NSSshc"}
                    />

                    <ProjectSpotlight
                        name={"Dootch"}
                        link={"https://github.com/KaluJo/gagagaga"}
                        description={"To help me learn German using just sentences and pattern recognition, I created Dootch. I am actively memorizing 1-3 sentences daily using this app, constantly adding new features to suit my needs."}
                        techStack={"React (TypeScript), Node.js, Netlify, MongoDB, DeepL API, GPT-4 API, Chakra"}
                        videoLink={"https://youtu.be/X7T84kOzuBA"}
                    />

                    <ProjectSpotlight
                        name={"Spreche"}
                        link={"https://github.com/KaluJo/spreche"}
                        description={"Mini open-source project, I made this to remind myself to practice sentences in German, but any language will do!"}
                        techStack={"React Native (TypeScript), ElevenLabs Multilingual v2, Styled Components"}
                        videoLink={"https://www.youtube.com/shorts/nQydlU06QN4"}
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

export default Coding;
