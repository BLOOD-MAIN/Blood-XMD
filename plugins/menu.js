const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const fs = require('fs');
const path = require('path');

const getRandomImage = () => {
    try {
        const srcPath = path.join(__dirname, '../sric');
        const files = fs.readdirSync(srcPath);
        const imageFiles = files.filter(file =>
            file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
        );
        if (imageFiles.length === 0) return 'https://files.catbox.moe/1nr6yp.jpg';
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        return path.join(srcPath, randomImage);
    } catch (e) {
        return 'https://files.catbox.moe/1nr6yp.jpg';
    }
};

cmd({
    pattern: "menu",
    desc: "Show List Menu",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, pushname }) => {
    try {
        const totalCommands = Object.keys(commands).length;
        const timeNow = new Date().toLocaleTimeString();
        const greet = new Date().getHours() < 12 ? 'Good Morning' :
                      new Date().getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

        const caption = `🌟 *${greet}, ${pushname}!* 🌟

╔═══《 *🩸 BLOOD XMD MENU 🩸* 》═══╗
║▸ Owner : *Sachithra Madusanka*
║▸ Mode : *${config.MODE}*
║▸ Prefix : *${config.PREFIX}*
║▸ Total Commands : *${totalCommands}*
║▸ Time : *${timeNow}*
╚══════════════════════════════╝

> _Select a category from the list below 👇_`;

        const listSections = [
            {
                title: "📂 MAIN MENUS",
                rows: [
                    { title: "📥 Download Menu", rowId: "menu_download", description: "Facebook, TikTok, YouTube & more" },
                    { title: "👥 Group Menu", rowId: "menu_group", description: "Group management & admin tools" },
                    { title: "🎉 Fun Menu", rowId: "menu_fun", description: "Games, jokes, and entertainment" },
                    { title: "🛠️ Tools Menu", rowId: "menu_tools", description: "Convert, info, and system tools" },
                    { title: "🤖 AI Menu", rowId: "menu_ai", description: "ChatGPT, image gen & more" },
                    { title: "👑 Owner Menu", rowId: "menu_owner", description: "Owner exclusive commands" }
                ]
            },
            {
                title: "💎 Extra",
                rows: [
                    { title: "💬 About Bot", rowId: "menu_about", description: "Details about BLOOD XMD" }
                ]
            }
        ];

        const listMessage = {
            text: caption,
            footer: "🩸 BLOOD XMD BOT • © 2025",
            title: "📜 BLOOD XMD MENU",
            buttonText: "CLICK HERE TO OPEN MENU 📂",
            sections: listSections
        };

        await conn.sendMessage(from, listMessage, { quoted: m });

        // Handle list selection
        conn.ev.on("messages.upsert", async (update) => {
            try {
                const msg = update.messages[0];
                if (!msg.message?.listResponseMessage) return;
                const selected = msg.message.listResponseMessage.singleSelectReply.selectedRowId;

                const menus = {
                    "menu_download": `📥 *Download Menu*\n\n• facebook\n• insta\n• tiktok\n• twitter\n• spotify\n• play\n• video`,
                    "menu_group": `👥 *Group Menu*\n\n• add\n• remove\n• promote\n• demote\n• tagall\n• link\n• setwelcome`,
                    "menu_fun": `🎉 *Fun Menu*\n\n• ship\n• joke\n• hrt\n• meme\n• roast\n• quotes`,
                    "menu_tools": `🛠️ *Tools Menu*\n\n• ss\n• removebg\n• toimg\n• trt\n• qr\n• weather`,
                    "menu_ai": `🤖 *AI Menu*\n\n• ai\n• gpt\n• meta\n• imagine\n• chatgpt\n• code`,
                    "menu_owner": `👑 *Owner Menu*\n\n• restart\n• block\n• unblock\n• setpp\n• shutdown\n• join\n• leave`,
                    "menu_about": `💬 *About BLOOD XMD*\n\n> Developed by *Sachithra Madusanka*\n> Fast • Powerful • Smart\n> Multi-device support\n> Version 2.0`
                };

                if (menus[selected]) {
                    await conn.sendMessage(from, { text: menus[selected] }, { quoted: m });
                }
            } catch (err) {
                console.log("List Menu Error:", err);
            }
        });

    } catch (e) {
        console.error('List Menu Error:', e);
        await conn.sendMessage(from, { text: "❌ Menu system error, try again later." }, { quoted: mek });
    }
});