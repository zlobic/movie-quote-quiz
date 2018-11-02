var movies = [
    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},
    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},

    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},
    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},
    {
     title: "Scarface",
     actor: "Al Pacino",
     director: "Brian De Palma"},
    ]



let quizGame = function(movies) {
    this.movies = movies
    this.scoreTitles = 0
    this.scoreActors = 0
    this.scoreDirectors = 0
    this.pickedTitle = []
    this.pickedActor = []
    this.pickedDirector = []
};



NewQuote.prototype.checkCorrect = function ( ) {
    if (pickedTitle[0].toLowerCase() == pickedTitle[1].toLowerCase()){
        scoreTitles += 150;
    }
    
}




NewQuote.prototype.shuffleQuestions = function () {
  var copy = [], n = this.movies.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(this.movies.splice(i, 1)[0]);
  }
  return this.movies = copy;
};