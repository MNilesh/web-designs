window.onload = function(el)
{

    let toobserve = document.querySelector('h1');
    let options = {
      root: null,//this is the viewport
      threshold: 0,//0 to 1. matlab agar 1 bola toh pura ka pura wo element visible hona chahiye tabhi hi fire hoga agar
      //0.25 bola matlab 25 takka visible hua wo element toh fire karne ka. 0 bola matlab thoda bhi agar visible hua toh fire.
      rootMargin: '-50%' //kitna upar rahega toh animation start karne ka ya jo bola hai wo karne ka.
    };
    const observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry=>{
          if(entry.isIntersecting)
          {
            let el = entry.target;
            el.classList.add('red');
            // console.log();
            observer.unobserve(entry.target);
          }
        })
    }, options);

    observer.observe(toobserve);

}
