"use strict"
import { config } from "dotenv";
config();

import { Client, Message, Role, Channel, TextChannel } from "discord.js";
import { prefix } from "./config.json";
import { reub } from "./functions/reubicar";
import { listar } from "./commands/listing";
import { crearCurso } from "./commands/create_course";
import { build, test } from "./functions/funciones.js";
import { saludar } from "./functions/saludar";
import { bot } from "./public/variables";
import { argumentos } from "./functions/funciones"

bot.once("ready", () => {
    console.log("Bot is ready!");
});

bot.on("message", async (message: Message): Promise<void> => {
    console.log(message.content);
    let args: Array<string> = argumentos(message);
    let command: string = args.shift()?.toLowerCase() || '';
    switch(command){
        case 'ping':
            try {
                message.channel.send('🚀 pong');
            }catch(error){
                console.log(error);
            }
            break;
        case saludar.name:
            saludar.action(message);
            break;
        case 'reubicar':
            reub(message)
            break;
        case 'list':
            build(message);
            break;
        case 'reu1':
            reub(message);
            break;
        case 'test':
            test(message);
            break;
    }
    crearCurso.action(message);
    listar.action(message);
});
bot.login(process.env.UNIVERSITY_TOKEN);