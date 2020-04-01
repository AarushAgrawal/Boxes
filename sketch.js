const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
 var engine,world;
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;
    // Create an instance of Engine, World
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Box(mouseX,mouseY,50,50));
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
    Engine.update(engine);

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for(var i = 0; i<boxes.length; i++){
        boxes[i].display();
        }
}
 
