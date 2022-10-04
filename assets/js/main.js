let background, texte
window.onload = () => {
  background = document.querySelectorAll('.slider__back__img')
  texte = document.querySelectorAll('.slider-content')
  document.querySelector('.-next').addEventListener('click', nextSlide)
  document.querySelector('.-prev').addEventListener('click', prevSlide)
  animation_home()
}

let loader, ratio, ratioSpe, currentSlide = 1
function animation_home() {
  // Ratio pour les ingredients
  ratio = window.innerWidth / window.innerHeight
  ratioSpe = window.innerWidth / (1.4 * window.innerHeight)
  var e = .6104 / ratio
  document.querySelectorAll('.backgroundHome__item')[0].style.left = (.6486 - .325 + e / 2 * 3 / 4) * window.innerWidth + 'px'
  document.querySelectorAll('.backgroundHome__item')[1].style.left = (.6486 - .325 + e / 2 / 4) * window.innerWidth + 'px'
  document.querySelectorAll('.backgroundHome__item')[2].style.left = (.6486 - .325 - e / 2 / 4) * window.innerWidth + 'px'
  document.querySelectorAll('.backgroundHome__item')[3].style.left = (.6486 - .325 - e / 2 * 3 / 4) * window.innerWidth + 'px'
  currentSlide = 1
  animation_loader()
}

function nextSlide() {
  animEnCours = true
  1 === currentSlide ? document.querySelector('.-prev').classList.remove('-off') :
    3 === currentSlide && document.querySelector('.-next').classList.add('-off')

  TweenMax.to(background[currentSlide - 1], 1, {
    opacity: 0,
    delay: .3,
    ease: Power1.easeIn
  })
  TweenMax.to(background[currentSlide ], 1, {
    opacity: 1,
    ease: Power1.easeIn
  })

  currentSlide++
  deplacementCan()
  deplacementFond(1)
  deplacementTexte()
}

function prevSlide() {
  animEnCours = true,
  2 === currentSlide ? document.querySelector('.-prev').classList.add('-off') :
    4 === currentSlide && document.querySelector('.-next').classList.remove('-off')

  TweenMax.to(background[currentSlide - 1], 1, {
    opacity: 0,
    delay: .3,
    ease: Power1.easeIn
  })
  TweenMax.to(background[currentSlide - 2], 0.5, {
    opacity: 1,
    delay: .3,
    ease: Power1.easeIn
  })

  currentSlide--
  deplacementCan2()
  deplacementFond(-1)
  deplacementTexte(true)
}

function deplacementCan() {
  const sliders = document.querySelectorAll('.slider__item')
    2 === currentSlide ? (TweenMax.to(sliders[0], 1, {
        x: '-52.3%',
        delay: .6,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[1], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '52.3%',
        delay: .4,
        ease: Power2.easeInOut
    })) : 3 === currentSlide ? (TweenMax.to(sliders[0], 1, {
        x: '-104.6%',
        delay: .7,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[1], 1, {
        x: '-52.3%',
        delay: .6,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[3], 1, {
        x: '52.3%',
        delay: .4,
        ease: Power2.easeInOut
    })) : 4 === currentSlide && (TweenMax.to(sliders[1], 1, {
        x: '-104.6%',
        delay: .7,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '-52.3%',
        delay: .6,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[3], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    })),
    setTimeout((() => animEnCours = false), 2100)
}

function deplacementCan2() {
  const sliders = document.querySelectorAll('.slider__item')
    3 === currentSlide ? (TweenMax.to(sliders[1], 1, {
        x: '-52.3%',
        delay: .4,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[3], 1, {
        x: '52.3%',
        delay: .6,
        ease: Power2.easeInOut
    })) : 2 === currentSlide ? (TweenMax.to(sliders[0], 1, {
        x: '-52.3%',
        delay: .4,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[1], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '52.3%',
        delay: .6,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[3], 1, {
        x: '104.6%',
        delay: .7,
        ease: Power2.easeInOut
    })) : 1 === currentSlide && (TweenMax.to(sliders[0], 1, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[1], 1, {
        x: '52.3%',
        delay: .6,
        ease: Power2.easeInOut
    }),
    TweenMax.to(sliders[2], 1, {
        x: '104.6%',
        delay: .7,
        ease: Power2.easeInOut
    })),
    setTimeout((() => animEnCours = false), 2100)
}

function deplacementFond(coef) {
    let rows = [0, 1, 2, 3]
    shuffle(rows)
    const ingredientsRows = document.querySelectorAll('.backgroundHome__item')
    const fondLigne1 = ingredientsRows[rows[0]].querySelector('.current')
    const fondLigne2 = ingredientsRows[rows[1]].querySelector('.current')
    const fondLigne3 = ingredientsRows[rows[2]].querySelector('.current')
    const fondLigne4 = ingredientsRows[rows[3]].querySelector('.current')
    TweenMax.to(fondLigne1, 1.2, {
        x: `${coef * -100}%`,
        delay: .2,
        ease: Power2.easeInOut
    }),
    TweenMax.to(fondLigne2, 1.2, {
        x: `${coef * -100}%`,
        delay: .3,
        ease: Power2.easeInOut
    }),
    TweenMax.to(fondLigne3, 1.2, {
        x: `${coef * -100}%`,
        delay: .4,
        ease: Power2.easeInOut
    }),
    TweenMax.to(fondLigne4, 1.2, {
        x: `${coef * -100}%`,
        delay: .5,
        ease: Power2.easeInOut
    }),
    TweenMax.fromTo(coef === -1 ? fondLigne1.previousElementSibling : fondLigne1.nextElementSibling, 1.2, {
        x: `${coef * 100}%`
    }, {
        x: '0%',
        delay: .2,
        ease: Power2.easeInOut
    }),
    TweenMax.fromTo(coef === -1 ? fondLigne2.previousElementSibling : fondLigne2.nextElementSibling, 1.2, {
        x: `${coef * 100}%`
    }, {
        x: '0%',
        delay: .3,
        ease: Power2.easeInOut
    }),
    TweenMax.fromTo(coef === -1 ? fondLigne3.previousElementSibling : fondLigne3.nextElementSibling, 1.2, {
        x: `${coef * 100}%`
    }, {
        x: '0%',
        delay: .4,
        ease: Power2.easeInOut
    }),
    TweenMax.fromTo(coef === -1 ? fondLigne4.previousElementSibling : fondLigne4.nextElementSibling, 1.2, {
        x: `${coef * 100}%`
    }, {
        x: '0%',
        delay: .5,
        ease: Power2.easeInOut,
        onComplete: function() {
            document.querySelectorAll('.ingredients').forEach(((e) => e.classList.remove('current')))              
            fondLigne1[coef === -1 ? 'previousElementSibling' : 'nextElementSibling'].classList.add('current')
            fondLigne2[coef === -1 ? 'previousElementSibling' : 'nextElementSibling'].classList.add('current')
            fondLigne3[coef === -1 ? 'previousElementSibling' : 'nextElementSibling'].classList.add('current')
            fondLigne4[coef === -1 ? 'previousElementSibling' : 'nextElementSibling'].classList.add('current')
            TweenMax.set('.ingredients', {
              clearProps: 'x'
            })
        }
    })
}

function deplacementTexte(reverse = false) {
    const e = texte[currentSlide - (reverse ? 0 : 2)]
    const t = texte[currentSlide - 1]
    TweenMax.to(e, 1, {
        opacity: 0,
        delay: .4
    }),
    TweenMax.to(e.querySelector('.slider-content__title'), 1.2, {
        x: reverse ? '-10%' : '10%',
        delay: .3,
        ease: Power1.easeIn
    }),
    TweenMax.to(t, 1, {
        opacity: 1,
        delay: 1.4
    }),
    TweenMax.fromTo(t.querySelector('.slider-content__title'), 1.2, {
        x: reverse ? '-10%' : '10%'
    }, {
        x: '-45px',
        delay: 1.4,
        ease: Power2.easeOut
    })
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const n = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[n]
    array[n] = temp
  }
  return array
}

function animation_loader() {
  document.querySelectorAll(".header__logo .lettre").forEach((letter) => letter.classList.add("activ"))
  TweenMax.to(".menu", .4, { opacity: 1, ease: Power2.easeIn, delay: .4 })
  setTimeout((() => introHome()), 600)
}

function introHome() {
  TweenMax.to(".slider__back__img", 1, { x: "0%", delay: .2, ease: Power4.easeOut })
  TweenMax.to('.slider, .backgroundHome', 1.4, {
      x: '0%',
      delay: .2,
      ease: Power4.easeOut,
      onComplete: function() {
          document.addEventListener('wheel', scrollEvent),
          document.addEventListener('mousewheel', scrollEvent),
          document.addEventListener('DOMMouseScroll', scrollEvent)
      }
  })
  TweenMax.to('.scroll-container', 1.4, { y: '0%', opacity: 1, delay: 1.4, ease: Power4.easeOut })
  TweenMax.to('.backgroundHome__item', 1.4, { x: '0%', delay: .2, ease: Power4.easeOut })
  TweenMax.to('.menu', 1, { opacity: 1, x: '0%', delay: .8, ease: Power2.easeOut })
  TweenMax.to('.current .slider-content', 1.4, { opacity: 1, x: '0%', delay: .8, ease: Power2.easeOut })
  TweenMax.fromTo('.slider-content__title', 1.4, { x: '10%' }, { opacity: 1, x: '-45px', delay: .8, ease: Power2.easeOut })
}

let delta = 0, supportsWheel = false, animEnCours = false, lethargy = new Lethargy
function scrollEvent(e) {
  if ('wheel' == e.type) {
    supportsWheel = true
  } else if (supportsWheel) {
    return
  }
  delta = e.deltaY || -e.wheelDelta || e.detail || 1
  if (lethargy.check(e) !== false && !animEnCours) {
    if (currentSlide < 4 && delta > 0) {
      animEnCours = true
      nextSlide()
    } else if(currentSlide > 1 && delta < 0){
      animEnCours = true
      prevSlide()
    }
  }
}
