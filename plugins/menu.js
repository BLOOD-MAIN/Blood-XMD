const config = require('../config');
const { cmd } = require('../command');
const os = require('os');

cmd({
    pattern: "mainmenu",
    desc: "Show BLOOD-XMD Main Button Menu",
    category: "menu",
    react: "⚡",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const startTime = global.startTime || Date.now();
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const captionText = `
*╭────◅●◆●▻────➣*
*│┌─────────➣*
*││ʙᴏᴛ ᴜᴘᴛɪᴍᴇ ➟ ${hours}h ${minutes}m ${seconds}s*
*││ᴘʟᴀᴛꜰᴏʀᴍ ➟ ${os.platform()}*
*││ʀᴀᴍ ᴜꜱᴇɢᴇ ➟ ${(os.totalmem()/1073741824).toFixed(2)} GB*
*││ʙᴏᴛ ᴏᴡɴᴇʀ ➟ 94761332610*
*││ᴠᴇʀꜱɪᴏɴ ➟ 1.0.0*
*│└─────────➣*
*╰────◅●◆●▻────➢*

> ʙʟᴏᴏᴅ χ ᴍᴅ ᴍɪɴɪ ʙᴏᴛ 💚👨‍🔧

*ＡＣＴＩＶＥ - ＦＵＬＬ- ＣＯＭＭＡＮＤ*

*┌──────●◆●───➣*
*││• ᴀʟɪᴠᴇ*
*││• ᴍᴇɴᴜ*
*││• ꜱʏꜱᴛᴇᴍ*
*││• ꜰʙ*
*││• ꜱᴏɴɢ*
*││• ꜱᴘᴏᴛɪꜰʏ*
*││• ᴛᴛ*
*││• ᴀɪɪᴍᴀɢᴇ*
*││• ɴᴀꜱᴀ*
*││• ɢᴏꜱꜱɪᴘ*
*││• ᴄʀɪᴄᴋᴇᴛ*
*││• ᴘɪɴɢ*
*││• ᴅᴇʟᴇᴛᴇᴍᴇ*
*└────────➣*

*_ＡＵＴＯ  ＳＥＴＴＩＮＧＳ ⚙️_*
💭 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ 
💭 ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ʀᴇᴀᴄᴛ
💭 ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ ᴏɴ
`;

        const buttons = [
            {
                buttonId: `${config.PREFIX}ping`,
                buttonText: { displayText: '📶 ʙʟᴏᴏᴅ ᴘɪɴɢ' },
                type: 1
            },
            {
                buttonId: `${config.PREFIX}alive`,
                buttonText: { displayText: '💚 ʙʟᴏᴏᴅ ᴀʟɪᴠᴇ' },
                type: 1
            },
            {
                buttonId: `${config.PREFIX}owner`,
                buttonText: { displayText: '👨‍🔧 ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ' },
                type: 1
            }
        ];

        const imageUrl = "https://files.catbox.moe/kc86ar.jpg";

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: captionText.trim(),
            footer: '*POWERED BY SACHITHRA MADUSANKA 👨‍🔧⚡*',
            buttons: buttons,
            headerType: 1
        }, { quoted: mek });

    } catch (error) {
        console.log("Mainmenu error:", error);
        reply("❌ Something went wrong while displaying mainmenu!");
    }
});