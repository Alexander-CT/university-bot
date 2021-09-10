// import { Message } from "discord.js";

// import { Role } from "discord.js";
import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions, GuildChannel } from "discord.js";
import { NOTFOUND, resolveSoa } from "dns";
import { type } from "os";
import { types } from "util";
import { prefix } from "../config.json";

// module.exports = {
function Saludo(message: Message) {
    try {
        if (message.member?.hasPermission(['SEND_MESSAGES'])) {
            message.channel.send(`Hello world`);
        }
    } catch (error) {
        console.log(error);
    }
}
// client.on("message", async (message: Message)
// const client: Client = new Client();
// client.on("message", async (message: Message) =>{


// ----------------------------- TESTING -----------------------------
async function test(message: Message) {
    try {
        // const args: User | Role | Collection<string, Role> | readonly RoleResolvable[] = message.content.slice(prefix.length).trim().split(' ');
        const args: User | Role | String[] | any = message.content.slice(prefix.length).trim().split(' ');
        // const command = args.shift().toLowerCase();
        // if (command === 'args-info') {
        if (!args.length) {
            message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        // if(args[0]){
        //     args[0];
        // }
        // if(args[1]){

        // }
        // if(args[2]){

        // }
        // else if (args[0] === 'foo') {
        //     return message.channel.send('bar');
        // }
        // if(args[0] == User){
        //     // var targetUser: any = args[0];
        //     var targetUser = message.guild?.members.cache.get(args[0]);
        // }
        // if(args[1] == Role){
        //     var rol_rm: any = args[1];
        // }
        // if(args[2] == Role){
        //     var rol_add: any = args[2];
        // }
        console.log(typeof args[1], args[1]);
        console.log(typeof args[2], args[2]);
        console.log(typeof args[3], args[3]);
        // if(args[0]){
        //     if(message.mentions.members?.find(args[0])){
        // var targetUser = message.guild?.members.cache.get(args[0]);

        // var targetUser: any = message.mentions.members?.find(args[0])?.id;
        //     }
        // }
        // if(args[1]){
        //     // message.guild?.roles.cache
        //     if(message.guild?.roles.cache.find(args[1])){
        // var rol_rm = args[2]
        // var rol_rm = args[2].trim().split('<@') && args[2].trim().split('>');
        //     }
        // }
        // if(args[2]){
        //     if(message.mentions.roles.find(args[2])){
        // var targetUser_id: RegExp = targetUser; 
        var quitar: RegExp = /[<@,>,&,!]/g;
        var targetUser_id = args[1].replace(quitar, '');
        var rol_rm_id = args[2].replace(quitar, '');
        var rol_add_id = args[3].replace(quitar, '');

        console.log(typeof targetUser_id, targetUser_id);
        console.log(typeof rol_rm_id, rol_rm_id);
        console.log(typeof rol_add_id, rol_add_id);

        // var rol_add = args[3]
        // }
        // }
        // var targetFinal = message.mentions.has(args[1]);
        // try{
        // var targetMember: User = args[0];
        // var targetUser: any = message.mentions.members?.find(targetUser_id);

        // var targetUser = message.mentions.members?.first() || message.guild?.members.cache.get(targetUser_id);

        var targetUser = message.guild?.members.cache.get(targetUser_id);


        // var role_rm: any= targetUser?.roles.cache.has(rol_rm_id);
        var role_rm: any = message.guild?.roles.cache.find(role => role.id == rol_rm_id);
        var role_add: any = message.guild?.roles.cache.find(role => role.id == rol_add_id);

        targetUser?.roles.remove(role_rm);
        targetUser?.roles.add(rol_add_id);
        // if(targetUser && role1 && !role2){

        // await targetUser?.roles.remove(role_rm);
        // await targetUser?.roles.add(role_add);

        // console.log(typeof targetUser, targetUser);
        // console.log(typeof rol_rm, rol_rm);
        // console.log(typeof rol_add, rol_add);

        // }
        // if(role1){
        //     await memberN?.roles.remove(role1);
        // }
        // if(!role2){
        //     await memberN?.roles.add(role2);
        // }
        // if(memberN){
        //     let role:any = memberN.roles.cache.has('613988812338495489' && '611383905924153344');

        // targetUser?.roles?.remove(rol_rm);
        // targetUser?.roles?.add(rol_add);
        // var rol_rm: Role = args[1];
        // var rol_add: Role =args[2];
        // }catch(error){
        //     console.log(error);
        // }
        // if(typeof targetMember == typeof User && typeof args[1] == typeof Role && typeof args[2] == typeof Role){
        //     var targetUser = message.guild?.members.cache.get(args[0]);
        //     // var rol_rm = args[1];
        //     // var rol_add = args[2];
        //     targetUser?.roles?.remove(rol_rm);
        //     targetUser?.roles.add(rol_add);
        // }
        // var cachee: any = message.guild?.roles.cache;
        // var targetUser: any = message.guild?.member('');
        // var role = cachee.find(role => role.name.toLowerCase() === args);
        // message.mentions.guild;
        // args[2].mentions.members?.first()?.;
        // args.mentions.members[0].roles.add(rol_add);
        // var target = message.guild?.members.cache.get(args[0]);
        // targetUser?.roles.remove(rol_rm);
        // targetUser?.roles.remove(rol_add);
        // message.guild?.roles.cache.find(role => role.name.toLowerCase()=== args[2]);
        // const memberN = message.mentions.members?.first();
        // let role:any = memberN.roles.cache.has('613988812338495489' && '611383905924153344');
        //     // if(role) {
        //         let NormalizedMember = await memberN.roles.remove
        // var hacer:any = await message.mentions.members?.first();
        // var remove = await message.guild?.roles.add(rol_add)
        // var sate = await message.mentions.members?.find(name,args[1]);

        // var i: number;
        // i=0;
        // while(args[i]){
        //     // if(args[i] === message.mentions.roles){

        //     // }
        //     message.channel.send(`Argument ${i+1}: ${args[i]}`);
        //     i++;
        // }
        // }
    } catch (error) {
        console.log(error);
        message.channel.send(`Syntax error, por favor use la sintaxis correcta`);
    }
}

// ----------------------------- En construcción -----------------------------
async function construction(message: Message) {
    try {
        if (message.member?.hasPermission(['SEND_MESSAGES'])) {
            message.channel.send(`Este comando aún está en construcción, pronto será implementado totalmente ヾ(≧∇≦*)ゝ`);
        } else {
            message.reply('No tienes permiso para hacer eso (´д｀)');
        }
    } catch (error) {
        console.log(error);
    }
}

function argumentos(message: Message): Array<string> {
    return message.content.slice(prefix.length).trim().split(/ +/);
}


function generar_id(){
    var id = 'xxxx'.replace(/[x]/g, () => {
        return (((1+Math.random())*0xFFFF)|0).toString(36).substring(3);
    });
    return id;
}
function conteo_reg(args: string, wordsIgnore: number = 0, reg: RegExp) {
    // args[i].match(/<@/)?.length;
    let listWords: RegExpMatchArray | String | Array<string> | any ;
    for (let i = wordsIgnore; i <= args.length; i++) {
        listWords.push(args[i].match(reg));
    }
    return listWords;
}

// async function fantasmar(message: Message){
//     try {
//         if (message.member?.hasPermission(['ADMINISTRATOR'])) {
//             let id_rol_momero = '611383905924153344';
//             let id_rol_invitado = '613988812338495489';
//             const memberF = message.mentions.members?.first();
//             let GhostedMember;
//             if (memberF) {
//                 let momero_rol = memberF.roles.cache.has(id_rol_momero);
//                 let invitado_rol = memberF.roles.cache.has(id_rol_invitado);
//                 if(momero_rol){
//                     GhostedMember = await memberF.roles.remove(id_rol_momero);
//                 }
//                 if(invitado_rol){
//                     GhostedMember = await memberF.roles.remove(id_rol_invitado);
//                 }
//                 GhostedMember = await memberF.roles.add('550830057313271828');
//                 console.log(memberF.user.username);
//                 message.channel.send(`${memberF.user.username} se ha vuelto un fantasmón :ghost:`);
//             }
//         } else {
//             message.reply('No tienes permiso para hacer esto');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// export {normalizar as normalize};
// export {CthulhuMsg as cthMsg};
// export {reubicar as reub};
// export {listing};
// export {construction as build};

export {
    // normalizar as normalize,
    Saludo,
    // reubicar as reub,
    // listing,
    construction as build,
    argumentos,
    // crear_curso,
    test,
    // crearCategoria
}
