"use strict";

function WordSearchController(gameId, listId, solveId, newGameId, instructionsId, themeId) {

	var searchTypes = {

		"HTML/CSS": [["GitHub", "HTML", "CSS", "JavaScript"],
			["DomModel", "VisualCode", "Footer", "Head"],
			["Body", "Title", "Link", "Style"],
			["Button", "Href", "Meta", "Class"]]

	};


	var game;
	var view;


	var mainInstructions = "Busque la lista de palabras dentro de la caja, haga clic y arrastre para seleccionarlas."; 


	setUpWordSearch();


	function setUpWordSearch() {

		var searchTypesArray = Object.keys(searchTypes);
		var randIndex = Math.floor(Math.random()*searchTypesArray.length);
		var listOfWords = searchTypes[searchTypesArray[randIndex]];

		convertToUpperCase(listOfWords); 

		updateHeadings(mainInstructions, searchTypesArray[randIndex]);

		game = new WordSearchLogic(gameId, listOfWords.slice());
		game.setUpGame();

		view = new WordSearchView(game.getMatrix(), game.getListOfWords(), gameId, listId, instructionsId);
		view.setUpView();
		view.triggerMouseDrag();

	}


	function convertToUpperCase(wordList)  {

		for (var i = 0; i < wordList.length; i++) {

			for(var j = 0; j < wordList[i].length; j++) {

				wordList[i][j] = wordList[i][j].toUpperCase();

			}

		}

	}

	function updateHeadings(instructions, theme) {

		$(instructionsId).text(instructions);
		$(themeId).text(theme);

	}

	$(solveId).click(function() {

		view.solve(game.getWordLocations(), game.getMatrix());

	});

	$(newGameId).click(function() {

		$(gameId).empty();
		$(listId).empty();
		$(themeId).empty();

		setUpWordSearch();

	})

}