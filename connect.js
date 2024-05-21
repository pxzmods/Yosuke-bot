const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner, colors, getGroupAdmins } = require('./exports.js');

const { mess, menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, getRandom, NodeCache, insert, response, pushnames } = require('./exports.js');

const { NomeDoBot, NickDono, prefix } = require("./database/settings.json")

var { fundo1, fundo2 } = require("./settings/links_img.json");

// MÓDULOS CONNECT
const msgRetryCounterCache = new NodeCache();

const readline = require("readline");
//=======================\\

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const question = (text) => new Promise((resolve) => rl.question(text, resolve))

//======================================\\

const store = makeInMemoryStore({
logger: P().child({
level: 'silent',
stream: 'store'
})
})

let phoneNumber = "559185470410"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")



         
async function STARTYOSUKE() {
  

// ABAIXO: INÍCIO DE CONEXÃO

const { state, saveCreds } = await useMultiFileAuthState('./qr-code')
const { version, isLatest} = await fetchLatestBaileysVersion();


//============ [ FIM ] ============\\
  
const sabrina = makeWASocket({
auth: state,
logger: P({ level: 'silent' }),
printQRInTerminal:  !pairingCode,
mobile: useMobile,
browser: ['FireFox (linux)', '1.0.0'],
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(
message?.interactiveMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
}
});

//==========================================\\

if (pairingCode && !sabrina.authState.creds.registered) {
console.log(`${colors.gray("Coloque seu numero igual que ta no seu whatsapp ex: +55 85 9818-8647\n")}:`);
let phoneNumber = await question(`   ${colors.green("\nSeu numero")}: `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

let code = await sabrina.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.gray("Aqui Está seu código coloque no Whatsapp para se conectar!!")}:`);
console.log(`   ${colors.green("Seu codigo: ")}: ${code}`);
rl.close();
}

//======================================\\

sabrina.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var sab2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${sab2.id}.json`)) return
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${sab2.id}.json`));

const getName = (number) => {
ps = number.includes(`@s.whatsapp.net`) ? number : number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
returnPush = JSON.stringify(pushnames).includes(ps) ? pushnames[pushnames.map(i => i.id).indexOf(ps)].nick : "usuário(a)"
return returnPush /* Créditos: @Matheus */
}

if(sab2.participants[0].startsWith(sabrina.user.id.split(':')[0])) return;

try { var grpmdt = await sabrina.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await sabrina.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(sab2.action == 'add'){
num = sab2.participants[0];
if(nescessario.listanegraG.includes(num)){
await sabrina.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban...'});
sabrina.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}
if(sab2.action == 'remove'){
num = sab2.participants[0];
}
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])){
await sabrina.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço...'});
sabrina.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && sab2.action === 'add' && !sab2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await sabrina.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
sabrina.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO - WELCOME! 🐢✨️
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await sabrina.groupMetadata(sab2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !sab2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO! 
try {
ppimg = await sabrina.profilePictureUrl(sab2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
try {
ppgp = await sabrina.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(sab2.action === 'add') {

if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', sabrina.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(sab2.participants[0].split('@')[0], mdata_2.subject);
}
response = [`${encodeURIComponent(getName(sab2.participants[0]))} acaba de sair do grupo!`, `${encodeURIComponent(getName(sab2.participants[0]))}`, `${encodeURIComponent(getName(sab2.participants[0]))} de sair do grupo: ${encodeURIComponent(mdata_2.subject)}`, `Nem gostava de você, eu só digo aleluia por tu ter saído :)`, `Nunca fui com a tua cara, digo glória por tu ter saído!`, `Nada pra ver aqui, ele(a) saiu por um 'acidente'...`]
descbv = response[Math.floor(Math.random() * response.length)]
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
sabrina.sendMessage(mdata_2.id, {image: {url:`http://expr.sabapi.tech:4040/api/canvas/welcome?titulo=Bem-vindo(a)!&perfil=${shortpc.data}&fundo=${fundo1}&desc=${descbv}`},
mentions: sab2.participants, caption: teks});
DLT_FL(ran);
} else if(sab2.action === 'remove') {
mem = sab2.participants[0];
try {
ppimg = await sabrina.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', sabrina.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(sab2.participants[0].split('@')[0]);
}

response = [`${encodeURIComponent(getName(sab2.participants[0]))} acaba de sair do grupo!`, `${encodeURIComponent(getName(sab2.participants[0]))}`, `${encodeURIComponent(getName(sab2.participants[0]))} de sair do grupo: ${encodeURIComponent(mdata_2.subject)}`, `Nem gostava de você, eu só digo aleluia por tu ter saído :)`, `Nunca fui com a tua cara, digo glória por tu ter saído!`, `Nada pra ver aqui, ele(a) saiu por um 'acidente'...`]
descsaiu = response[Math.floor(Math.random() * response.length)]
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
sabrina.sendMessage(mdata_2.id, {image: {url:`http://expr.sabapi.tech:4040/api/canvas/welcome?titulo=Adeus!&perfil=${shortpc.data}&fundo=${fundo2}&desc=${descsaiu}`}, caption: teks, mentions: sab2.participants})
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(sab2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', sab2.participants[0].split('@')[0])
.replace('#numerobot#', sabrina.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
}
sabrina.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
} else if(sab2.action === 'remove') {
var mem = sab2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', sabrina.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0]);
bye2 = console.log('Enviando sticker..');
}
sabrina.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, sabrina)
}

if(events["connection.update"]) {
const update = events["connection.update"]; 
var { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
  console.log(colors.green("Não Sabe conectar? Vai no seu WhatsApp -> Dispositivos/aparelhos conecatados -> Conectar Dispositivo/aparelhos -> Conectar com numero de telefone.."))
}  

        
const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("[Error: 428] - Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente..."));
} else if(shouldReconnect == 401) {
exec("cd database && rm -rf qr-code")
console.log(colors.red("A autenticação com WhatsApp Web falhou! Por favor, reinicie e realize a autenticação novamente."))
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore..."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("[Error: 503] - Ocorreu um erro desconhecido ao executar o bot novamente ou sua primeira inicialização."));
} else if(shouldReconnect == 502) {
console.log(colors.grey("[Error: 502] - A conexão com a internet, está querendo cair..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("[Error: 408] - A conexão com a Internet atualmente está fraca..."))
} else {
console.log(colors.yellow(`[CONEXÃO CLOSED] - A conexão entre o WhatsApp foi fechada, por motivos de: ${lastDisconnect?.error}`))
};
STARTYOSUKE();
}
break;

case 'connecting':
console.log(colors.green('Yosuke 6.5 conectando, aguarde a conexão está sendo estabelecida...'))
break;

case 'open':
console.log(banner2.string) 
console.log(banner.string)    
console.log(colors.green(
`〔 么 Yosuke Bot 6.5 么 〕- Conexão Ativada para riscos de queda, aguarde..`))
sessionStartTime = Math.floor(new Date().getTime() / 1000);
await sabrina.sendPresenceUpdate("available")
break;
 

default:
break
}}

if(events["creds.update"]) {await saveCreds()};
require("./index.js")(sabrina, useMultiFileAuthState);
})}

STARTYOSUKE().catch(async(error) => {
   return console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error))
})