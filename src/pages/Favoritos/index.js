import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import Card from "components/Card";
import videos from 'json/db.json';



export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos"/>
            <Titulo> 
                <h1>Caralhada toda</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>  
        </>
    )
}