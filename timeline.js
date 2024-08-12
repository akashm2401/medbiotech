$(function () {
  var timelineBlocks = $(".timeline-item"),
    offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when entering the viewport
  $(window).on("scroll", function () {
    !window.requestAnimationFrame
      ? setTimeout(function () {
          showBlocks(timelineBlocks, offset);
        }, 100)
      : window.requestAnimationFrame(function () {
          showBlocks(timelineBlocks, offset);
        });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function () {
      $(this).offset().top >
        $(window).scrollTop() + $(window).height() * offset &&
        $(this).find(".timeline-icon, .timeline-content").addClass("is-hidden");
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function () {
      $(this).offset().top <=
        $(window).scrollTop() + $(window).height() * offset &&
        $(this).find(".timeline-icon").hasClass("is-hidden") &&
        $(this)
          .find(".timeline-icon, .timeline-content")
          .removeClass("is-hidden")
          .addClass("animate-it");
    });
  }
});

const carousel = document.querySelector(".carousel");
let index = 0;

function showSlide(i) {
  const slides = document.querySelectorAll(".carousel-item");
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
