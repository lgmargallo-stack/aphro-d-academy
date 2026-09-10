#!/usr/bin/env bash
# Downloads every image asset from the live Aphro-D Academy page at full
# original resolution, bypassing the Optimole CDN (which re-encodes to AVIF
# and downscales). Files land in assets/images/<category>/.
#
# Usage:  bash download-assets.sh
# Needs:  curl

set -uo pipefail
BASE="https://aphro-dacademy.com/wp-content/uploads"
OUT="assets/images"
ok=0; fail=0

get () { # get <category> <path-under-uploads> [rename]
  local dir="$OUT/$1" src="$2" name="${3:-}"
  [ -z "$name" ] && name="$(basename "$src")"
  mkdir -p "$dir"
  if curl -fsSL --retry 2 -o "$dir/$name" "$BASE/$src"; then
    printf '  ok   %-46s %s\n' "$name" "$1"; ok=$((ok+1))
  else
    printf '  FAIL %-46s %s\n' "$name" "$1"; fail=$((fail+1))
  fi
}

echo "Backgrounds (flattened section art)"
get backgrounds 2024/12/TOP-3.png                 # 1436x2051 hero + comparison band
get backgrounds 2024/12/TOP-MOBILE-11.png         #  375x1415 mobile equivalent
get backgrounds 2024/08/1-1438056.png             # 1440x1944 course library, flattened
get backgrounds 2024/08/1-MOBILE-1.png            #  375x1266 mobile equivalent
get backgrounds 2024/09/2-51.png                  # 1440x1976 "builds you", flattened

echo "Benefit icons (108x108)"
get icons 2024/08/Group-766.png   easy-to-follow-courses.png
get icons 2024/09/Group-7671.png  custom-workout-plan.png
get icons 2024/09/Group-883.png   live-support-feedback.png
get icons 2024/08/Group-7691.png  expert-fitness-coaches.png
get icons 2024/08/Group-772.png   supportive-community.png
get icons 2024/08/Group-7711.png  lifelong-benefits.png

echo "Comparison table marks (28x28)"
get icons 2024/08/Group-734.png   check-green.png
get icons 2024/08/cancel.png      cross-red.png
get icons 2024/08/cancel-1.png    cross-red-alt.png

echo "Course tiles (~379x213, grid order left-to-right, top-to-bottom)"
get courses 2024/09/Group-8601.png                      01-six-pack-shortcuts.png
get courses 2024/09/Group-8611.png                      02-5-minute-anabolic-meals.png
get courses 2024/09/Group-8624.png                      03-home-workout-accelerator.png
get courses 2024/09/Group-8631.png                      04-the-billionaire-code.png
get courses 2024/09/Group-8641.png                      05-science-of-changing-habits.png
get courses 2024/09/Group-8651.png                      06-bedroom-rockstar.png
get courses 2024/09/Group-8661.png                      07-anabolic-hormone-optimization.png
get courses 2024/09/Group-8671.png                      08-the-truth-about-diets.png
get courses 2024/09/Group-8681.png                      09-staying-6-pack-lean.png
get courses 2024/09/Group-8691.png                      10-neurotoxins-androgen-disruptors.png
get courses 2024/09/Group-8701.png                      11-fake-health-foods.png
get courses 2024/09/How-to-Build-Muscle-on-Easy-Mode-2.png 12-build-muscle-easy-mode.png
get courses 2024/09/Group-8721.png                      13-perfect-sleep-system.png
get courses 2024/09/Natural-Remedies-for-Longevity-1.png   14-natural-remedies-longevity.png
get courses 2024/09/Group-8741.png                      15-gut-health-secrets.png
get courses 2024/12/courses1.png                        courses-grid-mobile-flattened.png

echo "Section artwork"
get sections 2024/12/Play-Anytime-Anywhere-5.png        watch-anytime-anywhere.png
get sections 2024/08/Science-Based-Learning-2-11.png    science-based-learning.png
get sections 2024/12/Action-Focused-Training-Modules-1.png training-modules.png
get sections 2024/08/Live-Feedback-v2-3.png             live-feedback-mentoring.png
get sections 2024/12/Community-and-Support-5.png        community-and-support.png

echo "Buttons and brand shapes"
get buttons 2024/08/Rectangle-883.png     btn-gradient-444x94.png
get buttons 2024/08/Rectangle-8831.png    btn-gradient-193x60.png
get buttons 2024/08/Div-bg-brand.png      brand-rule-64x6.png
get buttons 2024/09/Rectangle-1238.png    members-access-pill.png

echo "Pricing card art"
get pricing 2026/05/Group-885.png    plan-monthly.png
get pricing 2026/05/Group-886-1.png  plan-yearly.png
get pricing 2026/06/Group-887-2.png  plan-lifetime.png

echo "Testimonial avatars (50x50)"
get avatars 2024/09/Mask-group5.png   avatar-1.png
get avatars 2024/09/Mask-group11.png  avatar-2.png
get avatars 2024/09/Mask-group12.png  avatar-3.png
get avatars 2024/09/Mask-group13.png  avatar-4.png
get avatars 2024/09/Mask-group14.png  avatar-5.png
get avatars 2024/09/Mask-group15.png  avatar-6.png
get avatars 2024/09/image6.png        avatar-7.png
get avatars 2024/09/Mask-group10.png  avatar-quote-mark.png

echo "Social and review badges"
get social 2024/08/Icon1.png  facebook-20.png
get social 2024/08/Icon2.png  instagram-20.png
get social 2024/12/Icon6.png  facebook-52.png
get social 2024/12/Icon7.png  instagram-52.png
get social 2024/12/684-6848018_we-have-over-11-000-positive-reviews-hd-copy-1.png google-reviews-158x54.png
get social 2024/09/Trustpilot_logo-copy-1.png trustpilot-92x25.png
get social 2024/09/Group-740.png  reviews-badge-161x30.png
get social 2024/09/Group-742.png  reviews-badge-98x19.png

echo "Misc"
get misc 2024/09/Rectangle-8801.png  card-509x493.png
get misc 2024/12/Rectangle-8804.png  card-403x493.png
get misc 2024/08/360_F_64771693_ncondhOJwNdvLjBfeIwswLqhsavUSSY5-2.png play-badge-282x250.png
get misc 2024/09/circle-arrow-direction-up-upload-svgrepo-com-2.png  slider-arrow-a.png
get misc 2024/09/circle-arrow-direction-up-upload-svgrepo-com-11.png slider-arrow-b.png

echo
echo "Done — $ok downloaded, $fail failed. Files are under $OUT/"
