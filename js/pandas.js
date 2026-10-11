// Cute Adorable SVG Panda Illustrations for Shipra's Birthday Website
// Crafted with soft pastel tones, blushing cheeks, sparkling eyes, and joyful expressions.

export const Pandas = {
  // Slide 1: Panda holding a 2-tier pink birthday cake with glowing candle
  cakePanda: `
    <svg class="panda-svg" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cakeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF3BF" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FFA8A8" stop-opacity="0"/>
        </radialGradient>
      </defs>
      
      <!-- Ambient Soft Glow -->
      <circle cx="120" cy="140" r="100" fill="url(#cakeGlow)" />
      
      <!-- Panda Ears -->
      <circle cx="70" cy="70" r="26" fill="#39324B" />
      <circle cx="70" cy="70" r="15" fill="#584E6D" opacity="0.6"/>
      <circle cx="170" cy="70" r="26" fill="#39324B" />
      <circle cx="170" cy="70" r="15" fill="#584E6D" opacity="0.6"/>
      
      <!-- Panda Body -->
      <ellipse cx="120" cy="175" rx="65" ry="60" fill="#39324B" />
      <ellipse cx="120" cy="180" rx="48" ry="44" fill="#FFFFFF" />

      <!-- Panda Feet -->
      <ellipse cx="75" cy="225" rx="22" ry="16" fill="#39324B" />
      <ellipse cx="75" cy="223" rx="12" ry="8" fill="#FFAEC9" opacity="0.8" />
      <ellipse cx="165" cy="225" rx="22" ry="16" fill="#39324B" />
      <ellipse cx="165" cy="223" rx="12" ry="8" fill="#FFAEC9" opacity="0.8" />

      <!-- Panda Head -->
      <ellipse cx="120" cy="105" rx="62" ry="54" fill="#FFFFFF" />
      
      <!-- Cute Eye Patches (slanted inward for cute tilt) -->
      <ellipse cx="92" cy="104" rx="18" ry="21" transform="rotate(-15 92 104)" fill="#39324B" />
      <ellipse cx="148" cy="104" rx="18" ry="21" transform="rotate(15 148 104)" fill="#39324B" />

      <!-- Sparkling Eyes -->
      <circle cx="94" cy="103" r="10" fill="#201C2B" />
      <circle cx="91" cy="99" r="4.5" fill="#FFFFFF" />
      <circle cx="97" cy="105" r="2" fill="#FFFFFF" />

      <circle cx="146" cy="103" r="10" fill="#201C2B" />
      <circle cx="143" cy="99" r="4.5" fill="#FFFFFF" />
      <circle cx="149" cy="105" r="2" fill="#FFFFFF" />

      <!-- Rosy Cheeks -->
      <ellipse cx="74" cy="122" rx="14" ry="9" fill="#FFAEC9" opacity="0.75" />
      <ellipse cx="166" cy="122" rx="14" ry="9" fill="#FFAEC9" opacity="0.75" />

      <!-- Nose & Sweet Smile -->
      <ellipse cx="120" cy="116" rx="6.5" ry="4.5" fill="#39324B" />
      <path d="M115 122 Q120 126 125 122" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M116 124 Q120 131 124 124" fill="#FFAEC9" />

      <!-- Cute Little Bow on Ear -->
      <g transform="translate(62, 50) rotate(-20)">
        <path d="M-6 0 C-14 -10 -14 10 -6 0 Z" fill="#FF85A2" />
        <path d="M6 0 C14 -10 14 10 6 0 Z" fill="#FF85A2" />
        <circle cx="0" cy="0" r="4" fill="#FFAEC9" />
      </g>

      <!-- Arms Holding Cake -->
      <ellipse cx="78" cy="170" rx="18" ry="14" transform="rotate(20 78 170)" fill="#39324B" />
      <ellipse cx="162" cy="170" rx="18" ry="14" transform="rotate(-20 162 170)" fill="#39324B" />

      <!-- Birthday Cake -->
      <g class="floating-cake" transform="translate(85, 145)">
        <!-- Cake Plate -->
        <ellipse cx="35" cy="48" rx="42" ry="8" fill="#F1F3F5" stroke="#E9ECEF" stroke-width="2" />
        
        <!-- Bottom Tier -->
        <rect x="7" y="24" width="56" height="22" rx="6" fill="#FFAEC9" />
        <path d="M7 32 Q14 36 21 32 Q28 36 35 32 Q42 36 49 32 Q56 36 63 32 L63 24 L7 24 Z" fill="#FFFFFF" opacity="0.9" />
        <circle cx="18" cy="38" r="2.5" fill="#FFFFFF" />
        <circle cx="35" cy="38" r="2.5" fill="#FFFFFF" />
        <circle cx="52" cy="38" r="2.5" fill="#FFFFFF" />

        <!-- Top Tier -->
        <rect x="17" y="8" width="36" height="18" rx="5" fill="#FF85A2" />
        <path d="M17 14 Q23 18 29 14 Q35 18 41 14 Q47 18 53 14 L53 8 L17 8 Z" fill="#FFF0F5" />
        
        <!-- Strawberries on Top -->
        <circle cx="24" cy="6" r="3.5" fill="#FF477E" />
        <circle cx="46" cy="6" r="3.5" fill="#FF477E" />

        <!-- Birthday Candle -->
        <rect x="33" y="-3" width="4" height="12" rx="2" fill="#74C0FC" />
        <line x1="33" y1="2" x2="37" y2="2" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="33" y1="6" x2="37" y2="6" stroke="#FFFFFF" stroke-width="1.5" />

        <!-- Candle Flame with Glow -->
        <ellipse cx="35" cy="-7" rx="12" ry="12" fill="url(#flameGlow)" class="flame-glow" />
        <path d="M35 -12 C38 -8 38 -5 35 -3 C32 -5 32 -8 35 -12 Z" fill="#FFA94D" class="candle-flame">
          <animate attributeName="d" 
                   values="M35 -12 C38 -8 38 -5 35 -3 C32 -5 32 -8 35 -12 Z;
                           M35 -13 C39 -8 37 -5 35 -3 C33 -5 31 -8 35 -13 Z;
                           M35 -12 C38 -8 38 -5 35 -3 C32 -5 32 -8 35 -12 Z" 
                   dur="0.8s" repeatCount="indefinite" />
        </path>
        <ellipse cx="35" cy="-5" rx="1.5" ry="2.5" fill="#FFE066" />
      </g>
    </svg>
  `,

  // Slide 2: Two adorable pandas sitting together holding hands
  bestiesPandas: `
    <svg class="panda-svg" viewBox="0 0 320 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="friendshipGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="160" cy="120" r="110" fill="url(#friendshipGlow)" />

      <!-- Floating Hearts Above -->
      <g class="floating-hearts-cluster">
        <path d="M160 30 C154 22 144 24 144 32 C144 42 160 52 160 52 C160 52 176 42 176 32 C176 24 166 22 160 30 Z" fill="#FF6B8B" />
        <path d="M135 45 C131 40 124 41 124 46 C124 53 135 60 135 60 C135 60 146 53 146 46 C146 41 139 40 135 45 Z" fill="#FFAEC9" />
        <path d="M185 45 C181 40 174 41 174 46 C174 53 185 60 185 60 C185 60 196 53 196 46 C196 41 189 40 185 45 Z" fill="#FFAEC9" />
      </g>

      <!-- === LEFT PANDA (Shipra) === -->
      <g class="left-panda">
        <!-- Ears -->
        <circle cx="70" cy="72" r="22" fill="#39324B" />
        <circle cx="120" cy="74" r="20" fill="#39324B" />
        <!-- Pink Flower on Shipra's ear -->
        <g transform="translate(68, 62)">
          <circle cx="-5" cy="0" r="5" fill="#FFAEC9" />
          <circle cx="5" cy="0" r="5" fill="#FFAEC9" />
          <circle cx="0" cy="-5" r="5" fill="#FFAEC9" />
          <circle cx="0" cy="5" r="5" fill="#FFAEC9" />
          <circle cx="0" cy="0" r="4" fill="#FFE066" />
        </g>
        
        <!-- Body -->
        <ellipse cx="98" cy="165" rx="48" ry="44" fill="#39324B" />
        <ellipse cx="98" cy="168" rx="36" ry="34" fill="#FFFFFF" />
        <!-- Feet -->
        <ellipse cx="68" cy="202" rx="18" ry="14" fill="#39324B" />
        <ellipse cx="68" cy="200" rx="10" ry="7" fill="#FFAEC9" opacity="0.8" />
        
        <!-- Head tilted slightly right -->
        <ellipse cx="96" cy="108" rx="48" ry="42" fill="#FFFFFF" />
        <!-- Eye Patches -->
        <ellipse cx="76" cy="106" rx="15" ry="18" transform="rotate(-10 76 106)" fill="#39324B" />
        <ellipse cx="116" cy="108" rx="15" ry="18" transform="rotate(10 116 108)" fill="#39324B" />
        <!-- Sparkly Happy Eyes (smiling happy curves) -->
        <path d="M70 106 Q76 99 82 106" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M110 108 Q116 101 122 108" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Cheeks -->
        <ellipse cx="64" cy="120" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="128" cy="122" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
        <!-- Nose & Smile -->
        <ellipse cx="96" cy="116" rx="5" ry="3.5" fill="#39324B" />
        <path d="M92 121 Q96 126 100 121" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Left Arm on Hip -->
        <ellipse cx="58" cy="158" rx="14" ry="12" transform="rotate(-20 58 158)" fill="#39324B" />
      </g>

      <!-- === RIGHT PANDA (Bestie) === -->
      <g class="right-panda">
        <!-- Ears -->
        <circle cx="200" cy="74" r="20" fill="#39324B" />
        <circle cx="250" cy="72" r="22" fill="#39324B" />
        <!-- Pink Bow on Right panda's ear -->
        <g transform="translate(248, 62) rotate(15)">
          <path d="M-5 0 C-12 -8 -12 8 -5 0 Z" fill="#FF85A2" />
          <path d="M5 0 C12 -8 12 8 5 0 Z" fill="#FF85A2" />
          <circle cx="0" cy="0" r="3.5" fill="#FFE066" />
        </g>
        
        <!-- Body -->
        <ellipse cx="222" cy="165" rx="48" ry="44" fill="#39324B" />
        <ellipse cx="222" cy="168" rx="36" ry="34" fill="#FFFFFF" />
        <!-- Feet -->
        <ellipse cx="252" cy="202" rx="18" ry="14" fill="#39324B" />
        <ellipse cx="252" cy="200" rx="10" ry="7" fill="#FFAEC9" opacity="0.8" />
        
        <!-- Head tilted slightly left -->
        <ellipse cx="224" cy="108" rx="48" ry="42" fill="#FFFFFF" />
        <!-- Eye Patches -->
        <ellipse cx="204" cy="108" rx="15" ry="18" transform="rotate(-10 204 108)" fill="#39324B" />
        <ellipse cx="244" cy="106" rx="15" ry="18" transform="rotate(10 244 106)" fill="#39324B" />
        <!-- Sparkling Eyes -->
        <circle cx="204" cy="107" r="8" fill="#201C2B" />
        <circle cx="202" cy="104" r="3.5" fill="#FFFFFF" />
        <circle cx="206" cy="109" r="1.5" fill="#FFFFFF" />
        <circle cx="244" cy="105" r="8" fill="#201C2B" />
        <circle cx="242" cy="102" r="3.5" fill="#FFFFFF" />
        <circle cx="246" cy="107" r="1.5" fill="#FFFFFF" />
        <!-- Cheeks -->
        <ellipse cx="192" cy="122" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="256" cy="120" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
        <!-- Nose & Smile -->
        <ellipse cx="224" cy="116" rx="5" ry="3.5" fill="#39324B" />
        <path d="M220 121 Q224 126 228 121" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />
        <!-- Right Arm on Hip -->
        <ellipse cx="262" cy="158" rx="14" ry="12" transform="rotate(20 262 158)" fill="#39324B" />
      </g>

      <!-- === HOLDING HANDS TOGETHER IN THE CENTER === -->
      <g class="holding-hands">
        <!-- Left Panda's reaching arm -->
        <path d="M125 162 Q150 170 160 172" stroke="#39324B" stroke-width="20" stroke-linecap="round" fill="none" />
        <!-- Right Panda's reaching arm -->
        <path d="M195 162 Q170 170 160 172" stroke="#39324B" stroke-width="20" stroke-linecap="round" fill="none" />
        <!-- Clasping Paws with cute heart -->
        <ellipse cx="160" cy="172" rx="13" ry="11" fill="#39324B" />
        <path d="M160 166 C157 162 152 163 152 167 C152 172 160 177 160 177 C160 177 168 172 168 167 C168 163 163 162 160 166 Z" fill="#FFAEC9" />
      </g>

      <!-- Daisies / Flowers at Feet -->
      <g transform="translate(100, 210)">
        <circle cx="0" cy="0" r="4" fill="#FFAEC9" />
        <circle cx="-5" cy="-2" r="3" fill="#FFF0F5" />
        <circle cx="5" cy="-2" r="3" fill="#FFF0F5" />
        <circle cx="-3" cy="4" r="3" fill="#FFF0F5" />
        <circle cx="3" cy="4" r="3" fill="#FFF0F5" />
      </g>
      <g transform="translate(220, 210)">
        <circle cx="0" cy="0" r="4" fill="#FFAEC9" />
        <circle cx="-5" cy="-2" r="3" fill="#FFF0F5" />
        <circle cx="5" cy="-2" r="3" fill="#FFF0F5" />
        <circle cx="-3" cy="4" r="3" fill="#FFF0F5" />
        <circle cx="3" cy="4" r="3" fill="#FFF0F5" />
      </g>
    </svg>
  `,

  // Slide 3: Cute panda holding an envelope
  envelopePanda: `
    <svg class="panda-svg" viewBox="0 0 240 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="letterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="120" cy="125" r="95" fill="url(#letterGlow)" />

      <!-- Ears -->
      <circle cx="70" cy="65" r="25" fill="#39324B" />
      <circle cx="170" cy="65" r="25" fill="#39324B" />
      <circle cx="70" cy="65" r="14" fill="#584E6D" opacity="0.6"/>
      <circle cx="170" cy="65" r="14" fill="#584E6D" opacity="0.6"/>

      <!-- Panda Body -->
      <ellipse cx="120" cy="170" rx="64" ry="58" fill="#39324B" />
      <ellipse cx="120" cy="174" rx="46" ry="42" fill="#FFFFFF" />

      <!-- Feet -->
      <ellipse cx="76" cy="216" rx="20" ry="15" fill="#39324B" />
      <ellipse cx="76" cy="214" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />
      <ellipse cx="164" cy="216" rx="20" ry="15" fill="#39324B" />
      <ellipse cx="164" cy="214" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />

      <!-- Head -->
      <ellipse cx="120" cy="100" rx="60" ry="52" fill="#FFFFFF" />
      
      <!-- Eye Patches -->
      <ellipse cx="92" cy="98" rx="18" ry="20" transform="rotate(-12 92 98)" fill="#39324B" />
      <ellipse cx="148" cy="98" rx="18" ry="20" transform="rotate(12 148 98)" fill="#39324B" />

      <!-- Winking / Sparkling Eyes -->
      <circle cx="92" cy="97" r="10" fill="#201C2B" />
      <circle cx="89" cy="93" r="4.5" fill="#FFFFFF" />
      <circle cx="95" cy="99" r="2" fill="#FFFFFF" />
      <!-- Sweet Wink on other eye -->
      <path d="M140 98 Q148 90 156 98" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Cheeks -->
      <ellipse cx="72" cy="116" rx="14" ry="9" fill="#FFAEC9" opacity="0.8" />
      <ellipse cx="168" cy="116" rx="14" ry="9" fill="#FFAEC9" opacity="0.8" />

      <!-- Nose & Sweet Pout -->
      <ellipse cx="120" cy="112" rx="6" ry="4" fill="#39324B" />
      <path d="M115 117 Q120 122 125 117" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Little Heart Hairpin -->
      <g transform="translate(162, 55) rotate(25)">
        <path d="M0 -3 C-3 -6 -7 -4 -7 0 C-7 5 0 9 0 9 C0 9 7 5 7 0 C7 -4 3 -6 0 -3 Z" fill="#FF477E" />
      </g>

      <!-- Hands Holding the Envelope -->
      <ellipse cx="68" cy="155" rx="16" ry="14" transform="rotate(25 68 155)" fill="#39324B" />
      <ellipse cx="172" cy="155" rx="16" ry="14" transform="rotate(-25 172 155)" fill="#39324B" />

      <!-- Cute Mini Envelope in Paws -->
      <g transform="translate(85, 140)">
        <rect x="0" y="0" width="70" height="48" rx="8" fill="#FFF5F7" stroke="#FFAEC9" stroke-width="2" />
        <path d="M0 0 L35 25 L70 0" fill="#FFE4E8" stroke="#FFAEC9" stroke-width="2" />
        <!-- Wax Heart Seal -->
        <circle cx="35" cy="25" r="9" fill="#FF477E" />
        <path d="M35 22 C33 19 29 20 29 23 C29 27 35 30 35 30 C35 30 41 27 41 23 C41 20 37 19 35 22 Z" fill="#FFFFFF" />
      </g>
    </svg>
  `,

  // Slide 4: Cute panda wearing birthday hat with balloons
  partyPanda: `
    <svg class="panda-svg" viewBox="0 0 250 270" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="partyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="125" cy="140" r="105" fill="url(#partyGlow)" />

      <!-- Floating Balloons in Background -->
      <g class="floating-balloons">
        <!-- Pink Balloon -->
        <path d="M40 85 C40 60 62 40 80 40 C98 40 120 60 120 85 C120 110 80 125 80 125 C80 125 40 110 40 85 Z" fill="#FF85A2" opacity="0.75" />
        <polygon points="77,125 83,125 80,129" fill="#FF85A2" />
        <path d="M80 129 Q75 155 85 180" stroke="#FF85A2" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />

        <!-- Pastel Purple/Rose Balloon -->
        <path d="M140 70 C140 48 158 30 175 30 C192 30 210 48 210 70 C210 92 175 105 175 105 C175 105 140 92 140 70 Z" fill="#FFAEC9" opacity="0.75" />
        <polygon points="172,105 178,105 175,109" fill="#FFAEC9" />
        <path d="M175 109 Q180 135 168 160" stroke="#FFAEC9" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />
      </g>

      <!-- Panda Ears -->
      <circle cx="75" cy="88" r="24" fill="#39324B" />
      <circle cx="175" cy="88" r="24" fill="#39324B" />

      <!-- Panda Body -->
      <ellipse cx="125" cy="188" rx="64" ry="58" fill="#39324B" />
      <ellipse cx="125" cy="192" rx="46" ry="42" fill="#FFFFFF" />

      <!-- Feet -->
      <ellipse cx="80" cy="235" rx="20" ry="15" fill="#39324B" />
      <ellipse cx="80" cy="233" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />
      <ellipse cx="170" cy="235" rx="20" ry="15" fill="#39324B" />
      <ellipse cx="170" cy="233" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />

      <!-- Head -->
      <ellipse cx="125" cy="122" rx="60" ry="52" fill="#FFFFFF" />

      <!-- Party Cone Hat! -->
      <g transform="translate(125, 68)">
        <!-- Hat Body with Polka Dots -->
        <path d="M-22 10 L0 -48 L22 10 Z" fill="#FF85A2" />
        <circle cx="-5" cy="-20" r="3.5" fill="#FFE066" />
        <circle cx="8" cy="-12" r="3" fill="#FFFFFF" />
        <circle cx="-10" cy="-2" r="4" fill="#FFF0F5" />
        <circle cx="7" cy="2" r="3.5" fill="#FFE066" />
        <!-- Fluffy Pom-Pom on Top -->
        <circle cx="0" cy="-48" r="7" fill="#FFE066" />
        <circle cx="-2" cy="-50" r="2" fill="#FFFFFF" />
        <!-- Fluffy Trim on Hat Bottom -->
        <rect x="-24" y="6" width="48" height="6" rx="3" fill="#FFF0F5" />
      </g>
      
      <!-- Eye Patches -->
      <ellipse cx="98" cy="122" rx="17" ry="19" transform="rotate(-10 98 122)" fill="#39324B" />
      <ellipse cx="152" cy="122" rx="17" ry="19" transform="rotate(10 152 122)" fill="#39324B" />

      <!-- Big Joyful Eyes with Extra Sparkles -->
      <circle cx="99" cy="121" r="10" fill="#201C2B" />
      <circle cx="96" cy="117" r="4.5" fill="#FFFFFF" />
      <circle cx="102" cy="123" r="2.5" fill="#FFFFFF" />

      <circle cx="151" cy="121" r="10" fill="#201C2B" />
      <circle cx="148" cy="117" r="4.5" fill="#FFFFFF" />
      <circle cx="154" cy="123" r="2.5" fill="#FFFFFF" />

      <!-- Cheeks -->
      <ellipse cx="78" cy="138" rx="14" ry="9" fill="#FFAEC9" opacity="0.85" />
      <ellipse cx="172" cy="138" rx="14" ry="9" fill="#FFAEC9" opacity="0.85" />

      <!-- Nose & Joyous Open Mouth -->
      <ellipse cx="125" cy="132" rx="6" ry="4" fill="#39324B" />
      <path d="M117 137 Q125 148 133 137 Z" fill="#FF6B8B" stroke="#39324B" stroke-width="2" />
      <ellipse cx="125" cy="142" rx="4" ry="2.5" fill="#FFAEC9" />

      <!-- Excited Raised Paws -->
      <ellipse cx="64" cy="172" rx="16" ry="14" transform="rotate(40 64 172)" fill="#39324B" />
      <ellipse cx="186" cy="172" rx="16" ry="14" transform="rotate(-40 186 172)" fill="#39324B" />
      
      <!-- Tiny Sparkle Wand in Paw -->
      <line x1="192" y1="172" x2="215" y2="140" stroke="#FFE066" stroke-width="3" stroke-linecap="round" />
      <path d="M215 132 L218 138 L224 140 L218 142 L215 148 L212 142 L206 140 L212 138 Z" fill="#FFE066" />
    </svg>
  `,

  // Slide 5: Big cute panda holding a giant heart that says "Besties Forever"
  bestiesForeverPanda: `
    <svg class="panda-svg" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="foreverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6584" />
          <stop offset="50%" stop-color="#FF477E" />
          <stop offset="100%" stop-color="#F43F5E" />
        </linearGradient>
      </defs>

      <!-- Soft Warm Background Aura -->
      <circle cx="140" cy="140" r="120" fill="url(#foreverGlow)" />

      <!-- Panda Ears -->
      <circle cx="85" cy="65" r="27" fill="#39324B" />
      <circle cx="195" cy="65" r="27" fill="#39324B" />
      <circle cx="85" cy="65" r="15" fill="#584E6D" opacity="0.6"/>
      <circle cx="195" cy="65" r="15" fill="#584E6D" opacity="0.6"/>

      <!-- Panda Body -->
      <ellipse cx="140" cy="180" rx="76" ry="68" fill="#39324B" />
      <ellipse cx="140" cy="185" rx="55" ry="50" fill="#FFFFFF" />

      <!-- Feet with Pink Paw Pads -->
      <ellipse cx="88" cy="245" rx="24" ry="18" fill="#39324B" />
      <ellipse cx="88" cy="242" rx="14" ry="10" fill="#FFAEC9" opacity="0.85" />
      <ellipse cx="192" cy="245" rx="24" ry="18" fill="#39324B" />
      <ellipse cx="192" cy="242" rx="14" ry="10" fill="#FFAEC9" opacity="0.85" />

      <!-- Head -->
      <ellipse cx="140" cy="100" rx="68" ry="58" fill="#FFFFFF" />
      
      <!-- Eye Patches -->
      <ellipse cx="106" cy="98" rx="20" ry="23" transform="rotate(-12 106 98)" fill="#39324B" />
      <ellipse cx="174" cy="98" rx="20" ry="23" transform="rotate(12 174 98)" fill="#39324B" />

      <!-- Deep Loving Sparkly Eyes -->
      <circle cx="108" cy="97" r="12" fill="#201C2B" />
      <circle cx="104" cy="92" r="5.5" fill="#FFFFFF" />
      <circle cx="112" cy="99" r="2.8" fill="#FFFFFF" />

      <circle cx="172" cy="97" r="12" fill="#201C2B" />
      <circle cx="168" cy="92" r="5.5" fill="#FFFFFF" />
      <circle cx="176" cy="99" r="2.8" fill="#FFFFFF" />

      <!-- Rosy Cheeks -->
      <ellipse cx="84" cy="118" rx="16" ry="10" fill="#FFAEC9" opacity="0.85" />
      <ellipse cx="196" cy="118" rx="16" ry="10" fill="#FFAEC9" opacity="0.85" />

      <!-- Nose & Loving Smile -->
      <ellipse cx="140" cy="112" rx="7" ry="5" fill="#39324B" />
      <path d="M134 117 Q140 123 146 117" stroke="#39324B" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Cute Flower Crown on Head -->
      <g transform="translate(140, 52)">
        <circle cx="-32" cy="4" r="7" fill="#FFAEC9" />
        <circle cx="-32" cy="4" r="3" fill="#FFF" />
        <circle cx="-16" cy="-2" r="8" fill="#FF85A2" />
        <circle cx="-16" cy="-2" r="3.5" fill="#FFE066" />
        <circle cx="0" cy="-5" r="9" fill="#FFAEC9" />
        <circle cx="0" cy="-5" r="4" fill="#FFF" />
        <circle cx="16" cy="-2" r="8" fill="#FF85A2" />
        <circle cx="16" cy="-2" r="3.5" fill="#FFE066" />
        <circle cx="32" cy="4" r="7" fill="#FFAEC9" />
        <circle cx="32" cy="4" r="3" fill="#FFF" />
      </g>

      <!-- Giant Heart Held with Paws -->
      <g class="pulse-heart" transform="translate(140, 185)">
        <!-- Heart Path -->
        <path d="M0 -35 C-35 -75 -85 -35 -85 10 C-85 55 0 95 0 95 C0 95 85 55 85 10 C85 -35 35 -75 0 -35 Z" 
              fill="url(#heartGradient)" 
              filter="drop-shadow(0px 8px 16px rgba(255, 71, 126, 0.4))" />
        
        <!-- White Heart Accent Highlight -->
        <path d="M-45 -20 C-65 -5 -60 25 -50 35" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5" fill="none" />

        <!-- "Besties Forever" Text -->
        <text x="0" y="16" 
              text-anchor="middle" 
              fill="#FFFFFF" 
              font-family="'Dancing Script', 'Sacramento', cursive" 
              font-size="25" 
              font-weight="700" 
              letter-spacing="0.5">Besties Forever</text>
        
        <!-- Tiny Sparkles on Heart -->
        <circle cx="-25" cy="-2" r="2.5" fill="#FFE066" />
        <circle cx="25" cy="-2" r="2.5" fill="#FFE066" />
        <circle cx="0" cy="42" r="3" fill="#FFFFFF" />
      </g>

      <!-- Arms Wrapping Around Heart -->
      <ellipse cx="60" cy="182" rx="22" ry="17" transform="rotate(35 60 182)" fill="#39324B" />
      <ellipse cx="220" cy="182" rx="22" ry="17" transform="rotate(-35 220 182)" fill="#39324B" />
    </svg>
  `,

  // Virtual Hug Modal Panda: Open arms waiting for a warm hug
  hugPanda: `
    <svg class="panda-svg hug-panda-svg" viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hugGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFD1DC" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="140" cy="130" r="115" fill="url(#hugGlow)" />

      <!-- Ears -->
      <circle cx="80" cy="55" r="28" fill="#39324B" />
      <circle cx="200" cy="55" r="28" fill="#39324B" />

      <!-- Panda Body -->
      <ellipse cx="140" cy="170" rx="74" ry="66" fill="#39324B" />
      <ellipse cx="140" cy="174" rx="54" ry="48" fill="#FFFFFF" />

      <!-- Feet -->
      <ellipse cx="90" cy="235" rx="22" ry="16" fill="#39324B" />
      <ellipse cx="90" cy="233" rx="12" ry="9" fill="#FFAEC9" opacity="0.85" />
      <ellipse cx="190" cy="235" rx="22" ry="16" fill="#39324B" />
      <ellipse cx="190" cy="233" rx="12" ry="9" fill="#FFAEC9" opacity="0.85" />

      <!-- Wide Outstretched Hugging Arms -->
      <!-- Left Arm Reaching Out -->
      <g class="arm-left-hug">
        <path d="M100 150 Q40 135 25 155 Q20 175 60 175 Q95 175 105 168 Z" fill="#39324B" />
        <ellipse cx="32" cy="162" rx="14" ry="11" fill="#FFAEC9" opacity="0.8" />
      </g>
      <!-- Right Arm Reaching Out -->
      <g class="arm-right-hug">
        <path d="M180 150 Q240 135 255 155 Q260 175 220 175 Q185 175 175 168 Z" fill="#39324B" />
        <ellipse cx="248" cy="162" rx="14" ry="11" fill="#FFAEC9" opacity="0.8" />
      </g>

      <!-- Head with Loving Soft Tilt -->
      <ellipse cx="140" cy="95" rx="68" ry="58" fill="#FFFFFF" />

      <!-- Cute Ear Bow -->
      <g transform="translate(75, 40) rotate(-15)">
        <path d="M-6 0 C-14 -10 -14 10 -6 0 Z" fill="#FF85A2" />
        <path d="M6 0 C14 -10 14 10 6 0 Z" fill="#FF85A2" />
        <circle cx="0" cy="0" r="4" fill="#FFAEC9" />
      </g>
      
      <!-- Eye Patches -->
      <ellipse cx="106" cy="94" rx="20" ry="23" transform="rotate(-10 106 94)" fill="#39324B" />
      <ellipse cx="174" cy="94" rx="20" ry="23" transform="rotate(10 174 94)" fill="#39324B" />

      <!-- Cute Blinking Happy Closed Eye Arcs (Pure Joy!) -->
      <path d="M96 95 Q106 82 116 95" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M164 95 Q174 82 184 95" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" />

      <!-- Extra Big Warm Blush Cheeks -->
      <ellipse cx="82" cy="112" rx="18" ry="11" fill="#FF9BB2" opacity="0.85" />
      <ellipse cx="198" cy="112" rx="18" ry="11" fill="#FF9BB2" opacity="0.85" />

      <!-- Nose & Warm Happy Smile -->
      <ellipse cx="140" cy="107" rx="7" ry="5" fill="#39324B" />
      <path d="M130 114 Q140 125 150 114" stroke="#39324B" stroke-width="3" stroke-linecap="round" fill="none" />

      <!-- Beating Heart in Center -->
      <g transform="translate(140, 165)">
        <path d="M0 -15 C-12 -28 -28 -12 -28 4 C-28 20 0 35 0 35 C0 35 28 20 28 4 C28 -12 12 -28 0 -15 Z" 
              fill="#FF477E" class="beating-heart" />
      </g>
    </svg>
  `
};
