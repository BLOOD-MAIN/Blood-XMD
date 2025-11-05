const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: "menu",
  desc: "Interactive List Menu",
  category: "menu",
  react: "📋",
  filename: __filename
}, async (conn, mek, m, { from, pushname }) => {

  try {
    const totalCommands = Object.keys(commands).length;

    const sections = [
      {
        title: "📥 Download Menu",
        rows: [
          { title: "📦 Download", description: "FB / TikTok / YT / Mediafire", rowId: "dl_menu" }
        ]
      },
      {
        title: "👥 Group & System",
        rows: [
          { title: "👥 Group Menu", description: "Group tools & admin cmds", rowId: "grp_menu" },
          { title: "⚙️ System Tools", description: "Bot system & status", rowId: "sys_menu" }
        ]
      },
      {
        title: "🤖 AI & Fun",
        rows: [
          { title: "🧠 AI Chat", description: "ChatGPT, image AI, etc.", rowId: "ai_menu" },
          { title: "🎭 Fun Menu", description: "Fun, random, jokes, etc.", rowId: "fun_menu" }
        ]
      },
      {
        title: "👑 Owner Section",
        rows: [
          { title: "👑 Owner Menu", description: "Owner-only commands", rowId: "owner_menu" }
        ]
      }
    ];

    const listMessage = {
      text: `🩸 *BLOOD XMD MENU* 🩸\n\nHello *${pushname}*, choose your option below 👇`,
      footer: `⚙️ Mode: ${config.MODE}\n💻 Commands: ${totalCommands}\n🕒 Runtime: ${runtime(process.uptime())}`,
      title: "📜 Select Your Menu",
      buttonText: "Open BLOOD XMD Menu",
      sections
    };

    await conn.sendMessage(from, listMessage, { quoted: mek });

  } catch (e) {
    console.error("Menu Error ➜", e);
    await conn.sendMessage(from, { text: "❌ Menu not available right now." });
  }

});