import { World } from '../world/World';
import { Player } from '../entities/Player';

export class Game {
  constructor() {
    this.world = new World();
    this.player = new Player();
  }

  start() {
    console.log('Game started');
    // Initialize game loop, render, etc.
  }
}