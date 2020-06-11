;
/*-----Checkbox-----*/
var checkbox = document.getElementById('noChip')
var label = document.getElementById('noChipLabel')
var chip = document.getElementById('input8')

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        label.style.setProperty('--bg-pseudo', 'url("../assets/icon/huella.png")')
        chip.disabled = true
    } else {
        label.style.setProperty('--bg-pseudo', '')
        chip.disabled = false
    }

});


/*-----Select-regist2-----*/
var select = document.getElementById('select')
var newInput = document.getElementById('other')
var newButton = document.getElementById('selectBack')

select.addEventListener('click', () => {
    if (select.value === 'Other') {
        select.style.display = 'none'
        newInput.style.display = 'inline-block'
        newButton.style.display = 'inline-block'
    } else {
        return
    }
});

newButton.addEventListener('click', () => {
    newInput.style.display = 'none'
    newButton.style.display = 'none'
    select.value = 'Breed'
    select.style.display = 'inline-block'
});