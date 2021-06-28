// IIFE, Immediately Invoked Function Expression, to prevent from polluting the global scope.
(() => {
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    //初期化
    const init = () => {
        $content[0].style.display = 'block';//一つ目のコンテントを表示。
    };
    init();


    //クリックしたら各コンテントを表示。
    const handleClick = (e) => {
        e.preventDefault();//<a>のアンカーリンク要素を無効化。
        
        //クリックされたnavと、そのdata-属性を取得。
        const $this = e.target;//クリックされた<a>を取得。
        const targetVal = $this.dataset.nav;//<a>のdata-属性の値を取得。
        
        //対象外のnav、コンテンツをすべて一旦、リセット。
        let index = 0;
        while (index < navLen) {
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }


        //data-content属性が、定数targetValと一致するコンテンツが、表示させる。
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';

        //クリックされたタブに、HTMLクラス名を追加する。
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    //すべてのタブに、handleClick()を実装する。
    let index = 0;
    while (index < navLen) {
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();




