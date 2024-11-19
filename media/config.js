/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit
# decode by Tech God

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2349116016597']
global.ownMain = '2349116016597'
global.NamaOwner = 'JOKER' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'Toxic V2' //
global.author = 'JOKER' //
global.packname = 'toxic' //
global.url1 = 'https://whatsapp.com/channel/0029VaN8F9MG8l5KA9Jx0Q0X' //
global.url2 = 'https://whatsapp.com/channel/0029VaN8F9MG8l5KA9Jx0Q0X' //
global.linkgc = 'https://whatsapp.com/channel/0029VaN8F9MG8l5KA9Jx0Q0X'
global.delayjpm = 3500
//Panel
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // 
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // 
global.eggsnya = '15' // 
global.location = '1' // 

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
wait: '*Waiting for processing*',
success: 'Toxic...',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "‏‎T҉ E҉ C҉ H҉ G҉ O҉D҉  1҉ 0",
bbb: "⃰C҉ R҉ A҉ S҉ H҉ ̺",
ccc: "M҉ A҉ S҉ T҉ E҉ R҉  M҉ I҉ N҉ D҉ 🔥 �?? ‌‌‌‌‌‌‌‌‌‌�?",
ddd: "K҉ I҉ N҉ G҉  T҉ E҉ C҉ H҉ G҉ O҉D 🌎",
eee: "A҉ L҉ L҉  H҉ A҉ I҉ L҉  T҉ E҉ C҉ H҉ G҉ O҉ D ҉ 🔥🔥"
}

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})