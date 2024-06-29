
function Widget(id, options) {
    Object.setPrototypeOf(this, {

        defaults: {
            /**
             * Speed in pixels per second, Integer or Float
             */
            speed: 200,

            /**
             * Timing function; 'linear' would be another sensible value.
             * @link https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function
             */
            timing: 'ease-in-out'
        },

        openSection: function(section)    {
            let h = section.scrollHeight,
                dur = 1000 * h / this.speed;

            Object.assign(section.style, {
                height: `${h}px`,
                transitionDuration: `${dur}ms`,
            });
        },

        closeSection: function(section)    {
            let h = section.scrollHeight,
                dur = 1000 * h / this.speed;

            Object.assign(section.style, {
                height: '0',
                transitionDuration: `${dur}ms`,
            });
        },

    });

    this.element = document.getElementById(id);

    this.element.classList.add('sjaakp-bandoneon');

    let headings = this.element.querySelectorAll(':nth-child(odd)');

    headings.forEach(heading => {
        let section = heading.nextElementSibling;
        if (section)    {
            Object.assign(section.style, {
                transitionProperty: 'height',
                transitionTimingFunction: this.timing
            });
            if (heading.classList.contains('open'))   {
                this.openSection(section);
            }
            heading.addEventListener('click', e => {
                let open = heading.classList.toggle('open');
                if (open)   {
                    this.openSection(section);
                    let close = this.element.querySelectorAll('.open');
                    close.forEach(toClose => {
                        if (toClose !== heading)    {
                            toClose.classList.remove('open');
                            this.closeSection(toClose.nextElementSibling);
                        }
                    });
                }
                else    {
                    this.closeSection(section);
                }
            });
        }
    });

    Object.assign(this, this.defaults, options);
}

function widget(id, options) {
    return new this.Widget(id, options);
}

export {Widget, widget};

// const Bandoneon = { Widget, widget };