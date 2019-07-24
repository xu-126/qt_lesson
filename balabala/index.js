// let watch = document.getElementById('movie-watch');
                // let toast = document.getElementById('toast');            
                // watch.addEventListener('click',function(){
                //     toast.classList.add('active');
                // })

var parent = document.getElementById('parent1');
var child = document.getElementById('child1');
parent.addEventListener('mouseover',function(){
    this.style.color = 'orange';
    child.classList.remove('none');
    child.classList.add('active');
})
parent.addEventListener('mouseout',function(){
    this.style.color = '#959393';
    child.classList.remove('active');
    child.classList.add('none');
})


// (function(){
//     $('#parent1').mouseover(function(){
//         this.style.color = 'orange';
//         $('#child1').removeClass('none')
//         $('#child1').addClass('active')
//     })
//     $('#parent1').mouseout(function(){
//         this.style.color = '#959393';
//         $('#child1').removeClass('active')
//         $('#child1').addClass('none')
//     })
// })()
