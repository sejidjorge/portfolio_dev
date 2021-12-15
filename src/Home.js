import React from 'react';
import BOOTSTRAP from './img/BOOTSTRAP.svg';
import CSS3 from './img/CSS3.svg';
import HTML5 from './img/HTML5.svg';
import JAVASCRIPT from './img/JAVASCRIPT.svg';
import MYSQL from './img/MYSQL.svg';
import PHP from './img/PHP.svg';
import REACTJS from './img/REACTJS.svg';
import WORDPRESS from './img/WORDPRESS.svg';
import EMAIL from './img/email.png';
import SITE from './img/site.png';
import LINKEDIN from './img/linkedin.png';
import WHATSAPP from './img/whatsapp.png';
import Curriculo from './upload/curriculo.pdf';


function Nav(){
    return(
        <nav className="navbar navbar-user navbar-expand-lg navbar-light bg-light fixed-top" id="navbar-user" >
            <button className="navbar-toggler text-dark border-0" type="button"  data-toggle="collapse" data-target="#navbarUser" aria-controls="navbarUser" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fi fi-rr-menu-burger"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarUser">
                <ul className="navbar-nav user-nav">
                    <li className="nav-item nav-link-user">
                        <a className="nav-link" href="#inicio">INICIO</a>
                    </li>
                    <li className="nav-item nav-link-user">
                        <a className="nav-link" href="#sobre">SOBRE</a>
                    </li>
                    <li className="nav-item nav-link-user">
                        <a className="nav-link" href="#projetos">PROJETOS</a>
                    </li>
                    <li className="nav-item nav-link-user">
                        <a className="nav-link" href="#serviços">SERVIÇOS</a>
                    </li>
                    <li className="nav-item nav-link-user">
                        <a className="nav-link" href="#contato">CONTATO</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function Presentation(){
    return(
        <div className="container-fluid ml-0 pl-0 bg-light" id="inicio">
            <div className="row">
            <div className="col-sm-6 bg-presentation container">
                    <img className="photo-bg-presentation" src={"https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=476&q=80"} alt="backgorund" />
                </div>
                <div className="col-sm-6 presentation-user container pt-5">
                    <h4 className="presentation-user-text title-user mb-0 pb-0">Olá, eu sou o</h4>
                    <h1 className="home-user presentation-user-text title-user display-user">JORGE LUÍS</h1>
                    <h3 className="presentation-user-text title-user">Desenvolvedor Front End</h3>
                    <p className="paragraph-user presentation-user-text mt-5 col-md-9 ml-0 pl-0">Desenvolvimento de sites responsivos, seguros e otimizados para E-Commerce, Blogs, Portfolios e muito mais.</p>
                    <a className="col title-user" href="https://api.whatsapp.com/send?phone=5511966028963" target="_blank" rel="noreferrer"><img src={WHATSAPP} alt="whatsapp" height="30"/> Whatsapp</a>
                    <a className="col title-user" href="https://www.linkedin.com/in/jldevfrontend/" target="_blank" rel="noreferrer"><img src={LINKEDIN} alt="Linkedin" height="30"/> Linkedin</a>
                </div>
            </div>
        </div>
    );
}

function About(){
    return(
        <div className="container-fluid bg-dark text-light pb-5" id="sobre">
            <div className="row">
                <div className="col section-user">
                    <h1 className="display-4 title-section">SOBRE O DEV</h1>
                    <div class="media">
                        <div className="media-body">
                            <p className="paragraph-user">Estudante de Análise e Desenvolvimento de sistemas, com conhecimentos sólidos em HTML, CSS, ReactJS e Bootstrap, considero a curiosidade uma de minhas maiores qualidades que aliada à facilidade de aprendizagem me levaram a ingressar no mundo da Programação e Desenvolvimento Front End.</p>
                            <p className="paragraph-user">A curiosidade me leva também a buscar me aperfeiçoar constantemente com cursos, tutoriais e na própria comunidade de desenvolvimento. Assim posso oferecer soluções únicas, inovadoras e eficazes que atendam às necessidades de cada cliente individualmente e de maneira criativa. 
                            </p>
                        </div>
                    </div>
                    <a className="btn btn-user btn-user-dark" href={Curriculo} download="Curriculo_Jorge.pdf"><i class="fi fi-rr-Download"></i> DOWNLOAD CV</a>
                </div>
            </div>
        </div>
    );
}

function CardProject(props){
    return(
        <div className="card col-md-4 user-card text-center">
            <img className="card-img-top mt-3 img-card" src={"https://images.unsplash.com/photo-1580813464570-f36c6aaa0859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"} alt="Imagem de capa do card"/>
            <div className="card-body">
                <h5 class="card-title">Título do card</h5>
                <p className="paragraph-user card-text mt-0 mb-1 pt-0 pb-1">texto do card</p>
                <a class="btn btn-user btn-user-light" href="#">detalhes</a>
            </div>
        </div>
    )
}

function Projects(){
    return(
        <div className="container-fluid pb-5 bg-light" id="projetos">
            <div className="row">
                <div className="col section-user">
                    <h1 className="display-4 title-section">PROJETOS</h1>
                    <div className="card-deck justify-content-center">
                        <CardProject/>
                        <CardProject/>
                        <CardProject/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillsItens(props){
    return(
        <div className="card col-sm-2 m-2 user-card text-center text-dark">
            <img className="card-img-top mt-3 mb-0 pb-0" height="100" src={props.img} alt={props.title}/>
            <div className="card-body mb-0 pb-0">
                <p className="card-title paragraph-user mt-0 mb-1 pt-0 pb-1">{props.title}</p>
            </div>
        </div>
    );
}

function Skills(){
    return(
        <div className="container-fluid pb-5 bg-dark text-light">
            <div className="row">
                <div className="col section-user">
                    <h1 className="display-4 title-section">HABILIDADES</h1>
                    <div className="card-deck container-fluid justify-content-center">
                        <SkillsItens img={HTML5} title="HTML5" />
                        <SkillsItens img={CSS3} title="CSS3" />
                        <SkillsItens img={JAVASCRIPT} title="JavaScript" />
                        <SkillsItens img={WORDPRESS} title="WordPress" />
                    </div>
                    <div className="card-deck container-fluid justify-content-center">
                        <SkillsItens img={REACTJS} title="ReactJS" />
                        <SkillsItens img={BOOTSTRAP} title="Bootstrap" />
                        <SkillsItens img={PHP} title="PHP" />
                        <SkillsItens img={MYSQL} title="MySQL"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactItens(props){
    return(
        <div className="card col-md-3 m-2 user-card text-center text-dark">
            <a href={props.link} target="_blank" rel="noreferrer" className="contact-user  text-dark"><div className="card-body pb-0">
            <img src={props.img} height="54" alt={props.title}/>
            <h5 className="card-title mt-0 mb-1 pt-0 pb-1 title-user">{props.title}</h5>
            <p className="paragraph-user card-text mt-0 mb-1 pt-0 pb-1">{props.text}</p>
            </div></a>
        </div>
    );
}

function Contacts(){
    return(
        <div className="container-fluid pb-5 bg-dark text-light" id="contato">
            <div className="row">
                <div className="col section-user">
                    <h1 className="display-4 title-section">CONTATO</h1>
                    <div className="card-deck container-fluid justify-content-center">
                        <ContactItens img={WHATSAPP} title="TELEFONE E WHATSAPP" link="https://api.whatsapp.com/send?phone=5511966028963" text="(11) 96602-8963"/>
                        <ContactItens img={EMAIL} title="E-MAIL" link="mailto:sejidjorge@gmail.com" text="sejidjorge@gmail.com"/>
                        <ContactItens img={LINKEDIN} title="LINKEDIN" link="https://www.linkedin.com/in/jldevfrontend/" text="www.linkedin.com/in/jldevfrontend/"/>
                        <ContactItens img={SITE} title="SITE" link="/" text="jldevfrontend.com.br"/>
                    </div>
                        <h3 className="title-user text-center mt-5">COMECE SEU PROJETO HOJE</h3>
                        <p className="paragraph-user text-center">Entre em contato e vamos conversar, este é o momento de dar vida a sua ideia.</p>
                </div>
            </div>
        </div>
    );
}


function Work(){
    return(
        <div className="container-fluid pb-5 bg-light" id="serviços">
            <div className="row">
                <div className="col section-user">
                    <h1 className="display-4 title-section">SERVIÇOS</h1>
                    <div className="col-md-6 container">
                        <ul className="list-group">
                            <li className="list-group-item m-2 border-0 user-card">
                                <h4 className="title-user">WEBSITES</h4>
                                <p className="paragraph-user">Produção de sites responsivos e dinâmicos </p>
                            </li>
                            <li className="list-group-item m-2 border-0 user-card">
                                <h4 className="title-user">E-COMMERCE</h4>
                                <p className="paragraph-user">Lojas virtuais e personalizadas.</p>
                            </li>
                            <li className="list-group-item m-2 border-0 user-card">
                                <h4 className="title-user">MANUTENÇÃO</h4>
                                <p className="paragraph-user">Atualização, manutenção, desenvolvimento de temas e correção de bugs para seu site.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer(){
    return(
        <div className="card-footer text-muted">
            <p className="paragraph-user text-center"><small>2021 todos os direitos reservados © </small></p>
        </div>
    );
}

const Home = () =>{
  return (
      <><Nav />
      <Presentation />
      <About />
      <Projects/>
      <Skills/>
      <Work/>
      <Contacts/>
      <Footer/>
      </>
  );
}

export default Home;