const links = document.querySelectorAll('.menu-lateral__link a');

  function marcarLinkAtivo() {
    // Remove a classe de todos os links
    links.forEach(link => link.classList.remove('ativo'));

    // Adiciona a classe ao link que corresponde à hash atual
    const hash = window.location.hash;
    if (hash) {
      const linkAtivo = document.querySelector(`.menu-lateral__link a[href="${hash}"]`);
      if (linkAtivo) {
        linkAtivo.classList.add('ativo');
      }
    } else {
      // Se não há hash, ativa o link "home"
      const homeLink = document.querySelector('.menu-lateral__link a[href="#"]');
      if (homeLink) {
        homeLink.classList.add('ativo');
      }
    }
  }

  window.addEventListener('hashchange', marcarLinkAtivo);
  window.addEventListener('DOMContentLoaded', marcarLinkAtivo);