import useVideoContext from '../useVideoContext/useVideoContext';
import useParticipants from '../useParticipants/useParticipants';

export default function useMainSpeaker() {
  const participants = useParticipants();

  const {
    room: { localParticipant },
  } = useVideoContext();

  // The participant that is returned is displayed in the main video area. Changing the order of the following
  // variables will change the how the main speaker is determined.
  return participants[0] || localParticipant;
}
