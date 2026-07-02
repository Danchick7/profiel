let dutch = false;

function switchLanguage() {
  dutch = !dutch;

  if (dutch) {
    document.getElementById('about-title').textContent    = 'Over Mij';
    document.getElementById('skills-title').textContent   = 'Mijn Vaardigheden';
    document.getElementById('contacts-title').textContent = 'Mijn Contacten';
    document.getElementById('projects-title').textContent = 'Mijn Projecten';

    document.getElementById('text').textContent = 'Mijn naam is Daniel of Danylo Ivanov. Ik ben een nieuwe softwareontwikkelaar die programmeren en al zijn trucs bestudeert. Ik ben niet de beste in coderen, maar hieronder kun je enkele van mijn projecten zien waaraan ik heb deelgenomen. Ik laat graag mijn werk zien en hoe het eruitziet. Ik sta ook open voor feedback en suggesties om mijn werk te verbeteren. Als je vragen hebt, kun je contact met me opnemen via een van de onderstaande links.';

    document.getElementById('skills-text').textContent = 'Ik heb ervaring met het bouwen van websites met HTML, CSS en JavaScript. Daarnaast heb ik kennis van Node.js en databasebeheer. Ik ben vooral sterk in front-end-ontwikkeling en het maken van storyboards voor websites. Maar ik vind het ook leuk om nieuwe technologieën te leren en mijn vaardigheden elke dag te verbeteren.';

    document.getElementById('btn').textContent = 'Translate to English';
  } else {
    document.getElementById('about-title').textContent    = 'About Me';
    document.getElementById('skills-title').textContent   = 'My Skills';
    document.getElementById('contacts-title').textContent = 'My Contacts';
    document.getElementById('projects-title').textContent = 'My Projects';

    document.getElementById('text').textContent = 'My name is Daniel or Danylo Ivanov. I am a new software developer who is studying programming and all its tricks. I am not the best at coding but below you can see some of my projects I have participated in. I am very eager to show you my work and how it looks like. I am also very open to feedback and suggestions on how to improve my work. If you have any questions you can contact me by any of these links below.';

    document.getElementById('skills-text').textContent = "I have experience working with HTML, CSS and JavaScript for building websites. I also have knowledge of Node.js and Database managment. I'm mostly great in doing front-end and making a storyboard of the websites. But I also enjoy learning new technologies and improving my skills every day.";

    document.getElementById('btn').textContent = 'Translate to Dutch';
  }
}