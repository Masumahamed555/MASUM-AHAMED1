module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS", //fixing ken gusler
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "Alvi", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "Alvi", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`{ ${global.config.PREFIX} } × ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("╭──────•◈•───────╮\n            𝐀𝐋𝐁𝐔𝐌        \n   বাচ্চারা চলে এসেছি আমি \nপিচ্চি ফাহিম তোমাদের মাঝে_🤭 \n╰──────•◈•───────╯", event.threadID, () => api.sendMessage({body:`________আসসালামু আলাইকুম___________
  
🤖ROBOT CONNECTED SUCCESSFULLY🤖
  
চলে আসলাম তোমাদের মাঝে 🥀

◑আপনাকে অনেক ধন্যবাদ আমাকে এড দেওয়ার জন্য,❤️‍🔥

◑কিন্তু আমাকে কন্ট্রোল করার জন্য প্রয়োজন আমার বস মাসুম কে🤙

◑মেম্বারদের সব কমান্ড আমার পক্ষে পালনকরা সম্ভব না 😔

◑আমার বস মাসুম কে এড দিতে প্রথমে টাইপ করুন /adduser তারপর একটা স্পেস দিয়ে বস এর 𝒖𝒊'𝒅 100078624862893 দিন ☺️

◑ ফেসবুক লিংক ☞ https://www.facebook.com/profile.php?id=100078624862893&mibextid=ZbWKwL

◑ 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘼𝙘𝙘𝙤𝙪𝙣𝙩 --> wa.me/+8801703445098 🐰😗

🐰\n\nUse ${global.config.PREFIX}help to see commands.\n\nexample :\n${global.config.PREFIX}mark (text)\n${global.config.PREFIX}lexi (text)\n${global.config.PREFIX}trump (text)\n${global.config.PREFIX}info 
`, attachment: fs.createReadStream(__dirname + "/Alvi/joinmp4/alvi.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "Alvi", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "╔════•|      ✿      |•════╗\n 💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n╚════•|      ✿      |•════╝\n\n    ✨🆆🅴🅻🅻 🅲🅾🅼🅴✨\n\n                 ❥𝐍𝐄𝐖~\n\n        ~🇲‌🇪‌🇲‌🇧‌🇪‌🇷‌~\n\n             [   {name} ]\n\n༄✺আ্ঁপ্ঁনা্ঁকে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n{threadName}\n\n 🥰🖤🌸—এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀—🌸🥀\n\n         🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐\n\n╭──────•◈•───────╮\n   🅜🅐🅢🅤🅜-🅑🅞🅣      \n\n ক্ষ্ঁণি্ঁকে্ঁর্ঁ অ্ঁতি্ঁথি্ঁ হ্ঁয়ে্ঁ এ্ঁসে্ঁছো্ঁ তু্ঁমি্ঁ আ্ঁমা্ঁদে্ঁর্ঁ মা্ঁঝে্ঁ \nভা্ঁলো্ঁবা্ঁসা্ঁ দি্ঁও্ঁ ভা্ঁল্ঁবা্ঁসা্ঁ নি্ঁও্ঁ তা্ঁর্ঁ সা্ঁথে্ঁ আ্ঁমা্ঁদে্ঁর্ঁ ফ্যা্ঁমে্ঁলি্ঁ  গ্রু্ঁপ্ঁ টা্ঁরে্ঁ সা্ঁম্ঁনে্ঁ আ্ঁগা্ঁই্ঁতে্ঁ সা্ঁহা্ঁয্য্ঁ ক্ঁরি্ঁও্ঁ ধ্ঁন্য্ঁবা্ঁদ্ঁ...!!🦋 \n╰──────•◈•───────╯\n\n    ╔╦══•    •✠•❀•✠ •   •══╦╗\n        ♥ 𝐁𝐎𝐓'𝐬 𝐎𝐖𝐍𝐄𝐑 ♥\n\n                           ☟                     \n\n ♥🅜🅐🅢🅤🅜-🅑🅞🅣♥\n    ╚╩══•    •✠•❀•✠ •    •══╩╝" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "Alvi", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "Alvi", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
                                      }
