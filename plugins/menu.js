const { cmd } = require('../command')

cmd({
  pattern: "menu",
  react: "🩸",
  desc: "Show main menu with working buttons",
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

  const templateButtons = [
    { index: 1, urlButton: { displayText: "🌐 Visit Repo", url: "https://github.com/BLOOD-MAIN/BLOOD-XMD-MINI-BOT-V-2" } },
    { index: 2, quickReplyButton: { displayText: "📥 Download Menu", id: "dl_menu" } },
    { index: 3, quickReplyButton: { displayText: "👥 Group Menu", id: "grp_menu" } },
    { index: 4, quickReplyButton: { displayText: "🤖 AI Menu", id: "ai_menu" } },
    { index: 5, quickReplyButton: { displayText: "👑 Owner Menu", id: "owner_menu" } },
  ]

  const message = {
    image: { url: "https://files.catbox.moe/1nr6yp.jpg" },
    caption: menuText,
    footer: "© 2025 BLOOD XMD BOT",
    templateButtons: templateButtons,
    viewOnce: true
  }

  await conn.sendMessage(from, message, { quoted: m })
})

// ================== SUB MENUS ===================

cmd({
  pattern: "dl_menu",
  dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
  const msg = `📥 *DOWNLOAD MENU* 📥

• facebook
• instagram
• tiktok
• twitter
• spotify
• youtube
• mediafire
• play`
  await conn.sendMessage(from, { text: msg }, { quoted: m })
})

cmd({
  pattern: "grp_menu",
  dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
  const msg = `👥 *GROUP MENU* 👥

• add
• remove
• promote
• demote
• tagall
• groupinfo
• setwelcome
• setbye
• lock/unlock`
  await conn.sendMessage(from, { text: msg }, { quoted: m })
})

cmd({
  pattern: "ai_menu",
  dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
  const msg = `🤖 *AI MENU* 🤖

• ai
• gpt
• imagine
• meta
• translate
• info`
  await conn.sendMessage(from, { text: msg }, { quoted: m })
})

cmd({
  pattern: "owner_menu",
  dontAddCommandList: true
}, async (conn, mek, m, { from }) => {
  const msg = `👑 *OWNER MENU* 👑

• restart
• block
• unblock
• setpp
• broadcast
• eval
• shutdown`
  await conn.sendMessage(from, { text: msg }, { quoted: m })
})