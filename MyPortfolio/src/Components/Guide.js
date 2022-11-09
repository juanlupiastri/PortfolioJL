import { Box, FormControlLabel, IconButton, Paper, Slide, Switch, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WorkPage from './WorkPage';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Technologies from './Technologies';


const Guide = () => {
    const [showWork, setShowWork] = React.useState(false);
    const [showAbout, setShowAbout] = React.useState(false);
    const [showContact, setShowContact] = React.useState(false);
    const [showTechnologies, setShowTechonologies] = React.useState(false);
    const [checkedBtn, setCheckedBtn] = React.useState(true);

    const showWorkPage = () => {
        setShowWork((prev) => !prev);
        handleChange();
    }
    const showAboutPage = () => {
        setShowAbout((prev) => !prev);
        handleChange();
    }
    const showContactPage = () => {
        setShowContact((prev) => !prev);
        handleChange();
    }
    const showTechnologiesPage = () => {
        setShowTechonologies((prev) => !prev);
        handleChange();
    }

    const handleChange = () => {
        setCheckedBtn((prev) => !prev);
    };

    return (
        <div id='guideContainer'>

            <Slide direction="left" in={checkedBtn}>
                <div className='btnGuideContainer'>
                    <Button variant="contained" onClick={showWorkPage} className='btnGuide'><p>Work</p></Button>
                    <Button variant="contained" onClick={showAboutPage} className='btnGuide'><p>About</p></Button>
                    <Button variant="contained" onClick={showTechnologiesPage} className='btnGuide'><p>Technologies</p></Button>
                    <Button variant="contained" onClick={showContactPage} className='btnGuide'><p>Contact</p></Button>
                </div>
            </Slide>
            <div className='pageBox'>
                <Box >
                    <Slide direction="left" in={showWork} mountOnEnter unmountOnExit>
                        <div className='topicContainer'>
                            <div className='mainBarTopic'>
                                <IconButton className='btnExit' aria-label="delete" onClick={showWorkPage}>
                                    <ChevronRightIcon />
                                </IconButton>
                                <p>
                                    Work
                                </p>
                            </div>
                            <Paper className='paperInfo' sx={{ m: 5 }} elevation={8}>
                                <WorkPage />
                            </Paper>
                        </div>
                    </Slide>
                </Box>

                <Box>
                    <Slide direction="left" in={showAbout} mountOnEnter unmountOnExit>
                        <div className='topicContainer'>
                            <div className='mainBarTopic'>
                                <IconButton className='btnExit' aria-label="delete" onClick={showAboutPage}>
                                    <ChevronRightIcon />
                                </IconButton>
                                <p>
                                    About
                                </p>
                            </div>
                            <Paper className='paperInfo' sx={{ m: 1 }} elevation={4}>
                                <About />
                            </Paper>
                        </div>
                    </Slide>
                </Box>

                <Box >
                    <Slide direction="left" in={showTechnologies} mountOnEnter unmountOnExit>
                        <div className='topicContainer'>
                            <div className='mainBarTopic'>
                                <IconButton className='btnExit' aria-label="delete" onClick={showTechnologiesPage}>
                                    <ChevronRightIcon />
                                </IconButton>
                                <p>
                                    Technologies
                                </p>
                            </div>
                            <Paper className='paperInfo' sx={{ m: 1 }} elevation={4}>
                                <Technologies />
                            </Paper>
                        </div>
                    </Slide>
                </Box>

                <Box >
                    <Slide direction="left" in={showContact} mountOnEnter unmountOnExit>
                        <div className='topicContainer'>
                            <div className='mainBarTopic'>
                                <IconButton className='btnExit' aria-label="delete" onClick={showContactPage}>
                                    <ChevronRightIcon />
                                </IconButton>
                                <p>
                                    Contact
                                </p>
                            </div>
                            <Paper className='paperInfo' sx={{ m: 1 }} elevation={4}>
                                <Contact />
                            </Paper>
                        </div>
                    </Slide>
                </Box>
            </div>

        </div>
    );
};


export default Guide; 