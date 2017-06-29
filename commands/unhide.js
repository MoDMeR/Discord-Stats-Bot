module.exports.alias = [
	'unhide'
];

module.exports.command = (message, content, bot) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return;
  let arr = bot.server.hiddenChannels;
  var index = arr.indexOf(content);
  if (index == -1) return;
  delete arr[index];
  bot.server.hiddenChannels = arr;
  message.channel.send(`<#${content}> is no longer hidden`);
};