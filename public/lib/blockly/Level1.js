 // Define the tour!
    var tour_level1 = {
      id: "hello-hopscotch",
      showCloseButton:false,
      showNextButton:false,
      steps: [
        {
          content: "Empile plusieurs blocs \"Avancer d'une case\" pour m'aider à atteindre le trésor <img align=right src=\"media/ArrowRight.png\" />",
          target: "blocklyDiv",
          width:500,
          placement: "left",
          yOffset:50,
          xOffset:200,
          delay:5000
          
        },
        {
          content: "Utilise le bouton \"Démarrer\" pour voir le résultat de ton programme",
          target: "startButton",
          placement: "right",
          delay:2000
        },
        {
          content: "Utilise le bouton \"Réinitialiser\" pour relancer ton programme ",
          target: "startButton",
          placement: "right",
          delay:8000
        }
      ]
    };
    
    var tour_level2 = {
      id: "hello-hopscotch",
      showCloseButton:false,
      showNextButton:false,
      steps: [
        {
          content: "Tu peux utiliser un bloc \"Répéter\" pour gagner du temps",
          target: "blocklyDiv",
          width:500,
          placement: "left",
          yOffset:50,
          xOffset:15,
          delay:5
          
        }
      ]
    };
    
     var tour_level5 = {
      id: "hello-hopscotch",
      showCloseButton:false,
      showNextButton:false,
      steps: [
        {
          content: "Le bloc \"Répéter jusqu'à\" te permet de répéter une action jusqu'à ce qu'une condition soit réalisée",
          target: "blocklyDiv",
          width:500,
          placement: "left",
          yOffset:50,
          xOffset:15,
          delay:5
          
        }
      ]
    };


