let yourNameInput = document.querySelector("#name1");
let crushNameInput = document.querySelector("#name2");
let startBtn = document.querySelector("#start-btn");
let resultContainer = document.querySelector(".result-container");
let result = document.querySelector("#result");

const flames = ["FRIENDS", "LOVE", "AFFECTION", "MARRIAGE", "ENEMY", "SIBLINGS"];
const flamesStyles = {
    "FRIENDS": { color: "#2ecc71", emoji: "🤝", msg: "Just friends… or so you think 👀" },
    "LOVE": { color: "#ff3366", emoji: "❤️", msg: "Finally… you found it 💖" },
    "AFFECTION": { color: "#9b59b6", emoji: "💕", msg: "Cute… but don’t get friendzoned 💀" },
    "MARRIAGE": { color: "#f39c12", emoji: "💍", msg: "Congrats! Start saving for the wedding 🎉" },
    "ENEMY": { color: "#e74c3c", emoji: "😠", msg: "Husband and wife — the ultimate enemies 😏" },
    "SIBLINGS": { color: "#3498db", emoji: "👨‍👩‍👧‍👦", msg: "Better luck in your next life 😏" }
};

startBtn.addEventListener("click", () => {
    let name1 = yourNameInput.value.trim().toLowerCase().replace(/\s+/g, '');
    let name2 = crushNameInput.value.trim().toLowerCase().replace(/\s+/g, '');

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    let finalResult = calculateFlames(name1, name2);
    displayResult(finalResult);
    resultContainer.style.display = "flex";
});

const calculateFlames = (name1, name2) => {
    let me = name1.split('');
    let crush = name2.split('');

    for (let i = 0; i < me.length; i++) {
        let idx = crush.indexOf(me[i]);
        if (idx !== -1) {
            me[i] = '';
            crush[idx] = '';
        }
    }

    let count = (me.join('') + crush.join('')).length;

    let tempFlames = [...flames];
    let index = 0;
    while (tempFlames.length > 1) {
        index = (index + count - 1) % tempFlames.length;
        tempFlames.splice(index, 1);
    }

    return tempFlames[0];
};

const displayResult = (finalResult) => {
    let style = flamesStyles[finalResult];
    result.innerHTML = `
        <div style="text-align:center; font-size:2.5rem; font-weight:bold; color:${style.color}">
            ${style.emoji} ${finalResult}
        </div>
        <div style="font-size:1.3rem; margin-top:10px; color:#fff;">
            ${style.msg}
        </div>
    `;
};
