class Food{
    constructor(){
    this.image = loadImage("Milk.png")
    this.foodStock = 20;
    }

    display(){
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        var x = 50;
        var y = 150;
        if(foodS!=0){
            for(var i=0;i<foodS;i++){
                if(i%10==0){
                    x=80;
                    y=y+50
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }



    getFoodStock(){
     database.ref('Food').on("value",function(data){
     foodS = data.val()
     console.log(data)
    });
    }

    updateFoodStock(x){
        database.ref('/').set({
            Food:x
        })
    }

}

