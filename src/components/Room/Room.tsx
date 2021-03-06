import React from 'react';
import ParticipantStrip from '../ParticipantStrip/ParticipantStrip';
import { styled } from '@material-ui/core/styles';
import MainParticipant from '../MainParticipant/MainParticipant';

const Container = styled('div')({
  position: 'relative',
  height: '100%',
});

const MainParticipantContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  '& > div': {
    height: '100%',
  },
}));

export default function Room() {
  return (
    <Container>
      <ParticipantStrip />
      <MainParticipantContainer>
        <MainParticipant />
      </MainParticipantContainer>
    </Container>
  );
}
