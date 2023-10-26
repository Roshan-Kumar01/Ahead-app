  import * as React from 'react';
  import Timeline from '@mui/lab/Timeline';
  import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
  import TimelineSeparator from '@mui/lab/TimelineSeparator';
  import TimelineConnector from '@mui/lab/TimelineConnector';
  import TimelineContent from '@mui/lab/TimelineContent';
  import TimelineDot from '@mui/lab/TimelineDot';
  import CustomTypography from './commonComponent/CustomTypography';
  import { Stack } from '@mui/material';
  
  export default function NoOppositeContent() {
    return (
      <Timeline
        sx={{
          position: 'relative',
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      > 
        <Stack sx={{position: 'absolute'}}></Stack>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary'/>
            <TimelineConnector sx={{backgroundColor: 'rgb(154,132,247)'}}/>
          </TimelineSeparator>
          <TimelineContent>
              <CustomTypography
                  value={`It's not as easy as 1-2-3`}
                  variant='h6'
                  style={{ marginBottom: '1.5%', }}
              />
              <CustomTypography
                  value={<span>The journey of change may be long but our session are quick. We get <br/> to the point and tell you what you want to know (and nothing else).</span>}
                  variant='body1'
                  style={{ marginBottom: '3%', }}
              />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector sx={{backgroundColor: 'rgb(154,132,247)'}}/>
          </TimelineSeparator>
          <TimelineContent>
              <CustomTypography
                  value={`Old habbits are hard to break.`}
                  variant='h6'
                  style={{ marginBottom: '1.5%', }}
              />
              <CustomTypography
                  value={<span>And bad behaviours die hard. Fortunately we give you great science- <br/> backend technique to use.</span>}
                  variant='body1'
                  style={{ marginBottom: '3%', }}
              />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector sx={{backgroundColor: 'rgb(154,132,247)'}}/>
          </TimelineSeparator>
          <TimelineContent>
              <CustomTypography
                  value={`Old habbits are hard to break.`}
                  variant='h6'
                  style={{ marginBottom: '1.5%', }}
              />
              <CustomTypography
                  value={<span>And bad behaviours die hard. Fortunately we give you great science- <br/> backend technique to use.</span>}
                  variant='body1'
                  style={{ marginBottom: '3%', }}
              />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector sx={{backgroundColor: 'rgb(154,132,247)'}}/>
          </TimelineSeparator>
          <TimelineContent>
              <CustomTypography
                  value={`Old habbits are hard to break.`}
                  variant='h6'
                  style={{ marginBottom: '1.5%', }}
              />
              <CustomTypography
                  value={<span>And bad behaviours die hard. Fortunately we give you great science- <br/> backend technique to use.</span>}
                  variant='body1'
                  style={{ marginBottom: '3%', }}
              />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }