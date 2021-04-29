var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player1score = 0;
var plater2score = 0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;



function preload(){
  back_img = loadImage("C:\Users\Shree\Desktop\Project_40\Project-c-40-template-main\images\jungle.jpg");
  player_img = loadImage("Project-c-40-template-main\images\basket2.png");
  fruit1_img = loadImage("Project-c-40-template-main\images\apple2.png");
  fruit2_img = loadImage("Project-c-40-template-main\images\banana2.png");
  fruit3_img = loadImage("Project-c-40-template-main\images\melon2.png");
  fruit4_img = loadImage("Project-c-40-template-main\images\orange2.png");
  fruit5_img = loadImage("Project-c-40-template-main\images\pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}