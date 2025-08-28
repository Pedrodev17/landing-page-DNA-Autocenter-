// Inicializa o Swiper com a nova configuração de GALERIA
const swiper = new Swiper('.swiper', {
    // --- COMPORTAMENTOS REMOVIDOS ---
    // loop: true,          (removido)
    // effect: 'fade',      (removido)
    // autoplay: { ... },   (removido)

    // --- NOVOS COMPORTAMENTOS DE GALERIA ---

    // Quantos slides aparecerão ao mesmo tempo. 'auto' é flexível.
    // Você pode usar um número, como 2 ou 3.
    slidesPerView: '2.5',

    // Espaço em pixels entre os slides
    spaceBetween: 15,

    // --- OPÇÕES MANTIDAS ---

    // Paginação (bolinhas) - continua funcionando
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Setas de Navegação - continuam funcionando
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});