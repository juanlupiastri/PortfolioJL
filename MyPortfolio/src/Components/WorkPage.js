import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const WorkPage = () => {
  return (
    <div className='topicInfo'>
      <Timeline>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent> Now
            <div className='timeLineContent'>
              <h2>
                <i>
                  Ciemsa
                </i>
              </h2>
              <p>
                Main client here was Mayor of Montevideo.
                I've worked on projects about radars, tolls and fines for them.
                All these projects was the big importance to Mayor because
                their employees needs these systems to do their work properly.
                The team was in charge of build good solutions,
                on the second hand make optimized systems are
                crucial to mantain these services. I started doing the
                FrontEnd development mainly, but as i was working as
                a software developer, i deep myself into BackEnd development too.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>June / 2022</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>May / 2022
            <div className='timeLineContent'>
              <h2><i> Freelance </i></h2>
              <p>- As Frontend developer on projects related to education, construction and mining for
                Apptitud, a StartUp located in Chile.
              </p>

              <p>- As Frontend developer on a project about Human Resources for a
                Transport Company located in Salto, a city in the north of Uruguay. The project
                was done to use it in Brazil, Uruguay and United States, so we had
                to develop a solution that could adapt itself to different languages without
                neglect the design or user experience.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent> March / 2021
          </TimelineContent>
        </TimelineItem>



      </Timeline>


    </div>
  )
}

export default WorkPage