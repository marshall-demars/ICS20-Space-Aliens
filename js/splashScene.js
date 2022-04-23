/* global Phaser */

// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init(data) {
    this.camera.main.setBackroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  create(data) {}

  update(time, delta) {}
}

export default SplashScene
