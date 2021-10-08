// welcome To My Sc
// Spy Bot Sc:)
// masih belajar:)
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const yts = require( 'yt-search')
const imageToBase64 = require('image-to-base64')
const Exif = require('./lib/exif');
const exif = new Exif();

// Function:)
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

// Database:)
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))

// Buat Setting Kakack:)

prefix = '.' //isi prefix kamu kakack:)
blocked = [] // jan diganti kakack:)
thumbn = fs.readFileSync('./mythumb.jpeg')
namabot = 'SpyBot'
namaown = 'YusufRmdn'
public = true

// Apikey Setting :)
lolkey = 'ae0184cfdb19e8c46728a104' // dapet:v

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Yusufz = new WAConnection()
	Yusufz.version = [2, 2119, 6]
	Yusufz.logger.level = 'warn'
	console.log(banner.string)
	Yusufz.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bruh:v, gak scan ku pukul pala kau'))
	})

	fs.existsSync('./makeyusuf.json') && Yusufz.loadAuthInfo('./makeyusuf.json')
	Yusufz.on('connecting', () => {
		start('2', 'MengTunggu:v')
	})
	Yusufz.on('open', () => {
		success('2', 'udah terkonekin bang kon:v')
	})
	await Yusufz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./makeyusuf.json', JSON.stringify(Yusufz.base64EncodedAuthInfo(), null, '\t'))
        
        Yusufz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Yusufz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Yusufz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*🔥Selamat Datang @${num.split('@')[0]}*
*Di Grup ${mdata.subject}*
_${namabot}_`
				let buff = await getBuffer(ppimg)
				Yusufz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Yusufz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Inallilahi PulangKerahmatullah @${num.split('@')[0]} Binti asep	`
				let buff = await getBuffer(ppimg)
				Yusufz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
			const mdata = await Yusufz.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Yusufz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `[ PROMOTE ]
			✓Nomor : @${num.split('@')[0]}`
			Yusufz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Yusufz.groupMetadata(anu.jid)
			try {
					ppimg = await Yusufz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `[ DEMOTE DETECT ]
			NOMOR : @${num.split('@')[0]}`
			Yusufz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

Yusufz.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Yusufz.sendMessage(callerId, "[ AUTO BLOCK ] Jangan Telpon Bot!!!", MessageType.text)
        await Yusufz.blockUser(callerId, "add") // Block user
})
 Yusufz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

Yusufz.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = lolkey
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
      const timer = moment.tz('Asia/Jakarta').format('DD-MMM-YYYY HH:mm')
        const times = moment.tz('Asia/Jakarta').format('DD-MMM-YYYY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌  Maaf  Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}
      const totalchat = await Yusufz.chats.all()
			const botNumber = Yusufz.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Yusufz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Yusufz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Yusufz.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Yusufz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Yusufz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `*${times}*
			
⎙ *YusufBotz*`,jpegThumbnail: fs.readFileSync(`./Yusufz.jpg`)}}}
			const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`Yusufz`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Yusufz BOT`, 'jpegThumbnail': fs.readFileSync(`./assets/peler.jpg`)}}}
			const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
			const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `Yusufz BOT`, 'jpegThumbnail': fs.readFileSync(`./assets/peler.jpg`)}}}
const catalogReply = (teks, judul) => {

Yusufz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { "productMessage": {

						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Aq79TJ_z-SGqMNDVQVnX3Fmd8zu5nVEGndksF2pYx76e.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "Kv3xDPpFzppzRJS/9FyGtKyc6cdiJQ9kzM5lHJsxyIU=",
								"fileLength": "28573",
								"height": 720,
								"width": 720,
								"mediaKey": "IklNeUriGHykMLbj6YmcwYdG077n8ZY/xpQvRLFpWjQ=",
								"fileEncSha256": "UfukNZz3ad26fOvx1V/3YfwaUOg6ECv6YPz7RtSfH/o=",
								"directPath": "/v/t62.7118-24/19057636_968913973941883_3292179979991379577_n.enc?ccb=11-4&oh=52da57dc2b14287d7fb137047d1a55fb&oe=60B367D0",
								"mediaKeyTimestamp": "1620030467",
								"jpegThumbnail": fs.readFileSync('./Yusufz.png')
							},
							"productId": "4083976448331261",
							"title": judul,
							"currencyCode": "IDR",
							"priceAmount1000": "9999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6289663660768@s.whatsapp.net"
					}
				}
			}
		}
	)

	}

const iyah = (teks, judul) => {

Yusufz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { "productMessage": {

						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Aq79TJ_z-SGqMNDVQVnX3Fmd8zu5nVEGndksF2pYx76e.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "Kv3xDPpFzppzRJS/9FyGtKyc6cdiJQ9kzM5lHJsxyIU=",
								"fileLength": "28573",
								"height": 720,
								"width": 720,
								"mediaKey": "IklNeUriGHykMLbj6YmcwYdG077n8ZY/xpQvRLFpWjQ=",
								"fileEncSha256": "UfukNZz3ad26fOvx1V/3YfwaUOg6ECv6YPz7RtSfH/o=",
								"directPath": "/v/t62.7118-24/19057636_968913973941883_3292179979991379577_n.enc?ccb=11-4&oh=52da57dc2b14287d7fb137047d1a55fb&oe=60B367D0",
								"mediaKeyTimestamp": "1620030467",
								"jpegThumbnail": fs.readFileSync('./Yusufz.png')
							},
							"productId": "4083976448331261",
							"title": judul,
							"currencyCode": "IDR",
							"priceAmount1000": "9999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6289663660768@s.whatsapp.net", contextInfo: { forwardingScore: 947, isForwarded: true }
					}
				}
			}
		}
	)

	}
	

const fakegroup = (teks) => {
			Yusufz.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb }}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": setthumb} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": setthumb
					},
					"title": fake,
					"description": "SELF BOT",
					"currencyCode": "USD",
					"priceAmount1000": "2000000000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const sendButLocation = async (id, text1, desc1, idfoto, but = [], options = {}) => {
    	logor = idfoto
    const buttonMessages = {
               locationMessage: {jpegThumbnail:logor},
               contentText: text1,
               footerText: desc1,
               buttons: but,
               headerType: 6
               }
    Yusufz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


      if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       Yusufz.sendMessage(from, `Success`, `STATUS : SELF`)
     }
     if (chats.toLowerCase() == 'status'){
       Yusufz.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   if (button == 'Yes') {
  let ngocok = fs.readFileSync('./FILE3/Sound4.mp3')
        Yusufz.sendMessage(from, ngocok, audio, {quoted: mek, ptt:true})
				}
				if (button == 'No') {
console.log('No')
Yusufz.sendMessage(from, `BODO AMAT LU JELEK ANJG`, text, {quoted: mek})
}
if(button == 'Self'){
console.log('Self')
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = false
			    Yusufz.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :mek})
			}
			if(button == 'Public'){
console.log('Public')
if (!mek.key.fromMe) return reply('*Kamu Owner?*')
			    public = true
			    Yusufz.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :mek})
}
  if (!public){
    if (!mek.key.fromMe) return
  }
			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Yusufz.contacts[from] != undefined ? Yusufz.contacts[from].vname || Yusufz.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'BotWa'; if (!author) author = 'yusuf';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
			     case 'help': 
			       case 'menu':
			
sendButLocation(from, help(prefix), `YusufBot ${times}`, thumbn, [
          {
            buttonId: '.owner',
            buttonText: {
              displayText: '🔥OWNER',
            },
            type: 1,
          }      
        ]);
break
case 'owner':
Yusufz.sendMessage(from, 'wa.me/62895704368804 Jika Mau Save Chat Aja Gan Ntar Disave Back:)',text, { quoted: freply} )
break
case 'status':
                Yusufz.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
break
case 'bc':  case 'broadcast':
  if (!mek.key.fromMe) return reply('*Kamu Owner?*')
					if (args.length < 1) return reply('Teksnya?')
					anu = await Yusufz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Yusufz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Yusufz.sendMessage(_.jid, buff, image, {caption: `[ _*YusufZ- Broadcast*_ ]\n\n${body.slice(4)}`})
						}
						reply('_Sukses broadcast slurrd_')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ _*SpyBot - Broadcast*_ ]\n\n${body.slice(3)}`)
						}
						reply('_Sukses broadcast kentot_')
					}
					break
					case 'blocklist':
				  case 'listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Yusufz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
if (button == 'STATUS BOT') {
							console.log(color('STATUS BOT: 👤','aqua'))
							yo = `Masih dalam Tahap Bang`
							Yusufz.sendMessage(from, yo, text, {quoted: ftoko})
							}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()