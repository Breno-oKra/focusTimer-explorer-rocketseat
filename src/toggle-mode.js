let darkMode = true

const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', event =>{
    //document.documentElement é o html inteiro
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} Ativado!`
    darkMode = !darkMode
})

