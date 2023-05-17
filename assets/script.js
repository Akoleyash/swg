const user = document.querySelector("#user");
const show = document.getElementById("show");
const again = document.querySelector(".again");
const n = document.getElementById("name")
const show1 = document.getElementById("show1")
const snakewatergun = (user,cpu)=>{
    if (user == cpu)
    {
        return 0;
    }
    if (user == 'snake' && cpu =='gun')
    {
        return -1;
    }
    else if (user == 'gun' && cpu == 'snake')
    {
        return 1;
    }
    if (user =='snake' && cpu == 'water')
    {
        return 1;
    }
    else if (user =='water' && cpu == 'snake')
    {
        return -1;
    }
    if (user =='gun' && cpu == 'water')
    {
        return -1;
    }
    else if (user =='water' && cpu == 'gun')
    {
        return 1;
    }
}
const cpuChance = ()=>{
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    const cpu = 0;
    if (number==0)
    {
        cpu = 'snake';
        show1.innerHTML = '<img src="./assets/snake.png" class="text-center pt-5 mx-auto d-block card-img-top pt-2 w-25 h-25"/>';
        n.innerHTML = '<h5 class="card-title text-center">Snake</h5>'
    }
    else if (number==1)
    {
        cpu = 'water';
        show1.innerHTML = '<img src="./assets/water.png" class="text-center pt-5 mx-auto d-block card-img-top pt-2 w-25 h-25"/>';
        n.innerHTML = '<h5 class="card-title text-center">Water</h5>'
    }
    else
    {
        cpu = 'gun';
        show1.innerHTML = '<img src="./assets/gun.png" class="text-center pt-5 mx-auto d-block card-img-top pt-2 w-25 h-25"/>';
        n.innerHTML = '<h5 class="card-title text-center">Gun</h5>'
    }
    return cpu;
}
const playsound = (sound)=>{
    let audio = new Audio(`assets/${sound}`)
    audio.play();
}
user.addEventListener("click",(value)=>{
    let user = value.target.id;
    let cpu = cpuChance();
    console.log("user option : " + user);
    console.log("cpu option: "+ cpu);
    let result = snakewatergun(user, cpu);
    if(result===0){
        show.innerHTML  = '<h2 style="color:blue;">Match Draw Try Again</h2>';
        playsound('click.wav');
    }
    else if(result === -1){
        
        show.innerHTML = '<h2 style="color:red;">You loose!!</h2>';
        playsound('loose.wav');
    }
    else if(result == 1){
        show.innerHTML = '<h2 style="color:green;">You Win!!</h2>';
        playsound('win.wav');
    }
    else{
        console.log("Try again");
})
