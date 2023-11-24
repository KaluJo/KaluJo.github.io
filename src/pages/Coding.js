import React from 'react';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

const Coding = () => {

    return (
        <>
            <MainContent>
                <Main>
                    <MainText>
                        Welcome to my coding project spotlight!
                    </MainText>
                    <MainText>
                        I like making things for people. I like making things that help people realize that they're not alone.
                    </MainText>
                    <MainText>
                        Let me know if you're interested in working on an idea with me! I'm always looking to meet new people and learn new things.
                    </MainText>
                </Main>
            </MainContent>

            <ProjectSpotlight
                name={"Ivee.ai"}
                link={"https://devpost.com/software/ivee"}
                description={"Won my first hackathon at CalHacks 10.0 with Ivee.ai. This was a full-stack team effort with Sania, Lema, and Tianyun, we tackled the challenge of making AI approachable & accessible by creating a voice assistant that helps any person, regardless of technical background, to speak their life stories into a lasting leaves of memories on a tree.\n\nWe are currently expanding upon this idea as a team, and we are very excited to see where this project goes."}
                techStack={"React Native, Figma, Firebase, Styled Components, OpenAI API, Intel Developer Cloud, Hume.ai, Milvus Vector Database, Flask, Deepgram, ElevenLabs, Expo, Dall-E, Hugging Face"}
                image1={"iveeimage"}
            />

            <ProjectSpotlight
                name={"Bap: Food & Restaurant Journal"}
                link={"https://apps.apple.com/us/app/bap-food-restaurant-journal/id6450421562"}
                description={"Over the summer of 2023, I wanted to work on a full-stack solo project, so I created a modern food journaling app.\n\nThroughout this experience, I used React Native, JavsScript, and Firebase, and a myriad of other APIs for the first time.\n\nIt was a tough learning process, especially the logistical aspects of uploading to the App Store, adding monetization, and connecting advertisements, but by the end, I was proud of what I could achieve and am excited to work on more products on a larger scale."}
                techStack={"React Native, Figma, Firebase, Styled Components, OpenAI API, Google Places API, Google Cloud Functions, RevenueCat"}
                image1={"bapimage"}
            />

            <ProjectSpotlight
                name={"Timeless Treasures"}
                link={"https://timelesstreasures.app/"}
                description={"I worked with a team on a full-stack design & development project.\n\nWe brought to life Timeless Treasures, a safe and personalized platform to share life stories with loved ones.\n\nThis project involved storyboarding, various brainstorming techniques, contextual inquiry, application of HCI principles, usability evaluation, accessibility heuristics, and task & competitive analysis in regards to building and maintaining a product."}
                techStack={"React, Figma, Firebase, Styled Components, Chakra UI, Kommunicate"}
                videoLink={"https://www.youtube.com/watch?v=qG-d7VOkXz8"}
            />


            <ProjectSpotlight
                name={"하ハ哈ha"}
                link={"https://github.com/KaluJo/gagagaga"}
                description={"There is no one size fits all method of learning.\n\nGiven someone's unique background, there is an equally unique way to design a learning strategy that works with their mind and own intuition about the world.\n\nAs for me, I grew up in a bilingual environment where I spoke and learned Korean & English. Later in 6th grade when I started learning Japanese, I realized that neither the Korean textbook '민나노 日本語' or the curriculum for English speakers \'felt right\' for me.\n\nFor some context, while Japanese and Korean are in different language families, they have remarkably similar grammar structure to an almost 1-to-1 translational level. Due to the Chinese language influence, the lexicons are similar as well.\n\nGiven these facts, it makes more sense for me to learn Japanese in Korean rather than English. However, while my grasp of Korean grammar and speaking is high, my reading skills and vocabulary comprehension are not as good as I haven't read many Korean books (yet).\n\nDue to this, when learning to read Japanese and new vocabulary, I would have an easier time memorizing through a mapping from English to Japanese. Eventually, during my self-learning journey, I developped a unique system for myself.\n\nFor grammar, I would learn about them on the Korean internet (with a VPN). I found that this helped me understand grammatical concepts in a more intuitive way (since Korean and Japanese are very grammatically similar).\n\nFor vocab drilling, however, I found it more effective to memorize using English. An example of this is since I normally think in English, I naturally come up with vocabulary much easier in English than in Korean.\n\nSide Tangent: While learning Mandarin in high school, I had a fun realization that I can learn to understand the pure \'meaning\' associated with an individual 汉子/漢字/한자/character, and translate things from \'meaning-to-language\' when trying to read these characters in Chinese, Japanese, or older Korean scriptures.\n\nIt's difficult to express how this truly feels using text, but I suppose words always come with loss of information.\n\nAnyways, I created this project to mediate all of this language learning chaos."}
                techStack={"React (TypeScript), Node.js, Netlify, MongoDB, DeepL API, GPT-4 API & Whisper API, Chakra"}
                videoLink={"https://youtu.be/rWaQ0NSSshc"}
                size={300}
            />

            <ProjectSpotlight
                name={"Dootch"}
                link={"https://github.com/KaluJo/gagagaga"}
                description={"This is an active self-learning experiment.\n\nI wanted to try learning languages by only memorizing sentences. Without looking up grammar guides or textbooks, I created a random list of German vocabulary, and let GPT-4 generate a sentence for each word for me to memorize.\n\nI am hoping that this will help in two main ways:\n\n1) I hope it improves my memorization of genders by training myself to adopt the \'native/first language\' usage of gender:\n\n\"It just sounded right, that\'s just how it came out of my mouth.\"\n\nEssentially, I want to be able to just utter the correct word without having to place any conscious energy into it.\n\n2) I want to use it as an exercise to improve my pattern-matching and problem solving skills. It definitely does help that I already speak English, a Germanic language."}
                techStack={"React (TypeScript), Node.js, Netlify, MongoDB, DeepL API, GPT-4 API, Chakra"}
                videoLink={"https://youtu.be/X7T84kOzuBA"}
                size={200}
            />

            <ProjectSpotlight
                name={"Spreche"}
                link={"https://github.com/KaluJo/spreche"}
                description={"It makes no sense trying to memorize sentences by simply staring at a piece of paper with words, hoping they will stick to my brain.\n\nUsing STT/TTS libraries, I made this mini open-source project, to practice sentences and pronunciation for a target language.\n\nI also gave myself a maximum of ~3 errors in pronunciation using the Levenshtein distance for each sentence practiced. I am very excited to see the future of STT/TTS technology, especially during its union with artificial intelligence."}
                techStack={"React Native (TypeScript), ElevenLabs Multilingual v2, Styled Components"}
                videoLink={"https://www.youtube.com/shorts/nQydlU06QN4"}
            />

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        Remember that every function has a door you can enter()
                    </MainText>
                </Main>
            </MainContent>
        </>
    );
};

export default Coding;
