import styles from './Player.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';

export default function Player() {
    return(
        <>
        <Banner imagem="player" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        </>
    )
};