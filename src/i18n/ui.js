import { preview } from "astro";

export const ui = {
    en: {
      nav: {
        home: 'Home',
        generator: 'Generator',
        gallery: 'Gallery',
        language: 'Language',
      },
      index: {
          title: 'Welcome to SVG Generator',
          description: 'Create and render SVGs from prompts.',
          button: 'Go to SVG Generator',
      },
      generator: {
          title: 'SVG Generator',
          contentPlaceholder: 'SVG content will be displayed here',
          codePlaceholder: 'SVG code will be displayed here',
          promptLabel: 'Enter your prompt:',
          generateButton: 'Generate SVG',
          editButton: 'Edit',
          viewButton: 'View',
          saveButton: 'Save to Gallery',
          preview: 'SVG Preview',
          code: 'SVG Code',
          closeButton: 'Close'
      },
      gallery: {
          title: 'SVG Gallery',
          viewDetails: 'View Details',
          description: 'Discover all of your creations in the gallery.',
          allCreation: 'Number of creations',
          svgCount: 'SVGs generated',
          noCreation: 'No creations yet. Go to the generator to create your first SVG!',
          nothingFound: 'Nothing found here...',
            createSVG: 'Create an SVG',
            createNew: 'Create New SVG',
            seeDetails: 'See Details',
            creationDate: 'Creation Date',
            downloadButton: 'Download',
            seeButton: 'See'
      },
      id: {
        chatHistory: 'Prompt History',
        noHistory: 'No prompt history yet.',
        description: 'Here you can see all your previous prompts and reuse them to create new SVGs quickly.',
        galleryBack: 'Back to Gallery',
        promptEdit: 'Enter a prompt to edit the SVG...'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        generator: 'Générateur',
        gallery: 'Galerie',
        language: 'Langue',
      },
      index: {
          title: 'Bienvenue sur le générateur SVG',
          description: 'Créez et affichez des SVG à partir d\'invites.',
          button: 'Aller au générateur SVG',
      },
      generator: {
          title: 'Générateur SVG',
          contentPlaceholder: 'Le contenu SVG sera affiché ici',
          codePlaceholder: 'Le code SVG sera affiché ici',
          promptLabel: 'Entrez votre prompt :',
          generateButton: 'Générer le SVG',
          editButton: 'Éditer',
          viewButton: 'Voir',
            saveButton: 'Enregistrer dans la galerie',
            preview: 'Aperçu du SVG',
            code: 'Code SVG',
            closeButton: 'Fermer'
      },
      gallery: {
          title: 'Galerie SVG',
          viewDetails: 'Voir les détails',
          description: 'Découvrez toutes vos créations dans la galerie.',
          allCreation: 'Nombre de créations',
          svgCount: 'SVGs générés',
          noCreation: 'Allez dans le générateur pour créer votre premier SVG !',
            nothingFound: 'Rien trouvé ici...',
            createSVG: 'Créer un SVG',
            createNew: 'Créer un nouveau SVG',
            seeDetails: 'Voir les détails',
            creationDate: 'Date de création',
            downloadButton: 'Télécharger',
            seeButton: 'Voir'
      },
      id: {
        chatHistory: 'Historique des prompts',
        noHistory: 'Pas encore d\'historique des prompts.',
        description: 'Ici, vous pouvez voir tous vos prompts précédents et les réutiliser pour créer rapidement de nouveaux SVG.',
        galleryBack: 'Retour à la galerie',
        promptEdit: 'Entrez un prompt pour éditer le SVG...'
      }
    },
  } 