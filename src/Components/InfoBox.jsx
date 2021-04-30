import { React, useEffect } from 'react';
import '../Styles/info-box.css';
import '../Styles/mobile.css';

const exp = [{
  company: 'Facebook',
  position: 'Incoming SWE Intern',
  date: 'Aug. 2021 - Nov. 2021',
  img: 'fb2.png',
},
{
  company: 'Akuna Capital',
  position: 'Incoming SWE Intern',
  date: 'June 2021 - Aug. 2021',
  img: 'akuna.png',
},
{
  company: 'McMaster University',
  position: 'Undergraduate Teaching Assistant',
  date: 'Sep. 2020 - Apr. 2021',
  img: 'mcmaster.jpg',
},
{
  company: 'Loadlink Technologies',
  position: 'Software Engineer Intern',
  date: 'June 2020 - Aug. 2020',
  img: 'loadlink.png',
},
{
  company: 'Alstom',
  position: 'Software Engineer Intern',
  date: 'May 2019 - Aug. 2019',
  img: 'alstom2.jpg',
}];

const CompanyBox = (props) => {
  const { pos, last, details } = props;
  const {
    img, company, position, date,
  } = details;
  return (
    <div>
      <div className="company-container">
        <div className="x" />
        <div className="logo-container">
          <div className="logo" style={{ backgroundImage: `url('${img}')` }} />
          {pos !== last && <div className="vertical-line" />}
          {' '}
          {pos === last && <div id="companySpacer" />}
        </div>
        <div className="company-description">
          <h3 className="comp-name comp-desc-header">{company}</h3>
          <h5 className="comp-pos comp-desc-header">{position}</h5>
          <h5 className="comp-date comp-desc-header">{date}</h5>
        </div>
      </div>
    </div>
  );
};

const Socials = () => (
  <div className="socials-container">
    <a href="https://linkedin.com/in/amirafzali" aria-label="Linkedin"><i id="linkedinSocial" className="fab fa-linkedin" /></a>
    <a href="https://github.com/amirafzali" aria-label="Linkedin"><i id="githubSocial" className="fab fa-github-square" /></a>
    <i id="resumeSocial" className="fas fa-book" />
  </div>
);

const LeftPane = () => (
  <div className="info-left info-pane">
    <div className="profile-pic" style={{ backgroundImage: 'url(profile.jpg)' }} />
    <h1 id="hey-header">
      Hey, I&apos;m Amir!
      {' '}
      <span id="hand">👋</span>
    </h1>
    <Socials />
    <p id="left-desc">Check out my socials + resume, or look at the right to learn more about me! 😃</p>
  </div>
);

const RightPane = () => {
  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <div className="info-right info-pane">
      <div className="experiences">
        <h1 className="pane-title">Experiences</h1>
        <div className="vertical-timeline">
          {exp.map((e, i) => (
            <CompanyBox
              key={e.company}
              pos={i}
              last={exp.length - 1}
              details={e}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

const InfoBox = () => (
  <div className="info-parent">
    <div className="info-container">
      <LeftPane />
      <RightPane />
    </div>
  </div>
);

export default InfoBox;
