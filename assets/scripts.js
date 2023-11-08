(() => {

    const src = window.location.pathname.replace('.html', '').replace('/', '') + '.jpg';
    document.querySelector('img').attributes.src.value = src;

})();