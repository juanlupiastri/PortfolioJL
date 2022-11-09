import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import examResult from "../CvFiles/examResult.jpeg"
import { Tooltip, Zoom } from '@mui/material';
import b2 from "../icons/b2.png"
import webProgrammer from '../CvFiles/webProgrammer.pdf';
import degreeIcon from "../icons/degreeIcon.png"






const About = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='topicInfo aboutInfo'>
            <h2>Skills:</h2>
            <div className='skillList'>

            <p>- Problem-solving</p>
            <p>- Management and organization</p>
            <p>- Quick-to-learn person</p>
            <p>- Team Work</p>
            <p>- Communication</p>
            <p>- Creativity</p>
            </div>

            <h2>Certificates:</h2>
            <div className='certificates'>
                <Tooltip title="Show Statement of result" arrow TransitionComponent={Zoom}>
                    <Button className='btnClose' variant="outlined" onClick={handleClickOpen}>
                        <img className="imgContact imgB2"
                            src={b2}
                        />
                    </Button>
                </Tooltip>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <img
                            className='examResult'
                            src={examResult}
                            alt="CV"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button className='btnClose' onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
                <a href={webProgrammer} target="_blank" rel="noopener noreferrer">
                    <div className="webProgrammerIcon">
                        <Tooltip title="Web Programmer Degree" arrow TransitionComponent={Zoom}>
                            <img className="imgContact imgB2"
                                src={degreeIcon}
                            />
                        </Tooltip>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default About;