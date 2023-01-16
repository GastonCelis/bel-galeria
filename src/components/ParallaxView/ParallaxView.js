import React from 'react'
import './ParallaxView.css'
import { Parallax } from 'react-parallax'
import {
    abrazos,
    alzando,
    bailando,
    besos,
    cumpleanios,
    disfraces,
    distraida,
    durmiendo,
    belu,
    familia,
    manos,
    miradas,
    primerFoto
} from '../../utils/images'
import fondo1 from '../../assets/fondos/liquid-cheese.png'
import fondo2 from '../../assets/fondos/rose-petals.png'
import fondo3 from '../../assets/fondos/scattered-forcefields.png'
import fondo4 from '../../assets/fondos/sun-tornado.png'
import corazon from '../../assets/heart.png'

export default function ParallaxView() {
    return (
        <div>
            <div className='header'>
                <h1>¡Bienvenida a nuestra galeria!</h1>
                <h2>Este es un pequeño paseo de recuerdos nuestros no estan todos pero me gusta ver y recordar.</h2>
            </div>
    
            <Parallax bgImage={fondo1} strength={400}>
                <div className='box'>
                    {
                        abrazos.map(abrazo => <img className='images' src={abrazo} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Cada hermoso abrazo que nos dimos era irrompible amo morir en tus brazos 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo2} strength={400}>
                <div className='box'>
                    {
                        alzando.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Tenerte ensima mio es un placer de dioses, por mas alto que te alce, el que tocaba el cielo era yo 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo4} strength={400}>
            <div className='box'>
                    {
                        bailando.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Mori la primera vez que me miraste bailando y la veces que acaricas mi cuerpo y mi cara al bailar, me derriten esas cosas y me da puder no saber que hacer porque me pones nervioso 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo1} strength={400}>
                <div className='box'>
                    {
                        besos.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Besarte es el placer mas grande lo podria hacer interminablemente es mi punto débil 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo2} strength={400}>
                <div className='box'>
                    {
                        cumpleanios.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Ya paso 1 año!!!! de tu cumple y hoy se festeja uno nuevo tus 33 ¡FELIZ CUMPLE PRECIOSA! 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo4} strength={400}>
                <div className='box'>
                    {
                        disfraces.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Amo saber que no hay locura imposible con vos lo que sea que se nos ocurra podemos cualquier idea loca, fiesta, salida y demas somos el mejor equipo 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo1} strength={400}>
                <div className='box'>
                    {
                        distraida.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Jajaja no están todas obvio porque hay mucho escraches pero amo capturarte distraida y ver la preciosidad que sos jajajaja 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo2} strength={400}>
                <div className='box'>
                    {
                        durmiendo.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Quién es capáz de hablarme de paz? nadie. Porque nadie va a saber en todo el mundo lo hermoso y pacífico que es dormir con VOS 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo4} strength={400}>
                <div className='box'>
                    {
                        familia.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Hay equipo? Por supuesto! más que equipo hay familia con la tuya con la mía nos vemos hermosos como familia 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo1} strength={400}>
                <div className='box'>
                    {
                        manos.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Cuando alguien quiera saber lo que es tocar la copa del mundo o estar al lado de la modelo más hermosa les voy a mostrar esta foto porque llevarte de la mano es igual a eso y más 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo2} strength={400}>
                <div className='box'>
                    {
                        miradas.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>De chiquito te enseñan a no perderte a volver a aprender y me morizar caminos aprenderte calles y demás, pero mirarte... mirarte es la perdición es perderme una y otra vez y con ganas mirarte en entrar en una galaxia de sentimientos mirarte.... mirarte no es para cualquiera... 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo4} strength={400}>
                <div className='box'>
                    {
                        primerFoto.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto'>Y como no.. como no volver a ver una y otra y otra vez, nuestra primera foto, aunque no eramos nada me hacias sentir todo 💕</h2>
            </Parallax>

            <Parallax bgImage={fondo3} strength={300} renderLayer={porcentaje => (
                <div>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src={corazon} alt='corazon' style={{ width: porcentaje * 700, height: porcentaje * 700 }}/>
                    </div>
                </div>
            )}>
                <div className='box final'>
                    {
                        belu.map(alzar => <img className='images' src={alzar} alt='abrazo'/>)
                    }
                </div>
                <h2 className='texto-ultimo'>💕 TE AMO CON TODA MI ALMA Y MI SER TE AMO 💕</h2>
            </Parallax>
        </div>
    )
}
