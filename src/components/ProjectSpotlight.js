import React, { useEffect, useRef } from 'react';

import ReactPlayer from 'react-player';

import {
    SpotlightContainer,
    ProjectName,
    SpotlightImage,
    SpotlightDescription,
    SpotlightStack
} from '../styles/SpotlightStyle';

const ProjectSpotlight = React.forwardRef(({ name, link, description, techStack, image1, image2, image3, image4, image5, image6, videoLink, languages, size }, ref) => {

    return (
        <SpotlightContainer size={size}>
            <ProjectName href={link} target="_blank" rel="noopener noreferrer">{name}</ProjectName>
            {image1 && <SpotlightImage src={require(`../images/${image1}.png`)} alt={`${name} image1`} />}
            {image2 && <SpotlightImage src={require(`../images/${image2}.png`)} alt={`${name} image2`} />}
            {image3 && <SpotlightImage src={require(`../images/${image3}.png`)} alt={`${name} image3`} />}
            {image4 && <SpotlightImage src={require(`../images/${image4}.png`)} alt={`${name} image4`} />}
            {image5 && <SpotlightImage src={require(`../images/${image5}.png`)} alt={`${name} image5`} />}
            {image6 && <SpotlightImage src={require(`../images/${image6}.png`)} alt={`${name} image6`} />}
            {videoLink && (
                <ReactPlayer
                    url={videoLink}
                    controls={true}
                    width='80%'
                    style={{ marginBottom: '1.5rem' }}
                />
            )}

            {description && <SpotlightDescription>{description}</SpotlightDescription>}
            {techStack && <SpotlightStack>Core Stack: {techStack}</SpotlightStack>}
            {languages && languages.map(language => (<SpotlightStack>{language}</SpotlightStack>))}

            {(name === "Bap: Food & Restaurant Journal") ? <a href="https://apps.apple.com/us/app/bap-food-restaurant-journal/id6450421562" target="_blank" rel="noopener noreferrer">
                <img src={require(`../images/appstorebadge.png`)} alt="Download on the App Store" style={{ marginTop: '0.75rem', width: 120 }} />
            </a> : null}
        </SpotlightContainer>
    );
});

export default ProjectSpotlight;