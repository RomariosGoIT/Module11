'use strict'


// const text = 'file_01.mp3 file_02.mv file_03.mp3 file_04.waw file-05.mp3 File-06.mp3'

// const reg = /[0-9a-zA-Z_-]+\.mp3/g;


// console.log(text)

// console.log(text.match(reg))


const VALIDATOR = {

    patterns: {
        name: /^[a-zA-Z]{4,10}$/,
        email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        password: /^[a-zA-Z0-9]{6,18}$/,
    },

    validate(formElement){
        const inputs = Array.from(formElement.querySelectorAll('input'));
        
        const result = inputs.reduce((acc, {name, value}) => {
            const valid = this.isValid(name,value);
            acc[name] = valid;
            console.group('group');
            console.log('name:', name);
            console.log('value:', value);
            console.log('valid:', valid)
            console.groupEnd('group');
            return acc;
        },{})
        const valid = Object.values(result).every(value => value);
        return {valid, result}
    },
    isValid(patternKey, value){
        return this.patterns[patternKey].test(value)
    }
}



const form = document.querySelector('.js-signup');

form.addEventListener('submit', handleFormSumbmit);

function handleFormSumbmit (e) {
    e.preventDefault();
    const validationResult = VALIDATOR.validate(form);
    if(!validationResult.valid) {
        
        alert('Form is not valid');    
        return;
    }

    alert('Thanks and have fun!!')
    form.reset()

}