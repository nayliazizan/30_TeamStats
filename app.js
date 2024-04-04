const team = {
    _players: [
      {firstName: 'John', lastName: 'Gomez', age: '30'},
      {firstName: 'Mia', lastName: 'Smith', age: '31'},
      {firstName: 'Tommy', lastName: 'Reis', age: '29'},
    ],
    _games: [
      {opponent: 'Dodgers', teamPoints: '11', opponentPoints: '1'},
      {opponent: 'Cardinals', teamPoints: '10', opponentPoints: '12'},
      {opponent: 'Rams', teamPoints: '2', opponentPoints: '5'},
    ],
    get players(){
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        newAge: newAge
      }
      this.players.push(player);
    },
  
    addGame(newOpponet, newTeamPoints, newOpponetPoints) {
      let game = {
        opponet: newOpponet,
        teamPoints: newTeamPoints,
        opponetPoints: newOpponetPoints
      }
      this.games.push(game);
    }
  }
  
  team.addPlayer('Bugs ', 'Bunny', '76')
  console.log(team.players)
  
  team.addGame('Titans', '100', '98')
  console.log(team.games)