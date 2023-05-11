let navNoIndex = `
        <div class="nav-enlaces">
            <a href="../index.html">Inicio</a>
        </div>`;

let navNoIndexTag = document.querySelector("#nav-no-index");

if (navNoIndexTag != null) {
    navNoIndexTag.innerHTML = navNoIndex;
}

let footer = `<div class="footer-pagina">

    <div class="footer-texto">
    <p>
        <i class="fa-regular fa-copyright"></i> 2023 TRANKI
    </p>
    </div>

    <div class="footer-enlaces">
    <a href="https://www.instagram.com" target="_blank" title="Instagram">
        <i class="fa-brands fa-instagram"></i >
    </a>
    <a href="https://www.facebook.com" target="_blank" title="Facebook">
        <i class="fa-brands fa-facebook"></i >
    </a>
    <a href="https://www.twitter.com" target="_blank" title="Twitter">
        <i class="fa-brands fa-twitter"></i >
    </a>
    <a href="https://www.YouTube.com" target="_blank" title="YouTube">
        <i class="fa-brands fa-youtube"></i >
    </a>
    </div>
    </div>

    <div class="footer-grupo-2">

    <div>
    <p>Codo a Codo</p>
    <p>FULL STACK PYTHON</p>
    <p>2023 - 1er cuat.</p>
    <p>Comisión 23037</p>
    </div>

    <div>
    <p><strong>Grupo 2</strong></p>
    <ul>
        <li>Jesica Moure</li>
        <li>Malena Sencio</li>
        <li>Manuel Pérez</li>
        <li>Leonardo Mathot</li>
    </ul>
    </div>

    <div>
    <p>Repositorio del proyecto</p>
    <a href="" target="_blank" title="GitHub">
        <i class="fa-brands fa-github"></i>
    </a>
    </div>

    </div>`;

document.querySelector("#footer").innerHTML = footer;