import React, { useRef, useEffect } from 'react';
import { IVideoTrack } from '../../types';
import { styled } from '@material-ui/core/styles';
import { Track } from 'twilio-video';

const Video = styled('video')({
  width: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

interface VideoTrackProps {
  track: IVideoTrack;
  isLocal?: boolean;
  isPreview?: boolean;
  priority?: Track.Priority;
}

export default function VideoTrack({ track, isLocal, priority, isPreview }: VideoTrackProps) {
  const ref = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    const el = ref.current;
    el.muted = true;
    if (track.setPriority && priority) {
      track.setPriority(priority);
    }
    track.attach(el);
    return () => {
      track.detach(el);
      if (track.setPriority && priority) {
        // Passing `null` to setPriority will set the track's priority to that which it was published with.
        track.setPriority(null);
      }
    };
  }, [track, priority]);

  var style = {};

  if (isPreview) {
    style = {
      transform: 'translateY(-50%) rotateY(180deg)',
      top: '40%',
      position: 'absolute',
    };
  } else if (isLocal) {
    style = { transform: 'rotateY(180deg)' };
  } else {
    style = {};
  }

  return <Video ref={ref} style={style} />;
}
