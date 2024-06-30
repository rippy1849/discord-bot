const { SlashCommandBuilder} = require('discord.js');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mikume')
		.setDescription('Sends a random Miku!'),
	async execute(interaction) {

        const Discord = require("discord.js");
        
        

        const image = new Discord.AttachmentBuilder("https://i.imgur.com/JwFO5Qc.jpeg","img.png")
        await interaction.reply({ files : [image] })

        //const image = new Discord.MessageAttachment("https://s.imgur.com/images/logo-1200-630.jpg?2","img.png");

		//await interaction.reply({ files : [image] });


        // msg.reply({ files : [image] })

        //var $ = jQuery = require('jquery')(window);
        
        //const embed = new Discord.MessageEmbed().setImage('https://i.imgur.com/JwFO5Qc.jpeg')
        //console.log($);


		//await interaction.reply('embed');
	},
};