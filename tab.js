// IIFE, Immediately Invoked Function Expression
(() => {
    //Declare the variables
    const $doc = document;
    const $nav = $doc.querySelectorAll('[data-nav]');
    const $content = $doc.querySelectorAll('[data-content]');

    const navLen = $nav.length;
    const ACTIVE_CLASS = 'is-active';


    //Initialize; display only the first content 
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();


    //Whole movement that behaves after clicking a tab
    const handleClick = (e) => {
        //Cancel the anchor link
        e.preventDefault();

        //Get the clicked HTML element and the value of the data- attribute
        const $target = e.target;
        const targetVal = $target.dataset.nav;

        //Temporally remove the HTML class from all elements, and make all contents invisible 
        let index = 0;
        while (index < navLen) {
            $nav[index].classList.remove(ACTIVE_CLASS);
            $content[index].style.display = 'none';
            index++;
        }
          
        //Make the HTML element visible that the value of the data-content attribute is matched with the data-nav
        // $content[targetVal].style.display = 'block';
        $doc.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';

        //Add the HTML class only to the clicked element
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };
    

    //handleClick() works by clicking one of the tabs
    let index = 0;
    while (index < navLen) {
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();