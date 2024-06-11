import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718063529/cauca/todos/Fotograma-Mapa-de-colores_v9zomb.jpg";
import "./TodosF2.css";

const TodosF2 = ({ sound, audioFx }) => {
  const dispatch = useDispatch();
  const [jorgeYoutubeRef, setJorgeYoutubeRef] = useState(null);
  const [mostrarPlay, setMostrarPlay] = useState(false);

  const refYoutubeJorge = (video) => {
    setJorgeYoutubeRef(video);
    dispatch(pararAudios());
    setTimeout(() => {
      setMostrarPlay(true);
    }, 1000);
  };

  const handleOnClick = () => {
    const div = document.getElementById("youtube-todos-1");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-todos-1" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="QH9SnNUH70k"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-todos-1"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="todos-f2">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="todos-f2-interior">
              {mostrarPlay && (
                <img onClick={handleOnClick} src={playImg} alt="play" />
              )}
              {!mostrarPlay && <p>Espera un momento...</p>}
              <div className="todos-f2-frase">
                <h3>Mapa de colores</h3>
                <p>
                  Niñas de la vereda San Pablo, describen su entorno y hablan de
                  qué es ser campesino. No hay diferencias entre campesinos,
                  indígenas y afros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosF2;
