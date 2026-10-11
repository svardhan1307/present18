// Shipra's Birthday Website - Standalone Bundle (Fully compatible with file:// and http://)
(function() {
  'use strict';

  // ================= 1. CUTE PANDA SVG ASSETS =================
  const Pandas = {
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
        
        <circle cx="120" cy="140" r="100" fill="url(#cakeGlow)" />
        
        <!-- Ears -->
        <circle cx="70" cy="70" r="26" fill="#39324B" />
        <circle cx="70" cy="70" r="15" fill="#584E6D" opacity="0.6"/>
        <circle cx="170" cy="70" r="26" fill="#39324B" />
        <circle cx="170" cy="70" r="15" fill="#584E6D" opacity="0.6"/>
        
        <!-- Body -->
        <ellipse cx="120" cy="175" rx="65" ry="60" fill="#39324B" />
        <ellipse cx="120" cy="180" rx="48" ry="44" fill="#FFFFFF" />

        <!-- Feet -->
        <ellipse cx="75" cy="225" rx="22" ry="16" fill="#39324B" />
        <ellipse cx="75" cy="223" rx="12" ry="8" fill="#FFAEC9" opacity="0.8" />
        <ellipse cx="165" cy="225" rx="22" ry="16" fill="#39324B" />
        <ellipse cx="165" cy="223" rx="12" ry="8" fill="#FFAEC9" opacity="0.8" />

        <!-- Head -->
        <ellipse cx="120" cy="105" rx="62" ry="54" fill="#FFFFFF" />
        
        <!-- Eye Patches -->
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
          
          <!-- Strawberries -->
          <circle cx="24" cy="6" r="3.5" fill="#FF477E" />
          <circle cx="46" cy="6" r="3.5" fill="#FF477E" />

          <!-- Candle -->
          <rect x="33" y="-3" width="4" height="12" rx="2" fill="#74C0FC" />
          <line x1="33" y1="2" x2="37" y2="2" stroke="#FFFFFF" stroke-width="1.5" />
          <line x1="33" y1="6" x2="37" y2="6" stroke="#FFFFFF" stroke-width="1.5" />

          <!-- Candle Flame with Glow -->
          <ellipse cx="35" cy="-7" rx="12" ry="12" fill="url(#flameGlow)" />
          <path d="M35 -12 C38 -8 38 -5 35 -3 C32 -5 32 -8 35 -12 Z" fill="#FFA94D">
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

    // Slide 2: Two pandas holding hands
    bestiesPandas: `
      <svg class="panda-svg" viewBox="0 0 320 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="friendshipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <circle cx="160" cy="120" r="110" fill="url(#friendshipGlow)" />

        <!-- Floating Hearts -->
        <g>
          <path d="M160 30 C154 22 144 24 144 32 C144 42 160 52 160 52 C160 52 176 42 176 32 C176 24 166 22 160 30 Z" fill="#FF6B8B" />
          <path d="M135 45 C131 40 124 41 124 46 C124 53 135 60 135 60 C135 60 146 53 146 46 C146 41 139 40 135 45 Z" fill="#FFAEC9" />
          <path d="M185 45 C181 40 174 41 174 46 C174 53 185 60 185 60 C185 60 196 53 196 46 C196 41 189 40 185 45 Z" fill="#FFAEC9" />
        </g>

        <!-- Left Panda -->
        <g>
          <circle cx="70" cy="72" r="22" fill="#39324B" />
          <circle cx="120" cy="74" r="20" fill="#39324B" />
          <g transform="translate(68, 62)">
            <circle cx="-5" cy="0" r="5" fill="#FFAEC9" />
            <circle cx="5" cy="0" r="5" fill="#FFAEC9" />
            <circle cx="0" cy="-5" r="5" fill="#FFAEC9" />
            <circle cx="0" cy="5" r="5" fill="#FFAEC9" />
            <circle cx="0" cy="0" r="4" fill="#FFE066" />
          </g>
          <ellipse cx="98" cy="165" rx="48" ry="44" fill="#39324B" />
          <ellipse cx="98" cy="168" rx="36" ry="34" fill="#FFFFFF" />
          <ellipse cx="68" cy="202" rx="18" ry="14" fill="#39324B" />
          <ellipse cx="68" cy="200" rx="10" ry="7" fill="#FFAEC9" opacity="0.8" />
          <ellipse cx="96" cy="108" rx="48" ry="42" fill="#FFFFFF" />
          <ellipse cx="76" cy="106" rx="15" ry="18" transform="rotate(-10 76 106)" fill="#39324B" />
          <ellipse cx="116" cy="108" rx="15" ry="18" transform="rotate(10 116 108)" fill="#39324B" />
          <path d="M70 106 Q76 99 82 106" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
          <path d="M110 108 Q116 101 122 108" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />
          <ellipse cx="64" cy="120" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
          <ellipse cx="128" cy="122" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
          <ellipse cx="96" cy="116" rx="5" ry="3.5" fill="#39324B" />
          <path d="M92 121 Q96 126 100 121" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <ellipse cx="58" cy="158" rx="14" ry="12" transform="rotate(-20 58 158)" fill="#39324B" />
        </g>

        <!-- Right Panda -->
        <g>
          <circle cx="200" cy="74" r="20" fill="#39324B" />
          <circle cx="250" cy="72" r="22" fill="#39324B" />
          <g transform="translate(248, 62) rotate(15)">
            <path d="M-5 0 C-12 -8 -12 8 -5 0 Z" fill="#FF85A2" />
            <path d="M5 0 C12 -8 12 8 5 0 Z" fill="#FF85A2" />
            <circle cx="0" cy="0" r="3.5" fill="#FFE066" />
          </g>
          <ellipse cx="222" cy="165" rx="48" ry="44" fill="#39324B" />
          <ellipse cx="222" cy="168" rx="36" ry="34" fill="#FFFFFF" />
          <ellipse cx="252" cy="202" rx="18" ry="14" fill="#39324B" />
          <ellipse cx="252" cy="200" rx="10" ry="7" fill="#FFAEC9" opacity="0.8" />
          <ellipse cx="224" cy="108" rx="48" ry="42" fill="#FFFFFF" />
          <ellipse cx="204" cy="108" rx="15" ry="18" transform="rotate(-10 204 108)" fill="#39324B" />
          <ellipse cx="244" cy="106" rx="15" ry="18" transform="rotate(10 244 106)" fill="#39324B" />
          <circle cx="204" cy="107" r="8" fill="#201C2B" />
          <circle cx="202" cy="104" r="3.5" fill="#FFFFFF" />
          <circle cx="206" cy="109" r="1.5" fill="#FFFFFF" />
          <circle cx="244" cy="105" r="8" fill="#201C2B" />
          <circle cx="242" cy="102" r="3.5" fill="#FFFFFF" />
          <circle cx="246" cy="107" r="1.5" fill="#FFFFFF" />
          <ellipse cx="192" cy="122" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
          <ellipse cx="256" cy="120" rx="11" ry="8" fill="#FFAEC9" opacity="0.85" />
          <ellipse cx="224" cy="116" rx="5" ry="3.5" fill="#39324B" />
          <path d="M220 121 Q224 126 228 121" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <ellipse cx="262" cy="158" rx="14" ry="12" transform="rotate(20 262 158)" fill="#39324B" />
        </g>

        <!-- Holding Hands -->
        <g>
          <path d="M125 162 Q150 170 160 172" stroke="#39324B" stroke-width="20" stroke-linecap="round" fill="none" />
          <path d="M195 162 Q170 170 160 172" stroke="#39324B" stroke-width="20" stroke-linecap="round" fill="none" />
          <ellipse cx="160" cy="172" rx="13" ry="11" fill="#39324B" />
          <path d="M160 166 C157 162 152 163 152 167 C152 172 160 177 160 177 C160 177 168 172 168 167 C168 163 163 162 160 166 Z" fill="#FFAEC9" />
        </g>
      </svg>
    `,

    // Slide 3: Panda holding envelope
    envelopePanda: `
      <svg class="panda-svg" viewBox="0 0 240 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="letterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <circle cx="120" cy="125" r="95" fill="url(#letterGlow)" />
        <circle cx="70" cy="65" r="25" fill="#39324B" />
        <circle cx="170" cy="65" r="25" fill="#39324B" />
        <circle cx="70" cy="65" r="14" fill="#584E6D" opacity="0.6"/>
        <circle cx="170" cy="65" r="14" fill="#584E6D" opacity="0.6"/>

        <ellipse cx="120" cy="170" rx="64" ry="58" fill="#39324B" />
        <ellipse cx="120" cy="174" rx="46" ry="42" fill="#FFFFFF" />

        <ellipse cx="76" cy="216" rx="20" ry="15" fill="#39324B" />
        <ellipse cx="76" cy="214" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />
        <ellipse cx="164" cy="216" rx="20" ry="15" fill="#39324B" />
        <ellipse cx="164" cy="214" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />

        <ellipse cx="120" cy="100" rx="60" ry="52" fill="#FFFFFF" />
        <ellipse cx="92" cy="98" rx="18" ry="20" transform="rotate(-12 92 98)" fill="#39324B" />
        <ellipse cx="148" cy="98" rx="18" ry="20" transform="rotate(12 148 98)" fill="#39324B" />

        <circle cx="92" cy="97" r="10" fill="#201C2B" />
        <circle cx="89" cy="93" r="4.5" fill="#FFFFFF" />
        <circle cx="95" cy="99" r="2" fill="#FFFFFF" />
        <path d="M140 98 Q148 90 156 98" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" />

        <ellipse cx="72" cy="116" rx="14" ry="9" fill="#FFAEC9" opacity="0.8" />
        <ellipse cx="168" cy="116" rx="14" ry="9" fill="#FFAEC9" opacity="0.8" />

        <ellipse cx="120" cy="112" rx="6" ry="4" fill="#39324B" />
        <path d="M115 117 Q120 122 125 117" stroke="#39324B" stroke-width="2.5" stroke-linecap="round" fill="none" />

        <ellipse cx="68" cy="155" rx="16" ry="14" transform="rotate(25 68 155)" fill="#39324B" />
        <ellipse cx="172" cy="155" rx="16" ry="14" transform="rotate(-25 172 155)" fill="#39324B" />

        <g transform="translate(85, 140)">
          <rect x="0" y="0" width="70" height="48" rx="8" fill="#FFF5F7" stroke="#FFAEC9" stroke-width="2" />
          <path d="M0 0 L35 25 L70 0" fill="#FFE4E8" stroke="#FFAEC9" stroke-width="2" />
          <circle cx="35" cy="25" r="9" fill="#FF477E" />
          <path d="M35 22 C33 19 29 20 29 23 C29 27 35 30 35 30 C35 30 41 27 41 23 C41 20 37 19 35 22 Z" fill="#FFFFFF" />
        </g>
      </svg>
    `,

    // Slide 4: Panda wearing party cone hat
    partyPanda: `
      <svg class="panda-svg" viewBox="0 0 250 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="partyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFE4E8" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <circle cx="125" cy="140" r="105" fill="url(#partyGlow)" />

        <!-- Balloons -->
        <g>
          <path d="M40 85 C40 60 62 40 80 40 C98 40 120 60 120 85 C120 110 80 125 80 125 C80 125 40 110 40 85 Z" fill="#FF85A2" opacity="0.75" />
          <polygon points="77,125 83,125 80,129" fill="#FF85A2" />
          <path d="M80 129 Q75 155 85 180" stroke="#FF85A2" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />

          <path d="M140 70 C140 48 158 30 175 30 C192 30 210 48 210 70 C210 92 175 105 175 105 C175 105 140 92 140 70 Z" fill="#FFAEC9" opacity="0.75" />
          <polygon points="172,105 178,105 175,109" fill="#FFAEC9" />
          <path d="M175 109 Q180 135 168 160" stroke="#FFAEC9" stroke-width="1.5" stroke-dasharray="3,3" fill="none" />
        </g>

        <!-- Ears -->
        <circle cx="75" cy="88" r="24" fill="#39324B" />
        <circle cx="175" cy="88" r="24" fill="#39324B" />

        <!-- Body -->
        <ellipse cx="125" cy="188" rx="64" ry="58" fill="#39324B" />
        <ellipse cx="125" cy="192" rx="46" ry="42" fill="#FFFFFF" />

        <ellipse cx="80" cy="235" rx="20" ry="15" fill="#39324B" />
        <ellipse cx="80" cy="233" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />
        <ellipse cx="170" cy="235" rx="20" ry="15" fill="#39324B" />
        <ellipse cx="170" cy="233" rx="11" ry="8" fill="#FFAEC9" opacity="0.8" />

        <ellipse cx="125" cy="122" rx="60" ry="52" fill="#FFFFFF" />

        <!-- Party Cone Hat -->
        <g transform="translate(125, 68)">
          <path d="M-22 10 L0 -48 L22 10 Z" fill="#FF85A2" />
          <circle cx="-5" cy="-20" r="3.5" fill="#FFE066" />
          <circle cx="8" cy="-12" r="3" fill="#FFFFFF" />
          <circle cx="-10" cy="-2" r="4" fill="#FFF0F5" />
          <circle cx="7" cy="2" r="3.5" fill="#FFE066" />
          <circle cx="0" cy="-48" r="7" fill="#FFE066" />
          <circle cx="-2" cy="-50" r="2" fill="#FFFFFF" />
          <rect x="-24" y="6" width="48" height="6" rx="3" fill="#FFF0F5" />
        </g>
        
        <ellipse cx="98" cy="122" rx="17" ry="19" transform="rotate(-10 98 122)" fill="#39324B" />
        <ellipse cx="152" cy="122" rx="17" ry="19" transform="rotate(10 152 122)" fill="#39324B" />

        <circle cx="99" cy="121" r="10" fill="#201C2B" />
        <circle cx="96" cy="117" r="4.5" fill="#FFFFFF" />
        <circle cx="102" cy="123" r="2.5" fill="#FFFFFF" />

        <circle cx="151" cy="121" r="10" fill="#201C2B" />
        <circle cx="148" cy="117" r="4.5" fill="#FFFFFF" />
        <circle cx="154" cy="123" r="2.5" fill="#FFFFFF" />

        <ellipse cx="78" cy="138" rx="14" ry="9" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="172" cy="138" rx="14" ry="9" fill="#FFAEC9" opacity="0.85" />

        <ellipse cx="125" cy="132" rx="6" ry="4" fill="#39324B" />
        <path d="M117 137 Q125 148 133 137 Z" fill="#FF6B8B" stroke="#39324B" stroke-width="2" />
        <ellipse cx="125" cy="142" rx="4" ry="2.5" fill="#FFAEC9" />

        <ellipse cx="64" cy="172" rx="16" ry="14" transform="rotate(40 64 172)" fill="#39324B" />
        <ellipse cx="186" cy="172" rx="16" ry="14" transform="rotate(-40 186 172)" fill="#39324B" />
        
        <line x1="192" y1="172" x2="215" y2="140" stroke="#FFE066" stroke-width="3" stroke-linecap="round" />
        <path d="M215 132 L218 138 L224 140 L218 142 L215 148 L212 142 L206 140 L212 138 Z" fill="#FFE066" />
      </svg>
    `,

    // Slide 5: Panda holding giant heart "Besties Forever"
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

        <circle cx="140" cy="140" r="120" fill="url(#foreverGlow)" />

        <circle cx="85" cy="65" r="27" fill="#39324B" />
        <circle cx="195" cy="65" r="27" fill="#39324B" />
        <circle cx="85" cy="65" r="15" fill="#584E6D" opacity="0.6"/>
        <circle cx="195" cy="65" r="15" fill="#584E6D" opacity="0.6"/>

        <ellipse cx="140" cy="180" rx="76" ry="68" fill="#39324B" />
        <ellipse cx="140" cy="185" rx="55" ry="50" fill="#FFFFFF" />

        <ellipse cx="88" cy="245" rx="24" ry="18" fill="#39324B" />
        <ellipse cx="88" cy="242" rx="14" ry="10" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="192" cy="245" rx="24" ry="18" fill="#39324B" />
        <ellipse cx="192" cy="242" rx="14" ry="10" fill="#FFAEC9" opacity="0.85" />

        <ellipse cx="140" cy="100" rx="68" ry="58" fill="#FFFFFF" />
        
        <ellipse cx="106" cy="98" rx="20" ry="23" transform="rotate(-12 106 98)" fill="#39324B" />
        <ellipse cx="174" cy="98" rx="20" ry="23" transform="rotate(12 174 98)" fill="#39324B" />

        <circle cx="108" cy="97" r="12" fill="#201C2B" />
        <circle cx="104" cy="92" r="5.5" fill="#FFFFFF" />
        <circle cx="112" cy="99" r="2.8" fill="#FFFFFF" />

        <circle cx="172" cy="97" r="12" fill="#201C2B" />
        <circle cx="168" cy="92" r="5.5" fill="#FFFFFF" />
        <circle cx="176" cy="99" r="2.8" fill="#FFFFFF" />

        <ellipse cx="84" cy="118" rx="16" ry="10" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="196" cy="118" rx="16" ry="10" fill="#FFAEC9" opacity="0.85" />

        <ellipse cx="140" cy="112" rx="7" ry="5" fill="#39324B" />
        <path d="M134 117 Q140 123 146 117" stroke="#39324B" stroke-width="3" stroke-linecap="round" fill="none" />

        <!-- Flower Crown -->
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

        <!-- Giant Heart -->
        <g transform="translate(140, 185)">
          <path d="M0 -35 C-35 -75 -85 -35 -85 10 C-85 55 0 95 0 95 C0 95 85 55 85 10 C85 -35 35 -75 0 -35 Z" 
                fill="url(#heartGradient)" 
                filter="drop-shadow(0px 8px 16px rgba(255, 71, 126, 0.4))" />
          
          <path d="M-45 -20 C-65 -5 -60 25 -50 35" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.5" fill="none" />

          <text x="0" y="16" 
                text-anchor="middle" 
                fill="#FFFFFF" 
                font-family="'Dancing Script', cursive" 
                font-size="25" 
                font-weight="700" 
                letter-spacing="0.5">Besties Forever</text>
          
          <circle cx="-25" cy="-2" r="2.5" fill="#FFE066" />
          <circle cx="25" cy="-2" r="2.5" fill="#FFE066" />
          <circle cx="0" cy="42" r="3" fill="#FFFFFF" />
        </g>

        <ellipse cx="60" cy="182" rx="22" ry="17" transform="rotate(35 60 182)" fill="#39324B" />
        <ellipse cx="220" cy="182" rx="22" ry="17" transform="rotate(-35 220 182)" fill="#39324B" />
      </svg>
    `,

    // Hug Panda
    hugPanda: `
      <svg class="panda-svg hug-panda-svg" viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hugGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFD1DC" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="#FFE4E8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <circle cx="140" cy="130" r="115" fill="url(#hugGlow)" />

        <circle cx="80" cy="55" r="28" fill="#39324B" />
        <circle cx="200" cy="55" r="28" fill="#39324B" />

        <ellipse cx="140" cy="170" rx="74" ry="66" fill="#39324B" />
        <ellipse cx="140" cy="174" rx="54" ry="48" fill="#FFFFFF" />

        <ellipse cx="90" cy="235" rx="22" ry="16" fill="#39324B" />
        <ellipse cx="90" cy="233" rx="12" ry="9" fill="#FFAEC9" opacity="0.85" />
        <ellipse cx="190" cy="235" rx="22" ry="16" fill="#39324B" />
        <ellipse cx="190" cy="233" rx="12" ry="9" fill="#FFAEC9" opacity="0.85" />

        <g>
          <path d="M100 150 Q40 135 25 155 Q20 175 60 175 Q95 175 105 168 Z" fill="#39324B" />
          <ellipse cx="32" cy="162" rx="14" ry="11" fill="#FFAEC9" opacity="0.8" />
        </g>
        <g>
          <path d="M180 150 Q240 135 255 155 Q260 175 220 175 Q185 175 175 168 Z" fill="#39324B" />
          <ellipse cx="248" cy="162" rx="14" ry="11" fill="#FFAEC9" opacity="0.8" />
        </g>

        <ellipse cx="140" cy="95" rx="68" ry="58" fill="#FFFFFF" />

        <g transform="translate(75, 40) rotate(-15)">
          <path d="M-6 0 C-14 -10 -14 10 -6 0 Z" fill="#FF85A2" />
          <path d="M6 0 C14 -10 14 10 6 0 Z" fill="#FF85A2" />
          <circle cx="0" cy="0" r="4" fill="#FFAEC9" />
        </g>
        
        <ellipse cx="106" cy="94" rx="20" ry="23" transform="rotate(-10 106 94)" fill="#39324B" />
        <ellipse cx="174" cy="94" rx="20" ry="23" transform="rotate(10 174 94)" fill="#39324B" />

        <path d="M96 95 Q106 82 116 95" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M164 95 Q174 82 184 95" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" />

        <ellipse cx="82" cy="112" rx="18" ry="11" fill="#FF9BB2" opacity="0.85" />
        <ellipse cx="198" cy="112" rx="18" ry="11" fill="#FF9BB2" opacity="0.85" />

        <ellipse cx="140" cy="107" rx="7" ry="5" fill="#39324B" />
        <path d="M130 114 Q140 125 150 114" stroke="#39324B" stroke-width="3" stroke-linecap="round" fill="none" />

        <g transform="translate(140, 165)">
          <path d="M0 -15 C-12 -28 -28 -12 -28 4 C-28 20 0 35 0 35 C0 35 28 20 28 4 C28 -12 12 -28 0 -15 Z" 
                fill="#FF477E" />
        </g>
      </svg>
    `
  };

  // ================= 2. AUDIO SYNTHESIZER =================
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.isPlayingMusic = false;
      this.musicTimeout = null;
      this.isMuted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playPop() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    }

    playChime(noteFreq = 523.25) {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(noteFreq, now);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    }

    playSparkle() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const notes = [784, 987.77, 1174.66, 1567.98, 1975.53];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteStart = now + idx * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.12, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + 0.45);
      });
    }

    playHugChime() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const freqs = [261.63, 329.63, 392.00, 493.88, 587.33];
      const now = this.ctx.currentTime;

      freqs.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + i * 0.05;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 1.2);
      });
    }

    toggleBackgroundMusic() {
      this.init();
      if (this.isPlayingMusic) {
        this.stopBackgroundMusic();
        return false;
      } else {
        this.startBackgroundMusic();
        return true;
      }
    }

    startBackgroundMusic() {
      this.isPlayingMusic = true;
      const notes = [
        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 440, d: 0.6, pause: 0.7 },   // A4
        { f: 392, d: 0.6, pause: 0.7 },   // G4
        { f: 523.25, d: 0.6, pause: 0.7 },// C5
        { f: 493.88, d: 0.9, pause: 1.1 },// B4

        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 440, d: 0.6, pause: 0.7 },   // A4
        { f: 392, d: 0.6, pause: 0.7 },   // G4
        { f: 587.33, d: 0.6, pause: 0.7 },// D5
        { f: 523.25, d: 0.9, pause: 1.1 },// C5

        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 392, d: 0.35, pause: 0.4 },  // G4
        { f: 784, d: 0.6, pause: 0.7 },   // G5
        { f: 659.25, d: 0.6, pause: 0.7 },// E5
        { f: 523.25, d: 0.6, pause: 0.7 },// C5
        { f: 493.88, d: 0.6, pause: 0.7 },// B4
        { f: 440, d: 0.8, pause: 1.0 },   // A4

        { f: 698.46, d: 0.35, pause: 0.4 },// F5
        { f: 698.46, d: 0.35, pause: 0.4 },// F5
        { f: 659.25, d: 0.6, pause: 0.7 }, // E5
        { f: 523.25, d: 0.6, pause: 0.7 }, // C5
        { f: 587.33, d: 0.6, pause: 0.7 }, // D5
        { f: 523.25, d: 1.2, pause: 1.5 }  // C5
      ];

      let currentIdx = 0;
      const playNextNote = () => {
        if (!this.isPlayingMusic || !this.ctx) return;
        const item = notes[currentIdx];
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.f, now);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + item.d + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + item.d + 0.35);

        currentIdx = (currentIdx + 1) % notes.length;
        const nextDelay = currentIdx === 0 ? 2500 : item.pause * 1000;
        this.musicTimeout = setTimeout(playNextNote, nextDelay);
      };

      playNextNote();
    }

    stopBackgroundMusic() {
      this.isPlayingMusic = false;
      if (this.musicTimeout) {
        clearTimeout(this.musicTimeout);
        this.musicTimeout = null;
      }
    }
  }

  // ================= 3. CONFETTI & PARTICLES ENGINE =================
  class ConfettiEngine {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.ambientParticles = [];
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.colors = [
        '#FF85A2', '#FFAEC9', '#FF6584', '#FFF0F5', '#FFE066', '#FFFFFF', '#F472B6'
      ];
    }

    init(canvasElement) {
      this.canvas = canvasElement;
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.initAmbient();
      this.startLoop();
    }

    resize() {
      if (!this.canvas) return;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    initAmbient() {
      this.ambientParticles = [];
      const count = Math.min(25, Math.floor(this.width / 40));
      for (let i = 0; i < count; i++) {
        this.ambientParticles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * 8 + 6,
          speedY: Math.random() * 0.4 + 0.2,
          swaySpeed: Math.random() * 0.02 + 0.01,
          swayAmp: Math.random() * 1.5 + 0.5,
          angle: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.4 + 0.2,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          type: Math.random() > 0.4 ? 'heart' : 'sparkle'
        });
      }
    }

    drawHeart(ctx, x, y, size, color, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.2);
      ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    drawSparkle(ctx, x, y, size, color, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
        ctx.lineTo(
          Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3),
          Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3)
        );
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    fireCelebration(originX = this.width / 2, originY = this.height / 2, count = 85) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4;
        const typeRand = Math.random();
        let type = 'ribbon';
        if (typeRand > 0.6) type = 'heart';
        else if (typeRand > 0.4) type = 'sparkle';

        this.particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          size: Math.random() * 10 + 6,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          decay: Math.random() * 0.015 + 0.008,
          gravity: 0.22,
          type: type
        });
      }
    }

    fireTapSparkle(x, y) {
      const count = 7;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        this.particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: Math.random() * 7 + 5,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          opacity: 1,
          decay: 0.025,
          gravity: 0.12,
          type: Math.random() > 0.3 ? 'heart' : 'sparkle'
        });
      }
    }

    startLoop() {
      const loop = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Ambient drifting
        for (let p of this.ambientParticles) {
          p.y -= p.speedY;
          p.angle += p.swaySpeed;
          p.x += Math.sin(p.angle) * p.swayAmp;

          if (p.y < -20) {
            p.y = this.height + 20;
            p.x = Math.random() * this.width;
          }

          if (p.type === 'heart') {
            this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
          } else {
            this.drawSparkle(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
          }
        }

        // Active particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.vx *= 0.98;
          p.rotation += p.rotationSpeed;
          p.opacity -= p.decay;

          if (p.opacity <= 0 || p.y > this.height + 50) {
            this.particles.splice(i, 1);
            continue;
          }

          if (p.type === 'heart') {
            this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
          } else if (p.type === 'sparkle') {
            this.drawSparkle(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
          } else {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            this.ctx.restore();
          }
        }

        requestAnimationFrame(loop);
      };

      loop();
    }
  }

  // ================= 4. APPLICATION CONTROLLER =================
  const sounds = new SoundManager();
  const confetti = new ConfettiEngine();

  class BirthdayApp {
    constructor() {
      this.currentSlide = 1;
      this.totalSlides = 5;

      this.slides = document.querySelectorAll('.slide');
      this.dots = document.querySelectorAll('.dot-indicator');
      this.prevBtn = document.getElementById('prevBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.progressFill = document.getElementById('progressFill');
      this.progressText = document.getElementById('progressText');
      this.slideCounterBadge = document.getElementById('slideCounterBadge');

      this.wishModal = document.getElementById('wishModal');
      this.hugModal = document.getElementById('hugModal');

      this.musicToggleBtn = document.getElementById('musicToggleBtn');
      this.musicWaves = document.getElementById('musicWaves');
      this.musicText = document.getElementById('musicText');

      this.touchStartX = 0;
      this.touchEndX = 0;
    }

    init() {
      const canvas = document.getElementById('confettiCanvas');
      if (canvas) confetti.init(canvas);

      this.injectPandas();
      this.attachNavListeners();
      this.attachActionListeners();
      this.attachMusicToggle();
      this.attachTapFx();
      this.updateUI();
    }

    injectPandas() {
      const p1 = document.getElementById('pandaContainer1');
      if (p1) p1.innerHTML = Pandas.cakePanda;

      const p2 = document.getElementById('pandaContainer2');
      if (p2) p2.innerHTML = Pandas.bestiesPandas;

      const p3 = document.getElementById('pandaContainer3');
      if (p3) p3.innerHTML = Pandas.envelopePanda;

      const p4 = document.getElementById('pandaContainer4');
      if (p4) p4.innerHTML = Pandas.partyPanda;

      const p5 = document.getElementById('pandaContainer5');
      if (p5) p5.innerHTML = Pandas.bestiesForeverPanda;

      const pHug = document.getElementById('modalHugPandaContainer');
      if (pHug) pHug.innerHTML = Pandas.hugPanda;
    }

    goToSlide(slideIndex) {
      if (slideIndex < 1 || slideIndex > this.totalSlides) return;
      if (slideIndex === this.currentSlide) return;

      sounds.playChime(440 + slideIndex * 60);

      this.slides.forEach(slide => slide.classList.remove('active'));

      const targetSlide = document.getElementById(`slide-${slideIndex}`);
      if (targetSlide) targetSlide.classList.add('active');

      this.currentSlide = slideIndex;
      this.updateUI();

      confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.35, 25);
    }

    updateUI() {
      const pct = (this.currentSlide / this.totalSlides) * 100;
      if (this.progressFill) this.progressFill.style.width = `${pct}%`;
      if (this.progressText) this.progressText.textContent = `${this.currentSlide} of ${this.totalSlides}`;
      if (this.slideCounterBadge) this.slideCounterBadge.textContent = `Slide ${this.currentSlide} of ${this.totalSlides}`;

      this.dots.forEach((dot, idx) => {
        if (idx + 1 === this.currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      if (this.prevBtn) this.prevBtn.disabled = this.currentSlide === 1;
      if (this.nextBtn) this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }

    attachNavListeners() {
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.goToSlide(this.currentSlide - 1));
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.goToSlide(this.currentSlide + 1));
      }

      this.dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const target = parseInt(e.target.getAttribute('data-slide'), 10);
          if (target) this.goToSlide(target);
        });
      });

      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          this.goToSlide(this.currentSlide + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          this.goToSlide(this.currentSlide - 1);
        }
      });

      window.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      window.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > 60) {
          if (diff > 0) this.goToSlide(this.currentSlide + 1);
          else this.goToSlide(this.currentSlide - 1);
        }
      }, { passive: true });
    }

    attachActionListeners() {
      const openSurpriseBtn = document.getElementById('openSurpriseBtn');
      if (openSurpriseBtn) {
        openSurpriseBtn.addEventListener('click', () => {
          const rect = openSurpriseBtn.getBoundingClientRect();
          sounds.playSparkle();
          confetti.fireCelebration(rect.left + rect.width / 2, rect.top, 80);
          setTimeout(() => this.goToSlide(2), 350);
        });
      }

      const letterNextBtn = document.getElementById('letterNextBtn');
      if (letterNextBtn) {
        letterNextBtn.addEventListener('click', () => {
          sounds.playSparkle();
          this.goToSlide(4);
        });
      }

      const makeWishBtn = document.getElementById('makeWishBtn');
      if (makeWishBtn) {
        makeWishBtn.addEventListener('click', () => {
          const rect = makeWishBtn.getBoundingClientRect();
          sounds.playSparkle();
          confetti.fireCelebration(rect.left + rect.width / 2, rect.top, 100);
          this.openModal(this.wishModal);
        });
      }

      const closeWishModalBtn = document.getElementById('closeWishModalBtn');
      const continueWishModalBtn = document.getElementById('continueWishModalBtn');
      if (closeWishModalBtn) closeWishModalBtn.addEventListener('click', () => this.closeModal(this.wishModal));
      if (continueWishModalBtn) {
        continueWishModalBtn.addEventListener('click', () => {
          this.closeModal(this.wishModal);
          this.goToSlide(5);
        });
      }

      const sendHugBtn = document.getElementById('sendHugBtn');
      if (sendHugBtn) {
        sendHugBtn.addEventListener('click', () => {
          sounds.playHugChime();
          confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.4, 120);
          this.openModal(this.hugModal);
        });
      }

      const closeHugModalBtn = document.getElementById('closeHugModalBtn');
      const finishHugBtn = document.getElementById('finishHugBtn');
      const replaySurpriseBtn = document.getElementById('replaySurpriseBtn');

      if (closeHugModalBtn) closeHugModalBtn.addEventListener('click', () => this.closeModal(this.hugModal));
      if (finishHugBtn) {
        finishHugBtn.addEventListener('click', () => {
          sounds.playHugChime();
          confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.5, 80);
        });
      }
      if (replaySurpriseBtn) {
        replaySurpriseBtn.addEventListener('click', () => {
          this.closeModal(this.hugModal);
          sounds.playSparkle();
          this.goToSlide(1);
          confetti.fireCelebration(window.innerWidth / 2, window.innerHeight * 0.4, 80);
        });
      }

      [this.wishModal, this.hugModal].forEach(modal => {
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal(modal);
          });
        }
      });
    }

    openModal(modal) {
      if (modal) modal.classList.add('is-active');
    }

    closeModal(modal) {
      if (modal) modal.classList.remove('is-active');
    }

    attachMusicToggle() {
      if (this.musicToggleBtn) {
        this.musicToggleBtn.addEventListener('click', () => {
          const isPlaying = sounds.toggleBackgroundMusic();
          if (isPlaying) {
            this.musicToggleBtn.classList.add('is-active');
            if (this.musicWaves) this.musicWaves.style.display = 'inline-flex';
            if (this.musicText) this.musicText.textContent = 'Playing ♡';
          } else {
            this.musicToggleBtn.classList.remove('is-active');
            if (this.musicWaves) this.musicWaves.style.display = 'none';
            if (this.musicText) this.musicText.textContent = 'Music Box';
          }
        });
      }
    }

    attachTapFx() {
      window.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('button') || target.closest('.flip-card')) {
          sounds.playPop();
          return;
        }
        sounds.playPop();
        confetti.fireTapSparkle(e.clientX, e.clientY);
      });
    }
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new BirthdayApp();
      app.init();
    });
  } else {
    const app = new BirthdayApp();
    app.init();
  }
})();
