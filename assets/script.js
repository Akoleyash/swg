const user = document.querySelector("#user");
const show = document.getElementById("show");
const again = document.querySelector(".again");
const snakewatergun = (user,cpu)=>{
    if (user == cpu)
    {
        return 0;
    }
    if (user = 'snake' && cpu =='gun')
    {
        return -1;
    }
    else if (user = 'gun' && cpu == 'snake')
    {
        return 1;
    }
    if (user ='snake' && cpu == 'water')
    {
        return 1;
    }
    else if (user =='water' && cpu == 'snake')
    {
        return -1;
    }
    if (user ='gun' && cpu == 'water')
    {
        return -1;
    }
    else if (user =='water' && cpu == 'gun')
    {
        return 1;
    }
}
const cpuChance = ()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    let cpu;
    if (number<33)
    {
        cpu = 'snake';
    }
    else if (number>33 && number<66)
    {
        cpu = 'water';
    }
    else
    {
        cpu = 'gun';
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
    let result = snakewatergun(user, cpu);
    if(result===0){
        show.innerHTML  = '<h2 style="color:blue;">Match Draw Try Again</h2>';
        playsound('click.wav');
    }
    else if(result === -1){
        
        show.innerHTML = '<h2 style="color:red;">You loose!!</h2>';
        playsound('loose.wav');
    }
    else{
        show.innerHTML = '<h2 style="color:green;">You Win!!</h2>';
        playsound('win.wav');
    }
})
again.addEventListener("click",()=>{
    show.innerHTML = null;
})