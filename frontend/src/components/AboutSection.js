import React from 'react'
import AboutUs from '../pages/aboutUs'

import styled from 'styled-components'

const AboutSection = () => {
    return(
        <div>
            <Titulo>
                <h2>Ramon Mangueira</h2>
                <h2>Analista de Sistemas</h2>
            </Titulo>

            <p>
                Eu sou Analista de Sistemas, graduado em Análise e Desenvolvimento de Sistemas pela universidade Estácio de Sá. Um apaixonado por inovação e tecnologia.
            </p>

            <button>Contacte-me</button>

            <img src='https://sucodemanga.com.br/wp-content/uploads/2018/09/anime-sad-thumb.jpg'></img>

        </div>
    )
}

const Titulo = styled.div`
    background: red;
`;

export default AboutSection