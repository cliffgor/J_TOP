// FACTORIEs Function


function createCircle(radius){
    return{
    radius,
    draw: function(){
        console.log('draw');
    }
    
    };
} 
const  circle = createCircle(1); 


// Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
// they are both regular function
// if you use the (this. function) along with a new operator it is refered as 
// a constuructor function
