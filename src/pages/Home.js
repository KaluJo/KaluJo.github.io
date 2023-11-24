import React, { useEffect, useState } from 'react';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import NavSection from '../components/NavSection';

const colors = [
    { name: "cerulean", id: "#00b3f4" },
    { name: "vermillion", id: "#E34234" },
    { name: "chartreuse", id: "#7FFF00" },
    { name: "forest green", id: "#228B22" },
    { name: "magenta", id: "#FF00FF" },
    { name: "periwinkle", id: "#CCCCFF" }
];

const aspects = [
    "Words",
    "People",
    "Memories",
    "Thoughts",
    "Desires",
    "Dreams"
];

const HomePage = () => {
    const [favoriteColor, setFavoriteColor] = useState(colors[0]);
    const [currentAspect, setCurrentAspect] = useState(aspects[0]);

    const [hoverColor, setHoverColor] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            setFavoriteColor(colors[randomIndex]);
            setCurrentAspect(aspects[randomIndex]);
        };

        const intervalId = setInterval(changeColor, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <MainContent>
                <Main>
                    <MainText>
                        Hi, I'm Bhada Yun, welcome to my corner of the sky.
                    </MainText>
                    <MainText>
                        My favorite phoneme is the voiced postalveolar fricative /ʒ/, favorite color is <span style={{ color: hoverColor ? favoriteColor.id : 'inherit' }} onMouseEnter={() => setHoverColor(true)} onMouseLeave={() => setHoverColor(false)}>{favoriteColor.name}</span>, and my favorite fruit is probably mango.
                    </MainText>
                    <MainText>
                        I am convinced that given context, compassion, and courage, we can come to understand anyone, and any "other".</MainText>
                    <MainText>
                        Currently a Junior at UC Berkeley pursuing a double major in Computer Science & Linguistics.
                    </MainText>
                    <MainText>
                        This is where you can find my creative dumps. I post art, thoughts, and whatnot, I hope you find something interesting!
                    </MainText>
                </Main>
            </MainContent>

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        {currentAspect} are like clouds; they come and go.
                    </MainText>
                </Main>
            </MainContent>
        </>
    );
};

export default HomePage;
