tint_color=""

function preload(){

}

function setup(){
canvas=createCanvas(640,480)
canvas.position(170,200)
video=createCapture(VIDEO)
video.hide();
}

function draw(){
image(video,0,0,640,480)
tint(tint_color)
}

function take_snapshot(){
    save('filter_img.png')
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value
}