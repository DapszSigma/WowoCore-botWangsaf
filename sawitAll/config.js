//Settings Area
global.owner = "6282197991725"
global.bot = "6282197991725"
global.namabot = "Wowo Core"
global.namaown = "DapszNotDev"

//Setting cpanel
global.domain = ''//ganti dengan domain panel kalian
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggbotjs = '17' //Id egg lu
global.location = '1' //Id Location

//Message
global.mess = {
   owner: 'Khusus Owner',
   premium: 'Khusus Premium',
   group: 'Khusus Group',
   succes: 'Succesfully✔️'
}
//Log Di Perbarui Suqi
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})