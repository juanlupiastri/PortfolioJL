import React from 'react';
import Cv from '../CvFiles/CV.pdf';
import EnglishCv from '../CvFiles/Cv_english.pdf';
import ig from "../icons/ig.png"
import github from "../icons/github.png"
import cvIcon from "../icons/cv.png"
import linkedin from "../icons/linkedin.png"
import gmail from "../icons/gmail.png"
import wpp from "../icons/wpp.webp"

import { ImageList, ImageListItem, Tooltip, Zoom } from '@mui/material';

const Contact = () => {
    return (
        <div className='topicInfo contactInfo'>

            <ImageList sx={{ width: 600, height: 600 }} className="imgList listContact">
                <h2 className='techTitle'>Personal</h2>
                <a href={Cv} target="_blank" rel="noopener noreferrer">
                    <ImageListItem className='contactItem'>
                        <Tooltip title="Curriculum Vitae" arrow TransitionComponent={Zoom}>
                            {/* si selecciona esta opcion aparece un toast y dos botones
                        con opciones de descarga en español o en ingles */}
                            <img className="imgContact"
                                src={cvIcon}
                                alt="CV"
                            />
                        </Tooltip>
                    </ImageListItem >
                </a>
                <a href="mailto:juanlu2116t@gmail.com?Subject=Contacto%20por%20portfolio%20">
                    <ImageListItem className='contactItem'>
                        <Tooltip title="Send mail to 'juanlu2116t@gmail.com'" arrow TransitionComponent={Zoom}>
                            <img className="imgContact"
                                src={gmail}
                                alt="gmail"
                            />
                        </Tooltip>
                    </ImageListItem>
                </a>
                <a href="https://wa.me/+59899160227">
                <ImageListItem className='contactItem'>
                        <Tooltip title="Send me a message" arrow TransitionComponent={Zoom}>
                            <img className="imgContact"
                                src={wpp}
                                alt="WhatsApp"
                            />
                        </Tooltip>
                    </ImageListItem>
                </a>
            </ImageList>

            <ImageList sx={{ width: 600, height: 600 }} className="imgList listContact">
                <h2 className='techTitle h2SocialMedia' >Social Media</h2>
                <a href="https://www.linkedin.com/in/juan-lucas-piastri-208249209/">
                    <ImageListItem className='contactItem' >
                        <Tooltip title="Linkedin Proffile" arrow TransitionComponent={Zoom}>
                            <img className="imgContact"
                                src={linkedin}
                                alt="linkedin"
                            />
                        </Tooltip>
                    </ImageListItem>
                </a>
                <a href="https://github.com/juanlupiastri">
                    <ImageListItem className='contactItem' >
                        <Tooltip title="GitHub Account" arrow TransitionComponent={Zoom}>
                            <img className="imgContact"
                                src={github}
                                alt="github"
                            />
                        </Tooltip>
                    </ImageListItem>
                </a>
                <a href="https://www.instagram.com/juanlupiastri/">
                    <ImageListItem className='contactItem'  >
                        <Tooltip title="Instagram Proffile" arrow TransitionComponent={Zoom}>
                            <img className="imgContact"
                                src={ig}
                                alt="Instagram Proffile"
                            />
                        </Tooltip>
                    </ImageListItem>
                </a>
            </ImageList>
            {/* <h2>Mail</h2>
            <h2>CV</h2>
            <button className="btnCV">
                <a href={EnglishCv} target="_blank" rel="noopener noreferrer">English CV</a>
            </button>
            <button className="btnCV">
                <a href={Cv} target="_blank" rel="noopener noreferrer">Spanish CV</a>
            </button> */}
        </div>
    );
};

export default Contact;