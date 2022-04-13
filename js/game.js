/* global Phaser */

// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,

  backgroundColor: 0x5f6e7a,
}

const game = new Phaser.Game(config)
console.log(game)
