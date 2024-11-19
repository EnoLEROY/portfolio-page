// Données des métiers et leurs descriptions
const jobDescriptions = {
  medecin: {
      header: "Médecin",
      body: "Le médecin diagnostique et soigne les maladies. Il peut travailler dans des hôpitaux, des cliniques ou en cabinet privé. Il a besoin d'une formation médicale de plusieurs années."
  },
  enseignant: {
      header: "Enseignant",
      body: "L'enseignant transmet des connaissances à des élèves ou étudiants. Il peut enseigner dans différents niveaux, du primaire au supérieur, en fonction de sa spécialité."
  },
  ingenieur: {
      header: "Ingénieur",
      body: "L'ingénieur conçoit des solutions techniques dans divers domaines (informatique, génie civil, électronique, etc.). Il travaille dans des entreprises privées ou des organismes publics."
  },
  designer: {
      header: "Designer",
      body: "Le designer crée des solutions esthétiques et fonctionnelles pour des produits ou des services. Il travaille dans des secteurs comme la mode, l'architecture ou le design graphique."
  }
};

// Fonction pour afficher le popup avec les informations du métier
function showModal(job) {
  const modal = document.getElementById('jobModal');
  const header = document.getElementById('modalHeader');
  const body = document.getElementById('modalBody');

  // Récupérer les informations du métier
  const jobInfo = jobDescriptions[job];

  if (jobInfo) {
      header.textContent = jobInfo.header;
      body.textContent = jobInfo.body;

      // Afficher la modale
      modal.style.display = "block";
  }
}

// Fonction pour fermer la modale
function closeModal() {
  const modal = document.getElementById('jobModal');
  modal.style.display = "none";
}

// Ajouter les événements aux éléments de la liste des métiers
document.querySelectorAll('.job-item').forEach(item => {
  item.addEventListener('click', function() {
      const job = this.getAttribute('data-job');
      showModal(job);
  });
});

// Fermer la modale si l'utilisateur clique à l'extérieur de la fenêtre
window.onclick = function(event) {
  const modal = document.getElementById('jobModal');
  if (event.target === modal) {
      closeModal();
  }
}
