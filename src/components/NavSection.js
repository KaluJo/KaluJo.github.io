import React from 'react';

import {
    NavbarLinks,
    Main,
    MainContent,
    MainLink,
} from '../styles/BaseStyle';

import { useNavigate } from 'react-router-dom';

const NavSection = () => {
    const navigate = useNavigate();

    return (
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
                <MainLink onClick={() => navigate("/")}>
                    Go back home
                </MainLink>
            </Main>
        </MainContent>
    );
};

export default NavSection;
