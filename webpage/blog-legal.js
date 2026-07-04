// ═══════════════════════════════════════════════════════════
// LOOTREGEN BLOG — LEGAL MODALS (Privacy Policy + Impressum)
// © 2026 Lootregen (Mateusz Mirosław Woźniak) · lootregen.com
// Same text as the main site's modals, in all three languages.
// openLegal('privacy') / openLegal('impressum') builds the modal
// on first use; closes on ✕, click-outside, or Escape.
// NOTE: if you change the legal text here, change it in
// index.html (legalContent) too — they are kept in sync by hand.
// ═══════════════════════════════════════════════════════════
var blogLegal = {
  en:{
    privacy:'<h2>Privacy Policy</h2>'+
      '<h3>1. Overview</h3><p>This website is operated by Mateusz Mirosław Woźniak ("Lootregen") and hosted in Switzerland. Your privacy is important to me.</p>'+
      '<h3>2. Data Collected</h3><p>This site stores <b>only essential settings</b> in your browser (localStorage): your language and theme preference, and a session flag so the intro animation plays once. Nothing is transmitted anywhere. No personal data is collected, stored, or processed.</p>'+
      '<h3>3. No Tracking</h3><p>No analytics, tracking pixels, advertising scripts, or third-party cookies. No data is shared with third parties.</p>'+
      '<h3>4. Hosting</h3><p>Self-hosted on a personal <b>Proxmox + K3s cluster</b> in Switzerland, behind Cloudflare for DNS and DDoS protection. Cloudflare may process connection data (e.g. IP addresses) as part of providing this service.</p>'+
      '<h3>5. Your Rights</h3><p>Under the Swiss nDSG and EU GDPR, you have the right to request information about any personal data stored, request deletion, and lodge a complaint with a supervisory authority.</p>'+
      '<h3>6. Blog</h3><p>The blog is part of this website and follows the same rules: no comments system, no analytics, no third-party embeds.</p>'+
      '<h3>7. Contact</h3><p>For privacy questions, contact me via the links on this site.</p><p><em>Last updated: July 2026</em></p>',
    impressum:'<h2>Impressum</h2>'+
      '<h3>Responsible Person</h3><p><strong>Mateusz Mirosław Woźniak</strong><br>(known as "Lootregen")<br>Switzerland</p>'+
      '<h3>Contact</h3><p>GitHub: <a href="https://github.com/Lootregenit" target="_blank">github.com/Lootregenit</a><br>LinkedIn: <a href="https://www.linkedin.com/in/mateusz-miros%C5%82aw-wo%C5%BAniak-36600b309/" target="_blank">Mateusz M. Woźniak</a></p>'+
      '<h3>Hosting</h3><p>Self-hosted on Proxmox + K3s · Switzerland<br>DNS &amp; CDN: Cloudflare, Inc.</p>'+
      '<h3>Disclaimer</h3><p>Content created with care. No guarantee for accuracy, completeness or timeliness. Liability for linked external websites lies solely with their operators.</p><p><em>Last updated: July 2026</em></p>'
  },
  de:{
    privacy:'<h2>Datenschutzerklärung</h2>'+
      '<h3>1. Übersicht</h3><p>Diese Website wird von Mateusz Mirosław Woźniak ("Lootregen") betrieben und in der Schweiz gehostet.</p>'+
      '<h3>2. Erfasste Daten</h3><p>Diese Seite speichert <b>nur essentielle Einstellungen</b> im Browser (localStorage): Sprach- und Theme-Präferenz sowie ein Sitzungs-Flag, damit die Intro-Animation nur einmal abspielt. Nichts wird übertragen. Es werden keine personenbezogenen Daten erfasst.</p>'+
      '<h3>3. Kein Tracking</h3><p>Keine Analyse-Tools, Tracking-Pixel, Werbeskripte oder Drittanbieter-Cookies. Keine Datenweitergabe an Dritte.</p>'+
      '<h3>4. Hosting</h3><p>Selbst gehostet auf einem privaten <b>Proxmox-+-K3s-Cluster</b> in der Schweiz, hinter Cloudflare. Cloudflare kann im Rahmen des Dienstes Verbindungsdaten (z. B. IP-Adressen) verarbeiten.</p>'+
      '<h3>5. Ihre Rechte</h3><p>Gemäß nDSG und DSGVO haben Sie Auskunfts-, Löschungs- und Beschwerderecht.</p>'+
      '<h3>6. Blog</h3><p>Der Blog ist Teil dieser Website und folgt denselben Regeln: kein Kommentarsystem, keine Analyse-Tools, keine Einbettungen Dritter.</p>'+
      '<h3>7. Kontakt</h3><p>Über die Links auf dieser Seite.</p><p><em>Letzte Aktualisierung: Juli 2026</em></p>',
    impressum:'<h2>Impressum</h2>'+
      '<h3>Verantwortliche Person</h3><p><strong>Mateusz Mirosław Woźniak</strong><br>(bekannt als "Lootregen")<br>Schweiz</p>'+
      '<h3>Kontakt</h3><p>GitHub: <a href="https://github.com/Lootregenit" target="_blank">github.com/Lootregenit</a><br>LinkedIn: <a href="https://www.linkedin.com/in/mateusz-miros%C5%82aw-wo%C5%BAniak-36600b309/" target="_blank">Mateusz M. Woźniak</a></p>'+
      '<h3>Hosting</h3><p>Selbst gehostet auf Proxmox + K3s · Schweiz<br>DNS &amp; CDN: Cloudflare, Inc.</p>'+
      '<h3>Haftungsausschluss</h3><p>Inhalte mit Sorgfalt erstellt. Keine Gewähr für Richtigkeit oder Vollständigkeit. Für externe Links haften deren Betreiber.</p><p><em>Letzte Aktualisierung: Juli 2026</em></p>'
  },
  pl:{
    privacy:'<h2>Polityka prywatności</h2>'+
      '<h3>1. Informacje ogólne</h3><p>Strona prowadzona przez Mateusza Mirosława Woźniaka ("Lootregen"), hostowana w Szwajcarii.</p>'+
      '<h3>2. Zbierane dane</h3><p>Strona zapisuje <b>wyłącznie niezbędne ustawienia</b> w przeglądarce (localStorage): preferencje języka i motywu oraz flagę sesji, dzięki której animacja intro odtwarza się raz. Nic nie jest nigdzie przesyłane. Żadne dane osobowe nie są zbierane.</p>'+
      '<h3>3. Brak śledzenia</h3><p>Brak narzędzi analitycznych, pikseli śledzących, skryptów reklamowych ani cookies stron trzecich.</p>'+
      '<h3>4. Hosting</h3><p>Samodzielny hosting na klastrze <b>Proxmox + K3s</b> w Szwajcarii, za usługą Cloudflare. Cloudflare może przetwarzać dane połączenia (np. adresy IP) w ramach świadczenia usługi.</p>'+
      '<h3>5. Twoje prawa</h3><p>Zgodnie z nDSG i RODO masz prawo do informacji, usunięcia danych i złożenia skargi.</p>'+
      '<h3>6. Blog</h3><p>Blog jest częścią tej strony i podlega tym samym zasadom: brak systemu komentarzy, brak analityki, brak osadzeń stron trzecich.</p>'+
      '<h3>7. Kontakt</h3><p>Przez linki na tej stronie.</p><p><em>Ostatnia aktualizacja: lipiec 2026</em></p>',
    impressum:'<h2>Impressum</h2>'+
      '<h3>Osoba odpowiedzialna</h3><p><strong>Mateusz Mirosław Woźniak</strong><br>(znany jako "Lootregen")<br>Szwajcaria</p>'+
      '<h3>Kontakt</h3><p>GitHub: <a href="https://github.com/Lootregenit" target="_blank">github.com/Lootregenit</a><br>LinkedIn: <a href="https://www.linkedin.com/in/mateusz-miros%C5%82aw-wo%C5%BAniak-36600b309/" target="_blank">Mateusz M. Woźniak</a></p>'+
      '<h3>Hosting</h3><p>Samodzielny hosting na Proxmox + K3s · Szwajcaria<br>DNS i CDN: Cloudflare, Inc.</p>'+
      '<h3>Wyłączenie odpowiedzialności</h3><p>Treści przygotowane z należytą starannością. Za treści stron zewnętrznych odpowiadają ich operatorzy.</p><p><em>Ostatnia aktualizacja: lipiec 2026</em></p>'
  }
};

function openLegal(kind){
  var lang = document.documentElement.getAttribute('data-lang') || 'en';
  var c = (blogLegal[lang] || blogLegal.en)[kind];
  var overlay = document.getElementById('legal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'legal-overlay';
    overlay.innerHTML = '<div class="legal-modal"><button class="legal-close" onclick="closeLegal()">✕</button><div id="legal-body"></div></div>';
    overlay.addEventListener('click', function(e){ if (e.target === overlay) closeLegal(); });
    document.body.appendChild(overlay);
  }
  document.getElementById('legal-body').innerHTML = c;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLegal(){
  var overlay = document.getElementById('legal-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeLegal(); });
