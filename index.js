const translations = {
  el: {
    siteHeaderLabel: "Πληροφορίες σελίδας",
    navigationLabel: "Πλοήγηση",
    brandName: "Πολεμικό Μουσείο Θεσσαλονίκης",
    roomLabel: "Αίθουσα",
    roomSelectLabel: "Επιλογή αίθουσας",
    historyRoom: "Ιστορία",
    entranceRoom: "Είσοδος",
    languageSwitchLabel: "Επιλογή γλώσσας",
    greekLanguage: "Ελληνικά",
    englishLanguage: "English",
    documentTitle: "Ιστορία του Μουσείου | Πολεμικό Μουσείο Θεσσαλονίκης",
    location: "Γρηγορίου Λαμπράκη 4, Πεδίο του Άρεως",
    pageTitle: "Ιστορία του Μουσείου",
    heroImageAlt: "Αρχιτεκτονική άποψη νεοκλασικού κτιρίου μουσείου",
    contentLabel: "Ιστορικές πληροφορίες",
    historyParagraph1:
      "Το κτίριο στο οποίο στεγάζεται σήμερα το Πολεμικό Μουσείο της Θεσσαλονίκης σχεδιάστηκε από τον Ιταλό αρχιτέκτονα Βιταλιάνο Ποζέλι, χτίστηκε το 1900 για να καλύψει τις ανάγκες του Οθωμανικού Στρατού σε μέρος στο οποίο ήδη υπήρχε ο μεγάλος οθωμανικός στρατώνας εκτός των ορίων της πόλης, ο οποίος εκτεινόταν από το ύψος της Παραλίας έως και την ΣΣΑΣ.",
    historyParagraph2:
      "Το 1912, όταν απελευθερώθηκε η Θεσσαλονίκη, το κτίριο περιήλθε στην κυριότητα του Ελληνικού στρατού, ο οποίος εγκατέστησε σε αυτό δικές του στρατιωτικές μονάδες και υπηρεσίες.",
    historyParagraph3:
      "Αργότερα, η πολιτική και στρατιωτική ηγεσία αποφάσισε να στεγάσει στο εν λόγω κτίριο το Πολεμικό Μουσείο της Θεσσαλονίκης, το οποίο αποτελεί παράρτημα του Πολεμικού Μουσείου Αθηνών. Οι εργασίες ανακατασκευής του άρχισαν το 1993 και ολοκληρώθηκαν το 2000, όταν και εγκαινιάστηκε στις 27 Οκτωβρίου του ίδιου έτους από τον τότε Πρόεδρο της Δημοκρατίας, κ. Κωνσταντίνο Στεφανόπουλο.",
  },
  en: {
    siteHeaderLabel: "Page information",
    navigationLabel: "Navigation",
    brandName: "War Museum of Thessaloniki",
    roomLabel: "Room",
    roomSelectLabel: "Choose museum room",
    historyRoom: "History",
    entranceRoom: "Entrance",
    languageSwitchLabel: "Language selection",
    greekLanguage: "Greek",
    englishLanguage: "English",
    documentTitle: "Museum History | War Museum of Thessaloniki",
    location: "4 Grigoriou Lampraki Street, Pedion tou Areos",
    pageTitle: "Museum History",
    heroImageAlt: "Architectural view of the neoclassical museum building",
    contentLabel: "Historical information",
    historyParagraph1:
      "The building that now houses the War Museum of Thessaloniki was designed by the Italian architect Vitaliano Poselli and built in 1900 to serve the needs of the Ottoman Army, in an area where the large Ottoman barracks already stood outside the city limits. That barracks complex extended from the seafront area to the present-day Hellenic Army Academy facilities.",
    historyParagraph2:
      "In 1912, when Thessaloniki was liberated, the building became property of the Greek Army, which installed its own military units and services there.",
    historyParagraph3:
      "Later, the political and military leadership decided to house the War Museum of Thessaloniki in this building. The museum is a branch of the Athens War Museum. Reconstruction work began in 1993 and was completed in 2000, when it was inaugurated on October 27 of that year by the then President of the Hellenic Republic, Konstantinos Stephanopoulos.",
  },
};

const languageButtons = document.querySelectorAll(".language-button");
const roomSelect = document.querySelector(".room-select");

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

function setLanguage(language) {
  if (!translations[language]) return;

  storeLanguage(language);
  applyTranslations(language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

roomSelect?.addEventListener("change", () => {
  window.location.href = roomSelect.value;
});

setLanguage(getStoredLanguage() || "el");
