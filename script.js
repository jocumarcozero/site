const translateBtn = document.getElementById('translate-btn');
const langMenu = document.getElementById('lang-menu');
const langText = document.getElementById('lang-text');

// Seus textos atualizados (incluindo o Espanhol que você pediu)
const content = {
    pt: {
        btn: "Português",
        title: 'Jocum Marc<img src="imagens/icone.png" alt="o" class="title-icon"> Zero',
        p1: "Jocum Marco Zero atua no coração do Recife, transformando realidades de comunidades vulneráveis. Através de ações sociais e discipulado, nós buscamos trazer alegria e esperança, refletindo o amor de Deus em áreas de grande necessidade social.",
        p2: "Utilizando artes, evangelismo e assistência prática, focamos na restauração familiar e no amparo a crianças e adolescentes. Com programas de treinamento missionário e voluntariado, a base capacita pessoas para servir e impactar a sociedade de forma relevante e transformadora.",
        nav: ["Rua", "Visitas", "Casinha", "CER"]
    },
    en: {
        btn: "English",
        title: 'YWAM Marc<img src="imagens/icone.png" alt="o" class="title-icon"> Zero',
        p1: "YWAM Marco Zero operates in the heart of Recife, transforming realities of vulnerable communities. Through social actions and discipleship, we seek to bring joy and hope, reflecting God's love in areas of great social need.",
        p2: "Using arts, evangelism, and practical assistance, we focus on family restoration and support for children and teenagers. Through missionary training and volunteer programs, the base empowers people to serve and impact society in a relevant and transformative way.",
        nav: ["Streets", "Visits", "Casinha", "CER"]
    },
    es: {
        btn: "Español",
        title: 'Jucum Marc<img src="imagens/icone.png" alt="o" class="title-icon"> Zero',
        p1: "Jucum Marco Zero actúa en el corazón de Recife, transformando realidades de comunidades vulnerables. A través de acciones sociales y discipulado, buscamos traer alegría y esperanza, reflejando el amor de Dios en áreas de gran necesidad social.",
        p2: "Utilizando artes, evangelismo y asistencia práctica, nos enfocamos en la restauración familiar y el amparo a niños y adolescentes. Con programas de capacitación misionera y voluntariado, la base capacita personas para servir e impactar la sociedad de forma relevante y transformadora.",
        nav: ["Calle", "Visitas", "Casinha", "CER"]
    }
};

// Abre/Fecha o menu ao clicar (mesma lógica de interação)
translateBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('active');
});

// Fecha o menu se clicar fora dele
document.addEventListener('click', () => langMenu.classList.remove('active'));

// Aplica a tradução baseada na seleção (Preservando sua lógica de troca de texto)
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        
        langText.innerText = content[lang].btn;
        document.querySelector('h1').innerHTML = content[lang].title;
        
        const paragraphs = document.querySelectorAll('.text-area p');
        paragraphs[0].innerText = content[lang].p1;
        paragraphs[1].innerText = content[lang].p2;
        
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach((link, index) => {
            link.innerText = content[lang].nav[index];
        });
    });
});