//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "234 907 384 4079";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NkbExUT3RZUjhuczI5NDk4dXU1aXlETm8zWXVXVXVzWTJoUXJvblBsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWkya2RpWWhrUlgyNUlVeWNTWCt4UzMweDg4anBpaUJTTW4zVzNqZktpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRFpYcHY4c1dYQjJockllWnNleXdWY1IrYnEwRGZMdXJySEV0T25ueG53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VGlsYUlWUEZkbEcreDIxVTUvemJ4U0lBenhzR0p3NUZPTmw2MU5mUDJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFZ29PMFpCUFYzTk95dXl1TmY5VG1TT1JpM1RiVXkrM0FuNUNsSElaV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjloT2ZYL1pud0J4cjFJemVpR0x2Y3JWaWpMa3pyR3dTKzBoSjNYL3cxWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0N2YU5Idk43ejNTUFBwVjREUzh4WW1ha0t0emovNzZJT21aK2JRSHlrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDBTTGErN0Vjall5SWVTY2V0RE1yVzZFaXJ2Sk0vYWRuamFjaHREUjJoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNSWtsa0tKWFFaY3IxVkRrbEcybVUvaEsycUVYQ0JrNklvT1BkeThFRFVSa3hBcnl1NU10VVZROCtSMC9sbVE0KytqZHRCZ2t3cnBzd2ZjWFhaVmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6InZTUmRhQ0wvTUFLWDk1R29CbEVoa0E0Q216aVI2dkh5WUxGblJ3eDU5TDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFXdDBtQUd3UTdLS3ZSX05FRWx4OWciLCJwaG9uZUlkIjoiOWM0NTRmODUtM2U3ZS00MmFhLTliNTYtMWE4Y2M4ZGE2M2QyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ5UDBUMFZ1L0M0dmNPUTlKUFNhaGRxclhmND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJucDJoR1kySzZkVXpwblcxU2hKakw3OFdYdFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjRTSFRSS0EiLCJtZSI6eyJpZCI6IjIzNDkwNzM4NDQwNzk6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRMOqamkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xDTDZJMEZFS3oyNTdvR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlVQllFVDJRdHFraUE3dUcvOG9WQkVrQnlTQVJtVVlIYWRObXhNc2J5RWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkIxOGxOMVRESmgycWtHN1VsOWE0R1ZqVkZnYjlwL0hoanRBVWFhd1dtbGNBTVo5Mkk1blp5NXBVa1loVnVJN2NmSmxuamlFSG1BWkVzU2N2TjZ5ekNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKY0NKbzJwK2o1bkl6dHUrODU5RVdtZnQvWEhyVUFUS2tpbXZHR2ZIcCtxVUFleXlOLzNyV05LdGtmbExIM1REbEh2cUZQY0c2M3UzWDdDY1ZyVUtqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzM4NDQwNzk6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2xBV0JFOWtMYXBJZ083aHYvS0ZRUkpBY2tnRVpsR0IyblRac1RMRzhoSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzk1MDI2NH0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
