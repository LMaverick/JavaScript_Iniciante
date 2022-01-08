(function(){
 var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload, create:create,update:update});


 //escopo global =========
 var platforms;
 //===================================
 //=============preload===============
 function preload(){
    game.load.image('sky','img/sky.png');
    game.load.image('platform','img/platform.png');
 }

 //===================================
 //=============create===============
 function create(){
    game.add.sprite(0,0,'sky');
            
    platforms = game.add.group();

    var platform = platforms.create(0,game.world.heigh - 64,'platform');
    platform.scale.setTo(2,2);

    platform = platforms.create(400,400,'platform')
    platform = platforms.create(-150,250,'platform')
 }

 //===================================
 //=============update===============
 function update(){

 }


}());