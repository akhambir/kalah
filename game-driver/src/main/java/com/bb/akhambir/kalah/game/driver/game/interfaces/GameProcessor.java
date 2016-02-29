package com.bb.akhambir.kalah.game.driver.game.interfaces;

import com.bb.akhambir.kalah.game.library.model.Game;
import com.bb.akhambir.kalah.game.library.model.Player;

public interface GameProcessor {

    Game newGame();

    Game doTurn(String gameId, int houseIndex, Player player);

    Game joinGame(String gameId);

    Game getGameById(String gameId, Player player);
}
