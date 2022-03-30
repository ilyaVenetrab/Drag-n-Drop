export default class Slider {
    public thumb: HTMLElement;
    private _slider: HTMLElement;
    private _shiftX: number;

    constructor() {
        this.thumb = document.querySelector('.thumb');
        this._slider = document.querySelector('.slider');

        this._init();
    }

    private _init() {
        if (this.thumb) {
            this.thumb.addEventListener('mousedown', this._onMouseDown);
            this.thumb.ondragstart = () => {
                return false
            };
        }
    }

    private _onMouseMove = (event) => {
        let newLeft = event.clientX - this._shiftX - this._slider.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = this._slider.offsetWidth - this.thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        this.thumb.style.left = newLeft + 'px';
    }

    private _onMouseUp = () => {
        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);
    }

    private _onMouseDown = (event) => {
        event.preventDefault();
        this._shiftX = event.clientX - this.thumb.getBoundingClientRect().left;

        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('mouseup', this._onMouseUp);
    }

    public destroy() {
        this.thumb = null;
        this._slider = null;
        this._shiftX = 0;
    }
}
