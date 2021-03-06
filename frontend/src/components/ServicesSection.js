import React from 'react'
import styled from 'styled-components'

// Import icons
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faGraduationCap, faImages, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { About, Description, Image } from '../styles'

const ServicesSection = () => {
    return (
        <Services>
            <Image>
            <img src='https://sucodemanga.com.br/wp-content/uploads/2018/09/anime-sad-thumb.jpg'></img>
            </Image>
            <ServiceDescription>
                <h2>Coisas que eu faço</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon icon={faLaptopCode} size='4x'/>
                            <h3>Portfolio</h3>
                        </div>
                        <p>Veja meus trabalhos no meu portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon icon={faGraduationCap} size='4x'/>
                            <h3>Cursos</h3>
                        </div>
                        <p>Veja meus trabalhos no meu portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon icon={faImages} size='4x'/>
                            <h3>Hobbies</h3>
                        </div>
                        <p>Veja meus trabalhos no meu portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                        <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                            <h3>Github</h3>
                        </div>
                        <p>Veja meus trabalhos no meu portfolio</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const ServiceDescription = styled(Description)`
    flex: 2;
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        img{
        fill: blue;
        }
        h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
        }
    }
`

const Video = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
`

export default ServicesSection