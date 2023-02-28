//Global Variables
let j = 0
let X = 0
let Y = 0
let scene = 0
let start = 0
let score = 0
let degree = 0
let condition = 0
let wordCount = 0
let winCondition = 0
let changingDegree = 0
let degreearray = [60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280]

//Game Three Variables
randomRGBValue = [50, 100, 150, 200, 250]
random1_3 = [1, 3]
cntrSquareCorrect = 0
cntrTriangleCorrect = 0
cntrEllipseCorrect = 0
cntrSquareWrong = 0
cntrTriangleWrong = 0
cntrEllipseWrong = 0
squareStateRed = false
triangleStateRed = false
ellipseStateRed = false

//Loads Images
function preload(){
  pic0 = loadImage("logo.png")               
  pic1 = loadImage("newSizePink.png")
  pic3 = loadImage("exercise1.png")
  pic4 = loadImage("exercise2.png")
  pic5 = loadImage("newSizeBlue.png")
  pic6 = loadImage("Shiny Red Cropped.jpg")
  pic7 = loadImage("newSizeBlue.png")
  pic8 = loadImage("newSizeYellow.png")
  pic9 = loadImage("newSizeGreen.png")
  pic10 = loadImage("victory.png")
  font1 = loadFont('showcard.TTF')
}

//Makes canvas and calls first screen
function setup() {
  //Starting background
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  createCanvas(600, 600)
  screen0()
}

//Home Screen
function screen0() {
  
  //Background
  image(pic0, 0, 0, 600, 600)
  
}

//Start Screen
function screen1() {
  textAlign(LEFT, BOTTOM)
  rectMode(CORNER)
  angleMode(RADIANS)
 textFont(font1)
  //Background
  push()
  noStroke()
  image(pic1, 0, 0)
  textStyle(BOLD)
  fill(255)
  textSize(60)
  rect(-20, -30, 650, 170, 80)
  fill(241, 112, 101)
  rect(-20, -30, 650, 160, 80)
  fill(255)
  text('Home Page', 150, 80)
  pop()
  
  //Buttons
  stroke(241, 112, 101)
  strokeWeight(7)
  fill(255, 171, 164)
  //Start Button
  rect(120, 170, 100, 400, 10)
  //Setting Button
  rect(280, 170, 250, 100, 10)
  //Help Button
  rect(280, 320, 250, 100, 10)
  //About Button
  rect(280, 470, 250, 100, 10)
  
  //Text
  strokeWeight(0)
  stroke(color(255))
  fill(255)
  textFont(font1, 75)
  text("S", 150, 260)
  text("T", 150, 330)
  text("A", 150, 400)
  text("R", 150, 470)
  text("T", 150, 545)
  textSize(55)
  text("Setting", 300, 240)
  text("Help",    340, 395)
  text("About",   310, 545)
  
}

//Activities Screen
function screen2() {
  textAlign(LEFT, BOTTOM)
  rectMode(CORNER)
  angleMode(RADIANS)
  
  //background
  image(pic1, 0, 0)
  
  //Buttons
  fill(255)
  strokeWeight(5)
  stroke(color(241, 112, 101))
  rect(5, 545, 150, 50, 10)
  strokeWeight(0)
  rect(-20, -30, 650, 170, 80)
  fill(241, 112, 101)
  rect(-20, -30, 650, 160, 80)
  
  strokeWeight(5)
  stroke(color(241, 112, 101))
  fill(255)
  rect(25, 200, 100, 100, 10)
  rect(175, 200, 100, 100, 10)
  rect(325, 200, 100, 100, 10)
  
  fill(255)
  
  rect(475, 200, 100, 100, 10)
  
  rect(25, 400, 100, 100, 10)
  rect(175, 400, 100, 100, 10)
  rect(325, 400, 100, 100, 10)
  rect(475, 400, 100, 100, 10)
  strokeWeight(0)
  //Text
  fill(255)
  textFont(font1, 60)
  textAlign(LEFT, BASELINE)
  
  text("Activities", 150, 80)
  fill(241, 112, 101)
  text("1", 62, 265)
  text("2", 212, 265)
  text("3", 362, 265)
  text("4", 512, 265)
  text("5", 62, 465)
  text("6", 212, 465)
  text("7", 362, 465)
  text("8", 512, 465)
  
  textSize(40)
  text("Back", 25, 585)
  //textAlign(CENTER, CENTER)
  //rectMode(CENTER)
  //angleMode(DEGREES)
  
  
}

//Game1 Screen
function screen3() {
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  //Background
  image(pic3, 0, 0)
  
  //Buttons
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  strokeWeight(5)
  stroke(color(32, 218, 62))
  fill(255)
  rect(5, 545, 150, 50, 10)
  
  //Text
  strokeWeight(0)
  fill(32, 218, 62)
  textFont(font1, 40)
  
  text("Back", 25, 585)
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  
  printWord()
  
}

//Game2 Screen
function screen4() {
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  //Background
  image(pic4, 0, 0)
  
  //Buttons
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  strokeWeight(5)
  stroke(color(81, 194, 226))
  fill(255)
  rect(5, 545, 150, 50, 10)
  
  //Text
  strokeWeight(0)
  fill(81, 194, 226)
  textFont(font1, 40)
  
  text("Back", 25, 585)
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  
  push()
  rectMode(CENTER)
  angleMode(DEGREES)
  fill(255)
  stroke(color(81, 194, 226))
  strokeWeight(10)
  translate(width * 0.75, height / 2)
  
  if (start == 0) {
    
    degree = random(degreearray)
    
  }
  
  rotate(degree)
  rect(0, 0, 100, 100)
  strokeWeight(0)
  fill(255)
  rect(-50, -50, 5, 5)
  pop()
  
  //Set Properties for canvas
  push()
  rectMode(CENTER)
  angleMode(DEGREES)
  
  //Left square
  fill(255)
  stroke(color(222, 222, 222))
  strokeWeight(10)
  translate(width / 4, height / 2)
  rotate(changingDegree)
  rect(0, 0, 100, 100)
  strokeWeight(0)
  fill(255)
  rect(-50, -50, 5, 5)
  pop()
  
  if (start != 1 && changingDegree == degree || start != 1 && changingDegree == (degree - 360)) {
    winSceneGame2()
    scene += 7
  }
  
  rectMode(CORNER)
  
  start += 1
}

//Game3 Screen
function screen5() {
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  //Background
  image(pic5, 0, 0)
  
  //Buttons
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  strokeWeight(5)
  stroke(color(81, 194, 226))
  fill(255)
  rect(5, 545, 150, 50, 10)
  
  //Text
  strokeWeight(0)
  fill(81, 194, 226)
  textFont(font1, 40)
  
  text("Back", 25, 585)
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  
  //Picking Colors
  fillVal1v1 = random(randomRGBValue)
  fillVal2v1 = random(randomRGBValue)
  fillVal3v1 = random(randomRGBValue)
  strokeFillVal1v1 = random(randomRGBValue)
  strokeFillVal2v1 = random(randomRGBValue)
  strokeFillVal3v1 = random(randomRGBValue)
  fillVal1v2 = random(randomRGBValue)
  fillVal2v2 = random(randomRGBValue)
  fillVal3v2 = random(randomRGBValue)
  strokeFillVal1v2 = random(randomRGBValue)
  strokeFillVal2v2 = random(randomRGBValue)
  strokeFillVal3v2 = random(randomRGBValue)
  fillVal1v3 = random(randomRGBValue)
  fillVal2v3 = random(randomRGBValue)
  fillVal3v3 = random(randomRGBValue)
  strokeFillVal1v3 = random(randomRGBValue)
  strokeFillVal2v3 = random(randomRGBValue)
  strokeFillVal3v3 = random(randomRGBValue)
  
  //Forces one shape to match
  correctShape = int(random(1, 4))
  
  //Draws Center Line
  fill(255)
  rect(300, 300, 10, 620)
  
  //Draws all shapes
  strokeWeight(5)
  drawSquare()
  drawSquareMatch()
  drawTriangle()
  drawTriangleMatch()
  drawEllipse()
  drawEllipseMatch()
  strokeWeight(0)
  noStroke()
}

//Game Report Screen
function screen6() {
  
  //Background
  image(pic6, 0, 0)
  
  //Buttons
  fill(0)
  rect(75, 575, 150, 50, 10)
  
  //Text
  fill(255)
  textFont("Roboto")
  
  textSize(25)
  text("Back", 75, 575)
  
}

//Settings Screen
function screen7() {
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  //background
  image(pic7, 0, 0)
    
  //Buttons
  strokeWeight(5)
  stroke(color(81, 194, 226))
  fill(67, 170, 223)
  rect(5, 545, 150, 50, 10)
  
  //Text
  fill(255)
  textFont(font1, 40)
  text("Back", 25, 585)
  
}

//Help Screen
function screen8() {
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  //background
  image(pic8, 0, 0)
    
  //Buttons
  strokeWeight(5)
  stroke(color(253, 218, 13))
  fill(238, 219, 91)
  rect(5, 545, 150, 50, 10)
  
  //Text
  fill(255)
  textFont(font1, 40)
  text("Back", 25, 585)
  
}

//About Screen
function screen9() {
  textAlign(LEFT, BASELINE)
  rectMode(CORNER)
  angleMode(RADIANS)
  //background
  image(pic9, 0, 0)
    
  //Buttons
  strokeWeight(5)
  stroke(color(80, 200, 120))
  fill(110, 223, 84)
  rect(5, 545, 150, 50, 10)
  
  //Text
  fill(255)
  textFont(font1, 40)
  text("Back", 25, 585)
  
}

//Screen 10
function winSceneGame1() {
  
  //Win Screen
  image(pic10, 0, 0)

}

//Screen 11
function winSceneGame2() {
  
  //Win Screen
  image(pic10, 0, 0)

}

//Screen 12
function winSceneGame3() {
  
  //Win Screen
  image(pic10, 0, 0)

}

//All game functions
function nextButton() {
  //Button
  fill(0)
  rect(450, 550, 150, 50, 10)
  
  //Text
  fill(255)
  textFont("Roboto")
  
  textSize(25)
  text("Next word", 500, 575)
}

function keyPressed() {
  if (scene == 3) {
    if (key == letters[j]) {
      
      condition += 1
      checker = true
      
      if (word.length == 2) {
        drawWord(285, checker)
      }
      
      else if (word.length == 3) {
        drawWord(255, checker)
      }
      
      else if (word.length == 4) {
        drawWord(235, checker)
      }
      
      j += 1;
      
      if (condition >= word.length) {
        wordCount = 0
        condition = 0
        screen3()
        winCondition += 1
        j = 0
        if (winCondition >= 5) {
          winCondition = 0
          winSceneGame1()
          scene += 7
        }
      }
    }
  }
  
  else if (scene == 4) {
    if (keyCode == RIGHT_ARROW) {
      changingDegree += 20
      screen4()
    }
    
    else if (keyCode === LEFT_ARROW) {
      changingDegree -= 20
      screen4()
    }
  }
}

function mouseClicked(){
  if (scene == 0) {
    if ((mouseX >= 0 && mouseX <= 600) && (mouseY >= 0 && mouseY <= 600)) {
      screen1()
      scene += 1
    }
  }
  
  else if (scene == 1) {
    if ((mouseX >= 120 && mouseX <= 220) && (mouseY >= 170 && mouseY <= 570)) {
      screen2()
      scene += 1
    }
    
    if ((mouseX >= 280 && mouseX <= 530) && (mouseY >= 170 && mouseY <= 270)) {
      screen7()
      scene += 6
    }
    
    if ((mouseX >= 280 && mouseX <= 530) && (mouseY >= 320 && mouseY <= 420)) {
      screen8()
      scene += 7
    }
    
    if ((mouseX >= 280 && mouseX <= 530) && (mouseY >= 470 && mouseY <= 570)) {
      screen9()
      scene += 8
    }
  }
  
  else if (scene == 2) {
    if ((mouseX >= 25 && mouseX <= 125) && (mouseY >= 200 && mouseY <= 300)) {
      screen3()
      scene += 1
    }
    
    if ((mouseX >= 175 && mouseX <= 275) && (mouseY >= 200 && mouseY <= 300)) {
      screen4()
      scene += 2
    }
    
    if ((mouseX >= 325 && mouseX <= 425) && (mouseY >= 200 && mouseY <= 300)) {
      screen5()
      scene += 3
    }
    
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen1()
      scene -= 1
    }
  }
  
  else if (scene == 3) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen2()
      scene -= 1
    }
  }
  
  else if (scene == 4) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen2()
      scene -= 2
    }
  }
  
  else if (scene == 5) {
    
    strokeWeight(5)
    
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen2()
      scene -= 3
    }
    
    else if ((mouseX >= 355 && mouseX <= 375) && (mouseY >= 140 && mouseY <= 160)) {
      
      if((cntrSquare == 2 || correctShape == 1) && squareStateRed == true) {
        stroke(color(150))
        fill(255)
        square(365, 150, 20)
        cntrSquareWrong -= 1
        squareStateRed = false
      }
      
      else if(cntrSquare == 2 || correctShape == 1) {
        stroke(color(136, 8, 8))
        fill(255, 0, 0)
        square(365, 150, 20)
        cntrSquareWrong += 1
        squareStateRed = true
      }
      
      else if (cntrSquare == 1 || cntrSquare == 3  || correctShape != 1) {
        stroke(color(0, 100, 0))
        fill(0, 255, 0)
        square(365, 150, 20)
        cntrSquareCorrect += 2
      }
    }
    
    else if ((mouseX >= 355 && mouseX <= 375) && (mouseY >= 290 && mouseY <= 310)) {
      
      if((cntrTriangle == 2 || correctShape == 2) && triangleStateRed == true) {
        stroke(color(150))
        fill(255)
        square(365, 300, 20)
        cntrTriangleWrong -= 1
        triangleStateRed = false
      }
      
      else if(cntrTriangle == 2 || correctShape == 2) {
        stroke(color(136, 8, 8))
        fill(255, 0, 0)
        square(365, 300, 20)
        cntrTriangleWrong += 1
        triangleStateRed = true
      }
      
      else if (cntrTriangle == 1 || cntrTriangle == 3 || correctShape != 2) {
        stroke(color(0, 100, 0))
        fill(0, 255, 0)
        square(365, 300, 20)
        cntrTriangleCorrect += 2
      }
    }
    
    else if ((mouseX >= 355 && mouseX <= 375) && (mouseY >= 440 && mouseY <= 460)) {
      
      if((cntrEllipse == 2 || correctShape == 3) && ellipseStateRed == true) {
        stroke(color(150))
        fill(255)
        square(365, 450, 20)
        cntrEllipseWrong -= 1
        ellipseStateRed = false
      }
      
      else if(cntrEllipse == 2 || correctShape == 3) {
        stroke(color(136, 8, 8))
        fill(255, 0, 0)
        square(365, 450, 20)
        cntrEllipseWrong += 1
        ellipseStateRed = true
      }
      
      else if (cntrEllipse == 1 || cntrEllipse == 3 || correctShape != 3) {
        stroke(color(0, 100, 0))
        fill(0, 255, 0)
        square(365, 450, 20)
        cntrEllipseCorrect += 2
      }
    }
    
    strokeWeight(0)
    
    checkWin()
  }
  
  else if (scene == 6) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen1()
      scene -= 1
    }
  }
  
  else if (scene == 7) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen1()
      scene -= 6 
    }
  }
  
  else if (scene == 8) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen1()
      scene -= 7
    }
  }
  
  else if (scene == 9) {
    if ((mouseX >= 0 && mouseX <= 150) && (mouseY >= 550 && mouseY <= 600)) {
      screen1()
      scene -= 8
    }
  }
  
  else if (scene == 10) {
    if (dist(mouseX, mouseY, 200, 530) < 42.5) {
      screen2()
      scene -= 8
    }
    
    else if ((dist(mouseX, mouseY, 315, 530) < 42.5)) {
      screen3()
      scene -= 7
    }
    
    else if ((dist(mouseX, mouseY, 430, 530) < 42.5)) {
      screen4()
      scene -= 6
    }
  }
  
  else if (scene == 11) {
    if (dist(mouseX, mouseY, 200, 530) < 42.5) {
      changingDegree = 0
      start = 0
      screen2()
      scene -= 9
    }
    
    else if ((dist(mouseX, mouseY, 315, 530) < 42.5)) {
      changingDegree = 0
      start = 0
      screen4()
      scene -= 7
    }
    
    else if ((dist(mouseX, mouseY, 430, 530) < 42.5)) {
      screen5()
      scene -= 6
    }
  }
  
  else if (scene == 12) {
    if (dist(mouseX, mouseY, 200, 530) < 42.5) {
      screen2()
      scene -= 10
    }
    
    else if ((dist(mouseX, mouseY, 315, 530) < 42.5)) {
      screen5()
      scene -= 7
    }
    
    else if ((dist(mouseX, mouseY, 430, 530) < 42.5)) {
      screen3()
      scene -= 9
    }
  }
}

//Game 1 Functions
function printWord() {
  
  Y = 200
  letters = []
  words = ['cat', 'dog', 'the', 'end', 'he', 'she', 'they', 'we', 'kick', 'open', 'and', 'last', 'in', 'near', 'who', 'year']
  word = random(words)
  
  if (word.length == 2) {
    letters = split(word, "")
    
    X = 240
  }
  
  else if (word.length == 3) {
    letters = split(word, "")
    
    X = 210
  }
  
  else if (word.length == 4) {
    letters = split(word, "")
    
    X = 190

  }
  
  for (i = 0; i < word.length; i++) {
    X += 45
    fill(255)
    textSize(75)
    text(letters[i], X, Y)
  }
  
  X = 0
  
}

function drawWord(X, correct) {
  
  x = X

  if (j == 1) {
    x += 45
  }
  
  if (j == 2) {
    x += 90
  }
  
  if (j == 3) {
    x += 135
  }
  
  if (correct == true) {
    fill('green')
  }
  
  textSize(75)
  text(letters[j], x, Y)
}

//Game 3 Functions
function drawSquare(){
  fill(fillVal1v1, fillVal2v1, fillVal3v1)
  stroke(strokeFillVal1v1, strokeFillVal2v1, strokeFillVal3v1)
  square(150, 150, 90)
}

function drawTriangle(){
  fill(fillVal1v2, fillVal2v2, fillVal3v2)
  stroke(strokeFillVal1v2, strokeFillVal2v2, strokeFillVal3v2)
  triangle(100, 350, 150, 250, 200, 350)
}

function drawEllipse(){
  fill(fillVal1v3, fillVal2v3, fillVal3v3)
  stroke(strokeFillVal1v3, strokeFillVal2v3, strokeFillVal3v3)
  ellipse(150, 450, 100)
}

function drawSquareMatch(){
  if (correctShape == 1){
    cntrSquare = 2
  }
  
  else {
    cntrSquare = random(random1_3)
  }

  if (correctShape == 1){
     matchSquareFill1 = fillVal1v1
     matchSquareFill2 = fillVal2v1
     matchSquareFill3 = fillVal3v1
     matchSquareStroke1 = strokeFillVal1v1
     matchSquareStroke2 = strokeFillVal2v1
     matchSquareStroke3 = strokeFillVal3v1
  }
  
  else{
    if (cntrSquare == 1){
       matchSquareFill1 = fillVal1v1 + 100
       matchSquareFill2 = fillVal2v1 + 100
       matchSquareFill3 = fillVal3v1 + 100
       matchSquareStroke1 = strokeFillVal1v1 + 100
       matchSquareStroke2 = strokeFillVal2v1 + 100
       matchSquareStroke3 = strokeFillVal3v1 + 100
    }
    else if (cntrSquare == 2){
       matchSquareFill1 = fillVal1v1
       matchSquareFill2 = fillVal2v1
       matchSquareFill3 = fillVal3v1
       matchSquareStroke1 = strokeFillVal1v1
       matchSquareStroke2 = strokeFillVal2v1
       matchSquareStroke3 = strokeFillVal3v1
    }
    else if (cntrSquare == 3){
       matchSquareFill1 = fillVal1v1 - 100
       matchSquareFill2 = fillVal2v1 - 100
       matchSquareFill3 = fillVal3v1 - 100 
       matchSquareStroke1 = strokeFillVal1v1 - 100
       matchSquareStroke2 = strokeFillVal2v1 - 100
       matchSquareStroke3 = strokeFillVal3v1 - 100
    }
  }
  
  fill(matchSquareFill1, matchSquareFill2, matchSquareFill3)
  stroke(matchSquareStroke1, matchSquareStroke2, matchSquareStroke3)
  square(450, 150, 90)
  stroke(color(150))
  fill(255)
  square(365, 150, 20)
}

function drawTriangleMatch(){
  if (correctShape == 2){
    cntrTriangle = 2
  }
  
  else {
    cntrTriangle = random(random1_3)
  }
  
  if (correctShape == 2){
     matchTriangleFill1 = fillVal1v2
     matchTriangleFill2 = fillVal2v2
     matchTriangleFill3 = fillVal3v2
     matchTriangleStroke1 = strokeFillVal1v2
     matchTriangleStroke2 = strokeFillVal2v2
     matchTriangleStroke3 = strokeFillVal3v2
  }
  
  else{
    if (cntrTriangle == 1){
       matchTriangleFill1 = fillVal1v2 + 125
       matchTriangleFill2 = fillVal2v2 + 125
       matchTriangleFill3 = fillVal3v2 + 125
       matchTriangleStroke1 = strokeFillVal1v2 + 125
       matchTriangleStroke2 = strokeFillVal2v2 + 125
       matchTriangleStroke3 = strokeFillVal3v2 + 125
    }
    else if (cntrTriangle == 2){
       matchTriangleFill1 = fillVal1v2
       matchTriangleFill2 = fillVal2v2
       matchTriangleFill3 = fillVal3v2
       matchTriangleStroke1 = strokeFillVal1v2
       matchTriangleStroke2 = strokeFillVal2v2
       matchTriangleStroke3 = strokeFillVal3v2
    }
    else if (cntrTriangle == 3){
       matchTriangleFill1 = fillVal1v2 - 125
       matchTriangleFill2 = fillVal2v2 - 125
       matchTriangleFill3 = fillVal3v2 - 125 
       matchTriangleStroke1 = strokeFillVal1v2 - 125
       matchTriangleStroke2 = strokeFillVal2v2 - 125
       matchTriangleStroke3 = strokeFillVal3v2 - 125
    }
  }
  
  fill(matchTriangleFill1, matchTriangleFill2, matchTriangleFill3)
  stroke(matchTriangleStroke1, matchTriangleStroke2, matchTriangleStroke3)
  triangle(400, 350, 450, 250, 500, 350)
  stroke(color(150))
  fill(255)
  square(365, 300, 20)
}

function drawEllipseMatch(){
  if (correctShape == 3){
    cntrEllipse = 2
  }
  
  else {
    cntrEllipse = random(random1_3)
  }
  
  if (correctShape == 3){
     matchEllipseFill1 = fillVal1v3
     matchEllipseFill2 = fillVal2v3
     matchEllipseFill3 = fillVal3v3
     matchEllipseStroke1 = strokeFillVal1v3
     matchEllipseStroke2 = strokeFillVal2v3
     matchEllipseStroke3 = strokeFillVal3v3
  }
  
  else{
    if (cntrEllipse == 1){
       matchEllipseFill1 = fillVal1v3 + 150
       matchEllipseFill2 = fillVal2v3 + 150
       matchEllipseFill3 = fillVal3v3 + 150
       matchEllipseStroke1 = strokeFillVal1v3 + 150
       matchEllipseStroke2 = strokeFillVal2v3 + 150
       matchEllipseStroke3 = strokeFillVal3v3 + 150
    }
    else if (cntrEllipse == 2){
       matchEllipseFill1 = fillVal1v3
       matchEllipseFill2 = fillVal2v3
       matchEllipseFill3 = fillVal3v3
       matchEllipseStroke1 = strokeFillVal1v3
       matchEllipseStroke2 = strokeFillVal2v3
       matchEllipseStroke3 = strokeFillVal3v3
    }
    else if (cntrEllipse == 3){
       matchEllipseFill1 = fillVal1v3 - 150
       matchEllipseFill2 = fillVal2v3 - 150
       matchEllipseFill3 = fillVal3v3 - 150 
       matchEllipseStroke1 = strokeFillVal1v3 - 150
       matchEllipseStroke2 = strokeFillVal2v3 - 150
       matchEllipseStroke3 = strokeFillVal3v3 - 150
    }
  }
  
  fill(matchEllipseFill1, matchEllipseFill2, matchEllipseFill3)
  stroke(matchEllipseStroke1, matchEllipseStroke2, matchEllipseStroke3)
  ellipse(450, 450, 100)
  stroke(color(150))
  fill(255)
  square(365, 450, 20)
}

function checkWin(){
  if ((correctShape == 1 && cntrTriangleCorrect >= 2 && cntrTriangleCorrect % 2 == 0 && cntrEllipseCorrect >= 2 && cntrEllipseCorrect % 2 == 0 && cntrSquareWrong == 0) || (correctShape == 2 && cntrSquareCorrect >= 2 && cntrSquareCorrect % 2 == 0 && cntrEllipseCorrect >= 2 && cntrEllipseCorrect % 2 == 0 && cntrTriangleWrong == 0) || (correctShape == 3 && cntrTriangleCorrect >= 2 && cntrTriangleCorrect % 2 == 0 && cntrSquareCorrect >= 2 && cntrSquareCorrect % 2 == 0 && cntrEllipseWrong == 0)){
    cntrSquareCorrect = 0
    cntrTriangleCorrect = 0
    cntrEllipseCorrect = 0
    cntrSquareWrong = 0
    cntrTriangleWrong = 0
    cntrEllipseWrong = 0
    squareStateRed = false
    triangleStateRed = false
    ellipseStateRed = false
    winSceneGame3()
    scene += 7
  }
}