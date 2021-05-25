import React from 'react'

import {About, Description, Image} from '../styles'

const AboutSection = () => {
    return(
        <About>
            <Description>
                <h2>Ramon Mangueira</h2>
                <h2>Analista de Sistemas</h2>

                <p>
                    Eu sou Analista de Sistemas, graduado em Análise e Desenvolvimento de Sistemas pela universidade Estácio de Sá. Um apaixonado por inovação e tecnologia.
                </p>

                <button>Contacte-me</button>

            </Description>

            <Image>
                <img src='https://sucodemanga.com.br/wp-content/uploads/2018/09/anime-sad-thumb.jpg'></img>
            </Image>
        </About>
    )
}


export default AboutSection