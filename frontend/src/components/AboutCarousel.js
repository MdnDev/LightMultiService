import React from 'react'
import { Carousel, Col, Row, Container } from 'react-bootstrap'

const AboutCarousel = () => {
  return (
    <Container>
    <Carousel  pause="hover" className="my-2" style={{ backgroundColor: 'snow'}}>
        <Carousel.Item>
            <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner3.jpg" alt="alt" fluid/>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <p className='aboutParagraph py-5 '>
                Ce projet a pris naissance parallèlement aux prémices du cinéma guyanais.

                Dans les années 1990, Alain Maline, réalisateur notamment de « Cayenne palace » tourné en Guyane, met en oeuvre un projet de studio de production à Montsinery dans lequel il tourne le film « Jean Galmot, aventurier".
                </p>
            </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner.jpg" alt="alt" fluid/>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <p className='aboutParagraph py-5 '>
                Pour cela, il procède à un investissement massif de matériels notamment dans le domaine de la lumière.
                En collaboration avec l’ANPE, la Région et le Département Guyane, il conçoit un programme de formation permettant à 11 techniciens guyanais de partir en métropole se former à différents corps de métiers liés au cinéma.
                </p>
                </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner2.jpg" alt="alt" fluid/>
                </Col>

                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <p className='aboutParagraph py-5 '>
                    
                    Rollin NOKO en fait partie. A cette occasion, il découvre les
                    coulisses d’un des plus gros loueurs de matériels électriques spécialisés dans le domaine c i n é m a t o g r a p h i q u e, TRANSPALUX.
                    Par la suite, il participe au tournage du long métrage « La Grande Béké » en Martinique.
                    Il intègre ensuite la chaine régionale Guyane la 1ere, alors dénommée RFO Guyane, tout en poursuivant une carrière d’électricien de tournage sur différentes productions locales et nationales.
                </p>
                </Col>
            </Row>
        </Carousel.Item>
    </Carousel>


    <Carousel pause="hover" className="my-2" style={{ backgroundColor: 'honeydew'}}>
        <Carousel.Item>
            <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6" className="ml-2">
                <p className='aboutParagraph py-5'>
                La reconnaissance de ses pairs et une réponse adaptée aux demandes !
                </p>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner3.jpg" alt="alt" fluid/>
            </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <p className='aboutParagraph py-5 '>
                    

                    Face à l’augmentation des demandes et à la multiplication des projets en Guyane, il décide d’investir sur de nouveaux matériels et crée sa première structure en tant qu’auto entrepreneur en 2012.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner.jpg" alt="alt" fluid/>
                </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <p className='aboutParagraph py-5 '>

                    Suite aux nombreuses sollicitations, il se crée un tissu d’une clientèle diversifiée qui l’amène à investir l’ensemble de ses bénéfices dans de nouvelles acquisitions.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner2.jpg" alt="alt" fluid/>
                </Col>
            </Row>
        </Carousel.Item>
    </Carousel>


    <Carousel pause="hover" className=" my-2" style={{ backgroundColor: 'snow'}}>
        <Carousel.Item>
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <p className='aboutParagraph py-5 '>
                            Sa renommée le devance et c’est ainsi qu’il devient un prestataire incontournable très rapidement. Il devient ainsi fournisseur de
                            matériel électrique sur la plupart des projets cinématographiques et audiovisuels, du petit clip aux plus grandes séries tournés en Guyane, etc..
                    </p>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner3.jpg" alt="alt" fluid/>
                </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <p className='aboutParagraph py-5 '>
                            Mu par son ambition et sa volonté de développer l’activité cinématographique en Guyane, M Noko cesse son activité d’autoentrepreneur et crée la SASU LIGHT MULTI - SERVICES en Janvier 2015.
                            Il poursuit sa stratégie de réinjection des bénéfices de la société dans de nouveaux
                            investissements chaque année.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner.jpg" alt="alt" fluid/>
                </Col>
            </Row>
        </Carousel.Item>


        <Carousel.Item >
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <p className='aboutParagraph py-5 '>
                        Il complète ainsi peu à peu le stock de matériel et se diversifie afin de répondre aux
                        demandes des productions et satisfaire ainsi les besoins pour tout type de tournage.
                    </p>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <img  style={{ height: '100%', width: '100%', borderRadius: '0%', margin: '0px'}} src="../../images/protPartner2.jpg" alt="alt" fluid/>
                </Col>
            </Row>
        </Carousel.Item>
    </Carousel>
    </Container>

    
  )
}

export default AboutCarousel