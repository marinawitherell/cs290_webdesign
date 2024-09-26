import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: '../images/bi-222-poster.jpg',
        thumbnail: '../images/bi-222-poster.jpg',
        description: `The poster describes the details of an experiment titled 
        Mitotic Index of Aiptasia in Response to Varying Environmental 
        Conditions and includes an introduction, methodology, the results 
        and statistics, the discussion, the conclusion and significance, 
        and references.`,
        originalHeight: '450px',
    },
    {
        original: '../images/data-manipulation.png',
        thumbnail: '../images/data-manipulation.png',
        description: `The screenshot was taked from a past project involving
        data manipulation using R Studio in 2022.`,
        originalHeight: '450px',
    },
    {
        original: '../images/c-project.png',
        thumbnail: '../images/c-project.png',
        description: `The image displays a screenshot of coding in C using VS Code.`,
        originalHeight: '450px',
    },
    {
        original: '../images/python-project.png',
        thumbnail: '../images/python-project.png',
        description: `The screenshot is from a past coding project in the language 
        Python using PyCharm. The project was to make a search feature for 
        a streaming service.`,
        originalHeight: '450px',
    },
    {
        original: '../images/genome-seq.png',
        thumbnail: '../images/genome-seq.png',
        description: `The image displays a screenshot of the output of a genome sequencing analysis application.`,
        originalHeight: '450px',
    },
    {
        original: '../images/pipeline-diagram.png',
        thumbnail: '../images/pipeline-diagram.png',
        description: `The diagram depicts the process of a pipeline made to 
        analyze pathogens. This includes finding its phylogeny and 
        its evolutionary history from only a sequenced genome. This is 
        from a project for the Grunwald lab at Oregon State University.`,
        originalHeight: '450px',
    },
    {
        original: '../images/room-design-lineart.png',
        thumbnail: '../images/room-design-lineart.png',
        description: `The lineart displays a possible bedroom layout. This was 
        made for personal uses, but uses graphic design techniques from 
        past graphic design projects.`,
        originalHeight: '450px',
    },
];

function Gallery(){

    return(

        <>
            <h2>Gallery</h2>
            <p>Below are images of previous projects.</p>
            <article>
                <ImageGallery items={images} />
            </article>
    </>
    );
}

export default Gallery;