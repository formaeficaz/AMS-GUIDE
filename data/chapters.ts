export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'prayer'; title?: string; lines: string[] }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'note'; text: string }
  | { type: 'divider' };

export type Chapter = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  part: string;
  partNumber: number;
  content: ContentBlock[];
};

export const PARTS = [
  { number: 1, title: 'Foundations of Sacred Prayer' },
  { number: 2, title: 'The Anchor' },
  { number: 3, title: 'The Movement' },
  { number: 4, title: 'The Surrender' },
  { number: 5, title: 'Building Your Daily Practice' },
  { number: 6, title: 'Advanced Devotional Practices' },
  { number: 7, title: 'The Prayer Collection' },
  { number: 8, title: 'Tools and Appendices' },
];

export const chapters: Chapter[] = [
  // ─── INTRO ───────────────────────────────────────────────────────────────
  {
    id: 'intro',
    number: 0,
    title: 'A Word Before You Begin',
    subtitle: 'The purpose and promise of this guide',
    part: 'Introduction',
    partNumber: 0,
    content: [
      {
        type: 'paragraph',
        text: 'There is an old monastic saying: Ora et Labora — pray and work. The monks who coined it understood something that our productivity-obsessed age has largely forgotten: prayer is not an escape from life\'s work. It is life\'s deepest work.',
      },
      {
        type: 'paragraph',
        text: 'The AMS Guide was born from a simple observation: millions of people want to pray. They feel the pull of something transcendent — a longing for connection, for peace, for a sense that their days matter beyond their calendar. But when they sit down to actually do it, they don\'t know where to begin. Or they begin, and drift. Or they keep meaning to, and somehow never quite do.',
      },
      {
        type: 'paragraph',
        text: 'This guide is the answer to that gap. It does not require theological training. It does not demand hours of time. It does not ask you to abandon any tradition you already hold. It offers something simpler and, in some ways, more demanding: a structure. A framework. A reliable daily path into what the Christian tradition has always called the presence of God.',
      },
      {
        type: 'paragraph',
        text: 'The AMS framework — Anchor, Movement, Surrender — is drawn from the oldest practices in Christian devotion, translated into a format that works for real life. Working people. Busy families. Restless minds. People who carry their phones to bed and their worries to breakfast. People exactly like you.',
      },
      {
        type: 'quote',
        text: 'Prayer does not change God, but it changes him who prays.',
        attribution: 'Søren Kierkegaard',
      },
      {
        type: 'paragraph',
        text: 'What follows is not a collection of pleasant religious thoughts. It is a working system — field-tested, rooted in tradition, and designed for transformation. Use it daily, honestly, with patience and without self-condemnation when you miss a day.',
      },
      {
        type: 'paragraph',
        text: 'Begin today. Begin again tomorrow. The door is always open.',
      },
      { type: 'divider' },
      {
        type: 'heading',
        text: 'How to Use This Guide',
      },
      {
        type: 'paragraph',
        text: 'This guide is organized in eight parts, moving from foundation to practice to advanced devotion to reference tools. Read it sequentially on first encounter, then return to it as a living companion for ongoing practice.',
      },
      {
        type: 'paragraph',
        text: 'For beginners: Read Parts I through V before attempting VI or VII. The foundational chapters contain essential theology and technique that the later chapters build upon.',
      },
      {
        type: 'paragraph',
        text: 'For experienced practitioners: The AMS framework may confirm what you already practice or introduce elements you haven\'t tried. Move at your own pace, but don\'t skip the foundation entirely.',
      },
      {
        type: 'paragraph',
        text: 'For daily use: Parts VII and VIII are your ongoing companions — the prayer collection and tools designed to be returned to daily, weekly, and seasonally across the life of your practice.',
      },
      {
        type: 'note',
        text: 'Keep a journal beside this guide. The practice of written prayer — journaling your petitions, confessions, gratitudes — deepens every element of the AMS framework.',
      },
      {
        type: 'heading',
        text: 'A Note on Tradition',
      },
      {
        type: 'paragraph',
        text: 'The AMS Guide draws from the broad river of Christian devotional tradition without belonging exclusively to any one denomination or stream. Catholics, Anglicans, Evangelicals, and those with no formal church affiliation have all found this framework helpful. Scripture quotations follow the traditional language of classical English translation. The aim throughout is accessibility without shallowness.',
      },
    ],
  },

  // ─── CHAPTER 1 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-1',
    number: 1,
    title: 'The Ancient Tradition of Christian Prayer',
    subtitle: 'Two thousand years of devotional wisdom — and why it still matters',
    part: 'Foundations of Sacred Prayer',
    partNumber: 1,
    content: [
      {
        type: 'paragraph',
        text: 'Christianity is, at its core, a praying religion. From the earliest communities in Roman catacombs to the great cathedrals of medieval Europe, from the desert monasteries of Egypt to house churches across the modern world — every expression of the faith has been shaped by the practice of prayer.',
      },
      {
        type: 'paragraph',
        text: 'The word prayer comes from the Latin precari — to entreat, to address with reverence. But the Christian tradition quickly moved beyond petition alone. By the second century, theologians like Origen of Alexandria were already distinguishing multiple dimensions: thanksgiving, confession, intercession, and the wordless contemplation he called theoria — the direct vision of God.',
      },
      {
        type: 'heading',
        text: 'The Desert Fathers and the Birth of Structured Prayer',
      },
      {
        type: 'paragraph',
        text: 'In the third and fourth centuries, men and women began leaving the cities of the Roman Empire for the deserts of Egypt, Palestine, and Syria — not to escape life, but to engage it more deeply. They became the Desert Fathers and Mothers, and their insights into prayer remain among the most psychologically sophisticated spiritual teachings ever produced.',
      },
      {
        type: 'paragraph',
        text: 'What distinguished their approach was not pious intensity alone but structure. They developed the Canonical Hours — Lauds at dawn, Terce at mid-morning, Sext at noon, None at mid-afternoon, Vespers at evening, Compline at night\'s close. This structure was not a cage but a scaffold — a reliable architecture on which the life of prayer could grow.',
      },
      {
        type: 'quote',
        text: 'The cell of the monk is the furnace of Babylon, in which the three young men found the Son of God; it is also the pillar of cloud from which God spoke to Moses.',
        attribution: 'Abba Moses, Desert Father',
      },
      {
        type: 'heading',
        text: 'The Monastic Revolution and Saint Benedict',
      },
      {
        type: 'paragraph',
        text: 'Saint Benedict of Nursia, writing his Rule around 516 AD, codified the Desert Fathers\' insights into what would become the most influential spiritual document in Western history after Scripture itself. The Benedictine Rule organized monastic life around ora et labora — pray and work — with prayer understood not as interruption but as the rhythm of human life restored to its proper shape.',
      },
      {
        type: 'paragraph',
        text: 'What Benedict understood — and what the AMS Guide builds upon — is that the spiritual life does not flourish through occasional heroic efforts. It grows through daily fidelity. Small, consistent, structured encounters with the divine accumulate, over time, into a life genuinely transformed.',
      },
      {
        type: 'heading',
        text: 'From Monastery to Living Room',
      },
      {
        type: 'paragraph',
        text: 'Thomas Cranmer\'s Book of Common Prayer (1549) was perhaps the most ambitious attempt in history to accomplish this translation — taking the complex monastic hours and simplifying them into Morning and Evening Prayer that any literate Christian could follow. It worked. The tradition of daily, structured, liturgical prayer entered ordinary households and has never entirely left.',
      },
      {
        type: 'note',
        text: 'Before your first AMS session, spend five minutes reading your own tradition\'s history of prayer. Knowing where you come from deepens where you are going.',
      },
    ],
  },

  // ─── CHAPTER 2 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-2',
    number: 2,
    title: 'Why Structure Transforms Devotion',
    subtitle: 'The neuroscience and theology of consistent spiritual practice',
    part: 'Foundations of Sacred Prayer',
    partNumber: 1,
    content: [
      {
        type: 'paragraph',
        text: 'The most common objection to structured prayer is understandable: Won\'t it become mechanical? Won\'t repetition drain the life out of it? This concern reflects a very modern assumption — that authenticity and structure are opposites. The Christian tradition, and increasingly modern neuroscience, suggests the opposite is true.',
      },
      {
        type: 'paragraph',
        text: 'Consider the pianist who practices scales every morning. The scales themselves are not the music — they are preparation for music. They build the neural pathways, the automatic competence that allows the pianist, in the moment of performance, to forget the technique and simply play. Structured prayer works the same way.',
      },
      {
        type: 'heading',
        text: 'The Neuroscience of Habit and Holiness',
      },
      {
        type: 'paragraph',
        text: 'Modern neuroscience confirms what the monastic tradition intuited: the brain operates through deeply grooved neural pathways called habits. Every time you perform a behavior — including a spiritual practice — in the same way and at the same time, those pathways deepen. The behavior becomes less effortful, more natural, more available even under stress.',
      },
      {
        type: 'paragraph',
        text: 'Research consistently shows that consistent morning practices — performed before other stimuli compete for attention — are dramatically more likely to become entrenched habits. This is not a coincidence: it is precisely why the monastic tradition placed its primary prayer at dawn.',
      },
      {
        type: 'quote',
        text: 'In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly.',
        attribution: 'Psalm 5:3',
      },
      {
        type: 'heading',
        text: 'The Theology of Daily Return',
      },
      {
        type: 'paragraph',
        text: 'In his Confessions, Augustine of Hippo observes that the human heart is restless — inquietum est cor nostrum — until it rests in God. But what does rest look like for a restless heart? It looks like return. Daily, deliberate, faithful return.',
      },
      {
        type: 'quote',
        text: 'Thou hast made us for Thyself, O Lord, and our heart is restless until it finds its rest in Thee.',
        attribution: 'Augustine of Hippo, Confessions',
      },
      {
        type: 'heading',
        text: 'Three Things Structure Does That Spontaneity Cannot',
      },
      {
        type: 'list',
        items: [
          'Structure lowers the activation energy for practice. The hardest part of any practice is starting. A consistent routine reduces the decisions required to begin. When beginning requires no decisions, the practice happens.',
          'Structure carries you through dry seasons. Every long-term practitioner knows seasons of spiritual dryness when prayer feels hollow. Structure sustains practice through these seasons — you do not have to feel your way in; the structure carries you.',
          'Structure reveals progress. Without structure, spiritual growth is nearly invisible. With structure, you observe your own practice over time. Discipline, properly understood, is the root of the word \'disciple.\'',
        ],
      },
      {
        type: 'note',
        text: 'A 21-day study in habit formation found that performing the same behavior in the same context, at the same time, for 21 consecutive days created an automatic behavioral pattern in 89% of participants. Prayer habits work the same way.',
      },
    ],
  },

  // ─── CHAPTER 3 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-3',
    number: 3,
    title: 'The AMS Framework — An Overview',
    subtitle: 'Anchor, Movement, Surrender — the complete architecture of daily prayer',
    part: 'Foundations of Sacred Prayer',
    partNumber: 1,
    content: [
      {
        type: 'paragraph',
        text: 'The AMS framework distills the accumulated wisdom of the Christian prayer tradition into three essential movements that mirror the shape of prayer as it has been practiced across two millennia. It is not a new invention but a new arrangement of ancient furniture — organized for the conditions of contemporary life.',
      },
      {
        type: 'table',
        headers: ['Element', 'What It Does'],
        rows: [
          ['ANCHOR (A)', 'The deliberate entry into sacred space — setting aside the ordinary and opening the inner life to the extraordinary.'],
          ['MOVEMENT (M)', 'The structured journey through five zones: Gratitude, Confession, Petition, Intercession, and Listening.'],
          ['SURRENDER (S)', 'The intentional releasing of outcomes, anxieties, and control into the care of God — trust made concrete and daily.'],
        ],
      },
      {
        type: 'heading',
        text: 'The Five Zones of Movement',
      },
      {
        type: 'subheading',
        text: 'Zone 1 — Gratitude',
      },
      {
        type: 'paragraph',
        text: 'Prayer begins with thanksgiving — orienting the heart from scarcity to gift.',
      },
      {
        type: 'subheading',
        text: 'Zone 2 — Confession',
      },
      {
        type: 'paragraph',
        text: 'Honest acknowledgment of failure, shortcoming, and need. Not self-flagellation but genuine transparency before a God who already knows and accepts.',
      },
      {
        type: 'subheading',
        text: 'Zone 3 — Petition',
      },
      {
        type: 'paragraph',
        text: 'Specific, personal requests. Bring your actual needs — do not sanitize your prayers.',
      },
      {
        type: 'subheading',
        text: 'Zone 4 — Intercession',
      },
      {
        type: 'paragraph',
        text: 'Expanding the circle to include others: family, community, the wider world. The practice of praying for others transforms both the one who prays and those prayed for.',
      },
      {
        type: 'subheading',
        text: 'Zone 5 — Listening',
      },
      {
        type: 'paragraph',
        text: 'The most neglected zone. Silence, attentiveness, receptivity. Where God\'s response becomes available to those willing to wait.',
      },
      {
        type: 'table',
        headers: ['Element', 'Fast AMS (5 min)', 'Full Practice'],
        rows: [
          ['Anchor', '30 seconds', '3–5 minutes'],
          ['Zone 1: Gratitude', '60 seconds', '5–10 minutes'],
          ['Zone 2: Confession', '30 seconds', '3–5 minutes'],
          ['Zone 3: Petition', '60 seconds', '5–10 minutes'],
          ['Zone 4: Intercession', '—', '5–10 minutes'],
          ['Zone 5: Listening', '60 seconds', '5–15 minutes'],
          ['Surrender Close', '30 seconds', '2–3 minutes'],
          ['TOTAL', '~5 minutes', '28–58 minutes'],
        ],
      },
    ],
  },

  // ─── CHAPTER 4 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-4',
    number: 4,
    title: 'Preparing Your Heart and Your Space',
    subtitle: 'The external and internal conditions that allow prayer to flourish',
    part: 'Foundations of Sacred Prayer',
    partNumber: 1,
    content: [
      {
        type: 'paragraph',
        text: 'Every craft requires proper tools and a prepared workspace. Prayer is no different. The Christian tradition has always recognized that while God is omnipresent, human beings are embodied — and the body\'s environment powerfully shapes the inner life. What surrounds you while you pray matters.',
      },
      {
        type: 'heading',
        text: 'Creating Your Prayer Space',
      },
      {
        type: 'paragraph',
        text: 'You do not need a chapel or even a separate room. You need a consistent, designated location — even a single chair in a corner — that your mind learns to associate with the act of prayer. Consistency of location is one of the most powerful cues in habit formation. Over time, simply sitting in that chair will begin to shift your inner state toward receptivity.',
      },
      {
        type: 'paragraph',
        text: 'Consider including in your prayer space:',
      },
      {
        type: 'list',
        items: [
          'A physical copy of this guide or a prayer book — tactile engagement differs from reading a screen.',
          'A candle, if possible. Lighting it is itself an ancient anchoring ritual that marks sacred time.',
          'A journal for writing prayers, recording what arises in the listening zone, tracking your petitions.',
          'A cross, icon, or natural object to help orient attention. The tradition has always used visible objects to support invisible acts.',
          'Silence, or near-silence. Remove your phone from the space, or place it in Do Not Disturb mode.',
        ],
      },
      {
        type: 'heading',
        text: 'The Five Internal Conditions for Effective Prayer',
      },
      {
        type: 'list',
        items: [
          'Intention: Decide before you sit that this time is for prayer and nothing else. The decision is an act of will. Make it deliberately.',
          'Honesty: Bring your actual state — anxious, distracted, grieving, grateful, confused. God has no use for the performance of emotions you do not feel.',
          'Patience: Expect nothing from any single session. You are building a practice, not achieving a result. The fruit comes over time.',
          'Receptivity: Hold your agenda lightly. Come with requests, but remain open to receiving something other than what you asked for.',
          'Return: When your attention wanders — and it will — simply return. Without judgment. The return IS the practice.',
        ],
      },
      {
        type: 'quote',
        text: 'Create in me a clean heart, O God, and renew a steadfast spirit within me.',
        attribution: 'Psalm 51:10',
      },
    ],
  },

  // ─── CHAPTER 5 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-5',
    number: 5,
    title: 'What Is the Anchor?',
    subtitle: 'The first movement of AMS — and why it determines everything that follows',
    part: 'The Anchor',
    partNumber: 2,
    content: [
      {
        type: 'paragraph',
        text: 'The word \'anchor\' evokes something heavy enough to hold a vessel in place against wind and current. In the AMS framework, the Anchor serves exactly this function: it holds the scattered self in place long enough for prayer to begin. It is the transition from ordinary time into sacred time.',
      },
      {
        type: 'paragraph',
        text: 'The Anchor is not the most spiritually significant part of AMS. But it is the most practically significant, because without a reliable entry, the rest of the practice never happens. Beginnings determine everything.',
      },
      {
        type: 'heading',
        text: 'The Ancient Precedent',
      },
      {
        type: 'paragraph',
        text: 'Every major tradition of structured prayer has its equivalent of the Anchor. In Jewish tradition, the Amidah begins with three steps backward and three steps forward — a physical entry into the presence of God. In Islamic prayer, the takbir marks the formal beginning. The Christian tradition developed the Sign of the Cross, the lighting of a candle, and the ancient opening of the Daily Office: \'O Lord, open my lips, and my mouth shall show forth your praise.\'',
      },
      {
        type: 'heading',
        text: 'What the Anchor Must Accomplish',
      },
      {
        type: 'list',
        items: [
          'Shift the nervous system from sympathetic (reactive, task-focused) to parasympathetic (receptive, still). Breath is the primary physiological tool.',
          'Establish intention — a clear, conscious decision that this time is for prayer and nothing else.',
          'Open the heart — a brief act of willingness to be present, to receive, to encounter something beyond the ordinary.',
        ],
      },
      {
        type: 'quote',
        text: 'God is always and everywhere present, but we are not always and everywhere open. The Anchor is the act of opening.',
        attribution: 'Thomas Merton',
      },
      {
        type: 'note',
        text: 'The effectiveness of your Anchor is the single strongest predictor of the quality of your prayer session. Practitioners who rush through or skip the Anchor consistently report shallower, more distracted prayer experiences.',
      },
    ],
  },

  // ─── CHAPTER 6 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-6',
    number: 6,
    title: 'The Three-Breath Entry',
    subtitle: 'A precise physiological and spiritual technique for entering prayer',
    part: 'The Anchor',
    partNumber: 2,
    content: [
      {
        type: 'paragraph',
        text: 'The breath is the most immediate, always-available tool for shifting inner state. The Hebrew word for spirit — ruach — also means breath and wind. The Greek pneuma carries the same range of meaning. To breathe intentionally is, in a very literal sense, to participate in the movement of the Spirit.',
      },
      {
        type: 'heading',
        text: 'The Three-Breath Protocol',
      },
      {
        type: 'paragraph',
        text: 'Read through the complete sequence once before attempting it:',
      },
      {
        type: 'subheading',
        text: 'Breath One — Release',
      },
      {
        type: 'paragraph',
        text: 'Inhale slowly through the nose for a count of four. Hold for two counts. Exhale through the mouth for a count of six, consciously releasing whatever you carried into this moment: the unfinished email, the unresolved conversation, the urgency of the day. Feel the physical release in your shoulders and jaw.',
      },
      {
        type: 'subheading',
        text: 'Breath Two — Receive',
      },
      {
        type: 'paragraph',
        text: 'Inhale for a count of four with the conscious intention of receiving — of being open. You are not filling your lungs with air alone but opening yourself to what is present and available. Exhale for six counts, letting the body settle further into stillness.',
      },
      {
        type: 'subheading',
        text: 'Breath Three — Declare',
      },
      {
        type: 'paragraph',
        text: 'On the third inhale, prepare to speak your anchor phrase — aloud if possible. As you exhale slowly, speak the words: \'O Lord, I am here. I am yours. Open my heart to you.\'',
      },
      {
        type: 'heading',
        text: 'Variations for Different Circumstances',
      },
      {
        type: 'paragraph',
        text: 'When privacy is unavailable, the three breaths can be performed internally, with the anchor phrase spoken silently. When time is severely limited, even a single conscious breath with intention is enough to mark the transition. The form matters less than the intention; the intention matters less than the practice.',
      },
      {
        type: 'note',
        text: 'After 21 days of consistent use, the three-breath entry will begin to trigger a conditioned response — your nervous system will automatically shift toward the receptive state as soon as you begin the sequence.',
      },
    ],
  },

  // ─── CHAPTER 7 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-7',
    number: 7,
    title: 'Sacred Phrases and Opening Prayers',
    subtitle: 'The treasury of traditional anchor words — and how to make them your own',
    part: 'The Anchor',
    partNumber: 2,
    content: [
      {
        type: 'paragraph',
        text: 'The Christian tradition has, over two millennia, accumulated a rich treasury of opening phrases and invocations designed to mark the beginning of prayer. These are not magic formulas — their power is not in the words but in the intention behind them and the practice that follows.',
      },
      {
        type: 'heading',
        text: 'Traditional Anchor Phrases',
      },
      {
        type: 'subheading',
        text: 'From the Daily Office',
      },
      {
        type: 'list',
        items: [
          '"O Lord, open my lips, and my mouth shall show forth your praise." (Psalm 51:15)',
          '"O God, make speed to save me. O Lord, make haste to help me." (Psalm 70:1)',
          '"Be still, and know that I am God." (Psalm 46:10)',
        ],
      },
      {
        type: 'subheading',
        text: 'From the Desert Fathers',
      },
      {
        type: 'list',
        items: [
          '"O God, come to my assistance." — used by Cassian as the universal prayer word',
          '"Lord Jesus Christ, Son of God, have mercy on me." — The Jesus Prayer',
          '"Maranatha." — Come, Lord. (1 Corinthians 16:22) — the earliest Christian prayer',
        ],
      },
      {
        type: 'subheading',
        text: 'From the Contemplative Tradition',
      },
      {
        type: 'list',
        items: [
          '"Come, Lord." — simple, ancient, effective',
          '"Here I am." — echoing Abraham, Moses, Samuel; a declaration of availability',
          '"Let it be." — Mary\'s fiat (Luke 1:38); surrender from the beginning',
        ],
      },
      {
        type: 'prayer',
        title: 'A Simple Opening Prayer',
        lines: [
          'Lord of all times and all moments,',
          'I set aside this time for you.',
          'I release what I carry.',
          'I open what is closed.',
          'I bring what I have, which is myself.',
          'Come to me as I come to you.',
          'Let this be real.',
          'Amen.',
        ],
      },
    ],
  },

  // ─── CHAPTER 8 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-8',
    number: 8,
    title: 'Physical Anchoring — Posture, Place, and Presence',
    subtitle: 'How the body\'s position shapes the soul\'s disposition',
    part: 'The Anchor',
    partNumber: 2,
    content: [
      {
        type: 'paragraph',
        text: 'Christianity has never been a religion of pure spirit. The Incarnation — God becoming flesh — is the theological foundation of a tradition that takes the body seriously. How you position your body in prayer is not a peripheral question of personal preference; it is a theological statement about the relationship between matter and spirit.',
      },
      {
        type: 'heading',
        text: 'The Four Classical Prayer Postures',
      },
      {
        type: 'table',
        headers: ['Posture', 'Latin', 'Character', 'Best For'],
        rows: [
          ['Standing', 'oratio', 'Confidence, dignity, freedom', 'Praise, Intercession'],
          ['Kneeling', 'genuflectio', 'Penitence, reverence, need', 'Confession, Petition'],
          ['Seated', 'sessio', 'Attentive receptivity', 'Listening, Lectio Divina'],
          ['Prostrate', 'prostratio', 'Complete surrender', 'Deep intercession, Lament'],
        ],
      },
      {
        type: 'heading',
        text: 'Consistency of Place',
      },
      {
        type: 'paragraph',
        text: 'Saint John Chrysostom advised: \'Have a place set aside for prayer in your home.\' A consistent prayer space accumulates what we might call \'sacred residue\' — the memory of previous encounters, the habitual associations of peace and attention, the environmental cues that tell the brain: this is what we do here.',
      },
      {
        type: 'paragraph',
        text: 'Your prayer place does not need to be large or elaborate. A chair, a small table with a candle, a view of the outdoors if possible — this is sufficient. What matters is that it is yours, that it is consistent, and that when you sit there your mind knows what is about to happen.',
      },
      {
        type: 'note',
        text: 'The sequence of physical cues — arriving at your prayer space, lighting a candle, opening your guide or journal — is itself an anchor. The body learns these cues before the mind consciously registers them.',
      },
    ],
  },

  // ─── CHAPTER 9 ───────────────────────────────────────────────────────────
  {
    id: 'chapter-9',
    number: 9,
    title: 'Zone One — Gratitude',
    subtitle: 'The gateway of prayer — and the discipline of specific thanksgiving',
    part: 'The Movement',
    partNumber: 3,
    content: [
      {
        type: 'paragraph',
        text: 'The tradition is unanimous: prayer begins with praise. Not because God requires compliments before processing requests, but because praise is the honest acknowledgment of what is true — we exist in a universe of given gifts, and our capacity to breathe and think and pray is itself unearned grace.',
      },
      {
        type: 'paragraph',
        text: 'The ancient Hebrew prayers — the foundation of Christian prayer — are saturated with thanksgiving. The Psalms begin with blessing, move through lament and confession and petition, but return almost invariably to praise. The structure of gratitude is not a polite preliminary — it is the shape of a life rightly oriented.',
      },
      {
        type: 'quote',
        text: 'Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
        attribution: '1 Thessalonians 5:18',
      },
      {
        type: 'heading',
        text: 'The AMS Gratitude Practice',
      },
      {
        type: 'paragraph',
        text: 'In the gratitude zone, name three to five specific things from the past 24 hours for which you are genuinely, specifically thankful. Each one should be concrete enough that you could describe it to a stranger. Not a category — \'my health\' — but an instance — \'the fact that I woke without pain this morning.\'',
      },
      {
        type: 'paragraph',
        text: 'For each specific gratitude, pause for two to three seconds to actually feel the appreciation before moving to the next. The pause is not decoration; it is the mechanism by which gratitude becomes genuine rather than performed.',
      },
      {
        type: 'quote',
        text: 'Gratitude is not a feeling that we wait for. It is a practice we engage until the feeling follows — and it always does.',
        attribution: 'Ann Voskamp',
      },
      {
        type: 'heading',
        text: 'When Gratitude Feels Impossible',
      },
      {
        type: 'paragraph',
        text: 'Seasons of grief, illness, or depression can make gratitude feel dishonest or even cruel. The tradition offers a surprising response: bring even this to God. \'I am struggling to find gratitude today. I acknowledge that you are present even in this.\' That acknowledgment is itself a form of praise — the hardest and most honest kind.',
      },
    ],
  },

  // ─── CHAPTER 10 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-10',
    number: 10,
    title: 'Zone Two — Confession and Honesty',
    subtitle: 'The relief of being fully known — and the freedom that follows',
    part: 'The Movement',
    partNumber: 3,
    content: [
      {
        type: 'paragraph',
        text: 'Of all the zones in the AMS framework, confession is most consistently avoided by modern practitioners — and most consistently identified as transformative by those who practice it faithfully. There is a reason for this paradox: confession is uncomfortable precisely because it is honest, and it is transformative for exactly the same reason.',
      },
      {
        type: 'quote',
        text: 'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
        attribution: '1 John 1:9',
      },
      {
        type: 'heading',
        text: 'The AMS Fourfold Examination of Conscience',
      },
      {
        type: 'paragraph',
        text: 'Spend 60–90 seconds moving through these four questions:',
      },
      {
        type: 'list',
        items: [
          'Where have I fallen short of love? Not just dramatic failures but small neglects, impatient words, missed opportunities for kindness.',
          'Where have I been dishonest — with others or with myself? Including comfortable self-deceptions that make difficult decisions easier.',
          'What do I need to release? Resentment, envy, fear, self-sufficiency — the internal states that close the heart.',
          'For what do I need forgiveness? Name it specifically. Then receive — don\'t just request — the forgiveness that is offered.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Prayer of Confession',
        lines: [
          'Lord, I have not loved as I ought.',
          'I have been selfish where I should have given,',
          'silent where I should have spoken,',
          'busy where I should have been still.',
          'I have not trusted your provision.',
          'I have clutched what you asked me to release.',
          'Receive me as I am —',
          'incomplete, honest, and returning.',
          'Have mercy on me, O God,',
          'according to your steadfast love.',
          'Amen. (based on Psalm 51)',
        ],
      },
    ],
  },

  // ─── CHAPTER 11 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-11',
    number: 11,
    title: 'Zone Three — Petition',
    subtitle: 'Bringing your actual needs to God — with specificity, faith, and honesty',
    part: 'The Movement',
    partNumber: 3,
    content: [
      {
        type: 'quote',
        text: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
        attribution: 'Matthew 7:7',
      },
      {
        type: 'paragraph',
        text: 'Petition is the act of bringing specific, personal requests to God. It is not magic — the articulation of the right words does not compel divine action. It is not transactional — prayer is not payment for services rendered. It is the prayer of an active agent who believes their participation matters.',
      },
      {
        type: 'heading',
        text: 'The Theology of Asking',
      },
      {
        type: 'list',
        items: [
          'Because asking is the honest acknowledgment of dependence — the opposite of the self-sufficiency that is the root of all spiritual failure.',
          'Because formulating a petition clarifies what we actually want and need — a benefit that occurs independent of any answer.',
          'Because God\'s relationship with creation is genuinely responsive — human prayer is a real participation in the way things go.',
          'Because Jesus told us to. The Lord\'s Prayer is itself a prayer of petition.',
        ],
      },
      {
        type: 'heading',
        text: 'The Four Qualities of Effective Petition',
      },
      {
        type: 'paragraph',
        text: 'Specificity: Vague prayers produce vague inner responses. \'Lord, help me\' is honest but cognitively unfocused. Name what you actually need with enough clarity to recognize an answer when it comes.',
      },
      {
        type: 'paragraph',
        text: 'Honesty: Ask for what you actually want, not for what you think you should want. The Psalms are full of why and how long — they do not sanitize the human heart for divine consumption.',
      },
      {
        type: 'paragraph',
        text: 'Faith: Faith here is not certainty of outcome but confidence in the character of the One to whom you pray. You may not know what the answer will be; you believe in the reliability of the One who answers.',
      },
      {
        type: 'paragraph',
        text: 'Openness: Hold the outcome lightly. The classical ending to any petition: \'Nevertheless, not my will but yours.\'',
      },
      {
        type: 'quote',
        text: 'Prayer is not conquering God\'s reluctance; it is laying hold of His willingness.',
        attribution: 'Martin Luther',
      },
    ],
  },

  // ─── CHAPTER 12 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-12',
    number: 12,
    title: 'Zone Four — Intercession',
    subtitle: 'Expanding the circle of prayer to carry others before God',
    part: 'The Movement',
    partNumber: 3,
    content: [
      {
        type: 'paragraph',
        text: 'Intercessory prayer — praying on behalf of others — is one of the most mysterious and most consistently practiced elements of Christian devotion. What every tradition asserts — universally, across centuries — is that intercession is real, that it matters, and that the person who prays for others is themselves transformed by the practice.',
      },
      {
        type: 'quote',
        text: 'Pray for one another, that you may be healed.',
        attribution: 'James 5:16',
      },
      {
        type: 'heading',
        text: 'Building Your Intercession Practice',
      },
      {
        type: 'table',
        headers: ['Circle', 'Frequency', 'Content'],
        rows: [
          ['Inner Circle', 'Daily', 'Family, close friends, those in acute need. Name them and pray specifically for what they are facing.'],
          ['Middle Ring', 'Weekly', 'Wider community, colleagues, neighbors. Rotate through this group across the week.'],
          ['Outer Circle', 'Monthly', 'The world beyond your personal network — those suffering in distant places, those in leadership.'],
        ],
      },
      {
        type: 'prayer',
        title: 'An Intercessory Prayer',
        lines: [
          'Lord of all people and all times,',
          'I bring before you now those I carry:',
          '[Name those on your heart today]',
          'You know what they need',
          'more deeply than I know to ask.',
          'Meet them in the places I cannot reach.',
          'Hold them in the moments I cannot see.',
          'Let my love for them be',
          'a small echo of yours.',
          'Amen.',
        ],
      },
    ],
  },

  // ─── CHAPTER 13 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-13',
    number: 13,
    title: 'Zone Five — Listening',
    subtitle: 'The most neglected and most essential zone — the practice of receptive silence',
    part: 'The Movement',
    partNumber: 3,
    content: [
      {
        type: 'paragraph',
        text: 'Every tradition of contemplative prayer arrives, eventually, at the same insight: prayer is not only speaking. It is listening. And listening — genuine, attentive, unhurried listening — is the rarest practice in the modern world and, perhaps for that very reason, the most urgently needed.',
      },
      {
        type: 'paragraph',
        text: 'Of all the zones in the AMS framework, Listening is the one most likely to be shortened or skipped. The impulse is understandable: silence is uncomfortable. Silence is where we are most likely to feel that nothing is happening — which is precisely when the most important things happen.',
      },
      {
        type: 'quote',
        text: 'Be still before the Lord and wait patiently for him.',
        attribution: 'Psalm 37:7',
      },
      {
        type: 'heading',
        text: 'How to Practice the Listening Zone',
      },
      {
        type: 'paragraph',
        text: 'Begin with one minute. If one minute of silence feels long — and it will, at first — begin with sixty seconds. Over weeks and months, extend it. The tradition\'s recommendation for mature practitioners is fifteen to twenty minutes.',
      },
      {
        type: 'list',
        items: [
          'Choose a focusing word — not a petition but a simple sacred word: \'Jesus,\' \'Peace,\' \'Come,\' \'Here.\' When thoughts intrude, gently return to the word.',
          'When thoughts arise — and they will — don\'t fight or follow them. Simply notice, release without judgment, and return to attentiveness.',
          'Do not evaluate the quality of the silence while in it. Whether it feels profound or completely flat is not your measure of its value.',
          'Notice what arises — an image, a word, a physical sensation of peace. Do not force these; remain open.',
          'Keep a brief record in your journal immediately after the session. Over time, patterns emerge.',
        ],
      },
      {
        type: 'quote',
        text: 'In silence and in hope shall be your strength.',
        attribution: 'Isaiah 30:15',
      },
    ],
  },

  // ─── CHAPTER 14 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-14',
    number: 14,
    title: 'The Theology of Surrender',
    subtitle: 'What surrender actually means — and what it decisively does not mean',
    part: 'The Surrender',
    partNumber: 4,
    content: [
      {
        type: 'paragraph',
        text: 'Surrender is perhaps the most misunderstood concept in the Christian spiritual vocabulary. In contemporary culture, surrender carries connotations of defeat or weakness. The surrender the tradition speaks of is nothing like this. Christian surrender is an act of profound strength: the intentional release of what we cannot control, paired with deepened trust in the One who can.',
      },
      {
        type: 'paragraph',
        text: 'The model is always Jesus in Gethsemane: \'Father, if it is possible, let this cup pass from me. Nevertheless, not my will, but yours, be done.\' (Matthew 26:39). This prayer contains both authentic petition — Jesus asks for the suffering to be removed — and complete surrender. He does not pretend he doesn\'t want relief. He asks honestly, then releases the outcome entirely.',
      },
      {
        type: 'quote',
        text: 'Cast all your anxiety on him because he cares for you.',
        attribution: '1 Peter 5:7',
      },
      {
        type: 'quote',
        text: 'True peace of soul comes not from the world\'s approval, from health, nor from learning, but only from abandoning oneself fully to God.',
        attribution: 'Thomas à Kempis, The Imitation of Christ',
      },
      {
        type: 'heading',
        text: 'Three Things Surrender Is Not',
      },
      {
        type: 'list',
        items: [
          'Surrender is not indifference. You can care deeply about an outcome and still surrender it. The depth of your concern does not require you to maintain control.',
          'Surrender is not certainty about outcomes. You do not surrender because you are confident everything will work out as you hope. You surrender because you trust the One who holds what you cannot.',
          'Surrender is not a one-time event. It is a daily, sometimes hourly, practice of returning what has been picked back up. The Surrender Close establishes the habit of release at the conclusion of every prayer session.',
        ],
      },
    ],
  },

  // ─── CHAPTER 15 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-15',
    number: 15,
    title: 'The Surrender Close',
    subtitle: 'A complete, field-tested sequence for ending every prayer session well',
    part: 'The Surrender',
    partNumber: 4,
    content: [
      {
        type: 'paragraph',
        text: 'How you end a prayer session matters as much as how you begin it. A session that closes abruptly leaves the inner life without closure. A session that ends well — with deliberate release and genuine commission into the day — creates a different quality of continuity between the time of prayer and the time that follows.',
      },
      {
        type: 'heading',
        text: 'The Four-Movement Surrender Close',
      },
      {
        type: 'subheading',
        text: 'Movement 1 — Acknowledgment',
      },
      {
        type: 'paragraph',
        text: 'Name, briefly, what you brought to prayer today — the burdens you carried in. Do not rehearse them in detail; simply acknowledge that you brought them.',
      },
      {
        type: 'subheading',
        text: 'Movement 2 — Declaration',
      },
      {
        type: 'paragraph',
        text: 'Declare your intention to release them. This is volitional — an act of will, not emotion. You may not feel the release; declare it anyway. Speech acts shape inner reality over time.',
      },
      {
        type: 'subheading',
        text: 'Movement 3 — Reception',
      },
      {
        type: 'paragraph',
        text: 'Receive, by intention, what was available in this time of prayer — peace, clarity, a sense of being heard, or simply the faithfulness of having shown up.',
      },
      {
        type: 'subheading',
        text: 'Movement 4 — Commission',
      },
      {
        type: 'paragraph',
        text: 'Speak a word of commission into the day ahead: a brief prayer asking that what happened in prayer would shape what happens in life. Then rise. The session is complete.',
      },
      {
        type: 'prayer',
        title: 'The AMS Surrender Close',
        lines: [
          'Lord, I have brought to you what I carry.',
          'I release it — what I cannot change,',
          'what I cannot fix,',
          'what lies beyond my hands.',
          'I receive what you have for me:',
          'your peace that passes understanding,',
          'your grace that is always sufficient.',
          'Send me now into this day',
          'as someone who has been with you.',
          'Let that be enough.',
          'Amen.',
        ],
      },
    ],
  },

  // ─── CHAPTER 16 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-16',
    number: 16,
    title: 'Releasing Without Abandoning',
    subtitle: 'The subtle and essential art of caring without clinging',
    part: 'The Surrender',
    partNumber: 4,
    content: [
      {
        type: 'paragraph',
        text: 'One of the questions practitioners most often bring to the Surrender Close is: \'If I release this to God, does that mean I stop working toward it? Does it mean I no longer care?\' The answer, emphatically, is no. Surrender and engagement are not opposites; they are partners.',
      },
      {
        type: 'paragraph',
        text: 'The image that most clearly captures this balance is found in Proverbs: \'Commit your work to the Lord, and your plans will be established.\' (Proverbs 16:3). Commit — galal in Hebrew, meaning to roll off, as one rolls a heavy stone from one\'s shoulders — and then work. The rolling off does not mean the work stops. It means the anxious grip releases.',
      },
      {
        type: 'quote',
        text: 'Care, but don\'t carry. Act, but don\'t clutch. Work, but don\'t strangle the outcome with the urgency of your need.',
        attribution: 'AMS Guide',
      },
    ],
  },

  // ─── CHAPTER 17 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-17',
    number: 17,
    title: 'The Surrendered Life',
    subtitle: 'What daily practice of surrender looks like across a life',
    part: 'The Surrender',
    partNumber: 4,
    content: [
      {
        type: 'paragraph',
        text: 'The Surrender Close is not only a conclusion to a prayer session. It is a training ground for a whole way of living — what the Christian tradition calls the surrendered or abandoned life. Paul describes it in Philippians: \'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\' (4:6-7)',
      },
      {
        type: 'paragraph',
        text: 'The peace Paul describes is not the peace of having no problems. It is the peace of having practiced, daily and honestly, the releasing of problems to the One who holds them. It accumulates over time — gradually, the way trust builds in any relationship through a thousand small faithfulnesses.',
      },
      {
        type: 'note',
        text: 'Keep a surrender log alongside your petition list. When you release something in prayer, record it. When you notice yourself picking it back up — which you will — record that too and simply release again. Over months, this reveals the pattern of your anxieties and the pattern of God\'s faithfulness.',
      },
    ],
  },

  // ─── CHAPTER 18 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-18',
    number: 18,
    title: 'The Morning Office',
    subtitle: 'The most important prayer of the day — and how to build it',
    part: 'Building Your Daily Practice',
    partNumber: 5,
    content: [
      {
        type: 'paragraph',
        text: 'The morning office — the first prayer of the day, performed before the ordinary demands of life crowd the inner landscape — is the cornerstone of the AMS daily practice. If you do only one thing from this guide: five minutes of intentional AMS prayer before the first phone check, the first email, the first conversation.',
      },
      {
        type: 'quote',
        text: 'In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly.',
        attribution: 'Psalm 5:3',
      },
      {
        type: 'heading',
        text: 'The Complete Morning Office — Full Version (25–40 minutes)',
      },
      {
        type: 'table',
        headers: ['Element', 'Time', 'Content'],
        rows: [
          ['Opening Anchor', '5 min', 'Three-breath entry. Light your candle. Speak your anchor phrase. One minute of silence before proceeding.'],
          ['Psalmody', '5 min', 'Read one psalm slowly. Read it again. Let a phrase or image stay with you.'],
          ['Scripture Reading', '5 min', 'A brief passage from the New Testament. Read slowly. Pause where you feel resistance or resonance.'],
          ['Five Zones of Movement', '15 min', 'Gratitude (3 min) · Confession (2 min) · Petition (4 min) · Intercession (3 min) · Listening (3 min)'],
          ['Journal (optional)', '5 min', 'Record what arose in the listening zone. Record specific gratitudes and petitions.'],
          ['Surrender Close', '3 min', 'The complete four-movement close from Chapter 15. Speak it aloud. Rise.'],
        ],
      },
      {
        type: 'heading',
        text: 'The Fast AMS Morning — Minimum Version (5 minutes)',
      },
      {
        type: 'table',
        headers: ['Element', 'Time', 'Content'],
        rows: [
          ['Anchor', '30 sec', 'Three breaths + anchor phrase'],
          ['Gratitude', '60 sec', 'Three specific thanks, spoken aloud'],
          ['Confession + Petition', '60 sec', 'One honest acknowledgment + one specific ask'],
          ['Listening', '60 sec', 'Silence. Simply wait.'],
          ['Surrender Close', '30 sec', 'Abbreviated: \'I release. I trust. Send me.\''],
        ],
      },
      {
        type: 'note',
        text: 'The Fast AMS Morning is not a lesser version of the full practice. It is the foundation of the full practice. Build the minimum first. The minimum done every day is worth infinitely more than the maximum done occasionally.',
      },
    ],
  },

  // ─── CHAPTER 19 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-19',
    number: 19,
    title: 'Midday Prayer',
    subtitle: 'The pause that renews — recovering the ancient practice of the noon office',
    part: 'Building Your Daily Practice',
    partNumber: 5,
    content: [
      {
        type: 'paragraph',
        text: 'Sext — the sixth hour — was the traditional midday prayer of the monastic office. For the contemporary practitioner, midday prayer is primarily a reset: a two-to-five-minute interruption of the day\'s momentum that re-anchors the inner life to the morning\'s intention. Without it, the quality of attention established in the morning prayer tends to erode under the pressure of midday demands.',
      },
      {
        type: 'heading',
        text: 'The Midday Reset — Three Minutes',
      },
      {
        type: 'list',
        items: [
          'One breath of release: exhale what has accumulated since morning.',
          'One brief act of gratitude: name one good thing from the morning hours.',
          'Re-state your primary petition for the day, or simply say: \'I trust you with this hour.\'',
          '30 seconds of silence. Return.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Midday Prayer',
        lines: [
          'Lord of the hours and the turning day,',
          'I return to you at noon.',
          'What was clear this morning,',
          'I have perhaps already forgotten.',
          'What was surrendered,',
          'I may have retrieved.',
          'I release again.',
          'I trust again.',
          'I am here again.',
          'Hold the rest of this day',
          'as I cannot.',
          'Amen.',
        ],
      },
      {
        type: 'note',
        text: 'Set a phone alarm for your midday prayer — 12:00 or 12:30. Label it \'Midday.\' When it rings, close whatever is open, take the three minutes, and return. Consistency matters more than duration.',
      },
    ],
  },

  // ─── CHAPTER 20 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-20',
    number: 20,
    title: 'Evening Vespers',
    subtitle: 'The prayer of the closing day — review, release, and gratitude',
    part: 'Building Your Daily Practice',
    partNumber: 5,
    content: [
      {
        type: 'paragraph',
        text: 'Vespers — the evening prayer of the ancient church — takes its name from the Latin vesper, the evening star. It is the prayer of the day\'s end: a time to review what has passed, receive what the day has given, and prepare the inner life for rest. Ignatius of Loyola\'s Examen — one of the great contributions to Christian spirituality — was primarily an evening practice.',
      },
      {
        type: 'heading',
        text: 'The AMS Evening Vespers — Ten Minutes',
      },
      {
        type: 'table',
        headers: ['Movement', 'Time', 'Practice'],
        rows: [
          ['1. Gratitude for the Day', '2 min', 'Name three specific gifts from today. What surprised? What sustained? What delighted?'],
          ['2. Review — Where Was God?', '3 min', 'Move through the day noticing where grace was present, where you were most yourself.'],
          ['3. Honest Acknowledgment', '2 min', 'Where did you fall short? Name it, release it, receive forgiveness.'],
          ['4. Intercession for Tomorrow', '2 min', 'Name those on your heart. Name what tomorrow holds. Ask.'],
          ['5. Surrender Close', '1 min', '\'Lord, I release this day into your keeping. Let me sleep in your peace.\''],
        ],
      },
    ],
  },

  // ─── CHAPTER 21 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-21',
    number: 21,
    title: 'Night Compline',
    subtitle: 'The prayer before sleep — committing the night to God',
    part: 'Building Your Daily Practice',
    partNumber: 5,
    content: [
      {
        type: 'paragraph',
        text: 'Compline is the last prayer of the day — the \'completion\' of the daily office. In monastic communities, it is prayed in near-darkness before the Great Silence. The traditional Compline includes the Nunc Dimittis — Simeon\'s prayer: \'Lord, now let your servant depart in peace, according to your word.\' Each night becomes a small rehearsal of the final surrender.',
      },
      {
        type: 'prayer',
        title: 'Night Compline — The Complete AMS Night Prayer',
        lines: [
          'Lord, into your hands I commit this night.',
          'I release the unfinished things.',
          'I release the conversations not yet resolved.',
          'I release tomorrow and all it may hold.',
          'Guard my sleep.',
          'Guard those I love.',
          'Guard what I cannot watch over.',
          'Let me wake to your mercy,',
          'which is new every morning.',
          'Now, Lord, let your servant rest in peace,',
          'according to your word.',
          'Amen.',
        ],
      },
    ],
  },

  // ─── CHAPTER 22 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-22',
    number: 22,
    title: 'The Weekend Deepening',
    subtitle: 'Using the Sabbath rhythm to go deeper than daily practice allows',
    part: 'Building Your Daily Practice',
    partNumber: 5,
    content: [
      {
        type: 'paragraph',
        text: 'The weekly rhythm — six days of labor and one of rest — is one of the oldest structures in human civilization, embedded in the creation narrative itself. For the AMS practitioner, the weekend offers an opportunity to deepen the practice in ways the five-minute morning office cannot accommodate.',
      },
      {
        type: 'paragraph',
        text: 'Once per week, consider an extended session of 30–60 minutes that incorporates one or more advanced practices from Part VI: Lectio Divina with a longer Scripture passage, an extended period of contemplative silence, or a review of the week\'s petition and surrender log.',
      },
      {
        type: 'note',
        text: 'The Weekend Deepening is not compensation for a weak week. It is the depth from which the week\'s daily practice draws. Even practitioners with a strong daily habit find that the weekly extended session produces a quality of encounter unavailable in shorter practices.',
      },
    ],
  },

  // ─── CHAPTER 23 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-23',
    number: 23,
    title: 'Lectio Divina — Praying the Scripture',
    subtitle: 'The ancient art of reading Scripture not for information but for transformation',
    part: 'Advanced Devotional Practices',
    partNumber: 6,
    content: [
      {
        type: 'paragraph',
        text: 'Lectio Divina — sacred reading — is one of the most ancient and most profound practices in the Christian devotional tradition. Developed by the early monks and systematized by Guigo II in the twelfth century, it treats Scripture not as a text to be studied but as a living word to be met, sat with, and received at a level deeper than intellectual comprehension.',
      },
      {
        type: 'heading',
        text: 'The Four Movements of Lectio Divina',
      },
      {
        type: 'subheading',
        text: 'Lectio — Reading',
      },
      {
        type: 'paragraph',
        text: 'Read a short passage slowly — four to eight verses — aloud if possible. Not to understand it but simply to hear it. Notice what word or phrase captures your attention.',
      },
      {
        type: 'subheading',
        text: 'Meditatio — Meditation',
      },
      {
        type: 'paragraph',
        text: 'Remain with the word or phrase that arrested you. Repeat it slowly, internally. Let it turn over in your mind like a stone in a stream. Allow it to connect with your own life, memory, present circumstances.',
      },
      {
        type: 'subheading',
        text: 'Oratio — Prayer',
      },
      {
        type: 'paragraph',
        text: 'Respond to what has emerged. This is not intellectual response but heart response — whatever the word or phrase has surfaced in you: gratitude, confession, petition, longing, fear, joy. Speak it to God honestly.',
      },
      {
        type: 'subheading',
        text: 'Contemplatio — Contemplation',
      },
      {
        type: 'paragraph',
        text: 'Release even the prayer. Rest in the presence of the One whose word you have received. This is the Listening zone at its most advanced expression.',
      },
      {
        type: 'heading',
        text: 'Choosing a Passage for Lectio',
      },
      {
        type: 'paragraph',
        text: 'The best passages for Lectio Divina are narrative, poetic, or personally significant. The Psalms are ideal. The Sermon on the Mount (Matthew 5–7) is inexhaustible. The Gospel of John, Philippians 4, Romans 8, and the wisdom books are all rich sources. Do not attempt Lectio with a passage you are already very familiar with until your practice is well established — familiarity creates a ceiling on receptivity.',
      },
    ],
  },

  // ─── CHAPTER 24 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-24',
    number: 24,
    title: 'The Psalms as Prayer',
    subtitle: 'One hundred and fifty prayers for every human experience — how to use them',
    part: 'Advanced Devotional Practices',
    partNumber: 6,
    content: [
      {
        type: 'paragraph',
        text: 'The Psalter — the book of 150 Psalms — is the prayer book of the Bible. Jesus prayed the Psalms; his cry from the cross — \'My God, my God, why have you forsaken me?\' — is the opening of Psalm 22. The reason the Psalms have sustained Christian prayer for two millennia is simple: they cover the complete range of human experience with an honesty that most religious language avoids.',
      },
      {
        type: 'heading',
        text: 'The Five Types of Psalms',
      },
      {
        type: 'table',
        headers: ['Type', 'Key Psalms', 'Character'],
        rows: [
          ['Hymns of Praise', '8, 19, 100, 145–150', 'Pure exuberant praise — acknowledgment of God\'s greatness and goodness.'],
          ['Psalms of Lament', '22, 42, 88, 137', 'Honest, sometimes anguished complaint to God. Essential for seasons of suffering.'],
          ['Psalms of Trust', '23, 27, 46, 91, 121', 'Testimonies of confidence in God\'s reliability, often after seasons of difficulty.'],
          ['Psalms of Thanksgiving', '30, 32, 34, 116', 'Celebration of specific deliverances — looking back at what God has done.'],
          ['Messianic Psalms', '2, 22, 45, 72, 110', 'Prayers pointing beyond their context to the larger purposes of God in history.'],
        ],
      },
      {
        type: 'quote',
        text: 'The whole of human experience — every joy and grief and terror and exultation that the heart can know — is to be found somewhere in the Psalms.',
        attribution: 'C.S. Lewis, Reflections on the Psalms',
      },
    ],
  },

  // ─── CHAPTER 25 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-25',
    number: 25,
    title: 'Contemplative Prayer',
    subtitle: 'Moving beyond words — the advanced practice of pure presence',
    part: 'Advanced Devotional Practices',
    partNumber: 6,
    content: [
      {
        type: 'paragraph',
        text: 'Contemplative prayer is the frontier of the AMS practice — the place where technique gives way to pure relationship, where method is abandoned in favor of encounter. It is both the most ancient and the most difficult practice in the Christian spiritual tradition.',
      },
      {
        type: 'paragraph',
        text: 'This is not for beginners. It requires a settled foundation of daily structured prayer — the AMS practice developed over months or years — before it becomes genuinely accessible. The contemplative life grows out of the active life of prayer, not in place of it.',
      },
      {
        type: 'heading',
        text: 'Centering Prayer — A Practical Method',
      },
      {
        type: 'paragraph',
        text: 'Centering Prayer, developed by Thomas Keating and Basil Pennington, follows four guidelines:',
      },
      {
        type: 'list',
        items: [
          'Guideline 1: Choose a sacred word as a symbol of your consent to God\'s presence and action.',
          'Guideline 2: Sit in silence and introduce your sacred word inwardly as the symbol of your consent.',
          'Guideline 3: When engaged with thoughts, emotions, or sensations, return gently to the sacred word.',
          'Guideline 4: At the end of the prayer period, remain in silence with eyes closed for a few minutes.',
        ],
      },
      {
        type: 'quote',
        text: 'Contemplation is essentially a listening in silence, an expectancy... waiting for the One who alone can make us understand ourselves in the light of His love.',
        attribution: 'Thomas Merton',
      },
    ],
  },

  // ─── CHAPTER 26 ──────────────────────────────────────────────────────────
  {
    id: 'chapter-26',
    number: 26,
    title: 'Praying Through Suffering',
    subtitle: 'Maintaining and deepening the practice when prayer feels impossible',
    part: 'Advanced Devotional Practices',
    partNumber: 6,
    content: [
      {
        type: 'paragraph',
        text: 'Every practitioner of prayer will eventually encounter suffering that tests the practice at its roots. Illness, loss, betrayal, depression, the death of those we love — these are not exceptions to human life but its ordinary content. The tradition\'s answer is counter-cultural: do not set aside your practice in suffering. Bring the suffering itself into the prayer — honestly, without sanitizing.',
      },
      {
        type: 'heading',
        text: 'Four Postures of Suffering Prayer',
      },
      {
        type: 'subheading',
        text: 'Lament',
      },
      {
        type: 'paragraph',
        text: 'Bring your anguish to God in its full, unedited form. Job lamenting, the Psalmist crying \'How long, O Lord?\', Jesus asking \'Why have you forsaken me?\' — these are not failures of faith. They are its deepest expressions.',
      },
      {
        type: 'subheading',
        text: 'Honesty',
      },
      {
        type: 'paragraph',
        text: 'Do not pray for what you think you should feel. Pray from where you actually are. \'I do not understand this. I am angry about this. I do not feel your presence.\' These prayers are more likely to be answered than their sanitized alternatives.',
      },
      {
        type: 'subheading',
        text: 'Simplicity',
      },
      {
        type: 'paragraph',
        text: 'In seasons of suffering, the elaborate prayer practice may not be possible. One breath. One word. \'Lord.\' \'Help.\' \'Here.\' These are complete prayers.',
      },
      {
        type: 'subheading',
        text: 'Persistence',
      },
      {
        type: 'paragraph',
        text: 'Keep showing up. Not because prayer feels effective but because the practice of return is itself the formation of the soul into the image of the One who always returned.',
      },
      {
        type: 'prayer',
        title: 'A Prayer from the Dark',
        lines: [
          'Lord, I do not understand this.',
          'I have prayed, and the darkness continues.',
          'I have asked, and the silence holds.',
          'I will not pretend to faith I do not feel.',
          'I will not perform trust I cannot locate.',
          'But I am here.',
          'Still here.',
          'Still turning toward you,',
          'even in the dark.',
          'Let that be enough.',
          'Let that be prayer.',
          'Amen.',
        ],
      },
    ],
  },

  // ─── PRAYER COLLECTION ───────────────────────────────────────────────────
  {
    id: 'prayer-collection',
    number: 27,
    title: 'The Prayer Collection',
    subtitle: 'A treasury of prayers for every season',
    part: 'The Prayer Collection',
    partNumber: 7,
    content: [
      {
        type: 'paragraph',
        text: 'These prayers are drawn from the classical Christian treasury and original compositions. Use them as written, adapt them to your own voice, or use them as models for your own prayer writing.',
      },
      {
        type: 'heading',
        text: 'Morning Prayers and Devotions',
      },
      {
        type: 'prayer',
        title: 'A Morning Offering',
        lines: [
          'Lord of the morning and all its hours,',
          'I offer you this day before it has begun —',
          'its plans, its interruptions, its surprises,',
          'its meetings scheduled and its encounters unplanned.',
          'Let everything that happens today',
          'pass through the filter of your presence.',
          'Let my words be governed by your wisdom.',
          'Let my silence be deep enough to hear you.',
          'I am yours. This day is yours.',
          'Do with both as seems good to you.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'The Morning Examen — Opening',
        lines: [
          'Before I take up the tasks of this day,',
          'let me recall your faithfulness in the day just past.',
          'Let me number the mercies I received',
          'and the moments when grace was more abundant than I noticed.',
          'Thank you for rest.',
          'Thank you for the gift of another beginning.',
          'Thank you that your mercies are new each morning.',
          'I receive this day with open hands.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'The Collect for Grace (Book of Common Prayer, adapted)',
        lines: [
          'O Lord, our heavenly Father,',
          'almighty and everlasting God,',
          'who hast safely brought us to the beginning of this day:',
          'Defend us in the same with thy mighty power;',
          'and grant that this day we fall into no sin,',
          'neither run into any kind of danger;',
          'but that all our doings may be ordered',
          'by thy governance, to do always',
          'that which is righteous in thy sight.',
          'Through Jesus Christ our Lord. Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Prayer for Clarity',
        lines: [
          'Give me, Lord, a clear mind',
          'in the midst of complexity,',
          'a patient spirit',
          'in the midst of urgency,',
          'and a quiet heart',
          'in the midst of noise.',
          'Guard me from the decisions that anxiety',
          'would make and wisdom would not.',
          'Guard me from the words',
          'that haste would speak and love would not.',
          'Let wisdom govern what I do today.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Morning Psalm Prayer (Psalm 143:8)',
        lines: [
          'Let me hear your steadfast love in the morning,',
          'for in you I trust.',
          'Make me know the way I should go,',
          'for to you I lift up my soul.',
          'This is my prayer:',
          'not that the way be easy,',
          'but that I walk it with you.',
          'I lift my soul to you this morning.',
          'Receive what I bring.',
          'Guide what follows.',
          'Amen.',
        ],
      },
      {
        type: 'heading',
        text: 'Evening Prayers and Reflections',
      },
      {
        type: 'prayer',
        title: 'The Evening Examen',
        lines: [
          'Lord, I come to the end of this day.',
          'I am grateful for: [name three specific things]',
          'I am honest about: [name what went wrong or where you fell short]',
          'I release: [name what you are carrying that is not yours to keep]',
          'I ask for tomorrow: [one specific request]',
          'I receive your peace.',
          'I trust your keeping.',
          'Let this night be rest.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'An Evening Collect',
        lines: [
          'O God, the life of all who live,',
          'the light of the faithful,',
          'the strength of those who labor,',
          'the repose of those who rest:',
          'We thank you for the day that is past.',
          'We bring to you what was broken in it.',
          'We lay down what was left unfinished.',
          'Grant us such a measure of your peace',
          'that we may rise tomorrow',
          'renewed in your service.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Prayer of Evening Release',
        lines: [
          'Everything I held tightly today,',
          'I release into your hands tonight.',
          'The conversations that did not go as I hoped.',
          'The decisions I made and am not certain of.',
          'The people I love and cannot fix.',
          'The future I want to control and cannot.',
          'Into your hands. All of it.',
          'Good night, Lord.',
          'Amen.',
        ],
      },
      {
        type: 'heading',
        text: 'Prayers for Special Seasons',
      },
      {
        type: 'prayer',
        title: 'An Advent Prayer — The Season of Waiting',
        lines: [
          'Lord, teach me to wait.',
          'In a world that demands instant answers,',
          'instant results, instant everything —',
          'teach me the deeper discipline',
          'of holy expectation.',
          'Come, Lord Jesus.',
          'Come into the waiting.',
          'Come into the dark.',
          'Come into the ordinary.',
          'We are watching for you.',
          'Come.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'A Lenten Prayer — The Season of Return',
        lines: [
          'Lord, these forty days I return to you',
          'more honestly than I usually allow myself.',
          'I give up: [name what you are releasing this Lent]',
          'I take up: [name what you are practicing this Lent]',
          'Make this a season of genuine return —',
          'not religious performance',
          'but real reorientation.',
          'Strip away what is not you.',
          'Leave what is.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'An Easter Prayer — The Season of Resurrection',
        lines: [
          'Lord of the impossible morning,',
          'I confess I did not always believe',
          'you could make something new',
          'from what looked like an ending.',
          'Teach me to live as one',
          'who knows the tomb is empty.',
          'Let resurrection be not just a doctrine',
          'but a way of seeing.',
          'Alleluia. Amen.',
        ],
      },
      {
        type: 'heading',
        text: 'Prayers of Intercession',
      },
      {
        type: 'prayer',
        title: 'For Those Who Are Suffering',
        lines: [
          'Lord, I bring before you those I know who are in pain:',
          '[Name them]',
          'You know what they carry',
          'more deeply than I know to describe it.',
          'You know what they need',
          'more precisely than I know to ask.',
          'Meet them where the suffering is deepest.',
          'Let them know they are not alone.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'For Leaders and Those in Authority',
        lines: [
          'Lord of all rulers and all governance,',
          'I pray for those who hold authority',
          'over the communities I live in:',
          '[Name those you are praying for]',
          'Give them wisdom beyond their own.',
          'Protect them from the corruption that power invites.',
          'Draw them toward justice and away from self-service.',
          'Amen.',
        ],
      },
      {
        type: 'prayer',
        title: 'For the World\'s Suffering',
        lines: [
          'Lord, the world is large and its suffering is real.',
          'I cannot hold all of it, but you can.',
          'I pray especially today for: [name a region or cause]',
          'Act where I cannot.',
          'Sustain those who act where I will not.',
          'Move toward what is broken',
          'with your characteristic persistence.',
          'Amen.',
        ],
      },
      {
        type: 'heading',
        text: 'Selected Psalms for Prayer',
      },
      {
        type: 'paragraph',
        text: 'The following psalms are offered as touchstones for your prayer practice. Read them as prayer, not as literature — slowly, aloud, and with attention to what resonates.',
      },
      {
        type: 'prayer',
        title: 'Psalm 23 — For Trust and Surrender',
        lines: [
          'The Lord is my shepherd; I shall not want.',
          'He makes me lie down in green pastures.',
          'He leads me beside still waters.',
          'He restores my soul.',
          'He leads me in paths of righteousness',
          'for his name\'s sake.',
          'Even though I walk through the valley',
          'of the shadow of death,',
          'I will fear no evil, for you are with me.',
          'Your rod and your staff, they comfort me.',
          'You prepare a table before me',
          'in the presence of my enemies.',
          'You anoint my head with oil; my cup overflows.',
          'Surely goodness and mercy shall follow me',
          'all the days of my life,',
          'and I shall dwell in the house of the Lord forever.',
        ],
      },
      {
        type: 'prayer',
        title: 'Psalm 46:1-3, 10 — For Anxiety and Turbulence',
        lines: [
          'God is our refuge and strength,',
          'an ever-present help in trouble.',
          'Therefore we will not fear,',
          'though the earth give way',
          'and the mountains fall into the heart of the sea,',
          'though its waters roar and foam.',
          'Be still, and know that I am God.',
          'I will be exalted among the nations,',
          'I will be exalted in the earth.',
        ],
      },
      {
        type: 'prayer',
        title: 'Psalm 121 — For Protection and Keeping',
        lines: [
          'I lift up my eyes to the mountains —',
          'where does my help come from?',
          'My help comes from the Lord,',
          'the Maker of heaven and earth.',
          'He will not let your foot slip —',
          'he who watches over you will not slumber.',
          'The Lord watches over you —',
          'the Lord is your shade at your right hand.',
          'The Lord will watch over your coming and going',
          'both now and forevermore.',
        ],
      },
    ],
  },

  // ─── APPENDICES ──────────────────────────────────────────────────────────
  {
    id: 'appendices',
    number: 28,
    title: 'Tools and Appendices',
    subtitle: 'Resources for a lifetime of practice',
    part: 'Tools and Appendices',
    partNumber: 8,
    content: [
      {
        type: 'heading',
        text: 'Your 90-Day AMS Practice Tracker',
      },
      {
        type: 'paragraph',
        text: 'Mark each day you complete your AMS practice. M = Morning Office | V = Evening Vespers | N = Night Compline | L = Lectio Divina',
      },
      {
        type: 'subheading',
        text: 'Phase 1 — Days 1–30: FOUNDATION — Building the minimum daily habit',
      },
      {
        type: 'subheading',
        text: 'Phase 2 — Days 31–60: EXPANSION — Adding Evening Vespers and Midday Reset',
      },
      {
        type: 'subheading',
        text: 'Phase 3 — Days 61–90: DEEPENING — Introducing Lectio Divina and Weekend Deepening',
      },
      {
        type: 'heading',
        text: 'Weekly Prayer Journal Template',
      },
      {
        type: 'table',
        headers: ['Field', 'What to Record'],
        rows: [
          ['WEEK OF:', 'Record the date range for this week'],
          ['PRIMARY INTENTION:', 'What is your main focus in prayer this week?'],
          ['DAILY GRATITUDE LOG:', 'MON / TUE / WED / THU / FRI / SAT / SUN'],
          ['SPECIFIC PETITIONS:', 'Name your specific requests'],
          ['INTERCESSIONS:', 'Who are you praying for this week?'],
          ['LISTENING ZONE NOTES:', 'Record anything that arose in silence'],
          ['WHAT I AM RELEASING:', 'What are you surrendering this week?'],
          ['HOW PRACTICE FELT:', 'Honest reflection — dry, alive, distracted, deep?'],
          ['INTO NEXT WEEK:', 'One insight or intention'],
        ],
      },
      {
        type: 'heading',
        text: 'A 365-Day Scripture Reading Plan',
      },
      {
        type: 'paragraph',
        text: 'Four readings per day: Old Testament | New Testament | Psalm | Proverb. This plan covers the entire Bible in one year alongside your daily AMS practice.',
      },
      {
        type: 'table',
        headers: ['Month', 'Old Testament', 'New Testament', 'Psalms', 'Proverbs'],
        rows: [
          ['January', 'Genesis 1–50', 'Matthew 1–28', 'Psalms 1–31', 'Prov. 1–31'],
          ['February', 'Exodus 1–40', 'Mark 1–16', 'Psalms 32–59', 'Prov. 1–28'],
          ['March', 'Leviticus 1–27', 'Luke 1–24', 'Psalms 60–89', 'Prov. 1–31'],
          ['April', 'Numbers 1–36', 'John 1–21', 'Psalms 90–118', 'Prov. 1–30'],
          ['May', 'Deuteronomy 1–34', 'Acts 1–28', 'Psalms 119–131', 'Prov. 1–31'],
          ['June', 'Joshua / Judges', 'Romans, 1 Cor', 'Ps. 132–150, 1–12', 'Prov. 1–30'],
          ['July', '1–2 Samuel', '2 Cor, Gal, Eph', 'Psalms 13–42', 'Prov. 1–31'],
          ['August', '1–2 Kings', 'Phil, Col, 1–2 Thes', 'Psalms 43–72', 'Prov. 1–31'],
          ['September', '1–2 Chronicles', '1–2 Tim, Titus, Heb 1–7', 'Psalms 73–89', 'Prov. 1–30'],
          ['October', 'Ezra, Nehemiah, Esther', 'Heb 8–13, Jas, 1–2 Pet', 'Psalms 90–118', 'Prov. 1–31'],
          ['November', 'Job 1–42', '1–3 John, Jude, Rev 1–11', 'Psalms 119–138', 'Prov. 1–30'],
          ['December', 'Isaiah & Jeremiah', 'Rev 12–22 / Review', 'Psalms 139–150', 'Prov. 1–31'],
        ],
      },
      {
        type: 'note',
        text: 'For specific daily readings, follow a lectionary. The Anglican, Catholic, and Common Lectionaries all offer free daily plans. Consistency of engagement matters more than the specific system you choose.',
      },
      {
        type: 'heading',
        text: 'Glossary of Devotional Terms',
      },
      {
        type: 'table',
        headers: ['Term', 'Definition'],
        rows: [
          ['Anchor (AMS)', 'The first element of the AMS framework: the deliberate, structured entry into prayer using breath, physical cue, and opening phrase.'],
          ['Centering Prayer', 'A contemporary contemplative practice developed by Thomas Keating, based on consenting to the presence and action of God through a sacred word.'],
          ['Compline', 'The final prayer of the monastic day, prayed before the Great Silence. The AMS Night Prayer follows its character of peaceful release.'],
          ['Contemplatio', 'The fourth movement of Lectio Divina: resting in the presence of God beyond words and images. The highest form of prayer in the classical tradition.'],
          ['Daily Office', 'The structured cycle of prayers — traditionally seven or eight times per day — that forms the backbone of monastic and Anglican spirituality.'],
          ['Desert Fathers and Mothers', 'Third- and fourth-century Christian monastics who established the foundations of structured prayer in the deserts of Egypt, Palestine, and Syria.'],
          ['Examen', 'Ignatius of Loyola\'s method of daily review: gratitude, review, acknowledgment, desire, and petition for tomorrow. The basis of AMS Evening Vespers.'],
          ['Hesychia', 'Greek for \'stillness\' — the inner peace sought by the Desert Fathers through structured prayer. The goal of the Listening zone.'],
          ['Intercession', 'Prayer offered on behalf of others. Zone 4 of the AMS Movement. One of the most ancient and transformative practices in Christian prayer.'],
          ['Kenosis', 'Greek for \'self-emptying.\' The theological concept underlying the AMS Surrender: voluntary release of self-will to create space for the divine.'],
          ['Lectio Divina', 'Sacred reading: the four-movement practice of reading Scripture as prayer rather than information. See Chapter 23.'],
          ['Lament', 'Honest, emotional expression of pain or complaint directed toward God. Validated throughout Scripture and essential to authentic prayer.'],
          ['Meditatio', 'The second movement of Lectio Divina: slow reflective turning of a word or phrase in the mind, allowing it to connect with personal experience.'],
          ['Movement (AMS)', 'The second element of the AMS framework: the structured journey through five zones of prayer — Gratitude, Confession, Petition, Intercession, Listening.'],
          ['Ora et Labora', 'Latin: \'pray and work.\' The Benedictine motto that captures the integration of prayer and daily life at the heart of this guide\'s vision.'],
          ['Psalmody', 'The practice of praying the Psalms. Central to monastic prayer and to the daily offices of every major Christian tradition.'],
          ['Recollection', 'The gathering of the scattered self into the presence of God. The spiritual function the AMS Anchor is designed to accomplish.'],
          ['Surrender (AMS)', 'The third element of the AMS framework: the intentional release of outcomes, anxieties, and control into the care of God. See Chapters 14–17.'],
          ['Theoria', 'Greek for \'contemplation\' or \'vision of God.\' Used by Origen of Alexandria for the highest form of prayer — direct encounter with the divine.'],
          ['Vespers', 'The traditional evening prayer of the monastic office. The basis for the AMS Evening Vespers described in Chapter 20.'],
        ],
      },
      {
        type: 'heading',
        text: 'A Final Blessing and Sending',
      },
      {
        type: 'paragraph',
        text: 'You have reached the last page. But the practice has no last page.',
      },
      {
        type: 'paragraph',
        text: 'What begins here — if you allow it — will continue to unfold for the rest of your life. The AMS framework is not a curriculum with a graduation date. It is a door. Every day you open it, you discover something you had not seen before.',
      },
      {
        type: 'paragraph',
        text: 'The tradition from which this guide draws is one of the longest continuous conversations in human history — two thousand years of men and women sitting down, every morning, to begin again. They came distracted, tired, grieving, grateful, confused. They came as they were. And they returned, day after day, because something in the practice proved more reliable than any of their reservations about it.',
      },
      {
        type: 'paragraph',
        text: 'You are joining that conversation. Not as an expert but as a practitioner. Not because you have it figured out but because you have decided — at least for today, at least for this five minutes — to show up.',
      },
      {
        type: 'prayer',
        title: 'A Blessing and Sending',
        lines: [
          'May your anchor hold.',
          'May your movement be real.',
          'May your surrender be complete.',
          'May what you bring to prayer',
          'shape what you bring to life.',
          'May you know yourself known.',
          'May you know yourself held.',
          'May you know yourself sent.',
          'Go in peace.',
          'Return tomorrow.',
        ],
      },
    ],
  },
];

export const totalChapters = chapters.length;
