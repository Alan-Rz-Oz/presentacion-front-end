function asignar_texto(elemento, texto){
    let elemento_html = document.querySelector(elemento);
    elemento_html.textContent = texto;
    return 0;
}