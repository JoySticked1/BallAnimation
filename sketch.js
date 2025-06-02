let rectX=50;
let rectY=300;
let angle=0;
let ballX;
let ballY;
let c1;
let c2;
let c3;
let l=1;
let checkvar=360;
let newVar=328;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	world.gravity.y=10
	world.friction=10
	circls = new Group()
	circls.d=5
	circls.collider = "k"
	circls.mass= 0
	circls.color='white'
	circls.bounciness = 1.05
	circls.stroke='white'
	circls.amount=165
	circls.overlaps(circls)
	while (l<165){
		l+=1
		new circls.Sprite()
		circls.x= (i) => 256*cos(i)+windowWidth/2
		circls.y= (i) => 256*sin(i)+windowHeight/2
	}
	balls = new Group()
	balls.x=windowWidth/2+random(-125,125)
	balls.y=windowHeight/2+random(-125,-200)
	balls.d=20
	balls.bounciness = 1.05
	new balls.Sprite()
	newCircle = new Sprite()
	newCircle.stroke='black'
	newCircle.color='black'
	newCircle.mass=0
	newCircle.collider = 'none'
	newCircle.d=5
	newCircle.x = 256*cos(checkvar)+windowWidth/2
	newCircle.y = 256*sin(checkvar)+windowHeight/2
	newCircle.overlaps(circls, overlap)
	death = new Sprite()
	death.width=10*windowWidth
	death.height=1
	death.color='black'
	death.mass=0
	death.x=windowWidth/2
	death.y=windowHeight-1
	death2 = new Sprite()
	death2.width=10*windowWidth
	death2.height=1
	death2.color='black'
	death2.mass=0
	death2.x=windowWidth/2
	death2.y=1
	death.overlaps(circls)
	death.overlaps(newCircle)
	death.overlaps(balls, die)
	death2.overlaps(circls)
	death2.overlaps(newCircle)
	death2.overlaps(balls, die)
	balls.overlaps(balls)
}

function draw() {
	death.x=windowWidth/2
	death.y=windowHeight-50
	death.velocity.y=0
	death2.x=windowWidth/2
	death2.y=50
	death2.velocity.y=0
	background(0)
	
	if (checkvar==359.5){
		checkvar = -0.5
	}
	checkvar+=0.5
	newCircle.x = 256*cos(checkvar)+windowWidth/2
	newCircle.y = 256*sin(checkvar)+windowHeight/2
}

function overlap(newCircle, circl){
	circl.remove()
	newVar +=1
	if (newVar==360){
		newVar = 0
	}
	new circls.Sprite(256*cos(newVar)+windowWidth/2,256*sin(newVar)+windowHeight/2)
}

function die(death, ball){
	ball.remove()
	new balls.Sprite(windowWidth/2+random(-25,25),windowHeight/2)
	new balls.Sprite(windowWidth/2+random(-25,25),windowHeight/2)
}
