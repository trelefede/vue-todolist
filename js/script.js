const toDoList = [
    {
        text: 'Carosello di immagini',
        done: true,
    },
    {
        text: 'Carosello di caroselli',
        done: false,
    },
    {
        text: 'Carosello di piselli',
        done: false,
    },
    {
        text: 'Immagini di carosello',
        done: true,
    },
    {
        text: 'Correzione carosello',
        done: true,
    }
]

console.log(toDoList);

const app = new Vue({
    el: '#app',
    data: {
        toDoList,
        indexArray: '',
        newItem: '',
    },
    methods: {
        removeItem(index) {
            this.indexArray = index;
            toDoList.splice(this.indexArray, 1);
        },
        addItem() {
            this.toDoList.unshift(this.newItem);
            console.log(this.toDoList);
        }
    }

});