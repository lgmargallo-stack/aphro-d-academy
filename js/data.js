/* Page content, kept out of the markup so copy edits never touch layout.
   Image paths assume `bash download-assets.sh` has been run. Until then the
   tiles fall back to showing the course title. See ASSETS.md. */

   window.SITE_DATA = {

    /* data-asset slot -> downloaded file. Run download-assets.sh first. */
    assets: {
      "icon-courses":          "assets/images/icons/easy-to-follow-courses.png",
      "icon-plan":             "assets/images/icons/custom-workout-plan.png",
      "icon-support":          "assets/images/icons/live-support-feedback.png",
      "icon-coaches":          "assets/images/icons/expert-fitness-coaches.png",
      "icon-community":        "assets/images/icons/supportive-community.png",
      "icon-benefits":         "assets/images/icons/lifelong-benefits.png",
  
      "play-anytime-anywhere": "assets/images/sections/watch-anytime-anywhere.png",
      "science-based-learning":"assets/images/sections/science-based-learning.png",
      "training-modules":      "assets/images/sections/training-modules.png",
      "live-feedback":         "assets/images/sections/live-feedback-mentoring.png",
      "community-support":     "assets/images/sections/community-and-support.png",
  
      "icon-facebook":         "assets/images/social/facebook-52.png",
      "icon-instagram":        "assets/images/social/instagram-52.png",
      "badge-google":          "assets/images/social/google-reviews-158x54.png",
      "badge-trustpilot":      "assets/images/social/trustpilot-92x25.png"
  
      /* "hero-video" is intentionally absent: the live hero is a video embed,
         not a still, so there is no file to download. Drop your player in the
         .hero__media slot in index.html. */
    },
  
    /* 15 tiles in the library grid on the live page. Titles confirmed from
       the site are filled in; the rest are numbered until captured. */
    courses: [
      { title: "Six-Pack Shortcuts", image: "assets/images/courses/01-six-pack-shortcuts.png" },
      { title: "5-Minute Anabolic Meals", image: "assets/images/courses/02-5-minute-anabolic-meals.png" },
      { title: "Home Workout Accelerator", image: "assets/images/courses/03-home-workout-accelerator.png" },
      { title: "The Billionaire Code", image: "assets/images/courses/04-the-billionaire-code.png" },
      { title: "The Science of Changing Habits", image: "assets/images/courses/05-science-of-changing-habits.png" },
      { title: "Bedroom Rockstar", image: "assets/images/courses/06-bedroom-rockstar.png" },
      { title: "Anabolic Hormone Optimization", image: "assets/images/courses/07-anabolic-hormone-optimization.png" },
      { title: "The Truth About Diets", image: "assets/images/courses/08-the-truth-about-diets.png" },
      { title: "Staying 6-Pack Lean Daily Routines", image: "assets/images/courses/09-staying-6-pack-lean.png" },
      { title: "Neurotoxins and Androgen Disruptors", image: "assets/images/courses/10-neurotoxins-androgen-disruptors.png" },
      { title: "Fake Health Foods", image: "assets/images/courses/11-fake-health-foods.png" },
      { title: "How to Build Muscle on Easy Mode", image: "assets/images/courses/12-build-muscle-easy-mode.png" },
      { title: "Perfect Sleep System", image: "assets/images/courses/13-perfect-sleep-system.png" },
      { title: "Natural Remedies for Longevity", image: "assets/images/courses/14-natural-remedies-longevity.png" },
      { title: "Gut Health Secrets", image: "assets/images/courses/15-gut-health-secrets.png" },
    ],
  
    testimonials: [
      {
        name: "Charles Travers",
        avatar: "assets/images/avatars/avatar-1.png",
        text: "Aphro-D Academy has a wealth of knowledge when it comes to Health & Fitness. They provide a proven system and exercise program to help increase muscle mass and work on optimizing my t-levels. Highly recommended."
      },
      {
        name: "Nicholas Holt",
        avatar: "assets/images/avatars/avatar-2.png",
        text: "The Aphro-D Academy courses take into account food, fitness, and lifestyle. This system made dieting and training easy for me to understand."
      },
      {
        name: "Rudy Lee",
        avatar: "assets/images/avatars/avatar-3.png",
        text: "The Aphro-D Academy has completely transformed my life in the sense that it has taught me how to live, maintain muscle, and optimize my testosterone."
      },
      {
        name: "Devin Young",
        avatar: "assets/images/avatars/avatar-4.png",
        text: "Aphro-D Academy knows the scientific process of being healthier and stronger, with a focus on maintaining high testosterone levels throughout."
      },
      {
        name: "Pedro Mendoza",
        avatar: "assets/images/avatars/avatar-5.png",
        text: "Aphro-D Academy has the best courses on how to increase your testosterone levels. I'm 60 years old, I lost 40lbs with the Academy's advice and gained more muscle. Thank you guys."
      },
      {
        name: "David Charles",
        avatar: "assets/images/avatars/avatar-6.png",
        text: "I'm now 57 years old and I've been following Aphro-D Academy's advice since I started. Go hard or go home. Love this group platform."
      },
      {
        name: "Thomas Duty",
        avatar: "assets/images/avatars/avatar-7.png",
        text: "I cannot tell you how thankful I am for the courses on Aphro-D Academy. I'm 51, I have more focus, and I seem to be more laid back when the unexpected happens. I changed up my vitamins too because of their expert advice."
      }
    ],
  
    faq: [
      {
        q: "Is there a free trial?",
        a: "Yes, you can experience the entire Aphro-D Academy platform free for the first 14 days."
      },
      {
        q: "What happens after that?",
        a: "If you want to continue you'll be charged $14 a month, $100 a year, or $600 for lifetime access depending on your selection."
      },
      {
        q: "How do I cancel the subscription?",
        a: "You can cancel your subscription inside the portal, or by emailing our support team."
      },
      {
        q: "Is there a money-back guarantee?",
        a: "Along with the free trial, we also offer a 60-day money-back guarantee. Our platform is designed with care and attention to ensure that you get the most out of your learning experience. If for any reason you feel it's not the right fit, rest assured that you'll get your money back."
      },
      {
        q: "Why not just put the videos on YouTube?",
        a: "We tried that in the past, but many of our videos were taken down and the reach was suppressed. Due to the strict censorship on the YouTube platform, we moved all our content to our own platform, so we can share it unfiltered and without the risk of the channel being shut down."
      },
      {
        q: "Do I get support, or is it just video content?",
        a: "You get support. That was another reason we moved to our own platform, so we could help our members better and provide more support so they get results faster. Inside the platform you'll be able to ask any questions you like, without restrictions."
      },
      {
        q: "Is there a mobile app?",
        a: "The Aphro-D Academy app can be installed on your phone by pressing 'share', then 'add to home screen' using your mobile browser."
      },
      {
        q: "Can I access Aphro-D Academy from anywhere in the world?",
        a: "Yes, you can access it anywhere in the world, from mobile or desktop."
      },
      {
        q: "Is there an online community as well?",
        a: "Yes. You can connect with other members, share your wins, and get inspired by others' success."
      },
      {
        q: "How do I get started?",
        a: "Scroll up to the pricing section and start your free trial with the plan you want."
      }
    ]
  };