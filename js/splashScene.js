/* global Phaser */

// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "splashScene" })
  }

  /**
   * This method is the init.
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * This method is the preload.
   */
  preload() {
    console.log("Splash Scene")
  }

  /**
   * This method is the create.
   */
  create(data) {
    // pass
  }

  /**
   * This method is the update.
   */
  update(time, delta) {
    // pass
  }
}

export default SplashScene
