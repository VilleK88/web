candidates = [];

let num = parseInt(prompt("Number of the candidates:"));
getNames(num);
let votes = parseInt(prompt("Number of votes:"));
getVotes(votes);
candidates.sort((a, b) => b.votes - a.votes);
displayCandidates(candidates);

function getNames(number) {
    for(let i = 0; i < number; i++) {
        let cand_name = prompt(`Nimi ehdokkaalle ${i+1}: `).trim().toLowerCase();
        candidates.push({name: cand_name, votes: 0},);
    }
}

function getVotes(votes) {
    for(let i = 0; i < votes; i++) {
        let vote = prompt("Nimi: ").trim().toLowerCase();
        if(vote !== "") {
            let found = candidates.find(candidate => candidate.name === vote);
            if(found) {
                found.votes += 1
            }
        }
    }
}

function displayCandidates(candidates) {
    let message = document.getElementById("message");
    let winner = candidates[0];
    let text = `The winner is ${winner.name} with ${winner.votes} votes.\nresults:\n`;
    for(let i = 0; i < candidates.length; i++) {
       text += `${candidates[i].name}: ${candidates[i].votes} votes.\n`
    }
    let pre = document.createElement("pre");
    pre.textContent = text;
    message.appendChild(pre);
}