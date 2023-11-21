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
    DoNotClickThisButton,
    MainLink,
} from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import { SpotlightContent, SpotlightDescription } from '../styles/SpotlightStyle';
import { useNavigate } from 'react-router-dom';

const colors = [
    { name: "cerulean", id: "#00b3f4" },
    { name: "vermillion", id: "#E34234" },
    { name: "chartreuse", id: "#7FFF00" },
    { name: "forest green", id: "#228B22" },
    { name: "magenta", id: "#FF00FF" },
    { name: "periwinkle", id: "#CCCCFF" }
];

const Art = () => {
    const [bgColor, setBgColor] = useState({
        color: 'rgb(67, 174, 218)',
        brightness: 1
    });

    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const [touchStart, setTouchStart] = useState(0);

    const navigate = useNavigate();

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
                                Welcome to my art showcase.
                            </MainText>
                            <MainText>
                                If you were to ask me what my favorite activity is, I would say, "building". I always loved making, creating, building, whatever takes an abstract thought into physical reality.
                            </MainText>
                            <MainText>
                                I'm a big fan of the "learning by doing" philosophy. I believe in the power of learning through experience, and I try to apply that to everything I do.
                            </MainText>
                            <MainText>
                                My biggest fear when it comes to making art is the fear of being perceived. But here I am, facing this fear, sharing my (non-exhaustive) art throughout the years with anyone on the internet.
                            </MainText>
                            <MainText>
                                To me, anything worth sharing is art. And I believe everything is worth sharing.
                            </MainText>
                        </Main>
                    </MainContent>

                    <ProjectSpotlight
                        name={"my nature"}
                        description={"what happens to a baby that has art in its nature and is nurtured to make art?"}
                        image1={"bhada"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"Susuwatari"}
                        description={"Printmaking has always been one of my favorite ways to make art. I also really like Totoro (I've watched it over 50 times). As an homage to the way Susuwatari took over my mind as a little kid, I took over the walls of an art studio with these little linoleum stamps I made."}
                        image1={"susuwatari1"}
                        image2={"susuwatari2"}
                        size={350}
                    />

                    <ProjectSpotlight
                        name={"B&W Prints"}
                        description={"Your heart stops for a moment as you peel off the wooden block from the paper. You never know how it will come out, whether the text will be inverted, whether the ink will be too thick, whether the paper will be too thin. But when it comes out just right, it's a beautiful thing."}
                        image1={"plantsprint"}
                        image2={"cheese1"}
                        image3={"cheese2"}
                        image4={"cheese3"}
                        size={500}
                    />

                    <ProjectSpotlight
                        name={"Crystal Beads"}
                        description={"I made these bracelets using gifts from Earth. My mission is authenticity. The market is full of fake, deliberately mislabed gemstones. From 'citrine' that's really just amethyst put into an oven to moss agate that's just dyed chalcedony, how can you fall for something's 'cleansing benefits' if you can't verify it's authenticity to begin with? I have no ill feelings for the vendors who are just trying to make a living, but I believe that us as consumers can do better, know better. I feel like I have a responsibility as a (previous) jewelry designer to sell the natural beauty of the stones, not a marketing ploy. Through this experience, I made lots of unique relationships with vendors and suppliers from all over the world. If you ever want a second opinion on whether you've been swindled on your latest crystal purchase, I'm your guy."}
                        image1={"bracelets1"}
                        image2={"bracelets2"}
                        image3={"bracelets3"}
                        image4={"bracelets4"}
                        size={300}
                    />

                    <ProjectSpotlight
                        name={"Aru Design"}
                        description={"I also dabbled with working with higher-end stones. The main challenge was making images that justify the cost. I had to learn a lot about lighting, photography, and editing. I learned that using magic, you can turn a $1 Daiso coaster, $1 Daiso \'woodprint\' sticker, and the bowl you eat rice from into a beautiful display. I had these products up on my shop and I sold out over the course of my 10th grade Summer. While it was really fun, I'm grateful that it's over as working with dainty chains and pliars really takes a toll on your fingers."}
                        image1={"moonstoneearrings"}
                        image2={"opalbracelet"}
                        size={300}
                    />

                    <ProjectSpotlight
                        name={"Painting"}
                        description={"I like painting, but paint doesn't like me very much. I haven't painted enough to figure paint out but this is definitely a medium I plan to explore again at some point. Fortunately my mom is a painter and I can always go to her for tips, even though I'm a bit stubborn and like to figure things out on my own."}
                        image1={"paintings1"}
                        image2={"paintings2"}
                        image3={"paintings3"}
                        image4={"paintings4"}
                        size={400}
                    />

                    <ProjectSpotlight
                        name={"The Garden"}
                        description={"Some of the best art is found within patience. And nothing requires more patience than tending to a garden. The secret to always being enchanted is to remind yourself that \"you haven\'t seen nothin\' yet\""}
                        image1={"thegarden"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"The Bear"}
                        description={"My favorite animal is the bear. I think the importance of the idol of the bear has been passed down through time to me; from 웅녀, to the bear cults of my prehistoric ancestors, I am reminded that we, humans, are blinded by the illusion of being number 1 on this planet. Back to a time when there was true fear, true survival, true respect for the Earth, this is what I see in the lonely bear."}
                        image1={"thebear"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"Porcelain"}
                        description={"When most people think of porcelain, they think of the words fragile, delicate, and expensive. However, having worked with it from molding to finish, I find more truth in the words strong, resilient, and beautiful."}
                        image1={"porcelain1"}
                        image2={"porcelain2"}
                        size={250}
                    />

                    <ProjectSpotlight
                        name={"Planter"}
                        description={"I wonder when the first planter was made. I wonder who first decided to grow a plant in a pot. Not for food, not for medicine, but simply to grow alongside something else."}
                        image1={"planter1"}
                        image2={"planter2"}
                        size={300}
                    />

                    <ProjectSpotlight
                        name={"Conscripts"}
                        description={"Words CAN describe how I feel about human history. When writing was spread to the masses, the true story humanity was liberated. With my conscripts, I am freeing my own story into the world."}
                        image1={"conscripts1"}
                        image2={"conscripts2"}
                        image3={"conscripts3"}
                        size={500}
                    />

                    <ProjectSpotlight
                        name={"Polymer"}
                        description={"Polymer clay is truly an overwhelming art medium. The possibilities are endless, but once you start molding, you can't go back."}
                        image1={"polymer"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"Bagel"}
                        description={"Do you remember who you forget?"}
                        image1={"bagel"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"Pineapple Expression"}
                        description={"They say the fruits of your labor are the sweetest. But what if the fruit in question is a quince? I've never had a tasty quince."}
                        image1={"pineapple"}
                        size={400}
                    />

                    <ProjectSpotlight
                        name={"Pain"}
                        description={"Sometimes, art is pain. And I got reminded of this when I used myself as a canvas. These 7 symbols are very important to me, reminding me that life is a balance of order & chaos, and there is no life without either. Write all the books you want, they will be burned. Build all the buildings you want, they will crumble. But don't write and don't build anything, did you even live?"}
                        image1={"pain"}
                        size={150}
                    />

                    <ProjectSpotlight
                        name={"Munchies"}
                        description={"Most things in this universe are meant to be experienced, not last. In fact, nothing really ever lasts, but the memory of how I felt when I pulled these out of the oven (and the Brie from the aging chamber) will forever be one with the experience that I am: Bhada."}
                        image1={"conchas"}
                        image2={"brie"}
                        image3={"sourdough"}
                        size={400}
                    />

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
                        </Main>
                    </MainContent>

                    <Footer onClick={() => navigate("/")}>
                        <FooterBackground bgColor={bgColor} />
                    </Footer>

                    <Copyright>
                        &copy; ∞ Bhada Yun
                    </Copyright>

                </SpotlightContent>

            </Content>
        </Base>
    );
};

export default Art;
