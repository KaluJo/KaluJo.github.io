import React, { useEffect, useState } from 'react';

import { Book, BookContent, Main, MainContent, MainLink, MainText } from '../styles/BaseStyle';

import NavSection from '../components/NavSection';

import { Document, Page, pdfjs } from 'react-pdf';

import { useNavigate } from 'react-router-dom';

import { isMobile } from 'react-device-detect';

import eser from '../books/eser.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Conlangs = () => {
    const navigate = useNavigate();

    const [numPages, setNumPages] = useState(null);
    const [loadError, setLoadError] = useState(false);

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
                        One of my hobbies is creating constructed languages, or 'conlangs'.
                    </MainText>
                    <MainText>
                        Making languages is a way for me to explore the curiosity I have about human communication.
                    </MainText>
                    <MainText>
                        Below is one example of a language I created a couple years ago, called Eser.
                    </MainText>
                </Main>
            </MainContent>

            {(!isMobile && !loadError) ?
                <Book>
                    <BookContent>
                        <Document
                            file={eser}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={() => setLoadError(true)}
                        >
                            {pages}
                        </Document>
                    </BookContent>
                </Book>
                :
                <MainContent>
                    <Main>
                        <MainText>
                            Unfortunately, the collection is not optimized for your broswer. Please go to bhadayun.com on a web broswer or this <a href="https://drive.google.com/file/d/1WkX3DJ14pa9p9vQiX6Yfe4B1kPPjyOiV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive link</a>
                        </MainText>
                    </Main>
                </MainContent>
            }

            {NavSection()}

            <MainContent>
                <Main>
                    <MainText style={{ textAlign: 'center' }}>
                        with fire to order, comes chaos to form
                    </MainText>
                </Main>
            </MainContent>
        </>
    );
};

export default Conlangs;

