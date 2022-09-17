document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.to(".circle", {
    x: mouseX,
    y: mouseY,
    stagger: 0.1,
  });

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  })
});

gsap.to(".svgBox", { 
  duration: 2,
  x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  xPercent: -100,
  // or target SVG attributes
  attr: {
    fill: '#8d3dae',
    rx: 50, 
  },
});


