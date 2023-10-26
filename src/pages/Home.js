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
} from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import { SpotlightContent, SpotlightDescription } from '../styles/SpotlightStyle';

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
                                My research interests lie at the intersection of Human-Computer Interaction (HCI), Artificial Intelligence (AI), Natural Language Processing (NLP), and pedagogy. I firmly believe in the power of communication and am convinced that with context, compassion, and courage, we can come to understand anyone, and any "other".</MainText>
                            <MainText>
                                Currently a Junior at UC Berkeley pursuing a double major in Computer Science & Linguistics.
                            </MainText>
                            <MainText>
                                I am currently working on an language learning app called Retreev. Based around new research about language acquisition and creative uses of LLMs, I want to challenge myself into creating something that can help people learn languages more efficiently and effectively.
                            </MainText>
                            <MainText>
                                This is where you can find my creative dumps. I post art, thoughts, and whatnot, I hope you find something interesting!
                            </MainText>
                        </Main>
                    </MainContent>

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
                        description={"Combining my knowledge of Korean & English, and some Mandarin, I created 하ハ哈ha. It's designed for efficient Japanese grammar learning through Korean, meaning comprehension via English, and Kanji recognition using Chinese."}
                        techStack={"React (TypeScript), Node.js, MongoDB, DeepL API, GPT-4 API & Whisper API, Mantine"}
                        videoLink={"https://youtu.be/rWaQ0NSSshc"}
                    />

                    <ProjectSpotlight
                        name={"Dootch"}
                        description={"To help me learn German using just sentences and pattern recognition, I created Dootch. I am actively memorizing 3-5 sentences daily using this app, constantly adding new features to suit my needs."}
                        techStack={"React (TypeScript), Node.js, MongoDB, DeepL API, GPT-4 API, Mantine"}
                        videoLink={"https://youtu.be/X7T84kOzuBA"}
                    />

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

                    <Footer>
                        <FooterBackground bgColor={bgColor} />
                    </Footer>

                    <Copyright>
                        &copy; ∞ Bhada Yun
                    </Copyright>
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