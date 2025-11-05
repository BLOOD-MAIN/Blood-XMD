const { generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
const config = require('../settings');

module.exports = {
    name: 'menu',
    alias: ['help'],
    async run(conn, msg, args, { from, sender, pushName }) {
        const caption = `
🩸 *BLOOD XMD BOT* 🩸

Hello *${pushName || 'User'}* 👋
Welcome to *BLOOD XMD Main Menu* 🚀

Select a category below 👇
        `;

        const sections = [
            {
                title: "📜 SELECT A MENU BELOW",
                rows: [
                    { title: "📥 Download Menu", rowId: "menu_1", description: "Access download commands" },
                    { title: "👥 Group Menu", rowId: "menu_2", description: "Group management tools" },
                    { title: "🎉 Fun Menu", rowId: "menu_3", description: "Games & entertainment" },
                    { title: "👑 Owner Menu", rowId: "menu_4", description: "Admin-only tools" },
                    { title: "🧩 Other Menu", rowId: "menu_5", description: "Misc utilities" }
                ],
            },
        ];

        const listMessage = {
            title: "🩸 BLOOD XMD MAIN MENU 🩸",
            sections,
            buttonText: "OPEN MENU 📜",
            description: caption,
            footerText: "BLOOD XMD v1.0.0"
        };

        const msgContent = generateWAMessageFromContent(from, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: "📋 Please select a menu option below 👇"
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "BLOOD XMD Multi-Device Bot"
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: "🩸 BLOOD XMD BOT MENU 🩸",
                            subtitle: "",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "OPEN MENU 📜",
                                        sections: sections
                                    })
                                }
                            ]
                        })
                    })
                }
            }
        }, {});

        await conn.relayMessage(from, msgContent.message, { messageId: msg.key.id });
    }
};