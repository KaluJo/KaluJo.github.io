import React from 'react';

import { InstagramEmbed } from 'react-social-media-embed';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

const Photos = () => {

    return (
        <>
            <MainContent>
                <Main>
                    <MainText>
                        I bring my Ricoh GR III to every adventure.
                    </MainText>
                    <MainText>
                        I post the moments that mean most to me on my Instagram, @<a href="https://www.instagram.com/bhadayun/">bhadayun</a>
                    </MainText>
                    <MainText>
                        Feel free to look at some of the pictures of the places and people I've been.
                    </MainText>
                    <div style={{ display: 'flex', marginTop: 30, marginBottom: 100, justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/bhadayun/" width={328} />
                    </div>
                </Main>
            </MainContent>

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        I lived a different life up to each moment captured.
                    </MainText>
                </Main>
            </MainContent>
        </>
    );
};

export default Photos;
