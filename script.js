document.addEventListener("DOMContentLoaded", () => {
    var tl = gsap.timeline();
  
    tl
      // hero
      .from("h1", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: "power3.out",
      });
    tl.from(
      ".hero-txt p",
      {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        y: 50,
      },
      "-=0.8"
    );
    tl.from(
      ".btn-cta",
      {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        y: 50,
      },
      "-=0.8"
    );
    tl.from(
      ".hero-img",
      {
        duration: 1.5,
        opacity: 0,
        ease: "power3.out",
        y: 50,
      },
      "-=0.8"
    );
  
    // depois do scroll
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("h2", {
      duration: 1,
      delay: 0.2,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".autor-img ",
      },
    });
  
    gsap.from(".autor-icon img", {
      duration: 1,
      y: 300,
      opacity: 0,
    //   stagger: { each: 0.3 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".autor-img",
      },
    });

    gsap.from(".det-2", {
        duration: 2,
        delay: .5,
        x: -300,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });

      gsap.from(".det-1", {
        duration: 2,
        delay: .5,
        x: 300,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });

      gsap.from(".autor-img", {
        duration: 2,
        // delay: .5,
        y: 100,
        opacity: 0,
      //   stagger: { each: 0.3 },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });

      gsap.from(".autor-txt h3", {
        duration: 1,
        delay: .5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });

      gsap.from(".autor-txt p", {
        duration: 1,
        delay: 1,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });

      gsap.from(".autor-sociais li", {
        duration: 1,
        delay: 1,
        y: 50,
        opacity: 0,
        stagger: { each: .3 },
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });
      gsap.from(".autor-btn", {
        duration: 1,
        delay: 2,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".autor-img",
        },
      });
  });
  
  