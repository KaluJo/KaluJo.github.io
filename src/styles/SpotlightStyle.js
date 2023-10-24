import styled from 'styled-components';
import footerImage2 from '../images/babyblu.png';
import footerImage from '../images/babybluflipped.png';

export const SpotlightContent = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  scroll-snap-align: center;

  overflow-y: scroll;

  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;

export const SpotlightContainer = styled.div`
    /* border: 2px solid #FFFFFF; */

    scroll-snap-align: center;
    scroll-snap-stop: normal;

    min-height: 100vh;

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const ProjectName = styled.a`
    scroll-snap-stop: always;
    font-size: 1.5rem;
    vertical-align: middle;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    color: white;
    margin-bottom: 1.2rem;
`;

export const SpotlightImage = styled.img`
    width: 80%;
    height: auto;

    margin-bottom: 1.2rem;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const SpotlightDescription = styled.p`
    margin: 0px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    vertical-align: middle;
    font-weight: 400;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    a {
        color: white
    }
    width: 80%;
`;

export const SpotlightStack = styled.p`
    margin: 0px;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    vertical-align: middle;
    font-weight: 400;
    text-shadow: 0 0 6px rgb(100, 100, 100);
    a {
        color: white
    }
    width: 80%;
`;
