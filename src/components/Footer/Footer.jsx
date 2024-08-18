import { useContext, useEffect, useRef, useState } from "react";
import songImg from "../../assets/song-img.jpg"
import styles from "./Footer.module.css"
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

import { BsPlayFill } from "react-icons/bs";
import { Howl, Howler } from 'howler';
import { UserContext } from "../../App";
import axios from "axios";

export default function Footer({ isPlaying, setIsPlaying }) {

    const { currentSong } = useContext(UserContext);

    const audioRef = useRef(new Audio());

    const [sound, setSound] = useState(null);


    const playAudio = () => {
        
    };

    const handlePause = () => {

    };


    return (
        <footer>

            {/* Progress bar */}
            <div className={styles.progressBarContainer}>

                <div className={styles.progressBar}>
                    <div className={styles.backGrey} />
                    <div className={styles.steps} style={{ width: `${50}% ` }} />
                </div>

            </div>

            {/* Song Menu */}

            <div className={styles.footerBottom}>

                <div className={styles.songName}>
                    <div className={styles.songImage}>
                        <img src={songImg} alt="song-image" />
                    </div>
                    <ul className={styles.songDetails}>
                        <li>
                            <h5 className={styles.songTitle}>
                                <span className={styles.songLabel}>Name:</span> <span className={styles.songContent}>{currentSong?.name}</span>
                            </h5>
                        </li>
                        <li>
                            <p className={styles.songArtist}>
                                <span className={styles.songLabel}>Singer:</span> {currentSong?.singer}
                            </p>
                        </li>
                        <li>
                            <p className={styles.songDuration}>
                                <span className={styles.songLabel}>Duration: {currentSong?.duration}</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={styles.playLogicButtonContainer}>
                    <MdOutlineSkipPrevious className={styles.playLogicButton} />

                    {currentSong !== null ? (
                        isPlaying ? (
                            <FaCirclePause className={styles.playLogicButton} onClick={handlePause} />
                        ) : (
                            <FaCirclePlay className={styles.playLogicButton} onClick={playAudio} />
                        )
                    ) : (
                        <FaCirclePlay className={styles.playLogicButton} />
                    )}

                    <MdOutlineSkipNext className={styles.playLogicButton} />
                </div>
            </div>

        </footer>

    )
}
