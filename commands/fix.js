module.exports.alias = [
	'realfixSept6'
];

module.exports.command = (message, content, bot, server) => {
	if (message.author.id != bot.owner_ID) return;
	for (var user in server.users) {
		let u = server.users[user];
		var realJP = 0;
		for (var day in u.record) {
			if (u.record[day]['jpn']) {
				realJP += u.record[day]['jpn'];
			}
		}
		u.jp = realJP;
	}
};
