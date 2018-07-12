'use strict'


const text = 'file_01.mp3 file_02.mv file_03.mp3 file_04.waw file-05.mp3 File-06.mp3'

const reg = /[0-9a-zA-Z_-]+\.mp3/g;


console.log(text)

console.log(text.match(reg))