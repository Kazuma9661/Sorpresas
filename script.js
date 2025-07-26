function changeGift() {

  const giftDiv = document.getElementById("gift");

  const gifts = {

    1: { emoji: "💐💐💐", text: "Para ti Doñita" },

    2: { emoji: "🍫🍩", text: "Un dulcecito" },

    3: { emoji: "✨✨", text: "Polvito magico de la suerte" },

    4: { emoji: "🧸🎀", text: "Un abrazo🤗" },

    5: { emoji: "☕☕", text: "No duermas Pandita!!" },

    6: { emoji: "🌷🌷", text: "Tulipanes para ti!!!!" },

    7: { emoji: "🤡", text: "Fallaste!! Intentalo otra vez🤣" },

    8: { emoji: "🎁", text: "Regalito sorpresa🤗" },

    9: { emoji: "🌙", text: "La luna está hermosa hoy..." },
    
    10: { emoji: "💋", text: "Toma un besito 😘💖" },
    
    11: { emoji: "💖💖", text: "Te quiero Mejorate Pronto 😉" }

  };

  const days = Object.keys(gifts);

  const randomDay = days[Math.floor(Math.random() * days.length)];

  const { emoji, text } = gifts[randomDay];

  giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;

}

document.getElementById("cube").addEventListener("click", function () {

  this.classList.toggle("active");

  if (!this.classList.contains("active")) {

    changeGift();

  }

});

document.addEventListener("DOMContentLoaded", function () {

  changeGift();

  const cube = document.getElementById("cube");

  cube.classList.add("active");

  setTimeout(() => {

    cube.classList.remove("active");

  }, 3000);

});