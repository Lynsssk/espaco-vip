// Configuração: substitua pelo WhatsApp oficial da barbearia.
const BARBERSHOP_WHATSAPP = ""; // Exemplo: "5511999999999" (somente números)

const bookingLink = document.querySelector("#booking-link");
const message = encodeURIComponent("Olá! Gostaria de consultar os horários disponíveis na Espaço Vip Barbearia.");
if (BARBERSHOP_WHATSAPP.trim()) {
  bookingLink.href = `https://wa.me/${BARBERSHOP_WHATSAPP.trim()}?text=${message}`;
} else {
  bookingLink.href = "https://www.instagram.com/_espacovip.barbearia/";
  bookingLink.addEventListener("click", (event) => {
    // Mantém o Instagram como alternativa enquanto o WhatsApp não é confirmado.
  });
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  toggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();
