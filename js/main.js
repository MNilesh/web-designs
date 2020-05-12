window.onload = function(el)
{
//   let bg = document.querySelector('#img_bg');
  
//   bg.style = bg.dataset.style ;
  let styles = document.querySelectorAll('[data-style]');
  
  // console.log();
  let timer = 0;
  for(let i = 0; i< styles.length; i++)
    {
      timer = timer + 100;
      setTimeout(()=>{
        styles[i].style = styles[i].dataset.style;
      },  timer)
      
    }
}