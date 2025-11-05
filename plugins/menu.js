const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "menu",
  desc: "Display main bot menu with buttons",
  category: "menu",
  react: "📜",
  filename: __filename
}, async (conn, mek, m, { from, pushname }) => {
  try {

    const captionText = `
╭───────◅●◆●▻───────➣
│ *🩸 BLOOD XMD MAIN MENU 🩸*
│──────────────────────────
│ *User:* ${pushname}
│ *Prefix:* ${config.PREFIX}
│ *Mode:* ${config.MODE}
│ *Version:* 1.0.0
│ *Platform:* Heroku [Free]
│──────────────────────────
│ *Developer:* SACHITHRA MADUSANKA 👨‍💻
╰───────◅●◆●▻───────➣

*💬 MAIN COMMANDS LIST 💬*

• .downloadmenu   📥  
• .groupmenu      👥  
• .funmenu        🎉  
• .ownermenu      👑  
• .aimenu         🤖  
• .animemenu      🌸  
• .convertmenu    🔄  
• .othermenu      🧩  
• .reactionmenu   💞  
• .settingsmenu   ⚙️  
• .mainmenu       🏠  
• .logo           🖼️  

> ⚡ 𝘗𝘖𝘞𝘌𝘙𝘋 𝘉𝘠 𝘚𝘈𝘊𝘏𝘐𝘛𝘏𝘙𝘈 𝘔𝘈𝘋𝘜𝘚𝘈𝘕𝘒𝘈 ⚡
`;

    const buttons = [
      {
        buttonId: `${config.PREFIX}ping`,
        buttonText: { displayText: "📶 Ping Signal" },
        type: 1
      },
      {
        buttonId: `${config.PREFIX}alive`,
        buttonText: { displayText: "💫 Bot Alive" },
        type: 1
      },
      {
        buttonId: `${config.PREFIX}owner`,
        buttonText: { displayText: "👑 Contact Owner" },
        type: 1
      }
    ];

    await conn.sendMessage(
      from,
      {
        image: { url: "https://files.catbox.moe/1nr6yp.jpg" },
        caption: captionText.trim(),
        footer: "🩸 BLOOD XMD MULTI-DEVICE BOT 🩸",
        buttons: buttons,
        headerType: 4
      },
      { quoted: m }
    );

  } catch (e) {
    console.log("Menu Button Error:", e);
    await conn.sendMessage(from, { text: "❌ Error displaying menu buttons!" }, { quoted: m });
  }
});