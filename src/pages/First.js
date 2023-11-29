import React, { useEffect, useState } from 'react';

import { Book, BookContent, Main, MainContent, MainLink, MainText } from '../styles/BaseStyle';

import ProjectSpotlight from '../components/ProjectSpotlight';
import NavSection from '../components/NavSection';

import { Document, Page, pdfjs } from 'react-pdf';

import { useNavigate } from 'react-router-dom';

import { isMobile } from 'react-device-detect';

import first from '../books/first.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const First = () => {
    const navigate = useNavigate();

    const [numPages, setNumPages] = useState(null);
    const [loadError, setLoadError] = useState(false);

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

            {(!isMobile && !loadError) ?
                <Book>
                    <BookContent>
                        <Document
                            file={first}
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
                            Unfortunately, the collection is not optimized for your broswer. Please go to bhadayun.com on a web broswer or this <a href="https://drive.google.com/file/d/1cPeOVX00EPs94getp1egbzr1JZpq4yfU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive link</a>
                        </MainText>
                    </Main>
                </MainContent>
            }

            {NavSection()}

            <MainContent>
                <Main>
                    <MainLink onClick={() => navigate("/last")} style={{ textAlign: 'center', textDecoration: 'underline', textDecorationThickness: 1.5 }}>
                        For every first, there is a last.
                    </MainLink>
                </Main>
            </MainContent>
        </>
    );
};

export default First;

