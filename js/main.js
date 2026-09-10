(function () {
  "use strict";

  var data = window.SITE_DATA || { courses: [], testimonials: [], faq: [] };

  /* ---------------------------------------------------------------
     Course library grid
     --------------------------------------------------------------- */
  function renderCourses() {
    var host = document.getElementById("courses");
    if (!host) return;

    data.courses.forEach(function (course) {
      var li = document.createElement("li");
      li.className = "course";

      if (course.image) {
        var img = document.createElement("img");
        img.src = course.image;
        img.alt = course.title;
        img.loading = "lazy";
        // fall back to the title if download-assets.sh hasn't been run yet
        img.addEventListener("error", function () {
          img.remove();
          var span = document.createElement("span");
          span.className = "course__title";
          span.textContent = course.title;
          li.appendChild(span);
        });
        li.appendChild(img);
      } else {
        var span = document.createElement("span");
        span.className = "course__title";
        span.textContent = course.title;
        li.appendChild(span);
      }
      host.appendChild(li);
    });
  }

  /* ---------------------------------------------------------------
     Testimonial slider
     --------------------------------------------------------------- */
  function renderSlider() {
    var root  = document.querySelector("[data-slider]");
    var track = document.getElementById("quotes");
    if (!root || !track) return;

    var dotsHost = root.querySelector("[data-dots]");
    var index = 0;

    data.testimonials.forEach(function (item, i) {
      var li = document.createElement("li");
      li.className = "quote";
      li.setAttribute("role", "group");
      li.setAttribute("aria-roledescription", "slide");
      li.setAttribute("aria-label", (i + 1) + " of " + data.testimonials.length);

      var avatar = document.createElement("div");
      avatar.className = "quote__avatar";
      if (item.avatar) {
        var probe = new Image();
        probe.onload = function () {
          avatar.style.backgroundImage = "url(" + item.avatar + ")";
          avatar.style.backgroundSize = "cover";
          avatar.style.border = "0";
        };
        probe.src = item.avatar;
      }

      var name = document.createElement("p");
      name.className = "quote__name";
      name.textContent = item.name;

      // 5-star graphic sits between the name and the quote on the live page
      var stars = document.createElement("div");
      stars.className = "quote__stars";
      stars.setAttribute("role", "img");
      stars.setAttribute("aria-label", "5 out of 5 stars");

      var text = document.createElement("p");
      text.className = "quote__text";
      text.textContent = item.text;

      li.append(avatar, name, stars, text);
      track.appendChild(li);

      var dot = document.createElement("button");
      dot.className = "dot";
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Testimonial " + (i + 1));
      dot.addEventListener("click", function () { go(i); });
      dotsHost.appendChild(dot);
    });

    function go(next) {
      var total = data.testimonials.length;
      index = (next + total) % total;
      track.style.transform = "translateX(" + (-index * 100) + "%)";
      Array.prototype.forEach.call(dotsHost.children, function (dot, i) {
        dot.setAttribute("aria-selected", i === index ? "true" : "false");
      });
    }

    root.querySelector("[data-prev]").addEventListener("click", function () { go(index - 1); });
    root.querySelector("[data-next]").addEventListener("click", function () { go(index + 1); });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    });

    go(0);
  }

  /* ---------------------------------------------------------------
     FAQ accordion
     --------------------------------------------------------------- */
  function renderFaq() {
    var host = document.getElementById("faq");
    if (!host) return;

    data.faq.forEach(function (item, i) {
      var wrapper = document.createElement("div");
      wrapper.className = "faq__item";

      var btn = document.createElement("button");
      btn.className = "faq__q";
      btn.type = "button";
      btn.id = "faq-q-" + i;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", "faq-a-" + i);

      var label = document.createElement("span");
      label.textContent = item.q;

      var icon = document.createElement("span");
      icon.className = "faq__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = "+";

      btn.append(label, icon);

      var panel = document.createElement("div");
      panel.className = "faq__a";
      panel.id = "faq-a-" + i;
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", "faq-q-" + i);
      panel.dataset.open = "false";

      var inner = document.createElement("div");
      var p = document.createElement("p");
      p.textContent = item.a;
      inner.appendChild(p);
      panel.appendChild(inner);

      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        panel.dataset.open = open ? "false" : "true";
      });

      wrapper.append(btn, panel);
      host.appendChild(wrapper);
    });
  }


  /* ---------------------------------------------------------------
     Fill every [data-asset] slot from the downloaded files
     --------------------------------------------------------------- */
  function fillAssetSlots() {
    var map = data.assets || {};
    document.querySelectorAll("[data-asset]").forEach(function (el) {
      var src = map[el.dataset.asset];
      if (!src) return;

      var probe = new Image();
      probe.onload = function () {
        if (el.classList.contains("ratio")) {
          // section artwork: swap the placeholder for a real <img>
          el.innerHTML = "";
          var img = document.createElement("img");
          img.src = src;
          img.alt = "";
          img.loading = "lazy";
          el.appendChild(img);
          el.style.border = "0";
        } else {
          // icons, social, badges: paint as a contained background
          el.style.backgroundImage = "url(" + src + ")";
          el.style.backgroundSize = "contain";
          el.style.backgroundRepeat = "no-repeat";
          el.style.backgroundPosition = "center";
          el.style.backgroundColor = "transparent";
          el.style.border = "0";
          el.textContent = "";

        }
      };
      probe.src = src;
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  fillAssetSlots();
  renderCourses();
  renderSlider();
  renderFaq();
  setYear();
})();