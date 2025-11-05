const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getRandomImage = () => {
    try {
        const srcPath = path.join(__dirname, '../sric');
        const files = fs.readdirSync(srcPath);
        const imageFiles = files.filter(file =>
            file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
        );

        if (imageFiles.length === 0) {
            return 'https://files.catbox.moe/1nr6yp.jpg';
        }

        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        return path.join(srcPath, randomImage);
    } catch (e) {
        console.log('Error getting random image:', e);
        return 'https://files.catbox.moe/1nr6yp.jpg';
    }
};

cmd({
    pattern: "menu",
    desc: "Show interactive button menu",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, pushname }) => {
    try {
        const totalCommands = Object.keys(commands).length;

        const menuCaption = `🌟 *Good ${
            new Date().getHours() < 12 ? 'Morning' :
            (new Date().getHours() < 18 ? 'Afternoon' : 'Evening')
        }, ${pushname}!* 🌟

╔═══《 *🩸 BLOOD XMD 🩸* 》═══╗
║ ➤ User: *Sachithra Madusanka*
║ ➤ Mode: *${config.MODE}*
║ ➤ Prefix: *${config.PREFIX}*
║ ➤ Commands: *${totalCommands}*
║ ➤ Platform: *Heroku*
║ ➤ Version: *1.0.0*
╚══════════════════════╝

> Select your category from buttons below ⬇️`;

        const buttons = [
            { buttonId: "download_menu", buttonText: { displayText: "📥 Download Menu" }, type: 1 },
            { buttonId: "group_menu", buttonText: { displayText: "👥 Group Menu" }, type: 1 },
            { buttonId: "fun_menu", buttonText: { displayText: "🎉 Fun Menu" }, type: 1 },
            { buttonId: "owner_menu", buttonText: { displayText: "👑 Owner Menu" }, type: 1 },
            { buttonId: "ai_menu", buttonText: { displayText: "🤖 AI Menu" }, type: 1 },
        ];

        await conn.sendMessage(
            from,
            {
                image: { url: getRandomImage() },
                caption: menuCaption,
                footer: "🩸 BLOOD XMD INTERACTIVE MENU SYSTEM 🩸",
                buttons,
                headerType: 4,
            },
            { quoted: mek }
        );

    } catch (err) {
        console.error("Menu error:", err);
        await conn.sendMessage(from, { text: "❌ Menu not available right now. Try again later." }, { quoted: mek });
    }
});