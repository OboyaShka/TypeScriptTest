var rect1 = {
    id: "1",
    size: {
        width: 30,
        height: 10
    }
};
var rect2 = {
    id: "2",
    size: {
        width: 20,
        height: 20
    },
    color: "black"
};
rect2.color = 'black';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '5',
    size: {
        width: 5,
        height: 3
    },
    getArea: function () {
        return this.size.height * this.size.width;
    }
};
var Cloak = /** @class */ (function () {
    function Cloak() {
        this.time = new Date();
    }
    Cloak.prototype.setTime = function (date) {
        this.time = date;
    };
    return Cloak;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
