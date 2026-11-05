'use client';

import { useState, type FormEvent } from 'react';

type IconName =
  | 'career'
  | 'business'
  | 'money'
  | 'relationship'
  | 'property'
  | 'life'
  | 'growth'
  | 'direction';

type Topic = {
  id: string;
  title: string;
  icon: IconName;
  description: string;
  punchline: string;
};

const WHATSAPP_NUMBER = '916362953370';

const TOPICS: Topic[] = [
  {
    id: 'career',
    title: 'Career & Job',
    icon: 'career',
    punchline: 'Feeling stuck at work or waiting for the right opportunity?',
    description:
      'Explore your strengths, work patterns and possible next steps for a job change, promotion or a new direction.',
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: 'business',
    punchline: 'Is your business not moving the way you expected?',
    description:
      'Discuss business ideas, partnerships, timing and the decisions that could help you plan your next move.',
  },
  {
    id: 'debt',
    title: 'Debt & Financial Issues',
    icon: 'money',
    punchline: 'Are loans, repayments or money worries weighing on you?',
    description:
      'Bring your concerns into a calm conversation and explore practical priorities alongside chart-based guidance.',
  },
  {
    id: 'relationships',
    title: 'Relationships & Emotional Guidance',
    icon: 'relationship',
    punchline: 'Going through misunderstandings, distance or heartbreak?',
    description:
      'Find a non-judgmental space to reflect on relationship patterns, family concerns and important conversations.',
  },
  {
    id: 'property',
    title: 'Property & Major Decisions',
    icon: 'property',
    punchline: 'Thinking about a property, a move or a major life decision?',
    description:
      'Talk through the choices in front of you and consider timing and direction before taking your next step.',
  },
  {
    id: 'life',
    title: 'Life Guidance for 2027 & Beyond',
    icon: 'life',
    punchline: 'Want to feel more prepared for the year ahead?',
    description:
      'Review the themes and decisions you may want to prepare for, with a focus on clarity and personal growth.',
  },
  {
    id: 'growth',
    title: 'Stagnation & Personal Growth',
    icon: 'growth',
    punchline: 'Does it feel like nothing is changing, no matter how hard you try?',
    description:
      'Look at recurring patterns, areas of delay and small, practical actions that can help you move forward.',
  },
  {
    id: 'direction',
    title: 'Confusion & Right Direction',
    icon: 'direction',
    punchline: 'Too many questions and no clear direction?',
    description:
      'Share what is on your mind, understand the choices before you and leave with a clearer way to approach them.',
  },
];

const PROBLEMS = [
  {
    id: 'confusion',
    title: 'Confusion & Doubt',
    alt: 'A woman trying to make sense of a difficult decision',
    image: 'https://images.pexels.com/photos/3958791/pexels-photo-3958791.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'debt',
    title: 'Debt & Financial Pressure',
    alt: 'A woman reviewing bills and household finances at a table',
    image: 'https://images.pexels.com/photos/5900148/pexels-photo-5900148.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'stagnation',
    title: 'Stagnation',
    alt: 'A woman sitting beside a window, deep in thought',
    image: 'https://images.pexels.com/photos/7278794/pexels-photo-7278794.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'job-issues',
    title: 'Job Issues',
    alt: 'A job interview taking place in a modern office',
    image: 'https://images.pexels.com/photos/5439157/pexels-photo-5439157.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'no-growth',
    title: 'No Growth',
    alt: 'An exhausted employee resting at his laptop',
    image: 'https://images.pexels.com/photos/30470955/pexels-photo-30470955.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'relationships',
    title: 'Relationship Stress',
    alt: 'A couple having a difficult conversation',
    image: 'https://images.pexels.com/photos/5617746/pexels-photo-5617746.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'business-blocked',
    title: 'Business Blocked',
    alt: 'A closed retail shop representing a difficult business phase',
    image: 'https://images.pexels.com/photos/5934221/pexels-photo-5934221.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 'no-direction',
    title: 'No Direction',
    alt: 'A person walking along a city street with directional signs and road markings',
    image: 'https://images.pexels.com/photos/27514097/pexels-photo-27514097.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

const HERO_SUN_IMAGE =
  'https://images.pexels.com/photos/5892396/pexels-photo-5892396.jpeg?auto=compress&cs=tinysrgb&w=700';

const FEEDBACK_SCREENSHOTS = [
  { src: '/feedback/feedback-01.png', label: 'Customer feedback 1' },
  { src: '/feedback/feedback-02.png', label: 'Customer feedback 2' },
  { src: '/feedback/feedback-03.png', label: 'Customer feedback 3' },
];

function SunMark({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? 'sun-mark sun-mark-small' : 'sun-mark'}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Anamika sun emblem"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {Array.from({ length: 16 }, (_, index) => (
          <line
            key={index}
            x1="50"
            y1="7"
            x2="50"
            y2="17"
            strokeWidth="2.4"
            transform={`rotate(${index * 22.5} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="28" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="21" strokeWidth="1" opacity="0.7" />
      </g>
      <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.16" />
    </svg>
  );
}

function ServiceIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'career':
      return (
        <svg {...common}>
          <rect x="7" y="15" width="34" height="25" rx="3" />
          <path d="M17 15v-5h14v5M7 24h34M20 24v4h8v-4" />
        </svg>
      );
    case 'business':
      return (
        <svg {...common}>
          <path d="M7 39h34M11 35V23h7v12M22 35V15h7v20M33 35V9h5v26" />
          <path d="m9 17 10-6 8 1 11-7" />
        </svg>
      );
    case 'money':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" />
          <path d="M29 16c-1.5-1.5-3.4-2.2-5.6-2.2-3.3 0-5.6 1.8-5.6 4.4 0 6.4 12 2.5 12 9 0 2.7-2.5 4.8-6 4.8-2.5 0-4.8-.9-6.5-2.7M24 10v28" />
        </svg>
      );
    case 'relationship':
      return (
        <svg {...common}>
          <path d="M24 39S7 29 7 17.8C7 9.3 18.1 6.7 24 15c5.9-8.3 17-5.7 17 2.8C41 29 24 39 24 39Z" />
          <path d="m25 14-5 9 6 3-4 9" />
        </svg>
      );
    case 'property':
      return (
        <svg {...common}>
          <path d="m5 22 19-15 19 15M10 19v22h28V19M20 41V27h9v14M32 24h1" />
        </svg>
      );
    case 'life':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="3" />
          <path d="M24 6v8M42 24h-8M24 42v-8M6 24h8M24 21l8-9M27 24l9 5" />
        </svg>
      );
    case 'growth':
      return (
        <svg {...common}>
          <path d="M24 41V19M24 27c-9 0-14-5-14-14 9 0 14 5 14 14ZM24 21c0-8 5-13 14-13 0 9-5 14-14 14Z" />
          <path d="M11 41h26" />
        </svg>
      );
    case 'direction':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" />
          <path d="m31 16-5 14-9 4 5-14 9-4Z" />
          <path d="M24 6v4M42 24h-4M24 42v-4M6 24h4" />
        </svg>
      );
  }
}

function FeedbackTile({ src, label }: { src: string; label: string }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className="feedback-tile">
      {imageAvailable ? (
        // Add the client's original screenshot at this path in /public.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} onError={() => setImageAvailable(false)} />
      ) : (
        <div className="feedback-placeholder">
          <span className="feedback-plus">+</span>
          <strong>Customer feedback</strong>
          <span>Screenshot will appear here</span>
          <small>{src.replace('/feedback/', '')}</small>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [packageType, setPackageType] = useState('Basic Consultation');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [topicError, setTopicError] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function choosePackage(nextPackage: string) {
    setPackageType(nextPackage);
    setTopicError('');
    setSubmitted(false);
    setWhatsAppLink('');
    setSelectedTopics(nextPackage === 'Deep Consultation' ? TOPICS.map((topic) => topic.id) : []);
  }

  function toggleTopic(topicId: string) {
    setTopicError('');
    setSelectedTopics((current) =>
      current.includes(topicId)
        ? current.filter((item) => item !== topicId)
        : [...current, topicId],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (packageType === 'Basic Consultation' && selectedTopics.length !== 2) {
      setTopicError('Please choose exactly two areas for the Basic Consultation.');
      return;
    }

    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? '').trim();
    const name = value('name');
    const dob = value('dob');
    const birthTime = value('birthTime');
    const birthPlace = value('birthPlace');
    const phone = value('phone');
    const email = value('email');
    const mode = value('mode');
    const concern = value('concern');
    const referralSource = value('referralSource');
    const referredBy = value('referredBy');
    const topics = TOPICS.filter((topic) => selectedTopics.includes(topic.id)).map((topic) => topic.title);

    const packageDetails =
      packageType === 'Basic Consultation'
        ? '1-hour consultation + 2 hours of manual chart reading; covers the two selected areas.'
        : packageType === 'Deep Consultation'
          ? '2-hour consultation + 4 hours of manual chart reading; covers all eight areas.'
          : 'Business combo offer; please share the available combinations and details.';

    const messageLines = [
      'Hello Anamika, I would like to enquire about a consultation.',
      '',
      `Name: ${name}`,
      `Date of birth: ${dob}`,
      `Time of birth: ${birthTime}`,
      `Place of birth: ${birthPlace}`,
      `Contact number: ${phone}`,
      email ? `Email: ${email}` : '',
      '',
      `Consultation package: ${packageType}`,
      `Package details: ${packageDetails}`,
      topics.length ? `Areas selected: ${topics.join(', ')}` : 'Areas selected: Please discuss with me',
      `Preferred mode: ${mode}${mode === 'Face-to-face' ? ' (Electronic City)' : ''}`,
      concern ? `What I would like guidance on: ${concern}` : '',
      referralSource ? `How I heard about Anamika: ${referralSource}` : '',
      referredBy ? `Referred by: ${referredBy}` : '',
      '',
      'I understand that this enquiry will open as a WhatsApp message for me to review and send.',
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    setWhatsAppLink(url);
    setSubmitted(true);
    setTopicError('');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anamika Consultants home">
          <span className="brand-emblem"><SunMark small /></span>
          <span className="brand-copy">
            <strong>ANAMIKA</strong>
            <span>CONSULTANTS</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#concerns">Concerns</a>
          <a href="#guidance">Our Guidance</a>
          <a href="#approach">Our Approach</a>
          <a href="#consultations">Consultations</a>
          <a href="#feedback">Feedback</a>
        </nav>

        <a className="header-cta" href="#contact">Book a Consultation <span aria-hidden="true">↗</span></a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#concerns">Concerns</a>
            <a href="#guidance">Our Guidance</a>
            <a href="#approach">Our Approach</a>
            <a href="#consultations">Consultations</a>
            <a href="#feedback">Feedback</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-brand-lockup">
              <span className="hero-sun-photo" aria-hidden="true">
                <img src={HERO_SUN_IMAGE} alt="" fetchPriority="high" />
              </span>
              <div>
                <p className="eyebrow">TRADITIONAL VEDIC ASTRO SCIENCE</p>
                <h1>ANAMIKA</h1>
                <p className="hero-consultants">CONSULTANTS</p>
              </div>
            </div>

            <p className="hero-kicker">Clarity today. A brighter tomorrow.</p>
            <h2>No expensive gems. No expensive rituals. No fear.</h2>
            <p className="hero-description">
              Traditional Vedic astro science with personal, manual chart reading and simple, practical guidance
              for career, finances, relationships, business and important life decisions.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#consultations">Explore Consultations <span aria-hidden="true">→</span></a>
              <a className="button button-outline" href="#contact">Connect with Anamika Ma’am</a>
            </div>
            <p className="hero-note">Personal, appointment-based guidance · Private and confidential</p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="sun-disc"><SunMark /></div>
            <div className="sun-horizon"></div>
            <div className="hero-art-caption">
              <span>UNDERSTAND</span><i></i><span>GUIDE</span><i></i><span>PREPARE</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line">
          <span>ASTRO SCIENCE</span><span>·</span><span>LIFE GUIDANCE</span><span>·</span><span>PRACTICAL SOLUTIONS</span>
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-intro">
          <p className="eyebrow eyebrow-gold">THE ANAMIKA APPROACH</p>
          <h2>Empathy, not sympathy. Guidance, never fear.</h2>
          <p>
            We understand that every concern has a story behind it. Our role is to listen carefully,
            study your chart and help you think through the choices ahead — with respect for your
            circumstances and your decisions.
          </p>
          <a className="text-link text-link-light" href="#contact">Begin a conversation <span aria-hidden="true">→</span></a>
        </div>

        <div className="approach-points">
          <article>
            <span className="approach-symbol">✧</span>
            <div><h3>Manual chart reading</h3><p>Your birth chart is studied personally by the consultant. Readings are not generated by AI tools.</p></div>
          </article>
          <article>
            <span className="approach-symbol">☼</span>
            <div><h3>Sun and Moon readings</h3><p>Consultations draw on Sun and Moon readings as part of a wider, multidimensional chart study.</p></div>
          </article>
          <article>
            <span className="approach-symbol">❧</span>
            <div><h3>Simple, practical remedies</h3><p>Guidance focuses on realistic steps. No expensive gemstones, costly rituals or pressure to buy add-ons.</p></div>
          </article>
          <article>
            <span className="approach-symbol">♡</span>
            <div><h3>Confidential and appointment-based</h3><p>Your conversation and birth details are treated with care. Each consultation is a one-time payment.</p></div>
          </article>
        </div>
      </section>

      <section className="trust-strip" aria-label="Anamika at a glance">
        <div className="trust-item"><strong>700+</strong><span>Happy customers</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><strong>9+</strong><span>Years of experience</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><strong>95%*</strong><span>Stated accuracy</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><strong>One-time</strong><span>Payment per consultation</span></div>
      </section>
      <p className="accuracy-note">*The 95% accuracy figure is supplied by the consultant and is not a guarantee of individual outcomes.</p>

      <section className="section concerns-section" id="concerns">
        <div className="section-heading centered-heading">
          <p className="eyebrow eyebrow-gold">YOU ARE NOT ALONE IN THIS</p>
          <h2>Going through a difficult phase?</h2>
          <p>Some questions can feel heavy when you carry them on your own. Start by recognising what is weighing on you.</p>
        </div>
        <div className="problem-grid">
          {PROBLEMS.map((problem, index) => (
            <article className={`problem-item problem-${problem.id}`} key={problem.id}>
              {/* Pexels photographs; source and creator credits are listed in public/image-sources.txt. */}
              <img src={problem.image} alt={problem.alt} loading="lazy" decoding="async" />
              <div className="problem-shade" aria-hidden="true" />
              <div className="problem-caption">
                <span className="problem-number">0{index + 1}</span>
                <h3>{problem.title}</h3>
                <span className="problem-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        <p className="concerns-footnote">You deserve to be heard without fear, pressure or judgement.</p>
        <div className="outcome-strip">
          <span className="outcome-label">OUR AIM</span>
          <div className="outcome-list">
            <span>Clarity</span><span>Right direction</span><span>Better job opportunities</span>
            <span>Business growth</span><span>Financial stability</span><span>Healthier relationships</span>
            <span>Personal growth</span>
          </div>
        </div>
      </section>

      <section className="section guidance-section" id="guidance">
        <div className="section-heading">
          <p className="eyebrow eyebrow-gold">AREAS OF GUIDANCE</p>
          <h2>Practical guidance for the things that matter.</h2>
          <p>Move your pointer over an area to read more. On mobile, the descriptions stay visible.</p>
        </div>

        <div className="service-grid">
          {TOPICS.map((topic, index) => (
            <a className="service-card" href="#contact" key={topic.id}>
              <div className="service-card-top">
                <span className="service-icon"><ServiceIcon name={topic.icon} /></span>
                <span className="service-index">0{index + 1}</span>
              </div>
              <h3>{topic.title}</h3>
              <p className="service-punchline">{topic.punchline}</p>
              <div className="service-description">
                <p>{topic.description}</p>
                <span>Talk it through <b aria-hidden="true">→</b></span>
              </div>
            </a>
          ))}
        </div>
      </section>



      <section className="no-pressure-section">
        <div className="no-pressure-mark"><span>✦</span></div>
        <div>
          <p className="eyebrow eyebrow-gold">A CLEAR PROMISE</p>
          <h2>Simple remedies. Clear guidance. No hidden pressure.</h2>
          <p>Every consultation is a one-time payment. We do not push gemstones, costly rituals or add-on purchases. You stay in control of every decision.</p>
        </div>
        <div className="no-pressure-stamp">NO<br />PRESSURE<br /><span>·</span> NO TRAPS</div>
      </section>

      <section className="section packages-section" id="consultations">
        <div className="section-heading centered-heading">
          <p className="eyebrow eyebrow-gold">CONSULTATION OPTIONS</p>
          <h2>Choose the conversation that fits your needs.</h2>
          <p>Every consultation is appointment-based and has a one-time payment. Contact us for the fee and available slots.</p>
        </div>

        <div className="package-grid">
          <article className={`package-card ${packageType === 'Basic Consultation' ? 'package-selected' : ''}`}>
            <p className="package-label">A focused starting point</p>
            <h3>Basic Consultation</h3>
            <div className="package-duration"><strong>1 hour</strong><span>consultation</span></div>
            <p className="package-reading">Plus <strong>2 hours</strong> of manual chart reading.</p>
            <ul>
              <li>Choose any two of the eight guidance areas.</li>
              <li>Focused discussion around your questions.</li>
              <li>Simple, practical next steps.</li>
            </ul>
            <button type="button" className="package-button" onClick={() => { choosePackage('Basic Consultation'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Choose Basic <span aria-hidden="true">→</span></button>
          </article>

          <article className={`package-card package-card-featured ${packageType === 'Deep Consultation' ? 'package-selected' : ''}`}>
            <p className="package-label">A wider, deeper reading</p>
            <h3>Deep Consultation</h3>
            <div className="package-duration"><strong>2 hours</strong><span>consultation</span></div>
            <p className="package-reading">Plus <strong>4 hours</strong> of manual chart reading.</p>
            <ul>
              <li>Covers all eight guidance areas.</li>
              <li>A more detailed, multidimensional discussion.</li>
              <li>Space to explore connected concerns.</li>
            </ul>
            <button type="button" className="package-button" onClick={() => { choosePackage('Deep Consultation'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Choose Deep <span aria-hidden="true">→</span></button>
          </article>

          <article className={`package-card ${packageType === 'Business Consultation' ? 'package-selected' : ''}`}>
            <p className="package-label">For business owners and teams</p>
            <h3>Business Consultation</h3>
            <div className="business-combo">COMBO OFFERS</div>
            <p className="package-reading business-copy">A combination of consultations shaped around your business questions and priorities.</p>
            <ul>
              <li>Discuss business-related needs.</li>
              <li>Ask about available combo options.</li>
              <li>Details shared directly before booking.</li>
            </ul>
            <button type="button" className="package-button" onClick={() => { choosePackage('Business Consultation'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Ask about combos <span aria-hidden="true">→</span></button>
          </article>
        </div>
        <p className="package-note">No subscriptions or recurring charges. The consultation fee is discussed before you confirm an appointment.</p>
      </section>

      <section className="modes-section">
        <div className="section-heading centered-heading">
          <p className="eyebrow eyebrow-gold">MEET ANAMIKA</p>
          <h2>Choose how you would like to connect.</h2>
        </div>
        <div className="mode-grid">
          <article><span className="mode-icon">☎</span><h3>Phone</h3><p>A personal consultation over a phone call.</p></article>
          <article><span className="mode-icon">◎</span><h3>Online session</h3><p>Connect remotely from wherever you are.</p></article>
          <article><span className="mode-icon">⌖</span><h3>Face-to-face</h3><p>Meet in person at <strong>Electronic City</strong>.</p></article>
        </div>
      </section>

      <section className="section feedback-section" id="feedback">
        <div className="section-heading centered-heading">
          <p className="eyebrow eyebrow-gold">KIND WORDS FROM CLIENTS</p>
          <h2>Experiences shared by people we have guided.</h2>
          <p>Customer feedback screenshots will be shown here. We will use the original feedback shared by the client.</p>
        </div>
        <div className="feedback-grid">
          {FEEDBACK_SCREENSHOTS.map((item) => <FeedbackTile key={item.src} src={item.src} label={item.label} />)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow eyebrow-gold">TAKE THE RIGHT STEP</p>
          <h2>Let’s begin with a conversation.</h2>
          <p>
            Share your birth details and the kind of guidance you are looking for. Your enquiry will open
            in WhatsApp, addressed to Anamika, so you can review it and send it directly.
          </p>
          <div className="contact-number-block">
            <span>CALL OR WHATSAPP</span>
            <a href="https://wa.me/916362953370" target="_blank" rel="noreferrer">+91 63629 53370</a>
          </div>
          <p className="referral-note"><strong>Referrals are a gesture of care.</strong> Share Anamika’s details when you genuinely feel someone may benefit from a thoughtful conversation.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>PERSONAL ENQUIRY</span>
            <h3>Tell us a little about yourself.</h3>
            <p>Fields marked with * are required.</p>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Full name *</span>
              <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Date of birth * <small>DD-MM-YYYY</small></span>
              <input name="dob" type="text" placeholder="DD-MM-YYYY" inputMode="numeric" pattern="(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-[0-9]{4}" maxLength={10} title="Enter your date of birth as DD-MM-YYYY" required />
            </label>
            <label className="field">
              <span>Time of birth * <small>12-hour format</small></span>
              <input name="birthTime" type="text" placeholder="07:45 PM" pattern="(0?[1-9]|1[0-2]):[0-5][0-9] ?(AM|PM|am|pm)" title="Enter time in 12-hour format, for example 07:45 PM" required />
            </label>
            <label className="field">
              <span>Place of birth *</span>
              <input name="birthPlace" type="text" placeholder="City, State, Country" required />
            </label>
            <label className="field">
              <span>Contact number *</span>
              <input name="phone" type="tel" placeholder="Your phone / WhatsApp number" autoComplete="tel" pattern="[0-9+() -]{8,18}" title="Enter a valid contact number" required />
            </label>
            <label className="field">
              <span>Email address <small>Optional</small></span>
              <input name="email" type="email" placeholder="name@example.com" autoComplete="email" />
            </label>
          </div>

          <div className="form-divider"></div>

          <fieldset className="form-fieldset">
            <legend>Which consultation are you interested in? *</legend>
            <div className="package-options">
              {['Basic Consultation', 'Deep Consultation', 'Business Consultation'].map((item) => (
                <label className={`radio-card ${packageType === item ? 'radio-card-active' : ''}`} key={item}>
                  <input type="radio" name="packageType" value={item} checked={packageType === item} onChange={() => choosePackage(item)} />
                  <span className="radio-dot"></span>
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="form-fieldset topic-fieldset">
            <legend>
              {packageType === 'Deep Consultation'
                ? 'All eight areas are included in Deep Consultation.'
                : packageType === 'Basic Consultation'
                  ? 'Choose any two areas for Basic Consultation. *'
                  : 'Select any areas you would like to discuss (optional).'}
            </legend>
            <div className="topic-check-grid">
              {TOPICS.map((topic) => {
                const checked = selectedTopics.includes(topic.id) || packageType === 'Deep Consultation';
                const limitReached = packageType === 'Basic Consultation' && selectedTopics.length >= 2 && !checked;
                return (
                  <label className={`topic-check ${checked ? 'topic-check-active' : ''}`} key={topic.id}>
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={packageType === 'Deep Consultation' || limitReached}
                      onChange={() => toggleTopic(topic.id)}
                    />
                    <span className="custom-check" aria-hidden="true">✓</span>
                    <span>{topic.title}</span>
                  </label>
                );
              })}
            </div>
            {packageType === 'Basic Consultation' && <p className="selection-count">{selectedTopics.length} of 2 areas selected.</p>}
            {topicError && <p className="form-error" role="alert">{topicError}</p>}
          </fieldset>

          <div className="form-grid">
            <label className="field">
              <span>Preferred consultation mode *</span>
              <select name="mode" defaultValue="Phone" required>
                <option value="Phone">Phone</option>
                <option value="Online session">Online session</option>
                <option value="Face-to-face">Face-to-face — Electronic City</option>
              </select>
            </label>
            <label className="field">
              <span>How did you hear about Anamika?</span>
              <select name="referralSource" defaultValue="">
                <option value="">Please select</option>
                <option value="Friend or family referral">Friend or family referral</option>
                <option value="Social media">Social media</option>
                <option value="Existing customer">Existing customer</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="field field-full">
              <span>Referrer’s name <small>Optional</small></span>
              <input name="referredBy" type="text" placeholder="Name of the person who referred you" />
            </label>
            <label className="field field-full">
              <span>What would you like guidance on? <small>Optional</small></span>
              <textarea name="concern" rows={3} placeholder="A few words about what is on your mind..." />
            </label>
          </div>

          <label className="consent-line">
            <input type="checkbox" required />
            <span>I agree to share these details with Anamika through WhatsApp for this consultation enquiry. *</span>
          </label>

          <button className="submit-button" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
          <p className="form-privacy">Your details are placed in a WhatsApp message for you to review. This website does not store your birth details or send the message without your action.</p>

          {submitted && (
            <div className="submit-confirmation" role="status">
              <strong>Your WhatsApp enquiry is ready.</strong>
              <span>Review the details in WhatsApp and tap Send. If WhatsApp did not open, use the link below.</span>
              {whatsAppLink && <a href={whatsAppLink} target="_blank" rel="noreferrer">Open WhatsApp message ↗</a>}
            </div>
          )}
        </form>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#top"><SunMark small /><span>ANAMIKA <small>CONSULTANTS</small></span></a>
        <p>Understand · Guide · Prepare · Grow · Live a better tomorrow</p>
        <a href="https://wa.me/916362953370" target="_blank" rel="noreferrer">+91 63629 53370</a>
        <small className="footer-disclaimer">Astrology consultations offer personal guidance and perspective, not guaranteed outcomes or a substitute for qualified medical, legal or financial advice.</small>
        <small>© {new Date().getFullYear()} Anamika Consultants. All rights reserved.</small>
      </footer>
    </main>
  );
}
