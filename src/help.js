const help = (prefix) => {
	return `
Selamat ${tampilHari}, Im ${NamaBot}:)
┌─❖*「 INFO DEVELOPER 」*
│✎ *Nama* : Manik
│✎ *Manik* : @${send.split("@")[0]}
│✎ *Github* : Cari Sendiri!?
│✎ *Yutub* : *「 ᴍᴀɴɪᴋ ᴏғғɪᴄɪᴀʟツ 」*
│✎ *Ig* : @Aryamanik___ 
│✎ *Ultah Manik:*
│✎ *${ultahku}*
└─❖

┌─❖*「 INFO USER 」*
│❦ *Nama* : ${pushname}
│❦ *Nomer* : @${sender.split("@")[0]}
│❦ *Premium* : ${premi}
│❦ *Uang mu* : Rp${uangku}
│❦ *XP* : ${getLevelingXp(sender)}/${reqXp}
│❦ *Level* : ${getLevelingLevel(sender)}
│❦ *Rank* : ${role}
│❦ *Tingkat* : ${bars}
└─❖

┌─❖ *「 INFO BOT 」*
│➫ *Name* : ${NamaBot}
│➫ *Prefix* : ⸨${prefix}⸩
│➫ *Status* : MODE ${stat}
│➫ *Menu* : Original
│➫ *Speed* : ${process.uptime()}
│➫ *Baterai :* ${battre}%   
│➫ *Hit Today* : ${hitt.length}
│➫ *Group Chat* : ${good.length}
│➫ *Personal Chat*: ${totalchat.length - good.length}
│➫ *Total Chat* : ${totalchat.length}
│➫ *Group Bot?* : ${prefix}manikgroup
│➫ *Bug?* : ${prefix}bugreport
│➫ *Request?* : ${prefix}request
├─────────────┈ ⳹
│➫ *Tanggal :* ${tampilTanggal}
│➫ *Jam :* ${wita}
│➫ *User register* : ${_registered.length} User
└─❖

┌─❖
│*「 FULL MENU KEBAWAH 」*
└┬❖
    │ *「 Self And Public」*
┌┤✑  *>public*
││✑  *>self* 
│└────────────┈ ⳹
│ *「 PREMIUM MENU 」*
│✙ *${prefix}addprem (tag @mem)*
│✙ *${prefix}dellprem (tag @mem)* 
│✙ *${prefix}listprem* 
│✙ *${prefix}suratto (No|Surat)* 
├─────────────┈ ⳹
│ *「 Sticker Commands 」*
│✙  *${prefix}sticker*
│✙  *${prefix}toimg* 
│✙  *${prefix}tsticker* 
├─────────────┈ ⳹
│ *「 Game Commands 」*
│✙ *${prefix}tembak udara*
│✙ *${prefix}tembak darat* 
│✙ *${prefix}tembak laut* 
│✙ *${prefix}slot* 
│✙ *${prefix}suit*
│✙ *${prefix}dadu*
├─────────
│ *「 SETTING BOT 」*
│✙ *${prefix}setprefix*
│✙ *${prefix}setfakereply* 
│✙ *${prefix}setfakedoc* 
│✙ *${prefix}setnamabot* 
│✙ *${prefix}setfaketoko*
│✙ *${prefix}setbgwelkom* (Link I.bb)
│✙ *${prefix}setprefix*
│✙ *${prefix}setlolkey* 
│✙ *${prefix}setvhkey* 
│✙ *${prefix}setxteamkey* 
├─────────
│ *「 OWNER 」*
│✙ *${prefix}setppbot*
│✙ *${prefix}bikingc* 
│✙ *${prefix}unblock* 
│✙ *${prefix}addprem* 
│✙ *${prefix}block*
│✙ *${prefix}dellprem*
│✙ *${prefix}listprem*
│✙ *${prefix}leave*
│✙ *${prefix}clearall* 
│✙ *${prefix}antidelete aktif/mati* 
│✙ *${prefix}addlimit* 
│✙ *${prefix}setlimit*
│✙ *${prefix}setmemlimit* 
│✙ *${prefix}event 1/0* 
│✙ *${prefix}addprem* 
│✙ *${prefix}dellbadword*
│✙ *${prefix}addbadword*
│✙ *${prefix}bc*
│✙ *${prefix}imgreply*
│✙ *${prefix}readallchat*
│✙ *${prefix}ban*
│✙ *${prefix}unban*
│✙ *${prefix}upswtext*
│✙ *${prefix}upswimg*
│✙ *${prefix}upswvid*
│✙ *${prefix}sendkontak*
│✙ *${prefix}sendkontag*
│✙ *${prefix}spamchat*
│✙ *${prefix}term*
│✙ *${prefix}setname*
│✙ *${prefix}setbio*
│✙ *${prefix}fdeface*
│✙ *${prefix}spam*
│✙ *${prefix}imgtag*
│✙ *${prefix}sticktag*
│✙ *${prefix}toimg*
│✙ *${prefix}grouplist*
│✙ *${prefix}fordward*
│✙ *${prefix}wame*
│✙  *${prefix}nobg*
├─────────
│ *「 TOD 」*
│✙  *${prefix}dare*
│✙  *${prefix}truth* 
├─────────────┈ ⳹
│ *「 ANIME 」*
│✙ *${prefix}anime*
│✙ *${prefix}bokunh*
│✙ *${prefix}sao*
│✙ *${prefix}lovelive*
│✙ *${prefix}animesaran/animesaran2*
│✙ *${prefix}loli*
│✙ *${prefix}hsdxd*
│✙ *${prefix}husbu*
│✙ *${prefix}waifu*
│✙ *${prefix}neko*
│✙ *${prefix}chika*
│✙ *${prefix}kurumi*
│✙ *${prefix}kaneki*
│✙ *${prefix}touka*
│✙ *${prefix}aot*
│✙ *${prefix}naruto*
│✙ *${prefix}minato*
│✙ *${prefix}sagiri*
│✙ *${prefix}tokyoghoul*
│✙ *${prefix}dewabatch*
│✙ *${prefix}neonime*
│✙ *${prefix}samehadaku*
│✙ *${prefix}kusonime*
│✙ *${prefix}animeboy*
│✙ *${prefix}animegirl*
│✙ *${prefix}waifu*
│✙ *${prefix}character*
│✙ *${prefix}manga*
│✙ *${prefix}anime*
│✙ *${prefix}wait*
│✙ *${prefix}kusonime*
│✙ *${prefix}kusonimesearch*
│✙ *${prefix}otakudesu*
│✙  *${prefix}otakudesusearch*
├─────────
│ *「 Islami 」*
│✙ *${prefix}listsurah*
│✙ *${prefix}asmaulhusna*
│✙ *${prefix}alquran no_surah*
│✙ *${prefix}alquranaudio no_surah*
│✙ *${prefix}alquranaudio no_surah/no_ayat*
│✙ *${prefix}alquranaudio no_surah/no_ayat1-no_ayat2*
│✙ *${prefix}kisahnabi nama_nabi*
│✙ *${prefix}jadwalsholat daerah*
├─────────
│*「 Downloader 」*
│✙ *${prefix}ytsearch query*
│✙ *${prefix}ytplay query*
│✙ *${prefix}ytplay2 query*
│✙ *${prefix}ytmp3 url_video**
│✙ *${prefix}ytmp32 url_video**
│✙ *${prefix}ytmp4 url_video**
│✙ *${prefix}ytmp42 url_video**
│✙ *${prefix}tiktoknowm url_video**
│✙ *${prefix}tiktokmusic url_video**
│✙ *${prefix}igdl url_post*
│✙ *${prefix}fbdl url_video**
│✙ *${prefix}jooxplay query*
│✙ *${prefix}spotify url_music*
│✙ *${prefix}spotifysearch query*
│✙ *${prefix}pinterest query*
│✙ *${prefix}pinterestdl url_pinterest*
│✙ *${prefix}pixiv query*
│✙ *${prefix}pixivdl url_pixiv*
│✙ *${prefix}zippyshare url_zippyshare*
│✙ *${prefix}telesticker url_pack*
├─────────
│*「 Movie & Story 」*
│✙ *${prefix}drakorongoing*
│✙ *${prefix}lk21 query*
│✙ *${prefix}wattpad url_wattpad*
│✙ *${prefix}wattpadsearch query*
│✙ *${prefix}cerpen*
│✙ *${prefix}ceritahoror*
├─────────
│*「 Searching 」*
│✙ *${prefix}shopee query*
│✙ *${prefix}gimage query*
│✙ *${prefix}google query*
│✙ *${prefix}gimage2 query*
│✙ *${prefix}konachan query*
│✙ *${prefix}playstore query*
│✙ *${prefix}stickerwa query*
│✙ *${prefix}wallpapersearch query*
│✙ *${prefix}wallpapersearch2 query*
├─────────
│*「 Random text* 」*
│✙ *${prefix}quotes*
│✙ *${prefix}quotesdilan*
│✙ *${prefix}quotesanime*
│✙ *${prefix}quotesimage*
│✙ *${prefix}faktaunik*
│✙ *${prefix}katabijak*
│✙ *${prefix}pantun*
│✙ *${prefix}bucin*
│✙ *${prefix}randomnama*
├─────────
│*「 AniManga 」*
│✙ *${prefix}wait*
│✙ *${prefix}quotesanime*
│✙ *${prefix}manga query*
│✙ *${prefix}anime query*
│✙ *${prefix}character query*
│✙ *${prefix}kusonime url_kusonime*
│✙ *${prefix}kusonimesearch query*
│✙ *${prefix}otakudesu url_otakudesu*
│✙ *${prefix}otakudesusearch query*
│✙ *${prefix}nhentai kode_bom*
│✙ *${prefix}nhentaipdf kode_bom*
│✙ *${prefix}nhentaisearch query*
│✙ *${prefix}nekopoi url*
│✙ *${prefix}nekopoisearch query*
├─────────
│*「 Information 」*
│✙ *${prefix}jadwaltv channel*
│✙ *${prefix}jadwaltvnow*
│✙ *${prefix}jadwalbola*
│✙ *${prefix}heroml hero_name*
│✙ *${prefix}wikipedia query*
│✙ *${prefix}translate kode_negara text*
│✙ *${prefix}brainly query*
│✙ *${prefix}newsinfo*
│✙ *${prefix}cnnindonesia*
│✙ *${prefix}cnnnasional*
│✙ *${prefix}cnninternasional*
│✙ *${prefix}infogempa*
│✙ *${prefix}lirik query*
│✙ *${prefix}cuaca daerah*
│✙ *${prefix}kodepos query*
│✙ *${prefix}indbeasiswa*
│✙ *${prefix}hoax*
│✙ *${prefix}nsfwcheck*
├─────────
│*「 Entertainment 」*
│✙ *${prefix}tebakbendera*
│✙ *${prefix}tebakgambar*
│✙ *${prefix}family100*
│✙ *${prefix}caklontong*
│✙ *${prefix}wancak*
│✙ *${prefix}asupan*
│✙ *${prefix}meme*
│✙ *${prefix}memeindo *
│✙ *${prefix}namaninja *
│✙ *${prefix}alay*
│✙ *${prefix}hilih*
│✙ *${prefix}purba*
│✙ *${prefix}besarkecil*
├─────────
├ *SOUND CHANGER*
│✙ *${prefix}slow*
│✙ *${prefix}gemok*
│✙ *${prefix}tupai*
│✙ *${prefix}imut*
│✙ *${prefix}hodetempo-v*
│✙ *${prefix}bass*
│✙ *${prefix}blub*
│✙ *${prefix}ghost*
│✙ *${prefix}tempo-v*
│✙ *${prefix}tempo*
│✙ *${prefix}fast*
│✙ *${prefix}nightcore*
│✙ *${prefix}gemes*
├─────────
│*「 Creator 」*
│✙ *${prefix}ttp*
│✙ *${prefix}ttp2*
│✙ *${prefix}ttp3*
│✙ *${prefix}ttp4*
│✙ *${prefix}attp*
│✙ *${prefix}qrcode*
│✙ *${prefix}nulis*
│✙ *${prefix}ytkomen* (Prem)
│✙ *${prefix}phkomen* (Prem)
│✙ *${prefix}amongus*
│✙ *${prefix}emojitoimg*
│✙ *${prefix}ktpmaker* (Prem)
│✙ *${prefix}smoji emoji*
│✙ *${prefix}fakedonald text*
├─────────
│*「 Primbon 」*
│✙ *${prefix}artinama name*
│✙ *${prefix}jodoh name1 & name2*
│✙ *${prefix}weton tanggal bulan tahun*
│✙ *${prefix}jadian tanggal bulan tahun*
│✙ *${prefix}tebakumur name*
├─────────
│*「 Other 」*
│✙ *${prefix}spamsms nomor* (Prem)
├─────────
│*「 Stalking 」*
│✙ *${prefix}ytstalk*
│✙ *${prefix}tkstalk
│✙ *${prefix}githubstalk*
│✙ *${prefix}igstalk*
│✙ *${prefix}twtstalk*
│✙ *${prefix}apikeycek*
├─────────
│*「 text Pro Me 」*
│✙ *${prefix}blackpink text*
│✙ *${prefix}neon text*
│✙ *${prefix}greenneon text*
│✙ *${prefix}advanceglow text*
│✙ *${prefix}futureneon text*
│✙ *${prefix}sandwriting text*
│✙ *${prefix}sandsummer text*
│✙ *${prefix}sandengraved text*
│✙ *${prefix}metaldark text*
│✙ *${prefix}neonlight text*
│✙ *${prefix}holographic text*
│✙ *${prefix}text1917 text*
│✙ *${prefix}minion text*
│✙ *${prefix}deluxesilver text*
│✙ *${prefix}newyearcard text*
│✙ *${prefix}bloodfrosted text*
│✙ *${prefix}halloween text*
│✙ *${prefix}jokerlogo text*
│✙ *${prefix}fireworksparkle text*
│✙ *${prefix}natureleaves text*
│✙ *${prefix}bokeh text*
│✙ *${prefix}toxic text*
│✙ *${prefix}strawberry text*
│✙ *${prefix}box3d text*
│✙ *${prefix}roadwarning text*
│✙ *${prefix}breakwall text*
│✙ *${prefix}icecold text*
│✙ *${prefix}luxury text*
│✙ *${prefix}cloud text*
│✙ *${prefix}summersand text*
│✙ *${prefix}horrorblood text*
│✙ *${prefix}thunder text*
│✙ *${prefix}pornhub text1 text2*
│✙ *${prefix}glitch text1 text2*
│✙ *${prefix}avenger text1 text2*
│✙ *${prefix}space text1 text2*
│✙ *${prefix}ninjalogo text1 text2*
│✙ *${prefix}marvelstudio text1 text2*
│✙ *${prefix}lionlogo text1 text2*
│✙ *${prefix}wolflogo text1 text2*
│✙ *${prefix}steel3d text1 text2*
│✙ *${prefix}wallgravity text1 text2*
├─────────
│*「 Photo Oxy 」*
│✙ *${prefix}shadow text*
│✙ *${prefix}cup text*
│✙ *${prefix}cup1 text*
│✙ *${prefix}romance text*
│✙ *${prefix}smoke text*
│✙ *${prefix}burnpaper text*
│✙ *${prefix}lovemessage text*
│✙ *${prefix}undergrass text*
│✙ *${prefix}love text*
│✙ *${prefix}coffe text*
│✙ *${prefix}woodheart text*
│✙ *${prefix}woodenboard text*
│✙ *${prefix}summer3d text*
│✙ *${prefix}wolfmetal text*
│✙ *${prefix}nature3d text*
│✙ *${prefix}underwater text*
│✙ *${prefix}golderrose text*
│✙ *${prefix}summernature text*
│✙ *${prefix}letterleaves text*
│✙ *${prefix}glowingneon text*
│✙ *${prefix}fallleaves text*
│✙ *${prefix}flamming text*
│✙ *${prefix}harrypotter text*
│✙ *${prefix}carvedwood text*
│✙ *${prefix}tiktok text1 text2*
│✙ *${prefix}arcade8bit text1 text2*
│✙ *${prefix}battlefield4 text1 text2*
│✙ *${prefix}pubg text1 text2*
├─────────
│*「 Ephoto 360 」*
│✙ *${prefix}wetglass text*
│✙ *${prefix}multicolor3d text*
│✙ *${prefix}watercolor text*
│✙ *${prefix}luxurygold text*
│✙ *${prefix}galaxywallpaper text*
│✙ *${prefix}lighttext text*
│✙ *${prefix}beautifulflower text*
│✙ *${prefix}puppycute text*
│✙ *${prefix}royaltext text*
│✙ *${prefix}heartshaped text*
│✙ *${prefix}birthdaycake text*
│✙ *${prefix}galaxystyle text*
│✙ *${prefix}hologram3d text*
│✙ *${prefix}greenneon text*
│✙ *${prefix}glossychrome text*
│✙ *${prefix}greenbush text*
│✙ *${prefix}metallogo text*
│✙ *${prefix}noeltext* text*
│✙ *${prefix}glittergold text*
│✙ *${prefix}textcake text*
│✙ *${prefix}starsnight text*
│✙ *${prefix}wooden3d text*
│✙ *${prefix}textbyname text*
│✙ *${prefix}writegalacy text*
│✙ *${prefix}galaxybat text*
│✙ *${prefix}snow3d text*
│✙ *${prefix}birthdayday text*
│✙ *${prefix}goldplaybutton text*
│✙ *${prefix}silverplaybutton text*
│✙ *${prefix}freefire text*
├─────────
├ *FILM*
│✙ *${prefix}film*
│✙ *${prefix}film2*
│✙ *${prefix}searchfilm*
│✙ *${prefix}filmapikterbaru*
│✙ *${prefix}filmapikdrama*
│✙ *${prefix}lk21*
│✙ *${prefix}drakorongoing*
│✙ *${prefix}wattpad*
│✙${prefix}wattpadsearch*
├───────── 
├ *SEARCH*
│✙ *${prefix}gimage*
│✙ *${prefix}gimage2*
│✙ *${prefix}konachan*
│✙ *${prefix}wallpapersearch*
│✙ *${prefix}wallpapersearch2*
│✙ *${prefix}playstore*
│✙ *${prefix}shopee*
│✙ *${prefix}google*
│✙ *${prefix}stickerwa*
╰┬────────────┈ ⳹
    │ *❨ *Random text* ❩*
┌┤✙  *${prefix}quotes*
││✙  *${prefix}quotesanime* 
││✙  *${prefix}quotesdilan* 
││✙  *${prefix}quotesimage* 
││✙  *${prefix}faktaunik* 
││✙  *${prefix}katabijak* 
││✙  *${prefix}pantun* 
│├─────────
│││ *✙ Berita Menu ✙*
││✙ *${prefix}tribunews*
││✙ *${prefix}liputan6*
││✙ *${prefix}foxnews*
││✙ *${prefix}newsinfo*
│├───────── 
││ *✙ Deteksi Menu ✙*
││✙ *${prefix}deteksiwajah*
││✙ *${prefix}deteksigender*
││✙ *${prefix}deteksiumur*
│├───────── 
││ *✙ Nsfw Menu ✙*
││✙ *${prefix}randombokep*
││✙ *${prefix}pussy*
││✙ *${prefix}nekonime*
││✙ *${prefix}baka*
││✙ *${prefix}blowjob*
││✙ *${prefix}lewd*
││✙ *${prefix}hentai*
││✙ *${prefix}waifu*
││✙ *${prefix}eroyuri*
││✙ *${prefix}hug*
││✙ *${prefix}hug2*
││✙ *${prefix}chiisaihentai* (isPrem)
││✙ *${prefix}trap* (isPrem)
││✙ *${prefix}blowjob* (isPrem)
││✙ *${prefix}yaoi* (isPrem)
││✙ *${prefix}ecchi* (isPrem)
││✙ *${prefix}hentai* (isPrem)
││✙ *${prefix}ahegao* (isPrem)
││✙ *${prefix}hololewd* (isPrem)
││✙ *${prefix}sideoppai* (isPrem)
││✙ *${prefix}animefeets* (isPrem)
││✙ *${prefix}animebooty* (isPrem)
││✙ *${prefix}animethighss* (isPrem)
││✙ *${prefix}hentaiparadise* (isPrem)
││✙ *${prefix}animearmpits* (isPrem)
││✙ *${prefix}hentaifemdom* (isPrem)
││✙ *${prefix}lewdanimegirls* (isPrem)
││✙ *${prefix}biganimetiddies* (isPrem)
││✙ *${prefix}animebellybutton* (isPrem)
││✙ *${prefix}hentai4everyone* (isPrem)
││✙ *${prefix}ero* 
││✙ *${prefix}cum*
││✙ *${prefix}feet*
││✙ *${prefix}yuri*
││✙ *${prefix}trap*
││✙ *${prefix}lewd*
││✙ *${prefix}feed*
││✙ *${prefix}eron*
││✙ *${prefix}solo*
││✙ *${prefix}gasm*
││✙ *${prefix}poke*
││✙ *${prefix}anal*
││✙ *${prefix}holo*
││✙ *${prefix}tits*
││✙ *${prefix}kuni*
││✙ *${prefix}kiss*
││✙ *${prefix}erok*
││✙ *${prefix}smug*
││✙ *${prefix}baka*
││✙ *${prefix}solog*
││✙ *${prefix}feetg*
││✙ *${prefix}lewdk*
││✙ *${prefix}waifu*
││✙ *${prefix}pussy*
││✙ *${prefix}femdom*
││✙ *${prefix}cuddle*
││✙ *${prefix}hentai*
││✙ *${prefix}eroyuri*
││✙ *${prefix}cum_jpg*
││✙ *${prefix}blowjob*
││✙ *${prefix}erofeet*
││✙ *${prefix}holoero*
││✙ *${prefix}classic*
││✙ *${prefix}erokemo*
││✙ *${prefix}fox_girl*
││✙ *${prefix}futanari*
││✙ *${prefix}lewdkemo*
││✙ *${prefix}wallpaper*
││✙ *${prefix}pussy_jpg*
││✙ *${prefix}kemonomimi*
││✙ *${prefix}nsfw_avatar*
││✙ *${prefix}nhentai*
││✙ *${prefix}nhentaisearch*
││✙ *${prefix}nhentaipdf*
││✙ *${prefix}nekopoi*
││✙ *${prefix}nekopoisearch*
││✙ *${prefix}xhamstersearch*
││✙ *${prefix}xhamster*
││✙ *${prefix}xnxxsearch*
││✙ *${prefix}xnxx*
│├───────── 
││ *✙ Anime Menu ✙*
││✙ *${prefix}dewabatch*
││✙ *${prefix}neonime*
││✙ *${prefix}samehadaku*
││✙ *${prefix}kusonime*
││✙ *${prefix}animeboy*
││✙ *${prefix}animegirl*
││✙ *${prefix}waifu*
││✙ *${prefix}character*
││✙ *${prefix}manga*
││✙ *${prefix}anime*
││✙ *${prefix}wait*
││✙ *${prefix}kusonime*
││✙ *${prefix}kusonimesearch*
││✙ *${prefix}otakudesu*
││✙ *${prefix}otakudesusearch*
│├───────── 
││ *✙ Random Image Menu ✙*
││✙ *${prefix}freefireimg*
││✙ *${prefix}ww2*
││✙ *${prefix}anjing*
││✙ *${prefix}kucing*
││✙ *${prefix}doraemon*
││✙ *${prefix}hamster*
││✙ *${prefix}kelinci*
││✙ *${prefix}art*
││✙ *${prefix}bts*
││✙ *${prefix}exo*
││✙ *${prefix}elf*
││✙ *${prefix}loli*
││✙ *${prefix}neko*
││✙ *${prefix}waifu*
││✙ *${prefix}shota*
││✙ *${prefix}husbu*
││✙ *${prefix}sagiri*
││✙ *${prefix}shinobu*
││✙ *${prefix}megumin*
││✙ *${prefix}wallnime*
│├───────── 
││ *Soviet Menu* 
││✙ *${prefix}lenin*
││✙ *${prefix}stalin*
││✙ *${prefix}kalashnikov*
││✙ *${prefix}unisoviet*
││✙ *${prefix}nikitakhrushchev*
││✙ *${prefix}andreigromyko*
││✙ *${prefix}yurigagarin*
││✙ *${prefix}T-34*
││✙ *${prefix}YAK-3*
││✙ *${prefix}YAK-9*
││✙ *${prefix}LA-7*
││✙ *${prefix}ak47*
││✙ *${prefix}katyusha*
││✙ *${prefix}mig-15*
││✙ *${prefix}rpg-7*
│├───────── 
││ *Storage Menu* 
││✙ *${prefix}addvn*
││✙ *${prefix}listvn*
││✙ *${prefix}getvn*
││✙ *${prefix}addsticker*
││✙ *${prefix}liststicker*
││✙ *${prefix}getsticker*
││✙ *${prefix}addimage*
││✙ *${prefix}listimage*
││✙ *${prefix}getimage*
││✙ *${prefix}addvideo*
││✙ *${prefix}listvideo*
││✙ *${prefix}getvideo*
│├───────── 
││ *Entah Menu* 
││✙ *${prefix}redglass*
││✙ *${prefix}webmatrix*
││✙ *${prefix}multimaterial*
││✙ *${prefix}tagsticker*
││✙ *${prefix}superhero*
││✙ *${prefix}skeleton*
││✙ *${prefix}avatarhacker*
││✙ *${prefix}watermaker*
││✙ *${prefix}ballon*
││✙ *${prefix}girlgrafity*
││✙ *${prefix}matrick*
││✙ *${prefix}viettel*
││✙ *${prefix}glowmetallic*
││✙ *${prefix}text*google*
││✙ *${prefix}tinyurl*
││✙ *${prefix}amongus*
││✙ *${prefix}githubstalk*
│├───────── 
││ *Base Enc Menu*  
││✙ *${prefix}base64enc*
││✙ *${prefix}base64dec*
││✙ *${prefix}base32enc*
││✙ *${prefix}base32dec*
││✙ *${prefix}sha1enc*
││✙ *${prefix}sha256enc*
││✙ *${prefix}sha512enc*
││✙ *${prefix}encbinary*
││✙ *${prefix}decbinary*
│├───────── 
││ *Asupan Menu* 
││✙ *${prefix}asupan*
││✙ *${prefix}amel*
││✙ ${prefix}una*
│├───────── 
││ *Shortlink Menu* 
││✙ *${prefix}bitly*
││✙ *${prefix}cuttly*
││✙ *${prefix}tinyurl*
││✙ *${prefix}shortlink*
││✙ *${prefix}shortlink2*
││✙ *${prefix}shortlink3*
││✙ *${prefix}shortlink4*
││✙ *${prefix}shortlink5*
││✙  *${prefix}shortlink6*
││✙  *${prefix}request (text*)* 
│╰────────────┈ ⳹
│╭─❒*「 *DETECTOR SYSTEM*)
││✙ *${prefix}nobadword (enable/disable)
││✙ *${prefix}event (aktif/mati)
││✙ *${prefix}antidelete (aktif/mati)
││✙ *${prefix}antidelete ctaktif/ctmati)
││✙ *${prefix}antidelete (banct 628558xxx)
││✙ *${prefix}antilinkgroup (1/0)
││✙ *${prefix}antilinktelegram (1/0)
││✙ *${prefix}antilinkyoutube-v (1/0)
││✙ *${prefix}antilnkyoutube-c (1/0)
││✙ *${prefix}antilinkinstagram (1/0)
││✙ *${prefix}antilinkfacebook (1/0)
││✙ *${prefix}nsfw (1/0)
││✙ *${prefix}welcome (1/0)
││✙ *${prefix}leveling (1/0)
││✙ *${prefix}grup (buka/tutup)
│╰────────────┈ ⳹
│╭─❒*「 *ANTI VIRUS GROUP* 」*
││✙ *${prefix}antivirus1 (a/b)
││✙ *${prefix}antivirus2 (a/b)
││✙ *${prefix}antivirus3 (a/b)
││✙ *${prefix}antivirus4 (a/b)
││✙ *${prefix}antivirus5 (a/b)
││✙ *${prefix}antivirus6 (a/b)
││✙ *${prefix}antivirus7 (a/b)
│╰────────────┈ ⳹
├ *EDIT*
│✙ *${prefix}wanted
│✙ *${prefix}gtav
│✙ *${prefix}facebookpage
│✙ *${prefix}costumwp
│✙ *${prefix}pantaimalam
│✙ *${prefix}pencil
│✙ *${prefix}bakar
│✙ *${prefix}crossgun
│✙ *${prefix}komunis
│✙ *${prefix}deletepc
│✙ *${prefix}rotate
│✙ *${prefix}pixelate
│✙ *${prefix}imageflip
│✙ *${prefix}imagerotate
│✙ *${prefix}removebg
│✙ *${prefix}deepfry
│✙ *${prefix}fisheye
│✙ *${prefix}skullmask
│✙ *${prefix}grayscale
│✙ *${prefix}smile
│✙ *${prefix}alien
│✙ *${prefix}wanted
│✙ *${prefix}facebookpage
│✙ *${prefix}costumwp
│✙ *${prefix}pantaimalam
│✙ *${prefix}pencil
│✙ *${prefix}bakar
│✙ *${prefix}crossgun
│✙ *${prefix}hitler
│✙ *${prefix}trash
│✙ *${prefix}picture
│✙ *${prefix}blur
│✙ *${prefix}sepia
│✙ *${prefix}affect
│✙ *${prefix}sketch
│✙ *${prefix}raindrop
│✙ *${prefix}joke
│✙ *${prefix}invert
│✙ *${prefix}meme atas/bawah
╰┬────────────┈ ⳹
    │ *Sertifikasi*
┌┤✙ *${prefix}fftourserti
││✙ *${prefix}fftourserti2
││✙ *${prefix}fftourserti3
││✙ *${prefix}fftourserti4
││✙ *${prefix}fftourserti5
││✙ *${prefix}pubgtourserti
││✙ *${prefix}pubgtourserti2
││✙ *${prefix}pubgtourserti3
││✙ *${prefix}pubgtourserti4
││✙ *${prefix}pubgtourserti5
││✙ *${prefix}mltourserti
││✙ *${prefix}mltourserti2
││✙ *${prefix}mltourserti3
││✙ *${prefix}mltourserti4
││✙ *${prefix}mltourserti5
││✙ *${prefix}tweetfake
││✙ *${prefix}babu
││✙ *${prefix}bucinserti
││✙ *${prefix}bocilepep
││✙ *${prefix}gayserti
││✙ *${prefix}pacar
││✙ *${prefix}sadboy
││✙ *${prefix}surga
││✙ *${prefix}pintar
││✙ *${prefix}badboy
││✙ *${prefix}badgirl
││✙ *${prefix}goodboy
││✙ *${prefix}goodgirl
││✙ *${prefix}editorberkelas
│├─────────
│├ *Nulis*
││✙ *${prefix}nulis
││✙ *${prefix}nulis2
││✙ *${prefix}nulis3
││✙ *${prefix}nulis4
╰┬────────────┈ ⳹
    │ ❨ *Sound islam☪️* ❩ 
┌┤✙ *${prefix}ayatkursi2
││✙ *${prefix}tilawah
││✙ *${prefix}sholawatnabi
││✙ *${prefix}ngaji2
││✙ *${prefix}ngaji2
│├─────────
│├*Sound Jedag jedug🔊* ﹞ 
││✙ *${prefix}iri
││✙ *${prefix}pale
││✙ *${prefix}sound
││✙ *${prefix}sound1
││✙ *${prefix}sound2
││✙ *${prefix}sound3
││✙ *${prefix}sound4
││✙ *${prefix}sound5
││✙ *${prefix}sound6
││✙ *${prefix}sound7
├───────── 
│├﹝ *Sound Musik🎧 ﹞ 
││✙ *${prefix}sad
││✙ *${prefix}sad2
││✙ *${prefix}sad3
││✙ *${prefix}sad4
││✙ *${prefix}aeshtetic
││✙ *${prefix}aeshtetic2
││✙ *${prefix}aeshtetic3
││✙ *${prefix}aeshtetic4
││✙ *${prefix}home
││✙ *${prefix}gettingold
││✙ *${prefix}allnight
││✙ *${prefix}lucas
││✙ *${prefix}wanna
││✙ *${prefix}yourskin
││✙ *${prefix}up
││✙ *${prefix}cutmeoff
││✙ *${prefix}beautiful
││✙ *${prefix}loosinggame
││✙ *${prefix}loosinginterest
││✙ *${prefix}playdate
╰┬────────────┈ ⳹
┌┤➤ *DEVELOPER* 
││
││script bot ini di susun
││oleh developer dibawah!
│├──────── 
││✙◗ _Arya Manik_
│└──────── 
│✙◗ ${prefix}credits (all.tqto)
╰─━━━─── • ───━━━❋ཻུ۪۪⸙

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
      *「 ManikBot 」*`
}

exports.help = help
