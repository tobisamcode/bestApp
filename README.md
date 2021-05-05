# bestApp

A landing page describing the bestApp application.

# Technology

* HTML
* SASS
* Javascript

# Icons
* <https://boxicons.com/>
* <https://fontawesome.com/>

# Animations

#### Reveal scroll
<https://scrollrevealjs.org/>
```javascript
<script src="https://unpkg.com/scrollreveal"></script>
```
######## app.js
```javascript
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.image, .first`, {
    origin: 'left',
    interval: 200

})

sr.reveal(`.second`, {
    origin: 'top'
})
sr.reveal(`.third, .form`, {
    origin: 'right'
})
```

#### Animated animations
<https://animate.style/#best-practices>

# css flex
```css
.pricing {
    .box-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .box {
            flex: 1 1 27rem;
            margin: 1rem;
            padding: 1rem;
            background: $White;
            border: .1rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
            border-radius: .5rem;
            text-align: center;
            padding-bottom: 3rem;
            &:nth-child(2),
            &:hover {
                border: .2rem solid $Pink;
            }
            .title {
                color: $Purple;
                font-size: 2.5rem;
                padding-top: 1rem;
            }
            .price {
                font-size: 4rem;
                color: $Pink;
                padding: 1rem 0;
                span {
                    font-size: 2rem;
                }
            }
            ul {
                padding: 1rem 0;
                li {
                    font-size: 1.7rem;
                    color: $light-gray;
                    padding: .5rem 0;
                    .fa-check {
                        color: lightgreen;
                    }
                    .fa-times {
                        color: tomato;
                    }
                }
            }
        }
    }
}
```
