import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Howl } from "howler";

const AudioHowler = (src) => {
  const currentAudioSrc = useSelector((state) => state.howler.src);

  const audioTema = useRef(null);

  useEffect(() => {
    audioTema.current = new Howl({
      src: [currentAudioSrc],
      loop: false,
      volume: 1,
    });

    if (currentAudioSrc) {
      audioTema.current.play();
    }

    return () => {
      audioTema.current.unload();
    };
  }, [currentAudioSrc]);

  const handleOnPlay = () => {
    // if (currentAudioSrc) {
    //   audioTema.current.play();
    // }
  };

  return <div onClick={handleOnPlay}>{currentAudioSrc}</div>;
};

export default AudioHowler;
