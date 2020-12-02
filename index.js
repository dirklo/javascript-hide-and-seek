
function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
    const myLists = document.querySelectorAll('.ranked-list');
    for (let child = 0; child < myLists.length; child++){
        let children = myLists[child].children;
        for (let i = 0, l = children.length; i < l; i++) {
            children[i].innerHTML = parseInt(children[i].innerHTML) + n;
        }
    }
}

function deepestChild() {
    let deepest = document.querySelector("#grand-node");
        while (deepest.childElementCount > 0) {
            if (deepest.children[0]) {
                deepest = deepest.children[0]
            }
        }
        return deepest
}