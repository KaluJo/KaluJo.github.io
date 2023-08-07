import styled from 'styled-components';
import footerImage2 from '../images/babyblu.png';
import footerImage from '../images/babybluflipped.png';

/* --- Resets --- */
export const Base = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;

  html, body, div, p {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    color: white;
    font-family: 'DM Sans', 'Trebuchet MS', sans-serif;
    font-weight: 500;
    letter-spacing: -0.02rem; 
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

/* --- Navbar --- */

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  height: 50vmin;
  background-size: contain;
  background-repeat: repeat-z;
  background-position: bottom;
  justify-content: center;
  position: relative; // This ensures that the children can be positioned relative to this container
`;

export const NavbarBackground = styled.div`
  position: absolute; // This positions it relative to the Navbar container
  width: 100%;
  height: 50vmin;
  z-index: 1; // Lower z-index so it's behind the buttons
  background-image: url(${footerImage});
  filter: brightness(${({ bgColor }) => bgColor.brightness});
  background-size: contain;
  background-repeat: repeat-z;
  background-position: bottom;
  justify-content: center;
`;

export const NavbarButtons = styled.div`
 position: absolute; // This will keep it fixed at the top of the viewport
  top: 3rem;
  left: 0; // Added to make sure it's centered
  right: 0; // Added to make sure it's centered
  flex-direction: row;
  align-items: flex-end;
  justify-content: center; // This centers the buttons horizontally
  display: flex;
  z-index: 10; // Higher z-index to keep it on top
`;
export const NavbarHome = styled.div`

a {
    text-decoration: none;
    font-size: 1.7rem;
    text-shadow: 0 0 10px rgb(60, 60, 60);
    color: white;
    padding: 0 0 0 0.25rem;
  }

  a:hover {
    text-shadow: 0 0 10px rgb(20, 20, 20);
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
    display: block;
    margin-left: 1.5rem;
    text-decoration: none;
    text-shadow: 0 0 10px rgb(60, 60, 60);
    color: white;
    font-size: 1.7rem;
  }

  a:hover {
    text-shadow: 0 0 10px rgb(20, 20, 20);
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

  &:hover .bar {
    box-shadow: 0 0 10px rgb(20, 20, 20);
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

/* --- Main Content --- */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const MainHeading = styled.h1`
  font-size: 1.6rem;
  vertical-align: middle;
  text-shadow: 0 0 10px rgb(80, 80, 80);
  padding: 1rem 3rem;
`;

export const MainParagraph = styled.p`
  font-size: 1.5rem;
  vertical-align: middle;
  text-shadow: 0 0 10px rgb(80, 80, 80);
  padding: 0.5rem 5rem;
`;

export const MainLink = styled.a`
  color: white;

  &:hover {
    color: white;
    text-shadow: 0 0 10px rgb(20, 20, 20);
  }
`;

export const MainListItem = styled.li`
  list-style: none;
  font-size: 1.5rem;
  padding: 0.5rem 2.5rem;
  text-shadow: 0 0 5px rgb(80, 80, 80);
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: rgb(67, 174, 218); */
`;

// MainText
export const MainText = styled.p`
  font-size: 1.5rem;
  vertical-align: middle;
  text-shadow: 0 0 10px rgb(80, 80, 80);
  padding-top: 5rem;
  padding-bottom: 5rem;

  a {
    color: white
  }
`;

/* --- Footer --- */

export const Footer = styled.footer`
  display: flex;
  flex: 1 50vmin;
  align-self: stretch;
  background-size: contain;
  background-repeat: repeat-x;
  background-position: bottom;
  align-items: flex-end;
  justify-content: center;
`;


export const FooterBackground = styled.div`
  position: absolute; // This positions it relative to the Navbar container
  width: 100%;
  height: 50vmin;
  z-index: 1; // Lower z-index so it's behind the buttons
  background-image: url(${footerImage2});
  filter: brightness(${({ bgColor }) => bgColor.brightness});
  background-size: contain;
  background-repeat: repeat-z;
  background-position: bottom;
  justify-content: center;
`;

export const Copyright = styled.div`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 1rem;
  text-shadow: 0 0 5px black;
  z-index: 10;
`;