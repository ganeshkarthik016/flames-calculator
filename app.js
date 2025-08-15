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
    let yourname = yourNameInput.value.trim().toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    let crushname = crushNameInput.value.trim().toLowerCase().replace(/\s+/g, '').split('').sort().join('');

    if (yourname === "" || crushname === "") {
        alert("Please enter both names.");
        return;
    }

    calculateFlames(yourname, crushname);
    resultContainer.style.display = "flex";
});

const calculateFlames = (me, crush) => {
    let count = 0;
    for (let char of me) {
        if (crush.includes(char)) {
            count++;
            crush = crush.replace(char, '');
        }
    }
    count = me.length + crush.length - 2 * count;
    let index = (count % flames.length) - 1;
    if (index < 0) index = flames.length - 1;

    let finalResult = flames[index];
    let style = flamesStyles[finalResult];

    result.innerHTML = `
        <div style="text-align:center; font-size:2.5rem; font-weight:bold; color:${style.color}">
            ${style.emoji} ${finalResult}
        </div>
        <div style="font-size:1.2rem; margin-top:10px; color:#fff;">
            ${style.msg}
        </div>
    `;
};
