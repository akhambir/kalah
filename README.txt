How to play:

1. localhost:8080/new-game                                          - player one create new game and gameId
2. localhost:8080/join?gameId={gameId}                              - player two connect to the game using gameId
3. localhost:8080/refresh?gameId={gameId}                           - you can refresh page using this link
4. localhost:8080/doTurn?gameId={gameId}&houseId={houseId}          - game Id looks like 1456732660011 (timestamp)
                                                                      and houseId looks like 0 1 2 3 4 5 (your houses IDs)
