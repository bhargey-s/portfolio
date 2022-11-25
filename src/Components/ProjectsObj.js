import notelyIllustration from '../Assets/Icons/notely.png'
import netflixIllustartion from '../Assets/Icons/netflix.png'
import projectManagementSystem from '../Assets/Icons/project-management-system.png'
import mathGameIllustration from '../Assets/Icons/math-game.png'
import drumKitIllustration from '../Assets/Icons/drum-kit.png'

const ProjectsObj = [{
    img1: { src: notelyIllustration},
    text: {
        h2: "notely",
        h3: ["A one place Note taking application, with a Rich text editor and features to organise and structure your notes."]
    },
    img2: { src: ""},
    links: {
        github: "https://github.com/bhargey-s/notely-note-taking-app",
        live: "https://notely-4c51d.web.app/"
    }
},
{
    img1: { src: ""},
    text: {
        h2: "Netflix Clone"
        , h3: "Clone of the streaming platform Netflix with the feature of searching any movies or shows, can watch trailers and save them in your list."
    },
    img2: { src: netflixIllustartion},
    links : {
        github : "https://github.com/bhargey-s/netflix-clone",
        live : "https://netflix-clone-9d650.web.app/"
    }
},
{
    img1: { src: projectManagementSystem},
    text: {
        h2: "Project Management System"
        , h3: "A project associated with Dayananda Sagar College Of Engineering where students can upload their projects every semester and the faculties can evaluate the projects and organise them for future use."
    },
    img2: { src: ""},
    links: {
        github: "https://github.com/bhargey-s/project-management-system",
        live: "https://github.com/bhargey-s/project-management-system"
    }
},
{
    img1: { src: ""},
    text: {
        h2: "Math Game"
        , h3: "A game to improve your Mathematical ability by answering the maximum correct asnwers in 60 seconds."
    },
    img2: { src: mathGameIllustration},
    links: {
        github: "https://github.com/bhargey-s/Math-Game",
        live: "https://math-game-dd1753.netlify.app/"
    }
},
{
    img1: { src: drumKitIllustration},
    text: {
        h2: "Drum Kit"
        , h3: "A Drum Kit to play around"
    },
    img2: { src: ""},
    links: {
        github: "https://github.com/bhargey-s/Drum-Kit",
        live: "https://bhargeys-drumkit-650340.netlify.app/drumkit.html"
    }
}];

export default ProjectsObj;