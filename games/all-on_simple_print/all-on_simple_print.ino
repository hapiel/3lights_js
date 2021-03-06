#include <TLOB.h>

TLOB tlob(3,2,4,5);
String gameState = "play";

unsigned long time = 0;

void setup() {
  Serial.begin(9600);

  randomSeed(analogRead(0));
  Serial.println("Randomseed set, game begins");
}

void loop() {
  Serial.println("loop");
  
  // When the game is won, lights are 
  if (gameState == "win"){
    Serial.println("WIN");
    if (tlob.buttonPressed()){
      gameState = "play";
      tlob.stopAll();
      tlob.ledAll(0);
    }
  }

  //whilst in play mode
  if (gameState == "play"){
    Serial.println("play");

    // when the button is pressed
    if (tlob.buttonPressed()){
      Serial.println("BUTTON");
      // if all leds are on
      if (tlob.led(0) && tlob.led(1) && tlob.led(2)){
        // blink all leds
        tlob.blinkAll();
        gameState = "win";
      } else {
        //loose
        tlob.ledAll(0);
        delay(500);
      }
    } else {
      // if 100ms have passed
      if (millis() - time > 100){
        // only if random lands on 0, 1 or 2 a led is changed.
        int rand = random(5);
        tlob.led(rand, !tlob.led(rand));
        time = millis();
      }
    }
  }

  tlob.update();
}
