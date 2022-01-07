(function(){
 var game = new Phaser.Game(800,600,Phaser.AUTO,null,{
     preload: preload,
     create:create,
     update:update 
 });

 //===================================
 //=============preload===============
 function preload(){
    game.load.image('sky','img/sky.png');
 }

 //===================================
 //=============create===============
 function create(){
     game.add.sprite(0,0,'sky');

 }

 //===================================
 //=============update===============
 function update(){

 }


}());