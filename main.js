var canvas= new fabric.Canvas("mycanvas");
var playerx = 0;
var playery = 0;
var player_object= "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:playery,left:playerx
        });
        canvas.add(player_object);
    })
}
player_update()
