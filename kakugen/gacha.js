const kakugen_items = [
  "Mōhala ka pua,ua wehe kaiao.（いい出来事が近づくと嬉しさでワクワクする）",
  "I ulu no ka lālā i ke kumu.（祖先や先人達がいたからこそ、自分達が生き、成長し続けている）",
  "I ka 'olelo no ke ola, i ka 'olelo no ka make. （言葉には何かを引き寄せる力がある）",
  "I mohala no ka lehua i ke’eke’ehi ‘ia e ka ua.（優しい言葉は、人を動かす）",
  "E kanu i ka huli 'oi ha'ule ka ua.（やるべき時にできることをやろう）"
];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * kakugen_items.length );
  disp.innerHTML = kakugen_items[num];
});
// const test = kakugen_items.length;
// alert(test);