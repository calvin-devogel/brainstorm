import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/core';

@Injectable({ providedIn: 'root' })
export class TauriService {
    // smoke test
    ping(): Promise<string> {
        return invoke<string>('ping');
    }

    listDecks(): Promise<unknown[]> {
        return invoke('list_decks');
    }

    newGame(deckIds: string[]): Promise<unknown> {
        return invoke('game_new', { deckIds });
    }

    applyAction(gameId: string, action: unknown): Promise<unknown> {
        return invoke('game_apply_action', { gameId, action });
    }
}