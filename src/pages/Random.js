import React from 'react';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

const Random = () => {

    return (
        <>
            <MainContent>
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


            <ProjectSpotlight
                name={"Some Food I Like"}
                description={"non-exhaustive, random:"}
                languages={
                    ["ghormeh sabzi w/ zereshk polo",
                        "poutine",
                        "the three tangs: 곰탕 (gomtang), 설렁탕 (seolleongtang), 갈비탕 (galbitang)",
                        "순두부찌개 (sundubujjigae)",
                        "열무국수 (yeolmuguksu)",
                        "ネギトロ巻き (negitoromaki)",
                        "dondurma (rose++)",
                        "taco bell doritos locos supreme tacos at 3am",
                        "호떡 (hotteok) in 남대문 (namdaemun) after an 알파문구 (alpamungu) run",
                        "カステラ (castella) you get offered for goûter",
                        "extra tart lemon bars",
                        "손칼국수 (sonkalguksu) from my 단골집 (dangoljib)",
                        "mango with tajin on beach days",
                        "수제비 (sujebi), 얼큰 (eolkeun) if you're feeling spicy",
                        "elote when you least expect it",
                        "açaí bowls with extra granola & passionfruit",
                        "pupusas con extra curtido y salsa",
                        "도토리묵 양념장 (dotorimuk yangnyeomjang)",
                        "dried apples",
                        "homemade spätzle",
                        "pão de queijo",
                        "joe's pizza",
                        "dosa with extra sambar and a side of medu vada and idli",
                        "burmese tea-leaf salad to start off the day",
                        "훈제란 (hunjaeran) with extra 맛소금 (matsogeum)",
                        "pozole verde",
                        "お茶漬け (ochazuke)"
                    ]}
                size={240}
            />

            <ProjectSpotlight
                name={"bruh"}
                description={"absolutely worth $80"}
                image1={"bruh"}
                size={300}
            />

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        Avranacier.
                    </MainText>
                </Main>
            </MainContent>
        </>
    );
};

export default Random;
