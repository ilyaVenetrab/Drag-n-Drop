import Slider from './main';

describe('SliderComponent', () => {
    let sliderInstance;

    beforeEach(() => {
        const element = document.createElement('div');
        element.innerHTML = `
            <div id="slider" class="slider">
                <div class="thumb"></div>
            </div>`
        ;

        document.body.append(element.firstElementChild);

        sliderInstance = new Slider();
    });

    afterEach(() => {
        sliderInstance.destroy();
        sliderInstance = null;
    });

    it('should have ability to be destroyed', () => {
        sliderInstance.destroy();

        expect(sliderInstance.thumb).not.toBeInTheDocument();
    });
});
