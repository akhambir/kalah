package com.bb.akhambir.kalah.game.library.logic.interfaces;

import com.bb.akhambir.kalah.game.library.model.Player;

import java.util.List;

public interface KalahBoard {
    void turnFrom(Player player, int houseNumber);
    List<Integer> getHouses(Player player);
    int getStorage(Player player);
    Player getLastPlayer();
    int getTurnsAmount();
}
