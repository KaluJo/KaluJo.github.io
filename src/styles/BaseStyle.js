import styled from 'styled-components';
import footerImage2 from '../images/babyblu.png';
import footerImage from '../images/babybluflipped.png';

export const Base = styled.div`
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    -ms-overflow-style: none;
    
    html, body, div {
        margin: 0;
        padding-left: 0;
        padding-right: 0;
        color: white;
        font-family: 'Outfit Variable', sans-serif;
        font-weight: 400;
  }

    button, input, select, textarea {
        font-family: inherit;
        font-size: 100%;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    textarea {
        overflow: auto;
    }
`;

export const NavbarContent = styled.div`
    height: 100vh;
`;

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    height: 50vmin;
    background-size: contain;
    background-repeat: repeat-z;
    background-position: bottom;
    justify-content: center;
    position: relative; 
`;

export const NavbarBackground = styled.div.attrs(props => ({
    style: {
        filter: `brightness(${props.bgColor.brightness})`,
    },
}))`
    position: absolute;
    width: 100%;
    height: 50vmin;
    z-index: 1;
    background-image: url(${footerImage});
    background-size: contain;
    background-repeat: repeat-z;
    background-position: bottom;
    justify-content: center;
    cursor: pointer;
  `;

export const NavbarButtons = styled.div`
    position: absolute; 
    top: 3rem;
    left: 0; 
    right: 0; 
    flex-direction: row;
    align-items: flex-end;
    justify-content: center; 
    display: flex;
    z-index: 10;
`;

export const NavbarHome = styled.div`
    a {
        text-decoration: none;
        font-weight: 500;
        font-size: 1.7rem;
        text-shadow: 0 0 6px rgb(80, 80, 80);
        color: white;
        padding: 0 0 0 0.25rem;
    }

    a:hover {
        text-shadow: 0 0 6px rgb(40, 40, 40);
    }
`;

export const NavbarLinks = styled.div`
    ul {
        display: flex;
        margin: 0;
        padding: 0 0.25rem 0 0;
    }

    li {
        list-style: none;
    }

    a {
        font-weight: 500;
        display: block;
        margin-left: 1.5rem;
        text-decoration: none;
        text-shadow: 0 0 6px rgb(80, 80, 80);
        color: white;
        font-size: 1.7rem;
    }

    a:hover {
        text-shadow: 0 0 6px rgb(40, 40, 40);
    }
`;

export const ToggleButton = styled.div`
    position: relative;
    top: 1.65rem;
    right: 2rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;

    .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px rgb(60, 60, 60);
    }

    @media (max-width: 600px) {
        display: flex;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    /* @media (min-width: 769px) {
        scroll-snap-type: y proximity;
        overflow-y: scroll;
    } */
`;

export const MainContent = styled.div`
    flex-direction: column;

    min-height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    -ms-overflow-style: none;

    /* @media (min-width: 769px) {
        scroll-snap-type: y mandatory;
        scroll-snap-align: center;
        overflow-y: scroll;
    } */
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const MainHeading = styled.h1`
    font-size: 1.6rem;
    vertical-align: middle;
    padding: 1rem 3rem;
`;

export const MainParagraph = styled.p`
    font-size: 1.5rem;
    vertical-align: middle;
    padding: 0.5rem 5rem;
`;

export const MainListItem = styled.li`
    list-style: none;
    font-size: 1.5rem;
    padding: 0.5rem 2.5rem;
`;

export const MainText = styled.p`
    font-size: 1.4rem;
    vertical-align: middle;
    text-shadow: 0 0 6px rgb(100, 100, 100);

    margin-left: 5vw;
    margin-right: 5vw;

    a {
        color: white
    }
`;

export const MainLink = styled.p`
    font-size: 1.4rem;
    vertical-align: middle;
    text-shadow: 0 0 6px rgb(100, 100, 100);

    margin-left: 5vw;
    margin-right: 5vw;

    cursor: pointer;
    
    a {
        color: white
    }

    :hover {
        text-decoration: underline;
        text-decoration-thickness: 1.5px;
    }
`;

export const Footer = styled.footer`
    /* @media (min-width: 769px) {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    } */
        
    display: flex;
    flex: 1 50vmin;
    height: 100vh;
    align-self: stretch;
    background-size: contain;
    background-repeat: repeat-x;
    background-position: bottom;
    align-items: flex-end;
    justify-content: center;
    padding-top: 5rem;

    margin-top: 50vmin;
`;

export const FooterBackground = styled.div.attrs(props => ({
    style: {
        filter: `brightness(${props.bgColor.brightness})`,
    },
}))`
    width: 100%;
    height: 50vmin;
    z-index: 1;
    background-image: url(${footerImage2});
    background-size: contain;
    background-repeat: repeat-z;
    background-position: bottom;
    justify-content: center;
    cursor: pointer;
  `;

export const Copyright = styled.div`
    justify-self: flex-end;
    
    bottom: 30px;

    position: relative;
    
    font-size: 1rem;
    text-align: center;
    padding-bottom: -10rem;
    margin-bottom: -10rem;

    height: 0px;

    text-shadow: 0 0 6px rgb(40, 40, 40);
    z-index: 10;
`;

export const DoNotClickThisButton = styled.div`
    justify-self: flex-end;
    
    bottom: 30px;

    position: relative;
    
    font-size: 10px;
    text-align: right;
    padding-bottom: -10rem;
    margin-bottom: -10rem;

    height: 0px;
    z-index: 10;
`;

export const BookContent = styled.div`
    flex-direction: column;

    min-height: 110vh;

    /* @media (min-width: 769px) {
        scroll-snap-type: y mandatory;
        scroll-snap-align: center;
        overflow-y: scroll;
    } */
`;

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 110vh;
`;
