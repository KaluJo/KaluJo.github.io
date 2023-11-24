import React from 'react';

import { Main, MainContent, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

const Art = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <MainContent>
                <Main>
                    <MainText>
                        welcome to my art showcase.
                    </MainText>
                    <MainText>
                        if you were to ask me what my favorite activity is, i would say, 'creating'—whatever brings an abstract thought into physical reality.
                    </MainText>
                    <MainText>
                        my biggest fear when it comes to making art is the fear of being perceived. but here i am, facing this fear.
                    </MainText>
                    <MainText>
                        to me, anything worth sharing is art. and i believe everything is worth sharing.
                    </MainText>
                </Main>
            </MainContent>

            <ProjectSpotlight
                name={"my story"}
                description={"what happens to a baby that has art in its nature and is nurtured to make art?"}
                image1={"bhada"}
                size={200}
            />

            <ProjectSpotlight
                name={"starts with ink"}
                description={"printmaking has always been one of my favorite ways to make art. i also really like totoro (i've watched it over 50 times). as an homage to the way ススワタリ took over my mind as a little kid, i took over the walls of an art studio with these little linoleum stamps i made."}
                image1={"susuwatari1"}
                image2={"susuwatari2"}
                size={350}
            />

            <ProjectSpotlight
                name={"on paper"}
                description={"your heart stops for a moment as you peel off the paper from the wooden block. you never know how it will come out, whether the text will be inverted, whether the ink will be too thick, whether the paper will be too thin. but when it comes out just right, it's a beautiful thing."}
                image1={"plantsprint"}
                image2={"cheese1"}
                image3={"cheese2"}
                image4={"cheese3"}
                size={500}
            />

            <ProjectSpotlight
                name={"preserving"}
                description={"i always tell myself i'm going to start painting again until i completely forget how to lift a brush."}
                image1={"paintings1"}
                image2={"paintings2"}
                image3={"paintings3"}
                image4={"paintings4"}
                image5={"paintings5"}
                size={550}
            />

            <ProjectSpotlight
                name={"the fragile"}
                description={"previously, i perceived porcelain as fragile, delicate, and expensive. however, having worked with it from mold to finish, i now find more truth in the words strong, resilient, and beautiful."}
                image1={"porcelain1"}
                image2={"porcelain2"}
                size={250}
            />

            <ProjectSpotlight
                name={"memories"}
                description={"some of the best art is found within patience, and gardening is the practice of patience. the secret to always being enchanted is to remind yourself that \"you haven\'t seen nothin\' yet\" and simply wait."}
                image1={"garden1"}
                image2={"garden2"}
                image3={"me"}
                size={450}
            />

            <ProjectSpotlight
                name={"carrying"}
                description={"i wonder when the first planter was made. i wonder who first decided to grow a plant in a pot. not for food, not for medicine, but simply to grow alongside something else."}
                image1={"planter1"}
                image2={"planter2"}
                size={300}
            />

            <ProjectSpotlight
                name={"the burden"}
                description={"my favorite animal is the bear. i think the importance of the idol of the bear has been passed down through time to me; from 웅녀, to the bear cults of my prehistoric ancestors. whenever i think more about this \'prehistory\', i am taken back to a time when there was true fear, true survival, true respect for the Earth; this is what i see in the lonely bear."}
                image1={"thebear"}
                size={200}
            />

            <ProjectSpotlight
                name={"to travel"}
                description={"i was born in the year of the horse. that isn't why i built this zebra, but it's a fun fact."}
                image1={"thehorse"}
                size={200}
            />

            <ProjectSpotlight
                name={"all the stars"}
                description={"it was an interesting experience, searching all around the world through the internet for the vendors that would sell the exact type and level of treatment for the stones i needed, but it was really fun making these connections. building with them, however, took a toll on my fingers."}
                image1={"bracelets1"}
                image2={"bracelets2"}
                image3={"bracelets3"}
                image4={"bracelets4"}
                image5={"moonstoneearrings"}
                image6={"opalbracelet"}
                size={600}
            />

            <ProjectSpotlight
                name={"and back to"}
                description={"written words describe how we felt and what we thought about throughout human history. when writing was spread to the masses, the true story of humanity was liberated."}
                image1={"conscripts1"}
                image2={"conscripts2"}
                image3={"conscripts3"}
                image4={"conscripts4"}
                size={550}
            />

            <ProjectSpotlight
                name={"the time when"}
                description={"polymer clay is truly an overwhelming art medium. the possibilities are endless, but once you start molding, you can't go back."}
                image1={"polymer"}
                size={200}
            />

            <ProjectSpotlight
                name={"i was here"}
                description={"do you remember who you're forgetting?"}
                image1={"bagel1"}
                image2={"bagel2"}
                size={450}
            />

            <ProjectSpotlight
                name={"to remind"}
                description={"they say the fruits of your labor are the sweetest. but what if the fruit in question is a quince? i've never had a tasty quince."}
                image1={"pineapple"}
                size={400}
            />

            <ProjectSpotlight
                name={"you all that"}
                description={"sometimes, art is pain. and i got reminded of this when i used myself as a canvas. these 7 symbols are very important to me, reminding me that life is a balance of order and chaos, and there is no life without either. write all the books you want, they will be burned. build all the buildings you want, they will crumble. but don't write and don't build anything, did you even live?"}
                image1={"pain"}
                size={200}
            />

            <ProjectSpotlight
                name={"i'm still there"}
                description={"nothing truly lasts, but the memory of how i felt when i pulled these out of the oven (and the brie from the aging chamber) will forever be one with the experience that i am: Bhada."}
                image1={"conchas"}
                image2={"brie"}
                image3={"sourdough"}
                size={400}
            />

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        I can only last as long as you are here.
                    </MainText>
                </Main>
            </MainContent>
        </div>
    );
};

export default Art;
