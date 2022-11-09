import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Title = () => {


    return (
        <div id='titleContainer'>
            <div className="bg-6">
                <div className="glitch" data-text="My Portfolio">My Portfolio</div>
            </div>
            <div className="bg-5">
                <div className="glitch2" data-text="~ By Juanlu"> ~ By Juanlu</div>
            </div>

            <div className='backgroundProffile'>
                <div className='imgProfile2'>
                </div>
            </div>
        </div>
    );
};

export default Title;