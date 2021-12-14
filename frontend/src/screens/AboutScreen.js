import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit";
import GearNav from '../components/NavBar';


const About = () => {
    return (
        <div className="d-grid gap-3">
            <h1 className='text-center' style={{color: 'green'}}>LIGHT MUTLI SERVICES</h1>
            <MDBRow className="mt-5" style={{backgroundColor: 'snow'}}>
                <MDBCol xs="12" sm="12" md="12" lg="6" >
                    <MDBContainer>
                    <h3 style={{color: 'green'}}>De la découverte d’un métier…</h3>
                    <p > 
                        Ce projet a pris naissance parallèlement aux prémices du cinéma guyanais.

                        Dans les années 1990, Alain Maline, réalisateur notamment de « Cayenne palace » tourné en Guyane, met en oeuvre un projet de studio de production à Montsinery dans lequel il tourne le film « Jean Galmot, aventurier".
                        Pour cela, il procède à un investissement massif de matériels notamment dans le domaine de la lumière.
                        En collaboration avec l’ANPE, la Région et le Département Guyane, il conçoit un programme de formation permettant à 11 techniciens guyanais de partir en métropole se former à différents corps de métiers liés au cinéma.

                        Rollin NOKO en fait partie. A cette occasion, il découvre les
                        coulisses d’un des plus gros loueurs de matériels électriques spécialisés dans le domaine c i n é m a t o g r a p h i q u e, TRANSPALUX.
                        Par la suite, il participe au tournage du long métrage « La Grande Béké » en Martinique.
                        Il intègre ensuite la chaine régionale Guyane la 1ere, alors dénommée RFO Guyane, tout en poursuivant une carrière d’électricien de tournage sur différentes productions locales et nationales.
                    </p>
                    </MDBContainer>
                </MDBCol>
                <MDBCol xs="6" sm="12" md="12" lg="6" >
                    <img  style={{width: '100%'}} src="../../images/protPartner3.jpg" fluid/>
                </MDBCol>
            </MDBRow>

            <MDBRow style={{backgroundColor: 'honeydew'}}>
                <MDBCol xs="12" sm="12" md="12" lg="6" >
                    <img style={{width: '100%'}} src="../../images/protPartner.jpg"/>
                </MDBCol>
                <MDBCol xs="12" sm="12" md="12" lg="6" >
                    <MDBContainer className="py-5">
                        <h3 style={{color: 'green'}}>A la naissance d’un projet entrepreneurial…</h3>
                        <p>
                            Suite à l’abandon de son projet de studio, M Maline demande à M Noko, en qui il a toute confiance, de prendre en charge la gestion du matériel électrique restant.
                            C’est à cette occasion que Rollin Noko poursuit le projet en préparant, livrant et réceptionnant le matériel électrique pour différents tournages se déroulant en Guyane.
                            Mais l’absence de projets d’envergure contraint A. Maline à se séparer de son matériel en 2012.
                            Il propose alors à Mr Noko de lui racheter le matériel électrique et d’ouvrir sa propre structure de location. En l’absence des fonds nécessaires, M. Noko décline, à contre coeur, la proposition.

                            Le matériel est alors vendu aux Antilles.
                            Face aux sollicitations et avec le peu de matériel en sa possession, Rollin Noko a un déclic. Il propose alors ses services en tant que technicien avec bijoute.
                        </p>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>

            <MDBRow style={{backgroundColor: 'snow'}}>
                <MDBCol xs="12" sm="12" md="12" lg="6" >
                    <MDBContainer className="py-5">
                        <h3 style={{color: 'green'}}>C’est le début de l’aventure !</h3>
                        <p>
                            La reconnaissance de ses pairs et une réponse adaptée aux demandes !
                            Face à l’augmentation des demandes et à la multiplication des projets en Guyane, il décide d’investir sur de nouveaux matériels et crée sa première structure en tant qu’auto entrepreneur en 2012.
                            Suite aux nombreuses sollicitations, il se crée un tissu d’une clientèle diversifiée qui l’amène à investir l’ensemble de ses bénéfices dans de nouvelles acquisitions.
                        </p>
                    </MDBContainer>
                </MDBCol>
                <MDBCol xs="12" sm="12" md="12" lg="6"  >
                    <Image style={{width: '100%'}} src="../../images/protPartner2.jpg"/>
                </MDBCol>
            </MDBRow>

            <MDBRow className="mb-5" style={{backgroundColor: 'honeydew'}}>
                <MDBCol xs="12" sm="12" md="12" lg="6"  >
                    <Image style={{width: '100%'}} src="../../images/protPartner4.jpg"/>
                </MDBCol>

                <MDBCol xs="12" sm="12" md="12" lg="6" >
                    <MDBContainer className="py-5">
                        <h3 style={{ color: 'green'}}>C’est le début de l’aventure !</h3>
                        <p>
                            Sa renommée le devance et c’est ainsi qu’il devient un prestataire incontournable très rapidement. Il devient ainsi fournisseur de
                            matériel électrique sur la plupart des projets cinématographiques et audiovisuels, du petit clip aux plus grandes séries tournés en Guyane, etc..


                            Mu par son ambition et sa volonté de développer l’activité cinématographique en Guyane, M Noko cesse son activité d’autoentrepreneur et crée la SASU LIGHT MULTI - SERVICES en Janvier 2015.
                            Il poursuit sa stratégie de réinjection des bénéfices de la société dans de nouveaux
                            investissements chaque année.
                            Il complète ainsi peu à peu le stock de matériel et se diversifie afin de répondre aux
                            demandes des productions et satisfaire ainsi les besoins pour tout type de tournage.
                        </p>
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default About
