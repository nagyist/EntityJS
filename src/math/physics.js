/*
The Physics component adds velocity, acceleration and other properties to an entity.

These variables will give the entity a more fluid movement in 2d space.

You can add hit collision check by defining a hitmap. Like so:

var mountainHits = re.e('hitmap');

re.e('physics')
.attr(hitmap:mountainHits);

//or define a hitmap for all physics objects
re.hitmap = re.e('hitmap');

var e = re.e('physics');

e.hitmap == re.hitmap //true

Warning - this component is not delta time safe. It assumes a fixed timestep.
*/
re.physics = re.c('physics')
.requires('update')
.statics({
	graX:0,
	graY:0
})
.defaults({
	
	posX:0,
	posY:0,
	
	velX:0,
	velY:0,
	
	friX:0.9,
	friY:0.4,
	
	accX:0,
	accY:0,
	
	resX:0,
	resY:0,
	
	mass:1,
	
	padX:0,
	padY:0,
	
	bodyX:1,
	bodyY:1
	
})
.namespaces({
	
	update:function(){
		
		this.velX = this.force(this.velX, this.accX, this.friX, this.graX, this.mass);
		this.velY = this.force(this.velY, this.accY, this.friY, this.graY, this.mass);
		
		//check collisions and get result
		if(this.hitmap){
			
			this.aftermath(this.hitmap.checkHit(this));
			
		} else {
			
			this.aftermath(this.posX + this.velX, this.posY + this.velY);
		}
		
	}
	
})
.defines({
	
	aftermath:function(posx, posy, hitx, hity, tarx, tary){
		
		if(arguments.length == 1){
			hitx = posx.hitX;
			hity = posx.hitY;
			
			tarx = posx.tarX;
			tary = posx.tarY;
			
			posy = posx.posY;
			posx = posx.posX;
		}
		
		this.posX = posx;
		this.posY = posy;
		
		this.trigger('aftermath', hitx, hity, tarx, tary);
		
		if(hitx){
			this.velX = this.forceRes(this.velX, this.resX);
		}
		
		if(hity){
			this.velY = this.forceRes(this.velY, this.resY);
		}
		
	},
	
	forceRes:function(vel, res){
		return vel * -res;
	},
	
	forceGra:function(gra, mas){
		return gra * mas;
	},
	
	forceVel:function(vel, acc, fri){
		return (vel + acc) * fri;
		
	},
	
	force:function(vel, acc, fri, gra, mas){
		
		var v = this.forceVel(vel, acc, fri) + this.forceGra(gra, mas);
		
		if(Math.abs(v) < 0.01){
			v = 0;
		}
		
		return v;
	},
	
	isIdle:function(){
		return (this.velY == 0 && this.velX == 0 && this.accX == 0 && this.accY == 0);
	}
	
})
.init(function(c){
	
	//setup defaults
	this.hitmap = re.hitmap;
	
	this.graX = c.graX;
	this.graY = c.graY;
	
	this.on('update', this.physics_update);
})
.dispose(function(){
	
	this.off('update', this.physics_update);
	
});