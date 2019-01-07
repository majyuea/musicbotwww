//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ここにBotのToken';
client.on('ready', () => {
    console.log('ready...');
});
//Bot自身の発言を無視する呪い
client.on('message', message =>{
    if(message.author.bot){
        return;
   }
//↓ここに後述のコードをコピペする↓

//↑ここに後述のコードをコピペする↑
});
client.login(token); NTMxNzU2NDY5ODUxNTIxMDI0.DxSk5Q.YEwhlJR7DiCH0ATpwzOUVEkAPKo
