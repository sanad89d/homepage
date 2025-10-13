
const linksRows = [
  { href: "http://www.gmail.com", text: "Gmail" },
  { href: "https://outlook.live.com/owa/", text: "Outlook" },
  { href: "https://mail.yahoo.com/", text: "Yahoo" },
  { href: "https://mail.rediff.com/cgi-bin/login.cgi", text: "Reddit" },

  { href: "https://account.proton.me/mail", text: "Proton" },
  { href: "https://app.tuta.com/login", text: "Tuta" },
  { href: "https://www.mailo.com/", text: "Mailo" },
  { href: "https://atomicmail.io/", text: "Atomic" },

  { href: "https://www.zoho.com/mail/", text: "Zoho" },
  { href: "https://www.startmail.com/", text: "Startmail" },
  { href: "https://disroot.org/en", text: "Disroot" },
  { href: "https://pissmail.com/login.php", text: "Pissmail" },

  { href: "https://www.youtube.com/", text: "Youtube" },
  { href: "https://odysee.com/", text: "Odysee" },
  { href: "https://api.invidious.io/", text: "Invidious" },
  { href: "https://youtube4kdownloader.com/en66/", text: "YoutubeDownloader" },
  
  { href: "https://searx.space/", text: "Searx" },
  { href: "https://search.brave.com/", text: "Brave" },
  { href: "https://duckduckgo.com/", text: "DuckDuckGo" },
  { href: "https://www.startpage.com/", text: "StartPage" },

  { href: "https://temp-mail.org/en/", text: "TempMail" },
  { href: "https://temporarymail.com/en/", text: "TemporaryMail" },
  { href: "https://getnada.com/", text: "DisposableEmail" },
  { href: "https://generator.email/", text: "GenerateEmail" },

  { href: "https://123apps.com/", text: "WebApps" },
  { href: "https://www.online-convert.com/", text: "Online Convert" },
  { href: "https://www.photopea.com/", text: "Photopea" },
  { href: "https://www.vectorpea.com/", text: "Vectorpea" },

  { href: "https://pixlr.com/remove-background/", text: "RemoveBG" },
  { href: "https://www.photoroom.com/tools", text: "Photoroom" },
  { href: "https://cleanup.pictures/", text: "Cleanup" },
  { href: "https://www.pixelcut.ai/tools", text: "Pixelcut" },

  { href: "https://www.dwservice.net/", text: "DWService" },
  { href: "https://rustdesk.com/web/", text: "RustDesk" },
  { href: "https://www.speedtest.net/", text: "SpeedTest" },
  { href: "https://monkeytype.com/", text: "MonkeyType" },

  { href: "https://vscode.dev/", text: "vscode" },
  { href: "https://itselftools.com/", text: "ItSelfTools" },
  { href: "https://invoice-generator.com/", text: "Invoice generator" },
  { href: "https://z-library.sk/", text: "Ebooks" },

  { href: "http://wallpaperswide.com/", text: "Wallpapers Wide" },
  { href: "https://hdqwalls.com/", text: "HDQwalls" },
  { href: "https://wallhaven.cc/", text: "Wallhaven" },
  { href: "https://www.deviantart.com/", text: "Deviantart" },

  { href: "https://send-anywhere.com/", text: "Send Anywhere" },
  { href: "https://github.com/timvisee/send-instances/tree/master?tab=readme-ov-file#instances", text: "Send" },
  { href: "https://wetransfer.com/", text: "WeTransfer" },
  { href: "https://pairdrop.net/", text: "PairDrop" },

  { href: "https://transfer.it/start", text: "Transfer" },
  { href: "https://privacysafe.locker/", text: "Privacysafe" },
  { href: "https://mazanoke.com/", text: "Mazanoke" },
  { href: "https://www.openleaf.xyz/info", text: "Openleaf" },

  { href: "https://www.flipkart.com/", text: "Flipkart" },
  { href: "https://www.amazon.in/", text: "Amazon" },
  { href: "https://www.cashify.in/", text: "Cashify" },
  { href: "https://www.controlz.world/store", text: "Controlz" },

  { href: "https://pdfcandy.com/tools.html", text: "PDF Candy" },
  { href: "https://www.sejda.com/pdf-editor", text: "PDF Editor" },
  { href: "https://pdf.to/", text: "PDF To" },
  { href: "https://www.ilovepdf.com/", text: "I Love PDF" },

  { href: "https://stirling.com/app/", text: "Stirlingpdf" },
  { href: "https://www.i2pdf.com/", text: "I2pdf" },
  { href: "https://www.printfriendly.com/", text: "Printfriendly" },
  { href: "https://www.chatpdf.com/", text: "Chatpdf" },

  { href: "https://www.listennotes.com/", text: "Podcast" },
  { href: "https://web.whatsapp.com/", text: "WhatsApp Web" },
  { href: "https://messages.google.com/web/authentication", text: "Messages" },
  { href: "https://meet.jit.si/", text: "Jitsi" },

  { href: "https://www.virustotal.com/gui/home/upload", text: "VirusTotal" },
  { href: "https://virusscan.jotti.org/en-US/scan-file", text: "VirusScanner" },
  { href: "https://downforeveryoneorjustme.com/", text: "Down For" },
  { href: "https://downdetector.in/", text: "Downdetector" },

  { href: "https://github.com/StevenBlack/hosts", text: "Hosts" },
  { href: "https://privacy.sexy/", text: "Privacy" },
  { href: "https://farside.link/", text: "Farside" },
  { href: "https://alternativeto.net/", text: "AlternativeTo" },

  { href: "https://github.com/Sycnex/Windows10Debloater", text: "Sycnex Script" },
  { href: "https://github.com/ChrisTitusTech/winutil", text: "ChrisTitus Script" },
  { href: "https://wpd.app/", text: "WPD" },
  { href: "https://massgrave.dev/", text: "MAS" },

  { href: "https://winstall.app/", text: "Winstall" },
  { href: "https://www.oo-software.com/en/shutup10", text: "ShutUp" },
  { href: "https://www.fosshub.com/", text: "Fosshub" },
  { href: "https://www.sordum.org/", text: "Sordum" },

  { href: "https://unblock-it.com/", text: "Unblockit" },
  { href: "https://siteunblocked.info/", text: "Site Unblocked" },
  { href: "https://www.pdfdrive.com/", text: "PDF Drive" },
  { href: "https://www.sci-hub.pub/", text: "SciHub" },

  { href: "https://portableapps.com/apps", text: "PortableApps" },
  { href: "https://portapps.io/apps/", text: "PortApps" },
  { href: "https://portableappz.blogspot.com/", text: "PortableAppz" },
  { href: "https://www.fcportables.com/", text: "FCPortables" },

  { href: "https://nextdns.io/", text: "NextDNS" },
  { href: "https://www.privacytools.io/", text: "PrivacyTools" },
  { href: "https://www.privacyguides.org/", text: "PrivacyGuides" },
  { href: "https://exodus-privacy.eu.org/en/", text: "Exodus" },

  { href: "https://f-droid.org/en/packages/", text: "F-Droid" },
  { href: "https://www.app-sales.net/", text: "AppSales" },
  { href: "https://github.com/FossifyOrg", text: "Fossify" },
  { href: "https://grayjay.app/", text: "Grayjay" },

  { href: "https://endoflife.date/", text: "Endoflife" },
  { href: "https://tosdr.org/en", text: "Tosdr" },
  { href: "https://libredirect.github.io/", text: "Libredirect" },
  { href: "https://haveibeenpwned.com/", text: "Haveibeenpwned" },

  { href: "https://languagetool.org/", text: "LanguageTool" },
  { href: "https://www.gingersoftware.com/grammarcheck", text: "Gingersoftware" },
  { href: "https://www.grammarly.com/grammar-check", text: "Grammarly" },
  { href: "https://prowritingaid.com/grammar-checker", text: "Prowritingaid" },

  { href: "https://www.qrcode-monkey.com/", text: "QRCode" },
  { href: "https://scanova.io/qr-code-generator/", text: "Scanova" },
  { href: "https://www.qrstuff.com/", text: "Qrstuff" },
  { href: "https://qrfy.com/", text: "Qrfy" },

  { href: "https://ipintel.vercel.app/", text: "Ipintel" },
  { href: "https://dnschecker.org/all-tools.php", text: "Dnschecker" },
  { href: "https://www.urlvoid.com/", text: "Urlvoid" },
  { href: "https://browserleaks.com/", text: "BrowserLeaks" },
  
  { href: "https://web-check.xyz/", text: "WebCheck" },
  { href: "https://www.scamadviser.com/", text: "Scamadviser" },
  { href: "https://www.scamvoid.net/", text: "Scamvoid" },
  { href: "https://scambunkers.com/", text: "Scambunkers" },

  { href: "https://dub.co/", text: "Dub" },
  { href: "https://t.ly/", text: "T.ly" },
  { href: "https://www.temporary-url.com/", text: "Temporary url" },
  { href: "https://throw-me.vercel.app/", text: "Throw me" },

  { href: "https://shorturl.com/", text: "Shorturl" },
  { href: "https://www.shorturl.at/", text: "Shorturl" },
  { href: "https://unshorten.it/", text: "Unshorten" },
  { href: "https://wheregoes.com/", text: "Wheregoes" },

  { href: "https://www.screenshotmachine.com/", text: "Screenshotmachine" },
  { href: "https://brokenlinkcheck.com/", text: "Brokenlinkcheck" },
  { href: "https://www.deadlinkchecker.com/", text: "Deadlinkchecker" },
  { href: "https://www.drlinkcheck.com/", text: "Drlinkcheck" },

  { href: "https://beebom.com/", text: "Beebom" },
  { href: "https://techwiser.com/", text: "Techwiser" },
  { href: "https://www.ghacks.net/", text: "gHacks" },
  { href: "https://news.ycombinator.com/", text: "Hacker News" },

  { href: "https://techmeme.com/", text: "Techmeme" },
  { href: "https://gadgets360.com/news", text: "Gadgets360" },
  { href: "https://www.digit.in/news/", text: "Digit" },
  { href: "https://inshorts.com/en/read/technology", text: "InShorts" },

  { href: "https://techurls.com/", text: "Techurls" },
  { href: "https://newsv2.com/live", text: "Newsv2" },
  { href: "https://convertall-web.bellz.org/", text: "Convertall" },
  { href: "https://copychar.cc/", text: "Copychar" },

  { href: "https://pagalnew.net/", text: "Pagalnew" },
  { href: "https://pagalworldmusic.com/", text: "Pagalworldmusic" },
  { href: "https://open.spotify.com/", text: "Spotify" },
  { href: "https://www.tunefind.com/", text: "Tunefind" },

  { href: "https://apk4free.net/", text: "Apk4Free" },
  { href: "https://a2zapk.io/", text: "A2zapk" },
  { href: "https://apkaward.com/", text: "Apkaward" },
  { href: "https://an1.com/tags/mods/", text: "An1" },

  { href: "https://psa.wf/", text: "PSA" },
  { href: "https://pahe.ink/", text: "Pahe" },
  { href: "https://www.yourserie.com/", text: "Yourserie" },
  { href: "https://rlsbb.ru/", text: "ResleaseBB" },

  { href: "https://mkvcinemas.haus/", text: "MKVCinemas" },
  { href: "https://downloadhub.boston/", text: "DownloadHub" },
  { href: "https://desiremovies.review/", text: "DesireMovies" },
  { href: "https://1cinevood.agency/", text: "Cinevood" },

  { href: "https://1ssrmovies.eu/", text: "SSRMovies" },
  { href: "https://www.1tamilblasters.rest/", text: "Tamil Blasters" },
  { href: "https://www.1tamilmv.date/", text: "TamilMV" },
  { href: "https://yts.mx/", text: "YTS" },

  { href: "https://www.imdb.com/", text: "IMDb" },
  { href: "https://www.justwatch.com/in", text: "JustWatch" },
  { href: "https://mdblist.com/", text: "MDBList" },
  { href: "https://www.metacritic.com/", text: "Metacritic" },

  { href: "https://reelgood.com/", text: "Reelgood" },
  { href: "https://www.rottentomatoes.com/", text: "Rotten Tomatoes" },
  { href: "https://thetvdb.com/", text: "TheTVDB" },
  { href: "https://www.themoviedb.org/", text: "TMDb" },

  { href: "https://fmhy.pages.dev/", text: "fmhy" },
  { href: "https://softarchive.is/windows/", text: "SoftArchive" },
  { href: "https://ftuapps.dev/?1", text: "FTUApps" },
  { href: "https://www.getintomac.net/", text: "GetIntoMac" },

  { href: "https://subdl.com/", text: "Subdl" },
  { href: "https://www.addic7ed.com/", text: "Addic7ed" },
  { href: "https://yts-subs.com/", text: "YTS-Subs" },
  { href: "https://yifysubtitles.ch/", text: "YIYF Subtitles" },

  { href: "https://www.skidrowreloaded.com/", text: "Skidrow Reloaded" },
  { href: "https://pcgamestorrents.com/", text: "PCGames" },
  { href: "https://steamunlocked.net/", text: "Steam Unlocked" },
  { href: "https://rezi.one/", text: "Rezi" },

  { href: "https://store.epicgames.com/en-US/", text: "Epic Games" },
  { href: "https://store.steampowered.com/", text: "Steam" },
  { href: "https://www.gog.com/", text: "GOG" },
  { href: "https://www.humblebundle.com/store", text: "Humble Bundle" },

  { href: "https://controllertest.org/", text: "Controllertest" },
  { href: "https://keyboard-tester.com/", text: "Keyboard tester" },
  { href: "https://hardwaretester.com/", text: "Hardwaretester" },
  { href: "https://gamepadchecker.com/", text: "Gamepadchecker" },

  { href: "https://www.balena.io/etcher/", text: "Etcher" },
  { href: "https://rufus.ie/en/", text: "Rufus" },
  { href: "https://www.ventoy.net/en/index.html", text: "Ventoy" },
  { href: "https://iventoy.com/en/index.html", text: "iVentoy" },

  { href: "https://msmgtoolkit.in/", text: "MSMG Toolkit" },
  { href: "https://www.ntlite.com/", text: "NTLite" },
  { href: "https://uupdump.net/", text: "UUP Dump" },
  { href: "https://www.heidoc.net/joomla/technology-science/microsoft/67-microsoft-windows-iso-download-tool", text: "ISO Download" },

  { href: "https://www.microsoft.com/en-in/software-download/windows10", text: "Windows 10" },
  { href: "https://www.microsoft.com/en-us/software-download/windows11", text: "Windows 11" },
  { href: "https://www.windowsafg.com/", text: "WindowsAFG" },
  { href: "https://schneegans.de/windows/unattend-generator/", text: "Unattend Generator" },

  { href: "https://www.scamvoid.net/", text: "Scamvoid" },
  { href: "https://www.scamadviser.com/", text: "ScamAdviser" },
  { href: "https://yopass.se/", text: "YoPass" },
  { href: "https://pwpush.com/", text: "PWPush" },

  { href: "https://mullvad.net/en/help/dns-over-https-and-dns-over-tls", text: "Mullvad" },
  { href: "https://www.opendns.com/", text: "Opendns" },
  { href: "https://quad9.net/", text: "Quad9" },
  { href: "https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/agentless/dns/dns-over-https/", text: "Cloudflare" },

  { href: "https://takeout.google.com/", text: "Takeout" },
  { href: "https://imgcandy.com/", text: "IMG Candy" },
  { href: "https://mozilla.github.io/translate/", text: "Translate" },
  { href: "https://www.deepl.com/translator", text: "DeepL" },

  { href: "https://www.hirensbootcd.org/", text: "Hirens Boot" },
  { href: "https://medicatusb.com/", text: "MedicatUSB" },
  { href: "https://os.click/en", text: "OS Click" },
  { href: "https://ameliorated.io/", text: "Ameliorated" },

  { href: "https://dumpor.io/", text: "Dumpor" },
  { href: "https://storiesig.info/en/", text: "StoriesIG" },
  { href: "https://inflact.com/instagram-viewer/", text: "Inflact" },
  { href: "https://twstalker.com/", text: "twstalker" },

  { href: "https://melody.ml/", text: "Melody" },
  { href: "https://vocalremover.org/", text: "Vocal Remover" },
  { href: "https://en.loader.to/4/", text: "Loader" },
  { href: "https://pinterestvideodownloader.com/", text: "Pinterest Downloader" },

  { href: "https://fdownloader.net/en", text: "FB Video Downloader" },
  { href: "https://spotdownloader.com/", text: "Spotify Downloader" },
  { href: "https://spotidownloader.com/en", text: "Spotidownloader" },
  { href: "https://spowload.com/en", text: "Spowload" },

  { href: "https://www.reddit.com/answers/", text: "Reddit" },
  { href: "https://reddit-recap.vercel.app/", text: "Reddit recap" },
  { href: "https://viddit.red/", text: "Viddit" },
  { href: "https://rapidsave.com/", text: "Rapidsave" },

  { href: "https://www.yodesi.online/", text: "YoDesi" },
  { href: "https://ziddidil.com/", text: "Ziddidil" },
  { href: "https://ww4.yodesitv.org/", text: "YoDesiTV" },
  { href: "https://serialmaza.biz/", text: "SerialGhar" },
  
  { href: "https://cryptpad.fr/", text: "Cryptpad" },
  { href: "https://www.phot.ai/tools", text: "Phot" },
  { href: "https://www.freeconvert.com/", text: "Freeconvert" },
  { href: "https://www.meter.net/", text: "Meter" },

  { href: "https://foxtorrent.ch/", text: "Foxtorrent" },
  { href: "https://bitsearch.to/", text: "Bitsearch" },
  { href: "https://solidtorrents.to/", text: "Solidtorrents" },
  { href: "https://comparify.pro/", text: "Comparify" },
  
  { href: "https://www.removemd.com/", text: "Removemd" },
  { href: "https://coveryourtracks.eff.org/", text: "Coveryourtracks" },
  { href: "https://virgil.samidy.com/Game-search/", text: "Virgil" },
  { href: "https://virgil.samidy.com/software-search/", text: "Virgil" },

  { href: "https://www.tldraw.com/", text: "tldraw" },
  { href: "https://excalidraw.com/", text: "Excalidraw" },
  { href: "https://app.diagrams.net/", text: "diagrams.net" },
  { href: "https://useblankly.com/", text: "Blankly" },

  { href: "https://chatgpt.com/", text: "ChatGPT" },
  { href: "https://gemini.google.com/app", text: "Gemini" },
  { href: "https://copilot.microsoft.com/chats/", text: "Copilot" },
  { href: "https://grok.com/", text: "Grok" },
  
  { href: "https://lumo.proton.me/", text: "Lumo" },
  { href: "https://documator.cc/", text: "Documator" },
  { href: "https://whybot-khaki.vercel.app/", text: "Whybot khaki" },
  { href: "https://manus.im/", text: "Manus" },

  { href: "https://elevenlabs.io/", text: "ElevenLabs" },
  { href: "https://www.wellsaid.io/", text: "WellSaid" },
  { href: "https://riverside.fm/tools", text: "Riverside Tools" },
  { href: "https://clipdrop.co/tools", text: "ClipDrop Tools" },
  
  { href: "https://www.futuretools.io/", text: "FutureTools" },
  { href: "https://www.futurepedia.io/", text: "Futurepedia" },
  { href: "https://mrfreetools.com/tools/", text: "MrFreeTools" },
  { href: "https://huggingface.co/spaces", text: "Hugging Face Spaces" },
  
  { href: "https://www.heygen.com/", text: "HeyGen" },
  { href: "https://invideo.io/", text: "InVideo" },
  { href: "https://www.unscript.ai/", text: "Unscript" },
  { href: "https://klingai.com/global/", text: "Kling AI" },
  
  { href: "https://app.klingai.com/global/", text: "Kling AI App" },
  { href: "https://notebooklm.google/", text: "NotebookLM" },
  { href: "https://reddit-recap.vercel.app/", text: "Reddit Recap" },
  { href: "https://stitch.withgoogle.com/", text: "Google Stitch" },

  { href: "https://www.krea.ai/", text: "Krea" },
  { href: "https://dub.co/", text: "Dub" },
  { href: "https://manus.im/", text: "Manus" },
  { href: "https://www.perplexity.ai/", text: "Perplexity" },

  { href: "https://www.tryshiro.com/", text: "Tryshiro" },
  { href: "https://chat.minimax.io/", text: "MiniMax" },
  { href: "https://sora.chatgpt.com/", text: "Sora" },
  { href: "https://www.doesmyideaexist.com/", text: "Doesmyideaexist" },

  { href: "https://github.com/ios12checker/Windows-Maintenance-Tool/", text: "Windows Maintenance Tool" },
  { href: "https://github.com/ios12checker/MSS-Mac-Service-Script", text: "Mac Service Script" },
  { href: "https://github.com/ChrisTitusTech/linutil", text: "Linux Utility" },
  { href: "https://github.com/memstechtips/UnattendedWinstall", text: "UnattendedWinstall" }
];

    // Light/Dark Mode Toggle
    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('theme-toggle');

      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
      }

      toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem(
          'theme',
          document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
      });

      // Searchable table function
      function createSearchableTable(containerId, data, filter = '') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const search = filter.toLowerCase();
        const filtered = data.filter(link =>
          link.text.toLowerCase().includes(search) || link.href.toLowerCase().includes(search)
        );

        container.innerHTML = '';
        const table = document.createElement('table');

        for (let i = 0; i < filtered.length; i += 4) {
          const tr = document.createElement('tr');
          for (let j = i; j < i + 4 && j < filtered.length; j++) {
            const td = document.createElement('td');
            const a = document.createElement('a');
            a.href = filtered[j].href;
            a.textContent = filtered[j].text;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            td.appendChild(a);
            tr.appendChild(td);
          }
          table.appendChild(tr);
        }

        container.appendChild(table);
      }

      // Init search
      const containerId = 'searchable-table-container';
      const input = document.getElementById('search-input');

      if (containerId && input) {
        createSearchableTable(containerId, linksRows);

        input.addEventListener('input', (e) => {
          createSearchableTable(containerId, linksRows, e.target.value);
        });
      }
    });
