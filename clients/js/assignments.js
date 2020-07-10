const toggleAss = () =>{
    let web = document.getElementById('web');
    let python  = document.getElementById('python');
    let graphic = document.getElementById('graphic');
    let webdev = document.querySelector('.webdev');
    let py = document.querySelector('.py');
    let graphicDesign = document.querySelector('.graphic-design');

    web.addEventListener('click',function(){
        console.log('clicked');
        webdev.style.display = "block";
        py.style.display = "none"
        graphicDesign.style.display = "none"
        console.log(webdev);
    });
    python.addEventListener('click',function(){
        webdev.style.display = "none"
        py.style.display = "block"
        graphicDesign.style.display = "none"
    });
    graphic.addEventListener('click',function(){
        webdev.style.display = "none"
        py.style.display = "none"
        graphicDesign.style.display = "block"
    });
}

toggleAss();