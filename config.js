const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94724752209"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Srilanka'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94724752209' 
global.devs = '94724752209';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVqUjQzRHZkWnMxaG14R1ZnVU9LL3A0K2N0SC9jcFN3aDd4Uis4L0FuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1nU2RoMVlEMGlzZzROZkZlT2owNkdZVTNqR0NTZHZGaGRuSWFiYnhEOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSXVIdVpsbksxQllKaXV0MHNIVitLNXo5UHRvSXBHTmx6REZDU0czREdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQjZ1ZGlna1hnVFg4MjRhNkQ5OFZnaDBlZmpjblJFcUNVQnBpckxjOW5ZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCbXU5T0JuaGNYNFU3WHg5eVhmdE1XbTNYaGJJWExTRHpxbnBFdFBPMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik10VEIwMXJYenkrOUxXaWo5U254U1c4NmxyVThmcEw2RDI0TnA4R2NhR0k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dEtES1dTVlk3OHkzSVJnMTVYY1FsQ2tYNnRsZksvOFBvV2tIak1qTVpuVXMrcTJJdC95bzViTFJIVlJjVkJ1eGN4TGZ5WldhUGw3YktucERUbTNnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NywiYWR2U2VjcmV0S2V5IjoiUVo1OEFmclNyd0VVbzVjRktzSjQ2SVRoeTNVYjRueWNsQ25PSG1nUFo5bz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR0hyUE1hdC1Uc3lldUNtVC1tVnlwdyIsInBob25lSWQiOiI1NzNhZWRhYi00YmU0LTRlMWQtODYzZS04YWVkYjY4YWU4ZjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXd0L2NvV2FOMGpnTEdTQ001RUtrL0tBU05jPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqaDFJd0tSTm9lMXI3MVVaR05GREVGYVAvdWM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPQ2RoNklDRUkybHJLMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0MHZVWUk1UEU0cFdvYndiNjIrS2J0U1I1SGRnYklYOEYvUFB1RU51WGdnPSIsImFjY291bnRTaWduYXR1cmUiOiJSYS9ZeHJiRERrdGlNYlBIU0tPUDNWa3R0OU1FMnNzZ3loZ3pETEdicTFCdytkVThxNWFFRTdQM3V4a2tjdFpaOWQ4V3VzVklVY0JHckFyZ3NJTy9CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaXdMRThLWWxoMEpuU2dSaFJzNnVKUHdEQnlrT3c2RWdpWWhybGlYZGpORmZIL2JYRyswVStFUUtFN3Z4VlVRNzdCTDNCNytiOVdtTkFTamQrV2E4akE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzI0NzUyMjA5Ojc5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIPwnZCA8J2QkfCdkIot8J2QkvCdkIDwnZCS8J2QiPCdkJjwnZCALfCdkIHwnZCO8J2QkyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNDc1MjIwOTo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiZEwxR0NPVHhPS1ZxRzhHK3R2aW03VWtlUjNZR3lGL0Jmeno3aERibDRJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1NzEwMjI1fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DARK-SASIYA',
  packname:  process.env.PACK_NAME || 'DARK-SASIYA',
   
  botname:   process.env.BOT_NAME === undefined ? "DARK-SASIYA : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARK-SASIYA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
