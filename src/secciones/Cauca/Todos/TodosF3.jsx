import { useState } from "react";
import { useDispatch } from "react-redux";
import { pararAudios } from "../../../Redux/states/managerSlice";
import YT from "../../../components/YT";
import playImg from "../../../assets/generales/play_video.png";
const mariposas = 'https://res.cloudinary.com/dumlhmvts/image/upload/v1718068768/cauca/todos/mariposas_1_unbfgi.png'
const guayaberoThumbnail =
  "https://res.cloudinary.com/dumlhmvts/image/upload/v1718064038/cauca/todos/Fotograma-Vivir-en-las-Brisas_koxmld.jpg";
import abajo from "../../../assets/generales/abajo.png";
import "./TodosF3.css";

const TodosF3 = ({ sound, audioFx }) => {
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
    const div = document.getElementById("youtube-todos-2");
    div.style.visibility = "visible";

    jorgeYoutubeRef?.playVideo();
  };

  const pintarVideo = () => {
    return (
      <div id="youtube-todos-2" className="youtube-video">
        <YT
          refYoutubeFx={refYoutubeJorge}
          youtubeVideoId="jlLk_ESiY6w"
          imgThumbnail={guayaberoThumbnail}
          id="youtube-todos-2"
        />
      </div>
    );
  };

  return (
    <>
      {pintarVideo()}
      <div className="todos-f3">
        <div className="mask-general">
          <div className="contenido-general">
            <div className="todos-f3-interior">
              <div className="todos-f3-grafica">
                <img src={mariposas} alt="" />
              </div>
              <div className="todos-f3-play">
                {mostrarPlay && (
                  <img onClick={handleOnClick} src={playImg} alt="play" />
                )}
                {!mostrarPlay && <p>Espera un momento...</p>}
              </div>
              <div className="todos-f3-frase">
                <h3>Vivir en Las Brisas</h3>
                <p>
                  El diverso mundo local visto por dos niños de la vereda Las
                  Brisas.
                </p>
              </div>
              <div className="canal-b-abajo">
                <img src={abajo} alt="abajo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosF3;
