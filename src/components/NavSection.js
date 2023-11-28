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
                <MainLink onClick={() => navigate("/coding")}>
                    projects
                </MainLink>
                <MainLink onClick={() => navigate("/art")}>
                    some art
                </MainLink>
                <MainLink onClick={() => navigate("/last")}>
                    poetry
                </MainLink>
                <MainLink onClick={() => navigate("/music")}>
                    playlists
                </MainLink>
                <MainLink onClick={() => navigate("/random")}>
                    literally anything else
                </MainLink>
                <MainLink onClick={() => navigate("/")}>
                    go back home
                </MainLink>
                <MainLink
                    onClick={(e) => {
                        window.location.href = "mailto:bhadayun@gmail.com";
                        e.preventDefault();
                    }}
                >
                    get in touch
                </MainLink>
            </Main>
        </MainContent>
    );
};

export default NavSection;
