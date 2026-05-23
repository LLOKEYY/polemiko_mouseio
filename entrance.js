const translations = {
  el: {
    siteHeaderLabel: "Πληροφορίες σελίδας",
    navigationLabel: "Πλοήγηση",
    brandName: "Πολεμικό Μουσείο Παράρτημα Θεσσαλονίκης",
    roomLabel: "Αίθουσα",
    roomSelectLabel: "Επιλογή αίθουσας",
    historyRoom: "Ιστορία",
    entranceRoom: "Είσοδος",
    documentTitle: "Είσοδος | Πολεμικό Μουσείο Παράρτημα Θεσσαλονίκης",
    languageSwitchLabel: "Επιλογή γλώσσας",
    greekLanguage: "Ελληνικά",
    englishLanguage: "English",
    heroKicker: "Διαδρομή εισόδου",
    heroTitle: "Η είσοδος του μουσείου",
    heroCopy:
      "Πάτησε ένα σημείο στο σχέδιο για να δεις τι εκτίθεται σε εκείνη τη θέση.",
    mapSectionLabel: "Διαδραστικό σχέδιο εισόδου",
    mapLabel: "Κάτοψη εισόδου μουσείου",
    mapTitle:
      "Σχέδιο εισόδου με εκθέματα αριστερά, δεξιά και προς τις σκάλες",
    stairsLabel: "ΣΚΑΛΕΣ",
    entranceLabel: "ΕΙΣΟΔΟΣ",
    heidelbergPoint: "Heidelberg",
    chandlerPoint: "Chandler and Price",
    weaponsPoint: "Προθήκη όπλων",
    infantryPoint: "Στολή Πεζικού",
    cavalryPoint: "Στολή Ιππικού-Τεθωρακισμένων",
    legendLabel: "Υπόμνημα σχεδίου",
    weaponsLegend: "Προθήκη όπλων",
    infantryLegend: "Στολή Πεζικού",
    cavalryLegend: "Στολή Ιππικού-Τεθωρακισμένων",
  },
  en: {
    siteHeaderLabel: "Page information",
    navigationLabel: "Navigation",
    brandName: "War Museum, Thessaloniki Branch",
    roomLabel: "Room",
    roomSelectLabel: "Choose museum room",
    historyRoom: "History",
    entranceRoom: "Entrance",
    documentTitle: "Entrance | War Museum, Thessaloniki Branch",
    languageSwitchLabel: "Language selection",
    greekLanguage: "Greek",
    englishLanguage: "English",
    heroKicker: "Entrance route",
    heroTitle: "The museum entrance",
    heroCopy:
      "Tap a point on the plan to see what is displayed in that location.",
    mapSectionLabel: "Interactive entrance plan",
    mapLabel: "Museum entrance floor plan",
    mapTitle:
      "Entrance plan with exhibits on the left, on the right, and toward the stairs",
    stairsLabel: "STAIRS",
    entranceLabel: "ENTRANCE",
    heidelbergPoint: "Heidelberg",
    chandlerPoint: "Chandler and Price",
    weaponsPoint: "Weapons display case",
    infantryPoint: "Infantry colonel uniform",
    cavalryPoint: "Cavalry-Armored colonel uniform",
    legendLabel: "Plan legend",
    weaponsLegend: "Weapons display case",
    infantryLegend: "Infantry uniform",
    cavalryLegend: "Cavalry-Armored uniform",
  },
};

const weapons = {
  el: [
    "Πιστόλι Browning M 1922 διαμ. 9 χιλ.",
    "Πιστόλι Beretta M 1934 διαμ. 9 χιλ.",
    "Περίστροφο Nagant M 1898 διαμ. 7,62 χιλ.",
    "Πιστόλι Browning M 1903 διαμ. 9 χιλ.",
    "Περίστροφο Rast & Gasser M 1898 διαμ. 8 χιλ.",
    "Περίστροφο Brescia-Bodeo διαμ. 10,4 χιλ.",
    'Περίστροφο Colt Commando διαμ. 38"',
    'Περίστροφο Smith & Wesson διαμ. 38"',
    "Πιστόλι Bergman-Bayard M 1908 διαμ. 9 χιλ.",
    'Περίστροφο Enfield διαμ. 38"',
    'Περίστροφο Colt διαμ. 455"',
    'Περίστροφο Webley MK VI διαμ. 455"',
    "Ξιφολόγχη τυφεκίου Lebel M 1886/93",
    "Ξιφολόγχη Mannlicher-Berthier M 1907/15",
    "Ξιφολόγχη τυφεκίου Turkish Mauser M 1890 & M 1893",
    'Τυφέκιο Enfield No1 διαμ. 303"',
    'Τυφέκιο Enfield No3 διαμ. 303"',
    "Τυφέκιο Mannlicher Ε.Σ. M 1903 διαμ. 6,5 χιλ.",
    "Τυφέκιο Mauser Τουρκίας M1890 διαμ. 7,65 χιλ.",
    "Τυφέκιο Mannlicher Βουλγαρίας M 1895 διαμ. 8 χιλ.",
    'Τυφέκιο Ross Mark III Καναδά M 1910 303"',
    "Τυφέκιο Lebel M 1886/93 διαμ. 8 χιλ.",
    "Τυφέκιο Mannlicher - Berthier M 1907/15 διαμ. 8 χιλ.",
    "Σπάθη Ιππικού",
    "Ξιφολόγχη τυφεκίου Μ1 μακριά.",
    "Σπάθη Ιππικού",
    "Ξιφολόγχη Τυφεκίου Mannlicher - Carcano M 1891",
    "Σπάθη αξιωματικού Ε.Σ. Πεζικού M 1868",
    "Ξιφολόγχη τυφεκίου Μ1 μεσαία.",
    "Πιστόλι Mauser διαμ. 7,65 χιλ.",
    "Πιστόλι Browning M 1900 διαμ. 7,65 χιλ.",
    "Πιστόλι Browning Hi Power M 1935 διαμ. 9 χιλ.",
    "Πιστόλι Luger P 08 διαμ. 9 χιλ.",
    "Περίστροφο Lebel M 1896 διαμ. 8 χιλ.",
    "Πιστόλι Mannlicher M 1905 διαμ. 7,63 χιλ.",
    "Περίστροφο Modele d' Ordonnance M 1873 διαμ. 11,4 χιλ.",
    "Πιστόλι Walther P38 διαμ. 9 χιλ.",
    "Πιστόλι Roth-Steyr M 1907 διαμ. 8 χιλ.",
    'Πιστόλι Colt M 1911 45"',
    "Πιστόλι Βελγίου αγνώστου τύπου",
    "Περίστροφο Gasser Montenegin M 1870 διαμ. 10,4 χιλ.",
    "Ξιφολόγχη τυφεκίου Enfield No1",
    "Ξιφολόγχη τυφεκίου Enfield No3",
    "Ξιφολόγχη τυφεκίου Mauser Τουρκίας M 1903",
    "Σπάθη Ιππικού",
    "Ξιφολόγχη τυφεκίου Μ1 κοντή",
    "Σπάθη Πυροβολικού M 1868",
    "Ξιφολόγχη τυφεκίου Mauser M 1898 Β' Παγκοσμίου Πολέμου",
    "Σπάθη Πυροβολικού M 1868",
    "Ξιφολόγχη Τυφεκίου Arisaka Ιαπωνίας",
    "Σπάθη Τουρκίας M 1889",
    "Τυφέκιο Mosin-Nagan M 1891 διαμ. 7,61 χιλ.",
    "Τυφέκιο Mannlicher M 1888 διαμ. 8 χιλ.",
    "Τυφέκιο Mauser Τουρκίας M 1903 διαμ. 7,65 χιλ.",
    "Τυφέκιο Mauser Τουρκίας M 1893 διαμ. 7,65 χιλ.",
    "Τυφέκιο Mannlicher-Carcano M 1891 διαμ. 6,5 χιλ.",
    "Τυφέκιο Peabody-Martini M 1872 διαμ. 11,43 χιλ.",
  ],
  en: [
    "Browning M 1922 pistol, 9 mm caliber",
    "Beretta M 1934 pistol, 9 mm caliber",
    "Nagant M 1898 revolver, 7.62 mm caliber",
    "Browning M 1903 pistol, 9 mm caliber",
    "Rast & Gasser M 1898 revolver, 8 mm caliber",
    "Brescia-Bodeo revolver, 10.4 mm caliber",
    'Colt Commando revolver, .38 caliber',
    'Smith & Wesson revolver, .38 caliber',
    "Bergman-Bayard M 1908 pistol, 9 mm caliber",
    'Enfield revolver, .38 caliber',
    'Colt revolver, .455 caliber',
    'Webley MK VI revolver, .455 caliber',
    "Bayonet for Lebel M 1886/93 rifle",
    "Mannlicher-Berthier M 1907/15 bayonet",
    "Bayonet for Turkish Mauser M 1890 & M 1893 rifle",
    '.303 caliber Enfield No1 rifle',
    '.303 caliber Enfield No3 rifle',
    "Greek Army Mannlicher M 1903 rifle, 6.5 mm caliber",
    "Turkish Mauser M1890 rifle, 7.65 mm caliber",
    "Bulgarian Mannlicher M 1895 rifle, 8 mm caliber",
    '.303 caliber Canadian Ross Mark III M 1910 rifle',
    "Lebel M 1886/93 rifle, 8 mm caliber",
    "Mannlicher - Berthier M 1907/15 rifle, 8 mm caliber",
    "Cavalry saber",
    "Long M1 rifle bayonet",
    "Cavalry saber",
    "Bayonet for Mannlicher - Carcano M 1891 rifle",
    "Greek Army infantry officer saber M 1868",
    "Medium M1 rifle bayonet",
    "Mauser pistol, 7.65 mm caliber",
    "Browning M 1900 pistol, 7.65 mm caliber",
    "Browning Hi Power M 1935 pistol, 9 mm caliber",
    "Luger P 08 pistol, 9 mm caliber",
    "Lebel M 1896 revolver, 8 mm caliber",
    "Mannlicher M 1905 pistol, 7.63 mm caliber",
    "Modele d' Ordonnance M 1873 revolver, 11.4 mm caliber",
    "Walther P38 pistol, 9 mm caliber",
    "Roth-Steyr M 1907 pistol, 8 mm caliber",
    "Colt M 1911 pistol, .45 caliber",
    "Belgian pistol of unknown type",
    "Gasser Montenegin M 1870 revolver, 10.4 mm caliber",
    "Bayonet for Enfield No1 rifle",
    "Bayonet for Enfield No3 rifle",
    "Bayonet for Turkish Mauser M 1903 rifle",
    "Cavalry saber",
    "Short M1 rifle bayonet",
    "Artillery saber M 1868",
    "Bayonet for Mauser M 1898 rifle, World War II",
    "Artillery saber M 1868",
    "Bayonet for Japanese Arisaka rifle",
    "Turkish saber M 1889",
    "Mosin-Nagan M 1891 rifle, 7.61 mm caliber",
    "Mannlicher M 1888 rifle, 8 mm caliber",
    "Turkish Mauser M 1903 rifle, 7.65 mm caliber",
    "Turkish Mauser M 1893 rifle, 7.65 mm caliber",
    "Mannlicher-Carcano M 1891 rifle, 6.5 mm caliber",
    "Peabody-Martini M 1872 rifle, 11.43 mm caliber",
  ],
};

function renderWeaponsList(language) {
  return `<ol class="weapons-list">${weapons[language]
    .map((weapon) => `<li>${weapon.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}</li>`)
    .join("")}</ol>`;
}

const exhibits = {
  heidelberg: {
    el: {
      kicker: "Σημείο 1",
      title: "Heidelberg “Original Heidelberg”",
      html: `
        <p>
          Δεξιά και αριστερά της εισόδου συναντάμε δύο παλιές τυπογραφικές
          μηχανές. Στα δεξιά εκτίθεται μια χειροκίνητη πιεστική τυπογραφική
          πρέσα Chandler&amp;Price η οποία χρησιμοποιούνταν για εκτύπωση καρτών,
          αφισών, εφημερίδων και βιβλίων.
        </p>
        <p>
          Στα αριστερά βρίσκεται μια πιο σύνθετη τυπογραφική μηχανή Heidelberg
          (“Original Heidelberg”), γνωστή και ως “Windmill Press”.
        </p>
      `,
    },
    en: {
      kicker: "Point 1",
      title: "Heidelberg “Original Heidelberg”",
      html: `
        <p>
          To the right and left of the entrance there are two old printing
          machines. On the right is a manual Chandler&amp;Price press, used for
          printing cards, posters, newspapers, and books.
        </p>
        <p>
          On the left is a more complex Heidelberg printing machine
          (“Original Heidelberg”), also known as the “Windmill Press”.
        </p>
      `,
    },
  },
  chandler: {
    el: {
      kicker: "Σημείο 2",
      title: "Chandler & Price",
      html: `
        <p>
          Δεξιά και αριστερά της εισόδου συναντάμε δύο παλιές τυπογραφικές
          μηχανές. Στα δεξιά εκτίθεται μια χειροκίνητη πιεστική τυπογραφική
          πρέσα Chandler&amp;Price η οποία χρησιμοποιούνταν για εκτύπωση καρτών,
          αφισών, εφημερίδων και βιβλίων.
        </p>
        <p>
          Στα αριστερά βρίσκεται μια πιο σύνθετη τυπογραφική μηχανή Heidelberg
          (“Original Heidelberg”), γνωστή και ως “Windmill Press”.
        </p>
      `,
    },
    en: {
      kicker: "Point 2",
      title: "Chandler & Price",
      html: `
        <p>
          To the right and left of the entrance there are two old printing
          machines. On the right is a manual Chandler&amp;Price press, used for
          printing cards, posters, newspapers, and books.
        </p>
        <p>
          On the left is a more complex Heidelberg printing machine
          (“Original Heidelberg”), also known as the “Windmill Press”.
        </p>
      `,
    },
  },
  weapons: {
    el: {
      kicker: "Σημείο 3",
      title: "Προθήκη όπλων",
      html: `
        <p>Προχωρώντας προς τις σκάλες στην προθήκη δεξιά εκτίθενται τα εξής όπλα:</p>
        ${renderWeaponsList("el")}
      `,
    },
    en: {
      kicker: "Point 3",
      title: "Weapons display case",
      html: `
        <p>Moving toward the stairs, the display case on the right contains the following weapons:</p>
        ${renderWeaponsList("en")}
      `,
    },
  },
  "infantry-uniform": {
    el: {
      kicker: "Σημείο 4",
      title: "Στολές συνταγματαρχών",
      html: `
        <p>
          Στις δύο προθήκες πριν τις σκάλες συναντάμε δύο στολές συνταγματάρχη
          από το 1950. Συγκεκριμένα δεξιά βρίσκεται μια στολή συνταγματάρχη
          Ιππικού-Τεθωρακισμένων ενώ αριστερά συναντάμε μια στολή συνταγματάρχη
          Πεζικού.
        </p>
      `,
    },
    en: {
      kicker: "Point 4",
      title: "Colonel uniforms",
      html: `
        <p>
          In the two display cases before the stairs there are two colonel
          uniforms from 1950. Specifically, on the right is a Cavalry-Armored
          colonel uniform, while on the left is an Infantry colonel uniform.
        </p>
      `,
    },
  },
  "cavalry-uniform": {
    el: {
      kicker: "Σημείο 5",
      title: "Στολές συνταγματαρχών",
      html: `
        <p>
          Στις δύο προθήκες πριν τις σκάλες συναντάμε δύο στολές συνταγματάρχη
          από το 1950. Συγκεκριμένα δεξιά βρίσκεται μια στολή συνταγματάρχη
          Ιππικού-Τεθωρακισμένων ενώ αριστερά συναντάμε μια στολή συνταγματάρχη
          Πεζικού.
        </p>
      `,
    },
    en: {
      kicker: "Point 5",
      title: "Colonel uniforms",
      html: `
        <p>
          In the two display cases before the stairs there are two colonel
          uniforms from 1950. Specifically, on the right is a Cavalry-Armored
          colonel uniform, while on the left is an Infantry colonel uniform.
        </p>
      `,
    },
  },
};

const points = document.querySelectorAll(".map-point");
const languageButtons = document.querySelectorAll(".language-button");
const roomSelect = document.querySelector(".room-select");
const panel = document.querySelector(".exhibit-panel");
const kicker = document.querySelector("#panel-kicker");
const title = document.querySelector("#panel-title");
const body = document.querySelector("#panel-body");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let panelTransitionTimer;
let hasRenderedExhibit = false;
function getStoredLanguage() {
  try {
    return localStorage.getItem("polemiko-language");
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("polemiko-language", language);
  } catch {
    // The language switch still works if local storage is unavailable.
  }
}

let currentLanguage = getStoredLanguage() || "el";
let currentExhibit = "heidelberg";

function applyTranslations(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language;
  document.title = dictionary.documentTitle;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      if (attribute && dictionary[key]) element.setAttribute(attribute, dictionary[key]);
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function scrollPanelIntoView() {
  if (!panel) return;

  panel.scrollIntoView({
    behavior: reducedMotionQuery.matches ? "auto" : "smooth",
    block: "start",
  });
}

function renderExhibit(id, shouldScroll = false) {
  const exhibit = exhibits[id]?.[currentLanguage];
  if (!exhibit) return;

  currentExhibit = id;
  kicker.textContent = exhibit.kicker;
  title.textContent = exhibit.title;
  body.innerHTML = exhibit.html;

  points.forEach((point) => {
    point.classList.toggle("is-active", point.dataset.exhibit === id);
  });

  hasRenderedExhibit = true;

  if (shouldScroll) {
    scrollPanelIntoView();
  }
}

function selectExhibit(id, shouldScroll = false) {
  const exhibit = exhibits[id]?.[currentLanguage];
  if (!exhibit) return;

  clearTimeout(panelTransitionTimer);

  if (!panel || reducedMotionQuery.matches || !hasRenderedExhibit) {
    renderExhibit(id, shouldScroll);
    return;
  }

  panel.classList.add("is-changing");
  panelTransitionTimer = window.setTimeout(() => {
    renderExhibit(id, shouldScroll);
    requestAnimationFrame(() => panel.classList.remove("is-changing"));
  }, 140);
}

function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  storeLanguage(language);
  applyTranslations(language);
  selectExhibit(currentExhibit);
}

points.forEach((point) => {
  point.addEventListener("click", () => selectExhibit(point.dataset.exhibit, true));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

roomSelect?.addEventListener("change", () => {
  window.location.href = roomSelect.value;
});

setLanguage(currentLanguage);
