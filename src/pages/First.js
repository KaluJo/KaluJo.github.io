import React, { useEffect, useState } from 'react';

import { Book, BookContent, Main, MainContent, MainLink, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

import { Document, Page, pdfjs } from 'react-pdf';

import { useNavigate } from 'react-router-dom';

import { isMobile } from 'react-device-detect';

import first from '../first.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const First = () => {
    const navigate = useNavigate();

    const [numPages, setNumPages] = useState(null);

    const [pageWidth, setPageWidth] = useState(Math.min(window.innerWidth, 800));

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const handleResize = () => setPageWidth(Math.min(window.innerWidth, 800));

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pages = Array.from(
        new Array(numPages),
        (el, index) => (
            <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={pageWidth}
            />
        )
    );

    return (
        <>
            <MainContent>
                <Main>
                    <MainText>
                        Below is a collection of some of my art from ages 2-7.
                    </MainText>
                    <MainText>
                        My aunt, who is a graphic designer, graciously made this into a book for me.
                    </MainText>
                    <MainText>
                        (There are a lot of images, so it may take a second to load)
                    </MainText>
                </Main>
            </MainContent>

            <Book>
                <BookContent>
                    {!isMobile ?
                        <Document
                            file={first}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={console.error}
                        >
                            {pages}
                        </Document>
                        :
                        <MainText>
                            Looks like you're on mobile. Unfortunately, the collection is not optimized for mobile yet. Please go to bhadayun.com on a web broswer.
                        </MainText>
                    }
                </BookContent>
            </Book>

            {NavSection()}

            <MainContent>
                <Main>
                    <MainLink onClick={() => navigate("/last")} style={{ textAlign: 'center', textDecoration: 'underline' }}>
                        For every first, there is a last.
                    </MainLink>
                </Main>
            </MainContent>
        </>
    );
};

export default First;

