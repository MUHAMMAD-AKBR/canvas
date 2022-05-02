const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let arr:particle[] = [];
let chars = 'abcdefghijklmnopqrestuvwxyz0123456789';

class particle {
    x: number 
    y: number 
    width: number
    height: number
    fontSize: number
    maxColumns: number
    text: string
    constructor(){
        this.height = canvas.height
        this.width = canvas.width
        this.fontSize = 20;
        this.maxColumns = canvas.width / this.fontSize
       this.x = Math.floor(Math.random() * canvas.width)
       this.y = Math.floor(Math.random() * canvas.height) 
        
    }
    draw(c: CanvasRenderingContext2D){
        this.text = chars.charAt(Math.floor(Math.random() * chars.length))
        c.fillStyle = "rgba(0,255,0)";
        c.font = this.fontSize + "px monospace";
        c.fillText(this.text,this.x,this.y) 
    }
    move(){
        if(this.y > canvas.height){
            this.y = 0
        }
        this.y += Math.floor(Math.random() * 3 / 6 + this.fontSize + 3 / 6) + 1.5;
    }
}


for(let i = 0; i < 50; i++){
    arr.push(new particle())
}
function init(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    arr.forEach(e => {
        e.move()
        e.draw(ctx)
    })
    requestAnimationFrame(init)
}
init()