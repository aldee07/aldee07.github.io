(() => {

    const src = window.location.pathname.replace('.html', '').replace('/', '/assets/') + '.png';
    document.querySelector('img').attributes.src.value = src;

})();