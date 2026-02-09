/*
Script Cpanel Wangsaf Wowo Core
Base & Update & Fix By: DapszNotDev
Contact Owner: wa.me/6285862189849
Credit: DapszNotDev
Name Bot: Wowo Core
Version: V1.0
NOTE: Rename? Update? atau Lainnya?
Jangan Hapus Creadit Nya Ya😁
*/
require('./sawitAll/config');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');

const owners = JSON.parse(fs.readFileSync("./sawitAll/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./sawitAll/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./sawitAll/database/list.json"))

const {
default: makeWASocket,
makeCacheableSignalKeyStore,
useMultiFileAuthState,
DisconnectReason,
fetchLatestBaileysVersion,
fetchLatestWaWebVersion,
generateForwardMessageContent,
prepareWAMessageMedia,
generateWAMessageFromContent,
generateMessageTag,
generateMessageID,
downloadContentFromMessage,
makeInMemoryStore,
getContentType,
jidDecode,
MessageRetryMap,
getAggregateVotesInPollMessage,
proto,
delay
} = require("@whiskeysockets/baileys");


const { unixTimestampSeconds, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./sawitAll/library/function');

module.exports = async (sock, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefix = '/';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const from = m.key.remoteJid;
 const isGroup = from.endsWith("@g.us");
const sender = m.key.fromMe ? (sock.user.id.split(':')[0]+'@s.whatsapp.net' || sock.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await sock.decodeJid(sock.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)

const groupMetadata = isGroup ? await sock.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

//Case
switch(command) {
case 'menu': {
    let showmenu = ` *Hello ${sender}✨👋
    *Information Bot*
   *Name Bot*: ${global.namabot}
   *Version*: 1.0.0
   *Owner & Contact*: ${global.namaown} - wa.me/${global.owner}
   
   *Menu Bot Wowo Core*

   *Reseller Menu*
    /cpanelbotjs
    /listserver
    /listuser
    /delserver
    /deluser

    *Owner Menu*
    /addowner
    /delowner
    /listowner
    /clearuser
    /clearserver
    /clearall
    /addreseller
    /delreseller
    /listreseller
    /createadmin
    /self - /public
    `
   sock.sendMessage(m.chat, {
image: fs.readFileSync('./sawitAll/media/wowo.jpg'),
caption: showmenu,
 contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender], 
            forwardedNewsletterMessageInfo: {
                newsletterJid: `@newsletter`,
                newsletterName: 'Dapsz Kikir'
            },
 externalAdReply: {
 title: global.namabot,
 body: `DapszNotDev`
 }
 }},{quoted: m}); 
}
break

case "cpanelbotjs": {
if (!isCreator && !isPremium) return m.reply(`Khusus Owner Dan Reseller`)
let t = text.split(',');
if (t.length < 5) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer,ram,disk,cpu`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let ram = t[2];
let disk = t[3];
let cpu = t[4];

let name = username
let egg = "${eggbotjs}"
let loc = "1"
let memo = ram
let diskk = disk
let cpuu = cpu

const now = new Date();
    const expiredDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const garansiDate = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000);
    
    const formatDate = (date) => tanggal(date.getTime());
    const createdString = formatDate(now);
    const expiredString = formatDate(expiredDate);
    const garansiString = formatDate(garansiDate); 
let email = username + "@gmail.com"
if (!u) return
let d = (await sock.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + Math.floor(1000 + Math.random() * 9000);
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*Sedang Membuat Server....*`)
ctf = `*DATA AKUN SERVER PANNEL ANDA*
→ Username : ${user.username}
→ Password : ${password.toString()}
→ Login : ${domain}
→ Expired: ${expiredString}
→Garansi: ${garansiString}
`
sock.sendMessage(u, {image: fs.readFileSync('./sawitAll/media/wowo.jpg'), text: `${ctf}`}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo.toString(),
"swap": 0,
"disk": diskk.toString(),
"io": 500,
"cpu": cpuu.toString()
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${ram}
DISK : ${disk}
CPU : ${cpu}
Expired: ${expiredString}
Garansi: ${garansiString}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)
}
        break        
        
case "delserver": {
        if (!isCreator) return m.reply(`Khusus Owner`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case "deluser": {
  if (!isCreator) return m.reply(`Khusus Owner`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
        break

    case "addseller":{
if (!isCreator) return m.reply("khusus owner bot!!")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await sock.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync("./sawitAll/database/premium.json", JSON.stringify(premium))
m.reply(`Nomor ${prrkek} Telah Menjadi Reseller!`)
}
break



case "listseller": {
    if (!isCreator) return m.reply(`Khusus Owner`)

    let premium = []
    if (fs.existsSync("./sawitAll/database/premium.json")) {
        premium = JSON.parse(fs.readFileSync("./database/premium.json"))
    }

    if (premium.length === 0) return m.reply("Belum ada reseller yang terdaftar.")

    let list = premium.map((jid, i) => {
        let num = jid.split("@")[0]
        return `${i + 1}. wa.me/${num}`
    }).join("\n")

    m.reply(`*Daftar Reseller*\n\n${list}`)
}
break


case "delseller": {
if (!isCreator) return m.reply(`Khusus Owner`)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./sawitAll/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break
case 'clearall': {
 if (!isCreator) return m.reply(`Khusus Owner`)

 try {
 // Ambil semua server
 let serverFetch = await fetch(domain + "/api/application/servers", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let serverRes = await serverFetch.json();
 let servers = serverRes.data;

 if (!servers || servers.length === 0) {
 m.reply('Tidak ada server yang ditemukan.');
 } else {
 // Loop melalui setiap server dan menghapusnya
 for (let server of servers) {
 let s = server.attributes;

 let deleteServer = await fetch(domain + "/api/application/servers/" + s.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 if (deleteServer.ok) {
 m.reply(`*Berhasil menghapus server dengan ID: ${s.id}*`);
 } else {
 let errorText = await deleteServer.text();
 m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
 }
 }
 m.reply('*Semua server berhasil dihapus!*');
 }

 // Ambil semua user
 let userFetch = await fetch(domain + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let userRes = await userFetch.json();
 let users = userRes.data;

 if (!users || users.length === 0) {
 m.reply('Tidak ada user yang ditemukan.');
 } else {
 // Loop melalui setiap user dan hapus jika bukan admin
 for (let user of users) {
 let u = user.attributes;

 if (!u.root_admin) {
 let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }
 m.reply('*Semua user kecuali admin berhasil dihapus!*');
 }
 
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
}
break;
case 'clearuser': {
            if (!isCreator) return m.reply(`Khusus Owner`)
        
            try {
                let f = await fetch(domain + "/api/application/users", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                });
        
                let res = await f.json();
                let users = res.data;
        
                if (!users || users.length === 0) {
                    return m.reply('Tidak ada user yang ditemukan.');
                }
        
                // Loop melalui setiap user
                for (let user of users) {
                    let u = user.attributes;
        
                    // Hanya hapus user yang bukan admin (root_admin = false)
                    if (!u.root_admin) {
                        let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                            method: "DELETE",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + apikey,
                            }
                        });
        
                        if (deleteUser.ok) {
                            m.reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
                        } else {
                            let errorText = await deleteUser.text();
                            m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
                        }
                    }
                }
        
                m.reply('*Semua user kecuali admin berhasil dihapus!*');
            } catch (error) {
                return m.reply('Terjadi kesalahan: ' + error.message);
            }
        }
        break;
case "createadmin": {
    if (!isCreator) return m.reply(`Khusus Owner`);
    if (!text) return m.reply("username,628XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek;
        if (!users || !nom) return m.reply("username,628XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat;
    }

    let onWa = await sock.onWhatsApp(nomor.split("@")[0]);
    if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!");

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = capital(args[0]);
    let password = username + crypto.randomBytes(2).toString('hex');

    // Hitung tanggal expired & garansi
    let now = new Date();
    let expiredDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    let garansiDate = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000);
    let createdString = tanggal(now.getTime());
    let expiredString = tanggal(expiredDate.getTime());
    let garansiString = tanggal(garansiDate.getTime());

    let f = await fetch(domain + "/api/application/users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey
        },
        body: JSON.stringify({
            email: email,
            username: username,
            first_name: name,
            last_name: "Admin",
            root_admin: true,
            language: "en",
            password: password
        })
    });

    let data = await f.json();
    if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;

    let orang = nomor;
    if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah dikirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`);
    }
    if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah dikirim ke ${nomor.split("@")[0]}`);
    }

    let teks = `
*Berikut Detail Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Dibuat :* ${createdString}
*📆 Expired :* ${expiredString}

*🌐* ${global.domain}

📌 Syarat & Ketentuan:
• ⌛️ Masa aktif akun: 30 hari
• ❌ Dilarang open reseller
• ❌ Dilarang create admin
• ❌ Jangan asal hapus server!
• ✅ Simpan data ini baik-baik (data hanya dikirim 1 kali)
• ⚠️ Ketahuan rusuh = akun dihapus tanpa refund
• ⚠️ Ketahuan maling = akun dihapus tanpa refund
• ⚠️ Ketahuan akses/buka server orang = akun dihapus tanpa refund
`;

    await sock.sendMessage(orang, { text: teks });
}
break;
case "listadmin": {
if (!isCreator) return m.reply(`Khusus Owner`)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *List Admin Panel Pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n 📡 *${i.attributes.id} >> [ ${i.attributes.first_name} ]*
 *• Nama :* ${i.attributes.first_name}
 *• Created :* ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break
case "listserver": {
if (!isCreator && !isPremium) return m.reply(`Maaf fitur ini hanya untuk *reseller panel*!\nBeli akses *reseller panel* langsung chat ${global.owner}`)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak ada server panel!")
let messageText = "\n *乂 List Server Panel Pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n 📡 *${s.id} >> [ ${s.name} ]*
 *• Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}
 *• CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}
 *• Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}
 *• Created :* ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break
case "listuser": {
    if (!isCreator) return m.reply(`Khusus Owner`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await sock.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break

case 'clearserver': {
            if (!isOwner) return m.reply(mess.owner);
        
            try {
                // Ambil semua server
                let f = await fetch(domain + "./api/application/servers", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                });
        
                let res = await f.json();
                let servers = res.data;
        
                if (!servers || servers.length === 0) {
                    return m.reply('Tidak ada server yang ditemukan.');
                }
        
                // Loop melalui setiap server
                for (let server of servers) {
                    let s = server.attributes;
        
                    // Mengirim permintaan DELETE untuk setiap server
                    let deleteServer = await fetch(domain + "./api/application/servers/" + s.id, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey,
                        }
                    });
        
                    if (deleteServer.ok) {
                        m.reply(`*Berhasil menghapus server dengan ID: ${s.id}*`);
                    } else {
                        let errorText = await deleteServer.text();
                        m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
                    }
                }
        
                m.reply('*Semua server berhasil dihapus!*');
            } catch (error) {
                return m.reply('Terjadi kesalahan: ' + error.message);
            }
        }
        break;

case "delowner": case "delown": {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./sawitAll/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

case "listowner": case "listown": {
if (!isCreator) return m.reply(mess.owner);
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

case "addowner": case "addown": {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./sawitAll/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case 'public': {
if (!isCreator) return m.reply('Khusus Owner') 
sock.public = true
m.reply('Sukses Change To Public')
}
break

case 'self': {
if (!isCreator) return m.reply('Khusus Owner') 
sock.public = false
m.reply('Sukses Change To Self')
}
break
default:
}
} catch (err) {
console.log(util.format(err))
}
}

//~~~~~Status Diperbarui~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
