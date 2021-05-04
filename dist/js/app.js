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