const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["caseyrhodes","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 CASEYRHODES XMD 〕━━┈⊷*
*👋 HELLO BLOOD XMD BOT USER @${pushname}*
*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ʙʟᴏᴏᴅ-xᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ꜱᴀᴄʜɪᴛʜʀᴀ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍʀ ꜱᴀᴄʜɪᴛʜʀᴀ ᴍᴀᴅᴜꜱᴀɴᴋᴀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ʙʟᴏᴏᴅ-xᴍᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴋᴇɢᴀʟʟᴀ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ʙᴏᴛ ᴀꜱɪꜱꜱ -: ᴅɪʟᴇᴇꜱʜᴀ ᴏꜰꜰɪᴄɪᴀʟ*
*┃★│* *▢ʙᴏᴛ ᴀꜱɪꜱꜱ ᴀɢᴇ -: 15 ᴀɢᴇ*
*┃★│* *▢ʜᴇʀᴏᴋᴜ ᴅᴇᴘʟᴏʏᴅ -: ᴄʜᴀɴᴜᴋᴀ ᴘʀᴀʙᴀᴛʜ*
*┃★│* *▢ʜ.ᴅ ᴀɢᴇ -: 18 ᴀɢᴇ*
*┃★│* *▢ʙʟᴏᴏᴅ xᴍᴅ ᴀᴜᴅɪᴏ ꜱᴜᴘᴘᴏʀᴛᴇʀ -: ...........*
*┃★│* *▢ʙʟᴏᴏᴅ xᴍᴅ ᴀ.ꜱ ᴀɢᴇ -: ........*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄᴀsᴇʏʀʜᴏᴅᴇs xᴍᴅ₂₅₄
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/2j1t44.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363302677217436@newsletter',
      newsletterName: 'CASEYRHODES-XMD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
