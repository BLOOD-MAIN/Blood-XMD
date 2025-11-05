const { cmd } = require('../command')
const fs = require('fs')
const path = require('path')

const getRandomImage = () => {
    try {
        const srcPath = path.join(__dirname, '../sric')
        const files = fs.readdirSync(srcPath)
        const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
        if (imageFiles.length === 0) return 'https://files.catbox.moe/1nr6yp.jpg'
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)]
        return path.join(srcPath, randomImage)
    } catch {
        return 'https://files.catbox.moe/1nr6yp.jpg'
    }
}

cmd({
    pattern: "menu",
    react: "🩸",
    desc: "Show Button Menu",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname }) => {
    try {
        const time = new Date().toLocaleTimeString('en-LK', { hour12: true })
        const greet = new Date().getHours() < 12 ? 'Good Morning' :
                      new Date().getHours() < 18 ? 'Good Afternoon' : 'Good Evening'

        const caption = `🩸 *${greet}, ${pushname}!* 🩸

╔═══《 *BLOOD XMD MENU* 》═══╗
║ ⏱ Time : *${time}*
║ 👑 Owner : *Sachithra Madusanka*
║ 💻 Version : *2.0.0*
║ ⚙️ Mode : *Public*
╚══════════════════════════╝

_Select a section below to view commands 👇_`

        const buttons = [
            { buttonId: "dl_menu", buttonText: { displayText: "📥 Download Menu" }, type: 1 },
            { buttonId: "grp_menu", buttonText: { displayText: "👥 Group Menu" }, type: 1 },
            { buttonId: "fun_menu", buttonText: { displayText: "🎉 Fun Menu" }, type: 1 },
            { buttonId: "ai_menu", buttonText: { displayText: "🤖 AI Menu" }, type: 1 },
            { buttonId: "owner_menu", buttonText: { displayText: "👑 Owner Menu" }, type: 1 },
        ]

        const msg = {
            image: { url: getRandomImage() },
            caption,
            footer: "🩸 BLOOD XMD BOT • By Sachithra Madusanka",
            buttons,
            headerType: 4
        }

        await conn.sendMessage(from, msg, { quoted: m })

    } catch (err) {
        console.error(err)
        await conn.sendMessage(from, { text: "❌ Something went wrong with the menu." }, { quoted: m })
    }
})

// Sub menu handler
cmd({
    pattern: "dl_menu",
    dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
    await conn.sendMessage(from, { text: `📥 *DOWNLOAD MENU*\n\n• facebook\n• insta\n• tiktok\n• twitter\n• spotify\n• video\n• play` }, { quoted: m })
})

cmd({
    pattern: "grp_menu",
    dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
    await conn.sendMessage(from, { text: `👥 *GROUP MENU*\n\n• add\n• remove\n• promote\n• demote\n• tagall\n• setwelcome` }, { quoted: m })
})

cmd({
    pattern: "fun_menu",
    dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
    await conn.sendMessage(from, { text: `🎉 *FUN MENU*\n\n• joke\n• meme\n• roast\n• ship\n• hrt` }, { quoted: m })
})

cmd({
    pattern: "ai_menu",
    dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
    await conn.sendMessage(from, { text: `🤖 *AI MENU*\n\n• ai\n• gpt\n• imagine\n• meta` }, { quoted: m })
})

cmd({
    pattern: "owner_menu",
    dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
    await conn.sendMessage(from, { text: `👑 *OWNER MENU*\n\n• restart\n• block\n• unblock\n• setpp\n• shutdown` }, { quoted: m })
})