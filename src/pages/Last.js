import React, { useEffect, useState } from 'react';

import { Book, BookContent, Main, MainContent, MainLink, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

import { Document, Page, pdfjs } from 'react-pdf';

import { useNavigate } from 'react-router-dom';

import { isMobile } from 'react-device-detect';

import last from '../last.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Last = () => {
    const navigate = useNavigate();

    const [numPages, setNumPages] = useState(null);

    const [pageWidth, setPageWidth] = useState(Math.min(window.innerWidth, 550));

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const handleResize = () => setPageWidth(Math.min(window.innerWidth, 550));

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
                        Back in 2019, I published my first poetry collection.
                    </MainText>
                    <MainText>
                        In it, I explored the triple meaning of the title 'Last': the past, the end, and the enduring.
                    </MainText>
                    <MainText>
                        There are 71 poems in total, with extra mini-poems scattered throughout.
                    </MainText>
                    <MainText>
                        Below, you can read through the full collection. It's separated into 5 parts, each with a very different focus and mood.
                    </MainText>
                    <MainText>
                        I hope you enjoy something.
                    </MainText>
                </Main>
            </MainContent>
            <Book>
                <BookContent>
                    {!isMobile ?
                        <Document
                            file={last}
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
                    <MainLink onClick={() => navigate("/first")} style={{ textAlign: 'center', textDecoration: 'underline' }}>
                        For every last, there is a first.
                    </MainLink>
                </Main>
            </MainContent>
        </>
    );
};

export default Last;

