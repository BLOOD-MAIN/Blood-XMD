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
                title: "📥 Download Commands",
                rows: [
                    { title: "📦 Download Menu", rowId: ".downloadmenu", description: "Facebook, Tiktok, YouTube, Mediafire etc." },
                ],
            },
            {
                title: "👥 Group Commands",
                rows: [
                    { title: "👑 Group Menu", rowId: ".groupmenu", description: "Manage and control group features" },
                ],
            },
            {
                title: "🎉 Fun / Reactions / Convert",
                rows: [
                    { title: "🎭 Fun Menu", rowId: ".funmenu", description: "Games and random fun tools" },
                    { title: "💬 Reaction Menu", rowId: ".reactionmenu", description: "Send reaction GIFs & stickers" },
                    { title: "🔄 Convert Menu", rowId: ".convertmenu", description: "Sticker, Audio, Text, Emoji mix, etc." },
                ],
            },
            {
                title: "🤖 AI & Anime",
                rows: [
                    { title: "🤖 AI Menu", rowId: ".aimenu", description: "ChatGPT, Image AI, Code AI" },
                    { title: "🌸 Anime Menu", rowId: ".animemenu", description: "Anime & waifu image generator" },
                ],
            },
            {
                title: "👑 Owner & Settings",
                rows: [
                    { title: "⚙️ Settings Menu", rowId: ".settingsmenu", description: "Bot configuration and auto features" },
                    { title: "👑 Owner Menu", rowId: ".ownermenu", description: "Owner-only commands" },
                ],
            },
            {
                title: "💻 System / Tools",
                rows: [
                    { title: "🏠 Main Menu", rowId: ".mainmenu", description: "Ping, Repo, Runtime, etc." },
                    { title: "💻 Code Menu", rowId: ".codemenu", description: "Developer & coding tools" },
                ],
            },
            {
                title: "🖼️ Logos / Extras",
                rows: [
                    { title: "🖼️ Logo Menu", rowId: ".logomenu", description: "Create name logos & effects" },
                    { title: "📚 Bible List", rowId: ".biblelist", description: "Complete list of Bible books" },
                ],
            },
        ];

        const listMessage = {
            title: "🩸 BLOOD XMD MAIN MENU 🩸",
            footer: `
╔══《 *BLOOD XMD PANEL* 》══╗
║  👤 User: ${pushname}
║  ⚙️ Mode: ${config.MODE}
║  💻 Commands: ${totalCommands}
║  ⏱ Runtime: ${runtime(process.uptime())}
║  🕓 Time: ${new Date().toLocaleTimeString()}
╚════════════════════╝
> ${config.DESCRIPTION}`,
            buttonText: "📜 Select Your Menu",
            sections,
            headerType: 1,
        };

        await conn.sendMessage(from, { text: "🩸", react: { text: '📋', key: mek.key }});
        await conn.sendMessage(from, { listMessage });

    } catch (e) {
        console.error("List menu error:", e);
        await conn.sendMessage(from, { text: "❌ Menu not available right now." });
    }

});