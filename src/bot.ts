"use strict"
import { config } from "dotenv";
config();

import { Client, Message, Role, Channel, TextChannel } from "discord.js";
import { prefix } from "./config.json";
import { reub } from "./functions/reubicar";
import { listar } from "./functions/listing";
import { crearCurso } from "./functions/create_course";
import { build, test } from "./functions/funciones.js";
import { ALL } from "dns";
import { timeStamp } from "console";
import { saludar } from "./functions/saludar";


const bot: Client = new Client();

bot.once("ready", () => {
    console.log("Bot is ready!");
});

bot.on("message", async (message: Message): Promise<void> => {
    console.log(message.content);
    // let command1 = `${commands.forEach(commands.nam)}`;
    // var args = message.content.substring(prefix.length).split(' ');
    let args2: Array<string> = message.content.slice(prefix.length).trim().split(' ');
    // if(args2.length > 2 && args2 !== undefined){
    let command: Array<string> | string | undefined = args2.shift()?.toLowerCase();
    // }
    
    // switch (args[0].toLowerCase()){
    
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
        case crearCurso.name:
            crearCurso.action(message);
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
        case 'listar':
            listar(message);
            break;
    }
    // crearCurso.action(message);


    // saludar.action(message);
    // crearCurso.action(message);
    
    // describe('Pruba de funciones', () => {
    //     test('Pruba del comando Saludo', () => {
    //         expect(Saludo(message)).toBe('Hello world');
    //     });
    // });



    // if (message.content.startsWith(`${prefix}ping`)) {
    //     try {
    //         message.channel.send("🚀 pong");
    //     }catch{
    //         console.log(Error);
    //     }
    // }
    // ----------------------------- Reubicar -----------------------------
    
    // if (message.content.startsWith(`${prefix}reubicar`)) {
    //     reub(message);
    // }

    // ----------------------------- Normalizar -----------------------------
    // if (message.content.startsWith(`${prefix}normalizar`)) {
    //     normalize(message);
    // }

    // if (message.content.startsWith(`${prefix}hi`)) {
    //     cthMsg(message);
    // }
    
    // if (message.content.startsWith(`${prefix}list`)) {
    //     build(message);
    // }
});
bot.login(process.env.UNIVERSITY_TOKEN);



export {bot}
// describe('Prueba de funciones', () => {
//     test('Prueba del comando Saludo', () => {
//         expect(Saludo(message)).toBe('Hello world');
//     });
//     test('Prueba del comando Listar', () => {
//         expect(Listar(message)).toBe('Hello world');
//     });
// });

// import {Saludo, test} from "./functions/funciones.js";
