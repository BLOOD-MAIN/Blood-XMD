const { cmd } = require('../command')

cmd({
    pattern: "menu",
    react: "☘️",
    desc: "Show main menu with buttons",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, pushname }) => {

    const menuText = `🩸 *Hello ${pushname}!* 🩸

╔═══《 *BLOOD XMD MENU* 》═══╗
║ 👑 Owner : *Sachithra Madusanka*
║ 💻 Version : *2.0.0*
║ ⚙️ Mode : *Public*
╚══════════════════════════╝

_Select a category below 👇_`

    const buttons = [
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "🌐 Website",
                url: "https://github.com/BLOOD-MAIN/BLOOD-XMD-MINI-BOT-V-2"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "📥 Download Menu",
                id: "dl_menu"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "👥 Group Menu",
                id: "grp_menu"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "🤖 AI Menu",
                id: "ai_menu"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "👑 Owner Menu",
                id: "owner_menu"
            })
        },
    ]

    const msg = {
        image: { url: 'https://files.catbox.moe/1nr6yp.jpg' },
        header: { title: "🩸 BLOOD XMD BOT 🩸" },
        body: { text: menuText },
        footer: { text: "© 2025 BLOOD TEAM" },
        nativeFlowMessage: { buttons },
    }

    await conn.sendMessage(from, { viewOnceMessage: { message: { interactiveMessage: msg } } }, { quoted: m })
})