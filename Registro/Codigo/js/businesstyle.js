/*-----Select1-busines-----*/

var businesSelect = document.getElementById('businesOptions')
var businesNewInput = document.getElementById('hidenInput')
var businesButton = document.getElementById('businesDropDown')

businesSelect.addEventListener('click', () => {
    if (businesSelect.value === 'Other') {
        businesSelect.style.display = 'none'
        businesNewInput.style.display = 'inline-block'
        businesButton.style.display = 'inline-block'
    } else {
        return
    }
});

businesButton.addEventListener('click', () => {
    businesNewInput.style.display = 'none'
    businesButton.style.display = 'none'
    businesSelect.value = 'Veterinary'
    businesSelect.style.display = 'inline-block'
})

/*-----Add-Social-----*/

var socialContainer = document.getElementById('mediaContent')
var form = document.getElementById('businesReg')
var addButton = document.getElementById('addButton')
var regButton = document.getElementById('button6')
var footer = document.getElementById('footerBusines')
var contador = 1;
var ident = 0;

var addNewSocial = function () {

    if (contador === 10) {
        return
    } else {
        contador += 1
        newHeight = (65 + (65 * contador)) + 'px'
        socialContainer.style.height = newHeight;
        formHeight = (670 + (65 * contador)) + 'px'
        form.style.height = formHeight;
        addButtonHeight = (630 + (65 * contador)) + 'px'
        addButton.style.top = addButtonHeight;
        regButtonHeight = (690 + (65 * contador)) + 'px'
        regButton.style.top = regButtonHeight;
        footerHeight = (880 + (65 * contador)) + 'px'
        footer.style.top = footerHeight;

        newSocial = document.createElement('input')
        socialContainer.appendChild(newSocial)
        newSocial.className = 'socialLink';
        newSocial.placeholder = 'Link'

        newSelect = document.createElement('select')
        socialContainer.appendChild(newSelect)
        newSelect.className = 'socialOptions';

        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Facebook'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Twittet'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('WhatsApp'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Instagram'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Pinterest'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Web'))
        ident += 1
        newSelect.appendChild(document.createElement('option')).
        id = 'option' + ident;
        document.getElementById('option' + ident).
        appendChild(document.createTextNode('Other'))

    }
}