function toggle_theme() {
    var element = document.body;
    element.classList.toggle('light-mode');

    var element = document.getElementById('dark-mode-switcher');
    if (element.text == 'dark mode: on')
        element.text = 'dark mode: off';
    else
        element.text = 'dark mode: on';

}