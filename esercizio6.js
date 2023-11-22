const devTeam = {
    lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"],
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
    ],
    projectName: "WebApp",
};

// 1 oggetto devTeam che contiene 7 oggetti annidati, quindi 8 oggetti
const teamLead = devTeam.lead;
teamLead.skills.push("GraphQL");
const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

const creaOggetto = (name) => {
    const tester = {};
    const skillsUtente = [
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Python",
        "Django",
        "PostgreSQL",
    ];
    const prendiSkills = () => {
        const risultatoSkills = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex =
                Math.floor(Math.random() * (skillsUtente.length - 1 - 0 + 1)) +
                0;
            risultatoSkills.push(skillsUtente[randomIndex]);
        }

        return risultatoSkills;
    };

    tester.name = name;
    tester.skill = prendiSkills();
    return tester;
};

devTeamCopy.testers.push(creaOggetto("Amanda"));
// oltre agli oggetti iniziali sono stati creati 3 oggetti :
// 1 - devTeamCopy che con json ha creato una copia oggetto di devTeam
//2 - creaOggetto ha creato un oggetto, che a sua volta ha una un oggetto array annidato
